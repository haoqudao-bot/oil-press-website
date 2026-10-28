/**
 * ============================================================================
 *  PROJECT DEVELOPMENT RULES (GOLDEN RULES — ALL AGENTS MUST FOLLOW)
 * ============================================================================
 *
 *  RULE 1 — 新建页面必须用模式 A（强制）
 *    ✅ 模式 A: src/pages/[locale]/page-name.astro
 *       — 一个文件覆盖 en + fr + ar + id 四语言
 *       — 用 ui: Record<Locale, Ui> = { en: {...}, fr: {...}, ar: {...}, id: {...} }
 *       — 或动态路由 + 多语言数据文件
 *    ❌ 禁止模式 B: src/pages/ar/page-name.astro + fr/page-name.astro + id/page-name.astro
 *       — 独立目录文件，容易漏改一个
 *    🛡️ 由 M 检查自动拦截：任何新建英文页如果没有 locale 覆盖 → build exit code 1
 *
 *  RULE 2 — 加内链时：只新增，不改原有链接（强制）
 *    ✅ 正确：在老页面原来没有链接的位置 <p>里加一句 "See our [new page →]"
 *    ❌ 错误：把原来指向 /contact/ 的 CTA 改成指向新价格页
 *    ❌ 错误：删除原有链接再换位置添加新链接
 *    🛡️ 执行前先用 git diff / git show HEAD 核对原有 href 不被改动
 *
 *  RULE 3 — 价格页不显示公开价格（强制）
 *    ✅ 只显示 "Get factory quote in 24 hours"
 *    ❌ 禁止显示 "$XXX – $XXX" 或 "from ¥X" 之类的数字范围
 *
 * ============================================================================
 *
 * 网站上线前自动化巡检脚本（每次构建后/部署前一键运行）
 * 运行方式：
 *   node scripts/site-audit.mjs              # 仅做本地静态检查（翻译 key、src/pages 结构）
 *   npm run build && node scripts/site-audit.mjs  # 构建后做完整检查（含 dist/ 产物 + 翻译）
 *
 * 检查 10 大类问题：
 *   A. 翻译 JSON 文件 key 完整性（缺 key → 小语种回退英文）
 *   B. 翻译 value 完全等于英文（真漏翻译，已排除合理保留英文的型号/认证/联系信息等）
 *   C. src/pages 多语言路由结构缺失（[locale] 里少某类页面）
 *   D. dist/ 构建产物中，小语种页面包含不该出现的英文 UI 词
 *   E. 小语种 404 页是否为目标语言
 *   F. dist/ 异常文件类型（禁止脚本/报告等被打包成可下载文件）
 *   G. 小语种页内部链接语言前缀一致性（/fr/ 页的 href 不能错写成 /en/ 或裸路径）
 *   H. 小语种页图片引用完整性（dist 中必须存在）
 *   I. canonical/hreflang 标签语言一致性
 *   J. 内链目标存在性（全站 href/og:url/og:image 链接必须在 dist 有对应文件，杜绝 404 死链）
 *   K. 语言切换器可抓取性（必须是真实 <a href hreflang>，禁止 data-lang 按钮/JS 伪链接）
 *   L. 翻译长度异常（过短/过长/重复翻译）
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, sep, relative } from 'node:path';

const ROOT = process.cwd();
const DIST = join(ROOT, 'dist');
const LOCALE_DIR = join(ROOT, 'src/i18n');
const PAGES_ROOT = join(ROOT, 'src/pages');
const PAGES_LOC = join(PAGES_ROOT, '[locale]');
const LANGS = ['en', 'fr', 'ar', 'id'];
const KEY_LANGS = LANGS.slice(1);

// ===== 工具函数 =====
function walkJSON(obj, prefix = '') {
  const out = [];
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) out.push(...walkJSON(v, key));
    else out.push(key);
  }
  return out.sort();
}
function getByPath(obj, path) { return path.split('.').reduce((o, k) => o?.[k], obj); }
function listHtml(dir, list = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    const s = statSync(p);
    if (s.isDirectory()) listHtml(p, list);
    else if (f.endsWith('.html')) list.push(p);
  }
  return list;
}
function listAstro(dir, prefix = '', list = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    const s = statSync(p);
    if (s.isDirectory() && f !== '[locale]' && !f.startsWith('ar') && !f.startsWith('fr') && !f.startsWith('id') && f !== 'node_modules') {
      listAstro(p, prefix + f + '/', list);
    } else if (f.endsWith('.astro')) {
      list.push(prefix + f);
    }
  }
  return list;
}

const issues = [];
let passCount = 0;
function warn(check, msg) { console.log(`  ❌ [${check}] ${msg}`); issues.push(`[${check}] ${msg}`); }
function pass(check, msg) { console.log(`  ✓ [${check}] ${msg}`); passCount++; }

console.log('');
console.log('╔══════════════════════════════════════════════════════════════╗');
console.log('║        🔥 Haonuo 网站自动化巡检  site-audit.mjs             ║');
console.log('╚══════════════════════════════════════════════════════════════╝');

// ===========================
//  A. 翻译 key 完整性
// ===========================
console.log('\n━━━ A. 翻译 JSON key 完整性（以 en.json 为基准）━━━');
const i18n = {};
for (const l of LANGS) {
  try { i18n[l] = JSON.parse(readFileSync(join(LOCALE_DIR, `${l}.json`), 'utf8')); }
  catch (e) { console.log(`  ❌ 无法读取 src/i18n/${l}.json: ${e.message}`); process.exit(3); }
}
const allKeys = Object.fromEntries(LANGS.map(l => [l, walkJSON(i18n[l])]));
const master = allKeys.en;
console.log(`  基准 en.json key 总数: ${master.length}`);
let aMissingTotal = 0;
let aExtraTotal = 0;
for (const l of KEY_LANGS) {
  const ks = allKeys[l];
  const missing = master.filter(k => !ks.includes(k));
  const extra = ks.filter(k => !master.includes(k));
  aMissingTotal += missing.length;
  aExtraTotal += extra.length;
  const stat = `共 ${ks.length} key  缺失: ${missing.length}  多余: ${extra.length}`;
  if (missing.length || extra.length) {
    warn('A', `${l}.json ${stat}`);
    missing.slice(0, 20).forEach(k => console.log(`        - MISS  ${k}`));
    extra.slice(0, 10).forEach(k => console.log(`        + EXTRA ${k}`));
  } else { pass('A', `${l}.json ${stat}`); }
}

// ===========================
//  B. value 完全等于英文（B 类精查：只报告"真漏翻译"，合理保留英文不告警）
// ===========================
console.log('\n━━━ B. 精查漏翻译（只报必须翻译：UI/句子/标签，联系信息/认证/型号/国家名/种子油种短名等已排除）━━━');
// —— 合理保留英文的规则 ——
const B_EXC_REGEX = [
  /OEM\s*\/\s*ODM/i, /\bISO\b/, /\bCE\b/, /Haonuo/i, /\bHN\d{2,4}/i, /\bB2B\b/i,
  /\bSEO\b/, /\bGMP\b/, /\bHACCP\b/, /\bPLC\b/, /\bpH\b/, /\bUV\b/, /\bPDF\b/, /\bFAQ\b/,
  /^\d+%$/, /^[\d\s.:-]+$/,       // 纯数字/尺寸
  /^[+\d\s()-]{4,}$/,              // 电话
  /^[\w.-]+@[\w.-]+$/,             // 邮箱
  /^https?:\/\//,                  // URL
  /^VCO$/i,                        // Virgin Coconut Oil 缩写行业通用
  /^[\d]+[-–][\d]+%$/,             // 百分比范围
  /Yield:\s*\d+[-–]\d+%/i,         // Yield: 15-25% 类参数标注（含数字，合理保留数值格式）
  /^\d+([-–]\d+)?\s*(MPa|psi|bar|kW|mm|cm|m|m²|m³|tons?|T|kg|g|L|ml)\b/i,  // 数值+国际单位（MPa/psi/kW/mm 等无需翻译）
];
// 联系信息/工具品牌名的 key 名称匹配
const B_EXC_KEYS = new Set([
  'contact.emailAddr','contact.phoneNum','contact.faxNum','contact.wechat','contact.whatsapp',
  'contact.googleMaps','contact.addressMapFull','nav.blog','nav.facebook','nav.instagram',
  'nav.linkedin','nav.youtube','nav.tiktok','nav.twitter','common.manual','common.slide',
]);
// 国家/大洲名、产品种子名、材料名（短词 40 字符内）这类作为关键词合理保留英文
function isSafeProperNounOrBrand(val) {
  if (val.length > 40) return false;
  // 常见国家/种子油/行业词的合理英文专有名词
  const SAFE = /^(Avocado Oil|Sesame Oil|Peanut Oil|Sunflower Oil|Coconut Oil|Virgin Coconut Oil|Mustard Oil|Shea Butter|Palm Kernel Oil|Castor Oil|Olive Oil|Walnut Oil|Cottonseed Oil|Soybean Oil|Flaxseed Oil|Palm Oil|Kenya|Nigeria|Pakistan|Philippines|Egypt|India|Indonesia|South Africa|UK|USA|Middle East|Africa|Solutions|Contact|Services|Certifications|Continents|Machines|Clients|Message|Email|Manual|Slide|\d+ Continents|Nigeria|Vietnam|Thailand|Bangladesh|Ethiopia|Tanzania|Mexico|Brazil|Argentina|Russia|Ukraine|Turkey|Saudi Arabia|UAE|Oman|Jordan|Morocco|Algeria|Canada|Australia|Malaysia|Fast Growing|Global Demand|Traditional cooking|Premium cooking|cosmetic applications?|health supplements?|food-grade|high-yielding|Medium Yield|High Yield|Low Yield|Organic|Cold Press|Hot Press|Hydraulic|Startup|Commercial|Industrial|Entry|Mid|Premium|Small Business|Screw Press|Filter Press|Oil Cake|Nickel Plated|Carbon Steel|Food Grade|Factory Direct|CE Certified|Best Seller|New Arrival|Hot Sale)$/i;
  return SAFE.test(val.trim());
}
const MUST_TRANSLATE_NS_B = new Set([
  'nav','footer','contact','about','faq','cookie','privacy','terms','common','page404',
  'cta','home','seo','breadcrumb','services','news','form','btn','label','market','comparison',
  'catalog','banner','msg','validation','header','title','hero','stat','subtitle','tag','desc',
  'why','feature','advantage','process','step','card','table','chart','faqItem','question','answer',
  'blog','article','case','testimonial','client','partner','award','certification',
]);
const PRODUCT_NS_B = new Set(['products','coldPress','solutions','resources','roi','hydraulic','manual']);
function isDescriptionOrUILabel(val) {
  if (typeof val !== 'string') return false;
  if (val.length >= 30 && (val.includes(' ') || val.includes(','))) return true;
  // 参数/UI 短标签正则（中文或英文都是 UI 词，必须翻译）
  return /^(Best For|Yield|Quality|Flavor\/Aroma|Region|Temperature|Nutrient Retention|Feature|Features|Production Line|Raw Materials|Oil Filtration|Electrical Guide|Aflatoxin Control|By-?Product Guide|Price Guide|Buying Guide|Model Comparison|Product Catalog|Factory Tour|Certifications?|Warranty|Shipping|Installation|Maintenance|Troubleshooting|Support|Advantages|Disadvantages|Pros|Cons|How It Works|Key Benefits|Seeds Compatibility|CE Certification Guide|Voltage & Electrical|Oil Refining Guide|African Market Guide|Hydraulic vs (Screw|Others)|Cold Press vs Hot Press|How Cold Press Extraction Works|Our Cold Press Oil Machine Series|Installation & Training|After-Sales Service|Free Consultation|Get a Quotation|Free Quote|Shipping Estimate|Ready to Find|Professional .* machine.*|One-button start.*|No middleman.*|High-strength steel.*|Natural sediment filtration|No heating means.*|Cold pressing below.*|Cold-pressed oils command.*|Read the full.*comparison|Our team can provide.*|Estimated Daily Operating|Include electricity, labor|This calculator provides.*|I understand that this calculator provides.*)$/i.test(val.trim());
}
function bShouldFlag(key, val) {
  if (typeof val !== 'string' || !val) return false;
  if (B_EXC_REGEX.some(r => r.test(val))) return false;
  if (B_EXC_KEYS.has(key)) return false;
  if (isSafeProperNounOrBrand(val)) return false;
  const ns = key.split('.')[0];
  if (MUST_TRANSLATE_NS_B.has(ns)) return true;
  if (PRODUCT_NS_B.has(ns) && isDescriptionOrUILabel(val)) return true;
  if (isDescriptionOrUILabel(val)) return true;
  return false;
}
let bTotal = 0;
for (const l of KEY_LANGS) {
  const arr = [];
  for (const k of master) {
    const a = getByPath(i18n.en, k);
    const b = getByPath(i18n[l], k);
    if (typeof a !== 'string' || !a || a !== b) continue;
    if (bShouldFlag(k, a)) arr.push([k, a]);
  }
  bTotal += arr.length;
  if (arr.length) {
    warn('B', `${l}.json 疑似真漏翻译 ${arr.length} 条`);
    arr.slice(0, 30).forEach(([k, v]) => console.log(`        * ${k} = "${v.substring(0, 80)}"`));
    if (arr.length > 30) console.log(`        ... 还有 ${arr.length - 30} 条，请运行 B 精查脚本查看明细`);
  } else { pass('B', `${l}.json B 类精查通过（未发现必须翻译却仍为英文的 key）`); }
}

// ===========================
//  L. 翻译长度异常（与英文原文差异异常大 → 可能翻译截断/重复）
// ===========================
console.log('\n━━━ L. 翻译长度异常（小语种 value 比原文短于 25% / 长于 5× → 可能错误翻译）━━━');
let lBad = 0;
for (const l of KEY_LANGS) {
  const badList = [];
  for (const k of master) {
    const a = getByPath(i18n.en, k);
    const b = getByPath(i18n[l], k);
    if (typeof a !== 'string' || !a || a.length < 15 || a === b) continue;
    const ratio = b.length / Math.max(1, a.length);
    if (ratio < 0.25 || ratio > 5) badList.push([k, a.length, b.length, ratio, a.substring(0, 50)]);
  }
  if (badList.length) {
    warn('L', `${l}.json 翻译长度异常 ${badList.length} 条`);
    badList.slice(0, 10).forEach(([k, al, bl, r, s]) => console.log(`        × ${k}  en_len=${al} ${l}_len=${bl} ratio=${r.toFixed(2)}  en="${s}"`));
    lBad += badList.length;
  } else { pass('L', `${l}.json 翻译长度比例正常`); }
}

// ===========================
//  C. src/pages 结构对齐（[locale] 是否有对应页面）
// ===========================
console.log('\n━━━ C. [locale]/ 动态路由文件是否覆盖全部独立语言目录的页面 ━━━');
const rootAstros = listAstro(PAGES_ROOT);
const locAstros = listAstro(PAGES_LOC).map(p => p.replace(/^\.\//, ''));
// 对独立物理目录的页面，它们等价于 [locale] 里同样文件名，所以检查：在 [locale]/ 目录里没有时，
// 是否在 ar/ fr/ id/ 3 个目录里都有对应文件
function pageExistsInAllStaticLocals(relPath) {
  // relPath 如 "catalog.astro" / "resources/xxx.astro"
  for (const l of KEY_LANGS) {
    if (!existsSync(join(PAGES_ROOT, l, relPath))) return false;
  }
  return true;
}
const suspicious = [];
for (const rel of rootAstros) {
  // 根目录的 .astro 不参与比较（英文独立页）
  if (!rel.includes('/')) continue;
  // 去掉第一个目录名
  const firstSlash = rel.indexOf('/');
  const topDir = rel.substring(0, firstSlash);
  const sub = rel.substring(firstSlash + 1);
  if (topDir === 'ar' || topDir === 'fr' || topDir === 'id') {
    // 这是独立物理目录下的具体文件；检查对应 [locale]/ 是否存在，或者 ar/fr/id 另外两个目录是否都有
    if (!locAstros.includes(sub) && !pageExistsInAllStaticLocals(sub)) {
      suspicious.push(`${topDir}/${sub}`);
    }
  }
}
// 更直接、更可靠的检查：把 [locale]/ 目录的 .astro 文件作为清单，检查 ar/fr/id 三个静态目录各自是否"对得上"
// 方法：对 [locale]/ 下每个 X.astro，若 ar/X.astro + fr/X.astro + id/X.astro 都不存在 且 [locale]/X.astro 本身也不是全部语言的唯一实现（getStaticPaths 会生成）→ OK
// 这里采用更简单、今天 404 漏页的同款检测：是否 [locale]/404 存在？是否每个关键路由在 [locale] 或静态目录中至少有一个
const criticalRoutes = [
  '404.astro','index.astro','about.astro','contact.astro','faq.astro','catalog.astro',
  'cold-press-oil-machine.astro','hydraulic-oil-press-machine.astro',
  'cookie-policy.astro','privacy-policy.astro','terms-of-service.astro','services.astro','roi-calculator.astro',
  join('products','index.astro'), join('products','model-comparison.astro'),
  join('markets','index.astro'), join('solutions','index.astro'), join('resources','index.astro'),
];
let cMissingTotal = 0;
for (const r of criticalRoutes) {
  const inLoc = existsSync(join(PAGES_LOC, r));
  const inAllStatic = pageExistsInAllStaticLocals(r);
  if (!inLoc && !inAllStatic) {
    warn('C', `关键路由 [${r}] 在 [locale]/ 和 ar/fr/id 三个静态目录中均不存在 → 访问该小语种 URL 会返回英文 404 或英文页面`);
    cMissingTotal++;
  }
}
if (cMissingTotal === 0) pass('C', `${criticalRoutes.length} 条关键路由在 [locale]/ 或 ar/fr/id 静态目录中均有实现`);

// ===========================
//  M. 根级英文页 → locale 完整性（每个 src/pages/*.astro 必须在 [locale]/ 下有对应文件，且不能是 redirect stub）
// ===========================
console.log('\n━━━ M. 根级英文 .astro 必须有 [locale]/ 对应页，且不能是 redirect stub ━━━');
// 根目录直接下的 .astro 文件（不含子目录、不含 ar/fr/id、不含 [locale]）
const rootLevelAstros = [];
for (const f of readdirSync(PAGES_ROOT)) {
  const p = join(PAGES_ROOT, f);
  if (f.endsWith('.astro')) rootLevelAstros.push(f);
}
// 子目录下的 .astro（如 resources/xxx.astro）也需要检查
const subDirAstros = [];
for (const f of readdirSync(PAGES_ROOT)) {
  const p = join(PAGES_ROOT, f);
  if (!statSync(p).isDirectory()) continue;
  if (f === '[locale]' || f === 'ar' || f === 'fr' || f === 'id' || f === 'node_modules') continue;
  listAstro(p, f + '/', subDirAstros);
}
// 排除不该有 locale 对的（内部路由、ADS 英文专用页等）
const M_EXCLUDE_DIRS = ['ads/'];  // Google Ads 着陆页英文专用，不需要小语种
const M_EXCLUDE_FILES = new Set([
  '_slug-template.astro',
  'index.astro',          // 首页 [locale]/index.astro 存在
  '404.astro',            // [locale]/404.astro 存在
]);
let mTotal = 0;
let mBad = 0;
const mChecked = [];

// === 先收集 [locale]/ 下的动态路由文件（含 [slug] 的）===
// 动态路由如 markets/[market].astro 会覆盖整个 markets/ 子目录
const dynamicRouteDirs = new Set();
function findDynamicRoutes(dir, prefix = '') {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    const s = statSync(p);
    if (s.isDirectory()) {
      findDynamicRoutes(p, prefix + f + '/');
    } else if (f.endsWith('.astro') && f.includes('[')) {
      // 提取父目录路径，例如 "markets/[market].astro" → "markets/"
      const rel = prefix + f;
      const firstSlash = rel.indexOf('/');
      if (firstSlash > 0) {
        dynamicRouteDirs.add(rel.substring(0, firstSlash + 1));
      }
    }
  }
}
findDynamicRoutes(PAGES_LOC);

for (const rel of [...rootLevelAstros.map(f => f), ...subDirAstros]) {
  if (M_EXCLUDE_FILES.has(rel)) continue;
  // 排除 ADS 目录
  if (M_EXCLUDE_DIRS.some(d => rel.startsWith(d))) continue;
  // 如果此页面属于某个动态路由覆盖的子目录 → 跳过（已被模式 A 覆盖）
  const parentDir = rel.includes('/') ? rel.substring(0, rel.indexOf('/') + 1) : '';
  if (parentDir && dynamicRouteDirs.has(parentDir)) continue;
  mTotal++;

  // 两种合法翻译模式任选其一：
  // 模式 A: [locale]/ 动态路由文件（同一个文件里有 fr/ar/id 三语）
  // 模式 B: ar/ + fr/ + id/ 三个独立物理目录文件（都存在才算）
  const locPath = join(PAGES_LOC, rel);
  const inDynamic = existsSync(locPath);
  const inAllStatic = KEY_LANGS.every(l => existsSync(join(PAGES_ROOT, l, rel)));

  if (!inDynamic && !inAllStatic) {
    warn('M', `根级页 [${rel}] 既无 [locale]/ 动态路由，也无 ar/fr/id 独立目录文件 → 小语种 URL 返回英文或 404`);
    mBad++;
    continue;
  }

  // 模式 A 存在 → 检查是不是 redirect stub
  if (inDynamic) {
    const content = readFileSync(locPath, 'utf8');
    if (content.includes('http-equiv="refresh"') || content.includes("http-equiv='refresh'")) {
      warn('M', `[locale]/${rel} 是 redirect stub（http-equiv refresh） → 小语种用户瞬间跳英文，SEO 无效`);
      mBad++;
      continue;
    }
  }
  mChecked.push(rel);
}
if (mBad === 0) pass('M', `全部 ${mTotal} 个根级英文页均有小语种翻译（[locale]/ 动态路由 或 ar/fr/id 独立目录）。动态路由覆盖子目录: [${[...dynamicRouteDirs].join(', ')}]`);

// ===========================
//  D. 构建产物 dist 文本检查
// ===========================
console.log('\n━━━ D. dist/ 构建产物文本检查（小语种页面含有英文 UI 词 = 回退/漏翻）━━━');
if (!existsSync(DIST) || !existsSync(join(DIST, '404.html'))) {
  console.log('  ⚠️  dist 不存在，未发现构建产物 — 跳过 D/E。请先 npm run build。');
} else {
  const suspectUI = [
    'Get a Quote', 'Back to Home', 'Browse Products', 'Contact Us', 'Page Not Found',
    'Sorry, the page you', 'the page you are looking',
    'About Us', 'Our Products', 'Quick Links', 'Send Email', 'Factory Tour',
    'All Rights Reserved', 'View Details', 'Send Inquiry', 'Learn More', 'Select Model',
  ];
  const allHtml = listHtml(DIST);
  const byLang = {
    en: allHtml.filter(p => !p.substring(DIST.length + 1).match(/^(fr|ar|id)[\/\\]/)),
    fr: allHtml.filter(p => p.substring(DIST.length + 1).startsWith('fr')),
    ar: allHtml.filter(p => p.substring(DIST.length + 1).startsWith('ar')),
    id: allHtml.filter(p => p.substring(DIST.length + 1).startsWith('id')),
  };
  for (const l of ['en', ...KEY_LANGS]) console.log(`  [${l}] 共 ${byLang[l].length} 个 HTML 文件`);

  const sampleN = 10;
  let dHitsTotal = 0;
  for (const l of KEY_LANGS) {
    // 404 必须单独查
    const pages = [
      join(DIST, l, '404', 'index.html'),
      join(DIST, l, 'index.html'),
      join(DIST, l, 'about', 'index.html'),
      join(DIST, l, 'contact', 'index.html'),
      join(DIST, l, 'faq', 'index.html'),
      join(DIST, l, 'catalog', 'index.html'),
      ...byLang[l].slice(0, sampleN),
    ];
    const uniq = [...new Set(pages)].filter(p => existsSync(p));
    const bad = [];
    for (const p of uniq) {
      const html = readFileSync(p, 'utf8');
      const hits = suspectUI.filter(w => {
        // 只匹配作为标签文本的英文 UI
        const re = new RegExp(`>[^<]{0,50}${w.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}[^<]{0,50}<`, '');
        return re.test(html);
      });
      if (hits.length) bad.push([p.substring(DIST.length + 1), hits.slice(0, 5)]);
    }
    if (bad.length) {
      warn('D', `${l} 抽检 ${uniq.length} 页中 ${bad.length} 页含英文 UI（疑似回退）`);
      bad.slice(0, 8).forEach(([f, hits]) => console.log(`      · ${f}  -> ${hits.join(' | ')}`));
      dHitsTotal += bad.length;
    } else {
      pass('D', `${l} 抽检 ${uniq.length} 页未发现英文 UI 回退`);
    }
  }

  // =========================
  //  E. 404 页语言断言
  // =========================
  console.log('\n━━━ E. 404 页语言断言（访问小语种 /xxx-notfound，HTML 中应不出现 "Page Not Found" 等英文）━━━');
  const expectedTitle = { fr: 'Page introuvable', ar: 'الصفحة غير موجودة', id: 'Halaman Tidak Ditemukan' };
  let eFail = 0;
  for (const l of KEY_LANGS) {
    const p = join(DIST, l, '404', 'index.html');
    if (!existsSync(p)) { warn('E', `${l}/404/index.html 缺失！`); eFail++; continue; }
    const html = readFileSync(p, 'utf8');
    if (!html.includes(expectedTitle[l])) {
      warn('E', `${l} 404 页 H1/标题 未包含期望文本 "${expectedTitle[l]}"`);
      eFail++;
    } else pass('E', `${l} 404 页包含期望标题 "${expectedTitle[l]}"`);
    if (html.includes('>Page Not Found<')) {
      warn('E', `${l} 404 页仍显示英文 "Page Not Found"！`);
      eFail++;
    }
  }

  // =========================
  //  F. dist 异常文件类型（脚本/报告/配置被错误打包成可下载内容）
  // =========================
  console.log('\n━━━ F. dist/ 异常文件类型（禁止 .ps1/.bat/.py/.js/.json/.md/.xml 被打包，除 robots/sitemap/manifest/webmanifest）━━━');
  const BAD_EXT = /\.(ps1|bat|cmd|py|psm1|sh|md|xml|docx?|xlsx?|pptx?|zip|rar|psd|ai|sketch)$/i;
  const ALLOW_JSON = /^\/(robots\.txt|sitemap[-\w]*\.xml|manifest\.webmanifest|site\.webmanifest|browserconfig\.xml|favicon\.xml)$/;
  function listAll(dir, list = []) {
    for (const f of readdirSync(dir)) {
      const p = join(dir, f);
      const s = statSync(p);
      if (s.isDirectory()) listAll(p, list); else list.push(p);
    }
    return list;
  }
  const allDist = listAll(DIST);
  const badFiles = allDist.filter(p => {
    const rel = '/' + p.substring(DIST.length + 1).replace(/\\/g, '/');
    if (ALLOW_JSON.test(rel)) return false;
    return BAD_EXT.test(rel);
  });
  if (badFiles.length) {
    warn('F', `发现 ${badFiles.length} 个异常文件（不应被公开访问）：`);
    badFiles.slice(0, 30).forEach(f => console.log(`      ! ${f.substring(DIST.length + 1)}  (${Math.round(statSync(f).size/1024)} KB)`));
    if (badFiles.length > 30) console.log(`      ... 还有 ${badFiles.length - 30} 个`);
  } else { pass('F', 'dist/ 无异常文件类型 ✓'); }

  // =========================
  //  G. 小语种页内部链接语言前缀一致性（全量扫描：/fr/ 页的 href 不得指向已有小语种版的英文裸路径）
  // =========================
  console.log('\n━━━ G. 小语种页内部链接语言前缀一致性（全量扫描，不得错连英文页裸路径）━━━');
  // 捕获整个 <a ...> 标签属性串以便识别 data-static-en-only 白名单
  const HREF_RE_G = /<a\s+([^>]*?)href=["']([^"']+)["']([^>]*)>/gi;
  let gBadTotal = 0;
  const gChecked = {};
  for (const l of KEY_LANGS) {
    gChecked[l] = 0;
    const failures = new Map();
    for (const p of byLang[l]) {
      const html = readFileSync(p, 'utf8');
      gChecked[l]++;
      const hrefs = [];
      let m;
      HREF_RE_G.lastIndex = 0;
      while ((m = HREF_RE_G.exec(html)) !== null) {
        const attrs = (m[1] + ' ' + m[3]).toLowerCase();
        if (attrs.includes('data-static-en-only')) continue;
        // 语言切换器链接：天然指向其他语种（带 hreflang / lang-switch-link 标记），豁免
        if (attrs.includes('hreflang=') || attrs.includes('lang-switch-link')) continue;
        hrefs.push(m[2]);
      }
      const relPage = relative(join(DIST, l), p).split(sep).join('/');
      for (const h of hrefs) {
        if (!h.startsWith('/')) continue;
        if (/^\/(images|videos|favicon|apple-touch-icon|icons?|assets|_astro)\//.test(h)) continue;
        if (/^\/(robots\.txt|sitemap|manifest\.webmanifest)\b/.test(h)) continue;
        const clean = h.split('?')[0].split('#')[0];
        if (clean.startsWith('/' + l + '/')) continue;
        if (clean === '/' || clean === '/' + l) continue;
        if (/^\/(en|fr|ar|id)\//.test(clean)) {
          const k = `错连到他语前缀: ${h}  (${relPage})`; failures.set(k, (failures.get(k) || 0) + 1); continue;
        }
        // 裸英文路径：仅当该页的小语种版本真实存在时才判错（纯英文版页面允许保留裸链）
        const targetRel = clean.replace(/^\//, '');
        const localTarget = join(DIST, l, targetRel);
        const hasLocal = existsSync(join(localTarget, 'index.html')) || existsSync(localTarget + '.html') || existsSync(localTarget);
        if (hasLocal) {
          const k = `缺 locale 前缀（${l} 版已存在）: ${h}  (${relPage})`;
          failures.set(k, (failures.get(k) || 0) + 1);
        }
      }
    }
    if (failures.size) {
      warn('G', `${l} 链接前缀问题 ${failures.size} 处（全量扫描 ${gChecked[l]} 页）`);
      let i = 0;
      for (const [k, c] of failures) { if (i++ < 15) console.log(`      · (×${c}) ${k}`); }
      gBadTotal += failures.size;
    } else pass('G', `${l} 全量 ${gChecked[l]} 页，内部链接前缀全部正确 ✓`);
  }

  // =========================
  //  H. 小语种页图片/视频引用完整性
  // =========================
  console.log('\n━━━ H. 小语种页图片/视频引用完整性（<img src>/<video src>/<source src> 必须存在于 dist/）━━━');
  const SRC_RE = /<(?:img|source|video|track)\s+[^>]*src=["']([^"']+)["']/gi;
  const POSTER_RE = /<video\s+[^>]*poster=["']([^"']+)["']/gi;
  let hBadTotal = 0;
  for (const l of KEY_LANGS) {
    const pages = [
      join(DIST, l, 'index.html'),
      join(DIST, l, 'about', 'index.html'),
      join(DIST, l, 'contact', 'index.html'),
      join(DIST, l, 'products', 'index.html'),
      join(DIST, l, 'products', 'model-comparison', 'index.html'),
      ...byLang[l].slice(0, 15),
    ];
    const uniq = [...new Set(pages)].filter(p => existsSync(p));
    const missing = new Map();
    for (const p of uniq) {
      const html = readFileSync(p, 'utf8');
      const sources = [];
      let m; SRC_RE.lastIndex = 0; while ((m = SRC_RE.exec(html)) !== null) sources.push(m[1]);
      POSTER_RE.lastIndex = 0; while ((m = POSTER_RE.exec(html)) !== null) sources.push(m[1]);
      for (const s of sources) {
        if (!s.startsWith('/')) continue; // data:/、CDN 外链跳过
        const clean = s.split('?')[0];
        const fp = join(DIST, clean.replace(/^\//, '').replace(/\//g, sep));
        if (!existsSync(fp)) { const k = clean; missing.set(k, (missing.get(k) || 0) + 1); }
      }
    }
    if (missing.size) {
      warn('H', `${l} 缺失 ${missing.size} 个引用文件：`);
      let i = 0;
      for (const [k, c] of missing) { if (i++ < 10) console.log(`      · ×${c}  ${k}`); }
      hBadTotal += missing.size;
    } else pass('H', `${l} 抽检页所有资源引用均存在 ✓`);
  }

  // =========================
  //  I. canonical/hreflang 标签语言一致性
  // =========================
  console.log('\n━━━ I. canonical / hreflang 标签语言一致性（小语种页 canonical 不能指向英文）━━━');
  const CANON_RE = /<link\s+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i;
  const HREFLANG_RE = /<link\s+rel=["']alternate["'][^>]*hreflang=["']([^"']+)["'][^>]*href=["']([^"']+)["']/gi;
  let iBad = 0;
  for (const l of KEY_LANGS) {
    const samples = [
      [join(DIST, l, 'index.html'), `/${l}/`],
      [join(DIST, l, 'about', 'index.html'), `/${l}/about/`],
      [join(DIST, l, 'contact', 'index.html'), `/${l}/contact/`],
    ];
    let fails = [];
    for (const [p, expectedTail] of samples) {
      if (!existsSync(p)) continue;
      const html = readFileSync(p, 'utf8');
      const cm = html.match(CANON_RE);
      if (!cm) { fails.push(`${p.replace(DIST,'')}: 缺失 canonical 标签`); continue; }
      const canon = cm[1];
      if (!canon.includes('/' + l + '/')) fails.push(`${expectedTail}: canonical=${canon} 不含 /${l}/（可能指向英文）`);
      // hreflang：检查是否同时包含 en/fr/ar/id/x-default
      const found = {};
      let mm; HREFLANG_RE.lastIndex = 0;
      while ((mm = HREFLANG_RE.exec(html)) !== null) found[mm[1]] = mm[2];
      const expectedLangs = ['en', 'fr', 'ar', 'id', 'x-default'];
      const miss = expectedLangs.filter(x => !found[x]);
      if (miss.length) fails.push(`${expectedTail}: hreflang 缺 ${miss.join(',')}`);
    }
    if (fails.length) { warn('I', `${l}: canonical/hreflang 问题 ${fails.length} 处`); fails.forEach(x => console.log(`      · ${x}`)); iBad += fails.length; }
    else pass('I', `${l} 核心页 canonical/hreflang 标签正确 ✓`);
  }

  // =========================
  //  J. 内链目标存在性（全量 <a href>/canonical/hreflang/og:url/og:image 必须能落到 dist 文件，杜绝 404 死链）
  // =========================
  console.log('\n━━━ J. 内链目标存在性（所有内部 href/content 链接必须在 dist 中有对应文件）━━━');
  const distFiles = new Set(allDist.map(p => '/' + p.substring(DIST.length + 1).replace(/\\/g, '/')));
  function linkTargetExists(link) {
    let clean;
    try { clean = decodeURIComponent(link.split('#')[0].split('?')[0]); }
    catch { clean = link.split('#')[0].split('?')[0]; }
    if (clean === '/') return distFiles.has('/index.html');
    const noSlash = clean.replace(/\/+$/, '');
    return distFiles.has(noSlash) || distFiles.has(noSlash + '/index.html') || distFiles.has(noSlash + '.html');
  }
  // content= 只匹配以 / 或本站域名开头的完整 URL（即 og:image / og:url / twitter:image 这类），纯文本 meta 不受影响
  const J_LINK_RE = /(?:href|content)=["']((?:\/[^"'/]|https:\/\/(?:www\.)?hydoilpress\.com\/)[^"']*)["']/gi;
  const jDead = new Map(); // 死链 -> 引用它的页面集合
  let jChecked = 0;
  for (const p of allHtml) {
    const html = readFileSync(p, 'utf8');
    let m; J_LINK_RE.lastIndex = 0;
    while ((m = J_LINK_RE.exec(html)) !== null) {
      let link = m[1];
      if (link.startsWith('//')) continue; // 协议相对外链
      if (/^(mailto:|tel:|javascript:|data:)/i.test(link)) continue;
      if (link.startsWith('https://')) link = link.replace(/^https:\/\/(?:www\.)?hydoilpress\.com/, '');
      if (!link.startsWith('/')) continue;
      jChecked++;
      if (!linkTargetExists(link)) {
        const rel = p.substring(DIST.length + 1).replace(/\\/g, '/');
        if (!jDead.has(link)) jDead.set(link, new Set());
        jDead.get(link).add(rel);
      }
    }
  }
  if (jDead.size) {
    warn('J', `发现 ${jDead.size} 个内链死链目标：`);
    let i = 0;
    for (const [link, refs] of jDead) {
      if (i++ < 30) console.log(`      × ${link}  <- ${[...refs].slice(0, 3).join(', ')}${refs.size > 3 ? ` 等${refs.size}个页面` : ''}`);
    }
    if (jDead.size > 30) console.log(`      ... 还有 ${jDead.size - 30} 个`);
  } else {
    pass('J', `全站 ${jChecked} 个内链目标全部存在 ✓`);
  }

  // =========================
  //  K. 语言切换器可抓取性：必须是真实 <a href hreflang>，禁止 button/JS 伪链接
  //     （历史教训：data-lang 按钮式切换器导致 261 个小语种页无内链入口、长期不收录）
  // =========================
  console.log('\n━━━ K. 语言切换器可抓取性（禁止 data-lang 按钮/JS 伪链接，必须为 <a href hreflang>）━━━');
  let kBad = 0;
  // 1) 负向：非 <a> 元素带 data-lang，或残留旧 class —— 一律视为 JS 伪切换器回归
  const DATALANG_RE = /<(?!a\b)([a-zA-Z0-9]+)\b[^>]*\bdata-lang=/gi;
  const kHits = new Map();
  for (const p of allHtml) {
    const html = readFileSync(p, 'utf8');
    let m; DATALANG_RE.lastIndex = 0;
    while ((m = DATALANG_RE.exec(html)) !== null) {
      const key = `<${m[1].toLowerCase()} data-lang=…> JS 伪语言链接`;
      kHits.set(key, (kHits.get(key) || 0) + 1);
    }
    if (/\blang-switch-btn\b/.test(html)) {
      const key = 'class="lang-switch-btn" 旧 JS 切换器残留';
      kHits.set(key, (kHits.get(key) || 0) + 1);
    }
  }
  for (const [key, c] of kHits) { warn('K', `${key}（${c} 个页面）`); kBad += c; }
  // 2) 正向：英文抽样页必须真实链接到 /fr/ /ar/ /id/ 三个对应页
  const kSamples = [
    join(DIST, 'index.html'),
    join(DIST, 'products', 'heavy-duty-hydraulic-oil-press', 'index.html'),
    join(DIST, 'contact', 'index.html'),
  ];
  let kSampleBad = 0;
  const ANCHOR_LOC_RE = /<a\b[^>]*\bhref=["']\/(fr|ar|id)\b[^"']*["'][^>]*>/gi;
  for (const p of kSamples) {
    if (!existsSync(p)) continue;
    const html = readFileSync(p, 'utf8');
    const found = new Set([...html.matchAll(ANCHOR_LOC_RE)].map(x => x[1]));
    const missing = ['fr', 'ar', 'id'].filter(l => !found.has(l));
    if (missing.length) {
      warn('K', `${p.replace(DIST, '')} 缺少指向 ${missing.join('/')} 的真实 <a href> 语言链接`);
      kSampleBad++;
    }
  }
  if (!kBad && !kSampleBad) pass('K', '全站无 JS 伪语言链接，英文抽样页均含 fr/ar/id 真实切换链接 ✓');
}

// ===========================
//  汇总
// ===========================
console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`  检查通过项: ${passCount}   告警项: ${issues.length}`);
const itemized = [
  ['A. 缺 key 总数', aMissingTotal],
  ['A. 多 key 总数', aExtraTotal],
  ['B. 疑似真漏翻译（已排除合理保留）', bTotal],
];
for (const [k, v] of itemized) console.log(`  · ${k}: ${v}`);
// D/G/H/F/I/L 的计数仅在 dist 存在时有意义
if (typeof lBad !== 'undefined') console.log(`  · L. 翻译长度异常: ${lBad}`);
console.log(`\n  （dist 构建产物检查 F/G/H/I 若 dist 存在会显示告警明细，否则已跳过）`);
if (issues.length) {
  console.log('\n  ❗ 有告警项，请逐条检查并修复。脚本退出码 = 1（非 0 阻止部署流程）。');
  console.log('  💡 A/C/D/E/F/G/H/I/J/K/L/M → 阻塞级，必须修复；B 类如确系合理保留，可扩展脚本内 B_EXC* 白名单');
  process.exit(1);
} else {
  console.log('\n  🎉 全部通过！');
  process.exit(0);
}
