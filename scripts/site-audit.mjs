/**
 * 网站上线前自动化巡检脚本（每次构建后/部署前一键运行）
 * 运行方式：
 *   node scripts/site-audit.mjs              # 仅做本地静态检查（翻译 key、src/pages 结构）
 *   npm run build && node scripts/site-audit.mjs  # 构建后做完整检查（含 dist/ 产物 + 翻译）
 *
 * 检查 5 大类问题：
 *   A. 翻译 JSON 文件 key 完整性（缺 key → 小语种回退英文）
 *   B. 翻译 value 完全等于英文（可能漏翻译）
 *   C. src/pages 多语言路由结构缺失（[locale] 里少某类页面）
 *   D. dist/ 构建产物中，小语种页面包含不该出现的英文 UI 词
 *   E. 小语种 404 页是否为目标语言（今天刚修复的那类）
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, sep } from 'node:path';

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
//  B. value 完全等于英文（可能漏翻译）
// ===========================
console.log('\n━━━ B. 可能未翻译：value 与英文完全相同的 key（品牌/专有名词除外）━━━');
// 这些即便是英文也合理（品牌、产品型号、行业专有词）
const EXCEPTIONS = [/OEM\s*\/\s*ODM/i, /ISO/i, /CE/i, /Haonuo/i, /HN\d{2,4}/i, /B2B/i];
function sameButProbablyOK(v) { return EXCEPTIONS.some(r => r.test(v)) || v.length < 4; }
let bTotal = 0;
for (const l of KEY_LANGS) {
  const arr = [];
  for (const k of master) {
    const a = getByPath(i18n.en, k);
    const b = getByPath(i18n[l], k);
    if (typeof a === 'string' && a && a === b && !sameButProbablyOK(a)) arr.push([k, a]);
  }
  bTotal += arr.length;
  if (arr.length) {
    warn('B', `${l}.json 发现 ${arr.length} 个 key 与英文 value 完全一致（可能漏翻译）`);
    arr.slice(0, 20).forEach(([k, v]) => console.log(`        * ${k} = "${v.substring(0, 70)}"`));
    if (arr.length > 20) console.log(`        ... 还有 ${arr.length - 20} 个，建议逐条看是否确实漏翻译`);
  } else { pass('B', `${l}.json 无漏翻译迹象`); }
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
  'cold-press-oil-machine.astro','hydraulic-oil-press-machine.astro','manual-oil-press-machine.astro',
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
}

// ===========================
//  汇总
// ===========================
console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`  检查通过项: ${passCount}   告警项: ${issues.length}`);
const itemized = [
  ['A. 缺 key 总数', aMissingTotal],
  ['A. 多 key 总数', aExtraTotal],
  ['B. 疑似漏翻译（value=en）', bTotal],
];
for (const [k, v] of itemized) console.log(`  · ${k}: ${v}`);
if (issues.length) {
  console.log('\n  ❗ 有告警项，请逐条检查并修复。脚本退出码 = 1（非 0 阻止部署流程）。');
  console.log('  💡 提示：B 类"疑似漏翻译"如果是故意保留英文（品牌/专业术语），可以不处理；');
  console.log('         A/C/D/E 类告警强烈建议修复。');
  process.exit(1);
} else {
  console.log('\n  🎉 全部通过！');
  process.exit(0);
}
