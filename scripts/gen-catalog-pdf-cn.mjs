// 中文产品目录 PDF 生成器
import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import puppeteer from 'puppeteer-core';

const PRODUCTS_DIR = path.resolve('src/content/products');
const OUT_HTML = path.resolve('catalog-pdf-source-cn.html');
const OUT_PDF = path.resolve('海诺机械液压榨油机产品目录.pdf');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

// 中文配置
const CATEGORIES = {
  'hydraulic-oil-press':        { zh: '液压榨油机', en: 'Hydraulic Oil Presses' },
  'seed-processing-equipment':  { zh: '种子预处理设备', en: 'Seed Processing Equipment' },
  'roasting-steaming-equipment':{ zh: '炒籽蒸籽设备', en: 'Roasting & Steaming Equipment' },
  'filtration-refining-equipment': { zh: '过滤设备', en: 'Filtration Equipment' },
};
const CATEGORY_ORDER = ['hydraulic-oil-press', 'seed-processing-equipment', 'roasting-steaming-equipment', 'filtration-refining-equipment'];

const MODEL_ORDER = {
  'hydraulic-oil-press': ['HN300','HN325','HN365','HN426','HN500','HN325/355 Sesame','300 Type Coconut','HN325 Large Tabung Press'],
  'roasting-steaming-equipment': ['100# / 130#','Thermal Oil Type','60 Type Wood-Fired','27KW Electric'],
  'seed-processing-equipment': ['HN-CG60','220 Type','HN-SC','All-in-One','370 Type'],
  'filtration-refining-equipment': ['HN-10SL'],
};

const HIDDEN_SLUGS = new Set([
  'medium-hydraulic-oil-press','heavy-duty-hydraulic-oil-press','high-pressure-hydraulic-oil-press','ultra-high-pressure-cold-press',
  'edible-oil-refining-system','stainless-steel-oil-refining-equipment',
]);

// 中文产品名 + 简短中文描述（和 Word 目录脚本一致）
const ZH_NAMES = {
  'HN300': 'HN300 小型液压榨油机',
  'HN325': 'HN325 标准型液压榨油机（畅销款）',
  'HN355': 'HN355 中型液压榨油机',
  'HN365': 'HN365 商业级液压榨油机',
  'HN400': 'HN400 重型液压榨油机',
  'HN426': 'HN426 冷榨液压榨油机（500吨）',
  'HN480': 'HN480 高压液压榨油机',
  'HN480B': 'HN480B 超高压冷榨机',
  'HN500': 'HN500 超高压液压榨油机（旗舰款）',
  'HN325 Large Tabung Press': 'HN325 大桶压滤机（椰子/乳木果）',
  'HN325/355 Sesame': '定制款芝麻专用液压榨油机',
  '300 Type Coconut': '300型椰奶液压榨油机',
  'HN-CG60': 'HN-CG60 螺旋预压机',
  '220 Type': '220型高速种子破碎机',
  '370 Type': '370型油饼工业粉碎机',
  'All-in-One': '一体式提升·破碎·炒籽机',
  'HN-SC': 'HN-SC 立式螺旋输送机',
  '100# / 130#': '电磁滚筒炒籽机（100型/130型）',
  '27KW Electric': '27KW 电热蒸籽机',
  '60 Type Wood-Fired': '60型柴火蒸籽机',
  'Thermal Oil Type': '导热油炒籽锅',
  'HN-10SL': 'HN-10SL 气动压滤机',
};

const ZH_DESC = {
  'HN300': '300吨压力，适合油坊起步阶段。20–60kg/批次，热榨冷榨通用，1.1kw电机。',
  'HN325': '工厂主打型号，325吨压力，20–100kg/批次，27MPa饼面压力。热榨30–40分钟/批次，冷榨约2小时。单缸1.42吨，双缸1.72吨。',
  'HN365': '365吨压力，适合商业油厂，日处理量更大，双缸配置可选。',
  'HN426': '500吨冷榨专用，70MPa系统压力/42MPa饼面压力。低温压榨保留营养，主打椰子VCO、核桃油、亚麻籽油等高端油品。',
  'HN500': '600–620吨旗舰机型，最强压力，核桃、杏仁等硬壳油料单周期直接压透。',
  'HN400': '400吨重型液压榨油机，适合硬质油料（核桃、杏仁壳等）。',
  'HN325 Large Tabung Press': 'HN325加大桶径版本（Ø500mm），针对椰子肉、乳木果设计，20–35kg/批次。',
  'HN325/355 Sesame': '芝麻定制款——Ø300mm窄桶集中压力，47–51MPa饼面压力，42–54%出油率。',
  '300 Type Coconut': '300型椰奶/椰油专用液压榨油机，定制桶形。',
  'HN-CG60': '螺旋预压机——主榨前先压一遍，压成薄片破坏油细胞。增加3–5%总出油率。500kg/h（7.5kw）/750kg/h（11kw）。',
  '220 Type': '220型高速破碎机，棕榈仁、棉籽等硬壳物料破碎。',
  '370 Type': '370型油饼粉碎机，把榨完的油饼粉碎成动物饲料粉末。2000kg/h。',
  'All-in-One': '一体化提升·破碎·炒籽三合一设备，紧凑型作坊配置。',
  'HN-SC': '立式螺旋输送机，自动将物料从炒籽机送入榨油机料斗。',
  '100# / 130#': '电磁加热滚筒炒籽机，100型（160kg/批次）、130型（450kg/批次）。电磁无明火，温度精准可调。',
  '27KW Electric': '27KW电热蒸籽机，增加物料水分软化细胞，提高出油率。温度可控。',
  '60 Type Wood-Fired': '60型柴火蒸籽机，无电或电力不足地区首选，烧木柴/生物质燃料。',
  'Thermal Oil Type': '导热油炒籽锅，导热油循环加热，受热均匀，适合传统风味炒籽工艺。',
  'HN-10SL': '气动压滤机——用压缩空气加压，压榨原油除去悬浮杂质。比普通板框压滤机精度更高、速度更快。',
};

function parseFM(content) {
  if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
  const m = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  try { return yaml.parse(m[1]); } catch { return null; }
}

function loadAll() {
  return fs.readdirSync(PRODUCTS_DIR)
    .filter(f => f.endsWith('.md'))
    .map(f => {
      const raw = fs.readFileSync(path.join(PRODUCTS_DIR, f), 'utf8');
      const fm = parseFM(raw); if (!fm) return null;
      const slug = f.replace('.md','');
      if (HIDDEN_SLUGS.has(slug)) return null;
      const model = fm.model || 'Custom';
      return {
        slug, model,
        zhName: ZH_NAMES[model] || (fm.title?.en || fm.title || ''),
        zhDesc: ZH_DESC[model] || (fm.description?.en || ''),
        category: fm.category,
        specs: fm.specifications || [],
        seeds: fm.applicableSeeds || [],
        img: (fm.images?.[0] || '/images/products/default-product.webp').replace(/^\/images\//, 'public/images/'),
        url: `https://www.hydoilpress.com/products/${slug}/`,
      };
    }).filter(Boolean);
}

function orderProducts(products) {
  const out = [];
  for (const cat of CATEGORY_ORDER) {
    const list = products.filter(p => p.category === cat);
    const order = MODEL_ORDER[cat] || [];
    list.sort((a, b) => {
      const ai = order.indexOf(a.model), bi = order.indexOf(b.model);
      if (ai >= 0 && bi >= 0) return ai - bi;
      if (ai >= 0) return -1; if (bi >= 0) return 1;
      return a.model.localeCompare(b.model);
    });
    out.push({ cat, items: list });
  }
  return out;
}

function productCard(p) {
  // 去掉 Model 行，保留其他（最多9行）
  const specs = p.specs.filter(s => !/model/i.test(s.name)).slice(0, 9);
  const specRows = specs.map((s, i) => `
        <tr class="${i % 2 ? 'alt' : ''}">
          <td class="sn">${s.name}</td>
          <td class="sv">${s.value}</td>
        </tr>`).join('\n');
  const seedsHtml = p.seeds.length ? `
        <div class="seeds"><span class="sl">适用油料：</span>${p.seeds.join(' · ')}</div>` : '';

  return `
  <div class="prod-card">
    <div class="prod-head">
      <div class="prod-model">${p.model}</div>
      <h3 class="prod-title">${p.zhName}</h3>
    </div>
    <div class="prod-body">
      <div class="prod-img">
        <img src="${p.img}" alt="${p.zhName}" onerror="this.src='public/images/products/default-product.webp'"/>
      </div>
      <div class="prod-right">
        <p class="prod-desc">${p.zhDesc}</p>
        ${seedsHtml}
        <div class="spec-wrap">
          <table class="specs"><tbody>${specRows}</tbody></table>
        </div>
        <div class="prod-link"><a href="${p.url}">查看完整产品页 → ${p.url}</a></div>
      </div>
    </div>
  </div>`;
}

const all = loadAll();
const ordered = orderProducts(all);
const totalProducts = ordered.reduce((s, g) => s + g.items.length, 0);

const categorySections = ordered.map(({ cat, items }) => {
  const meta = CATEGORIES[cat];
  const cards = items.map(productCard).join('\n');
  return `
<section class="cat-section">
  <h2 class="cat-title"><span class="cat-label">${meta.zh}</span><span class="cat-en">${meta.en} · ${items.length}款</span></h2>
  ${cards}
</section>
<div class="page-break"></div>`;
}).join('\n');

const html = `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8"/>
<title>海诺机械 · 液压榨油机产品目录 2026</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Sans+SC:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  @page { size: A4; margin: 14mm 12mm; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Noto Sans SC', 'Inter', sans-serif; font-size: 11px; color: #1f2937; line-height: 1.5; }
  .page-break { page-break-before: always; break-before: page; }
  h1, h2, h3 { font-weight: 700; }
  a { color: #d97706; text-decoration: underline; }

  /* ===== COVER ===== */
  .cover { page-break-after: always; padding-top: 60mm; position: relative; min-height: 260mm; }
  .cover-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 50mm; }
  .cover-logo { font-family: 'Bebas Neue', sans-serif; font-size: 22pt; color: #0A0E17; letter-spacing: 1px; }
  .cover-logo .dot { color: #F59E0B; }
  .cover-tag { font-family: 'JetBrains Mono', monospace; font-size: 9pt; color: #6b7280; }
  .cover-sub { font-size: 10pt; color: #6b7280; letter-spacing: 2px; margin-bottom: 14pt; }
  .cover-title { font-family: 'Bebas Neue', sans-serif; font-size: 64pt; line-height: 0.9; color: #0A0E17; margin-bottom: 4pt; }
  .cover-title .zh { font-family: 'Noto Sans SC', sans-serif; font-size: 28pt; letter-spacing: 8px; margin-left: 6pt; }
  .cover-title .amber { color: #F59E0B; }
  .cover-desc { font-size: 12pt; color: #4b5563; max-width: 140mm; line-height: 1.8; margin-bottom: 40mm; }
  .cover-stats { display: flex; gap: 28pt; border-top: 2px solid #0A0E17; padding-top: 14pt; }
  .cover-stat .num { font-family: 'Bebas Neue', sans-serif; font-size: 26pt; color: #F59E0B; }
  .cover-stat .lbl { font-size: 9pt; color: #6b7280; letter-spacing: 1px; }
  .cover-bottom { position: absolute; bottom: 18mm; left: 14mm; right: 14mm; display: flex; justify-content: space-between; font-size: 8pt; color: #6b7280; }

  /* ===== INTRO ===== */
  .intro { page-break-after: always; padding-top: 10mm; }
  .intro h1 { font-family: 'Bebas Neue', sans-serif; font-size: 32pt; color: #0A0E17; border-bottom: 3pt solid #F59E0B; padding-bottom: 6pt; margin-bottom: 12pt; }
  .intro-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 20pt; margin-bottom: 16pt; }
  .intro-text { font-size: 11pt; color: #374151; line-height: 1.9; }
  .intro-text p { margin-bottom: 8pt; }
  .intro-side { background: #f9fafb; border-left: 3pt solid #F59E0B; padding: 12pt; }
  .intro-side h3 { font-family: 'Bebas Neue', sans-serif; font-size: 14pt; color: #0A0E17; margin-bottom: 8pt; }
  .intro-side p { font-size: 10pt; color: #4b5563; margin-bottom: 6pt; line-height: 1.7; }
  .intro-side .price { color: #d97706; font-weight: 600; }
  .contact-block { margin-top: 16pt; padding: 12pt; background: #0A0E17; color: white; border-radius: 4pt; }
  .contact-block h3 { font-family: 'Bebas Neue', sans-serif; font-size: 16pt; color: #F59E0B; margin-bottom: 8pt; }
  .contact-row { display: flex; justify-content: space-between; font-size: 10pt; margin-bottom: 4pt; }
  .contact-row .label { color: #9ca3af; }
  .contact-row .val { color: white; }

  /* ===== CATEGORY ===== */
  .cat-section { padding-top: 4mm; }
  .cat-title { font-family: 'Noto Sans SC', sans-serif; font-size: 20pt; color: #0A0E17; border-top: 3pt solid #F59E0B; padding-top: 8pt; margin-bottom: 8pt; display: flex; justify-content: space-between; align-items: baseline; }
  .cat-en { font-family: 'JetBrains Mono', monospace; font-size: 9pt; color: #9ca3af; letter-spacing: 1px; }

  /* ===== PRODUCT CARD ===== */
  .prod-card { margin-bottom: 14pt; page-break-inside: avoid; break-inside: avoid; }
  .prod-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4pt; }
  .prod-model { font-family: 'JetBrains Mono', monospace; font-size: 10pt; font-weight: 500; color: #F59E0B; background: #fffbeb; padding: 2pt 6pt; border-radius: 2pt; border: 1pt solid #fde68a; }
  .prod-title { font-size: 12pt; color: #0A0E17; flex: 1; margin-left: 8pt; font-weight: 700; }
  .prod-body { display: grid; grid-template-columns: 38mm 1fr; gap: 8pt; border: 1pt solid #e5e7eb; border-radius: 3pt; overflow: hidden; }
  .prod-img { background: #f9fafb; display: flex; align-items: center; justify-content: center; height: 28mm; }
  .prod-img img { max-width: 100%; max-height: 100%; object-fit: contain; }
  .prod-right { padding: 6pt 8pt; }
  .prod-desc { font-size: 10pt; color: #374151; line-height: 1.7; margin-bottom: 4pt; }
  .seeds { font-size: 8pt; color: #6b7280; margin-bottom: 4pt; }
  .seeds .sl { color: #9ca3af; font-size: 7pt; margin-right: 4pt; }
  .specs { width: 100%; border-collapse: collapse; font-size: 9pt; margin-bottom: 4pt; }
  .specs td { padding: 2pt 4pt; border-bottom: 1pt solid #f3f4f6; }
  .specs .sn { color: #6b7280; width: 38%; }
  .specs .sv { color: #0A0E17; font-weight: 500; }
  .specs tr.alt td { background: #f9fafb; }
  .prod-link { font-size: 8pt; font-family: 'JetBrains Mono', monospace; }
</style>
</head>
<body>

<!-- 封面 -->
<div class="cover">
  <div class="cover-top">
    <div class="cover-logo">HAONUO<span class="dot">.</span></div>
    <div class="cover-tag">产品目录 · 2026</div>
  </div>
  <div class="cover-sub">液压榨油机 · 成套榨油设备</div>
  <div class="cover-title">HYDRAULIC<br/><span class="amber">OIL PRESS</span><br/><span class="zh">产品目录</span></div>
  <p class="cover-desc">山东海诺机械装备集团有限公司，专业液压榨油设备制造商。2010年建厂，产品出口20多个国家和地区，覆盖从小型油坊到工业油厂的完整需求。</p>
  <div class="cover-stats">
    <div class="cover-stat"><div class="num">300–620</div><div class="lbl">吨位压力</div></div>
    <div class="cover-stat"><div class="num">${totalProducts}</div><div class="lbl">标准型号</div></div>
    <div class="cover-stat"><div class="num">20+</div><div class="lbl">出口国家</div></div>
    <div class="cover-stat"><div class="num">2010</div><div class="lbl">建厂年份</div></div>
  </div>
  <div class="cover-bottom">
    <span>山东海诺机械装备集团有限公司</span>
    <span>hydoilpress.com</span>
  </div>
</div>

<!-- 简介 -->
<div class="intro">
  <h1>公司简介 ABOUT HAONUO</h1>
  <div class="intro-grid">
    <div class="intro-text">
      <p><strong>山东海诺机械装备集团有限公司</strong>坐落于山东省，是一家专业设计和生产液压榨油设备的制造企业。自2010年起，我们为亚洲、非洲、拉丁美洲的油坊和油厂提供<strong>批次式液压榨油机</strong>、<strong>种子预处理设备</strong>、<strong>炒籽蒸籽设备</strong>以及<strong>从种子到毛油的成套生产线</strong>。</p>
      <p>我们的<strong>HN系列</strong>覆盖300至620吨压力——可压榨芝麻、花生、核桃、椰子VCO、乳木果、菜籽、亚麻籽、葵花籽、棕榈仁等20多种油料。所有机型均为自有工厂生产，采用<strong>Q690高强钢制榨筒</strong>、<strong>27SiMn合金钢制液压缸</strong>和<strong>食品接触面镀镍</strong>工艺。</p>
      <p>本目录列出公司全部标准生产型号，按设备分类组织。具体机型可根据客户需求定制配置。</p>
    </div>
    <div class="intro-side">
      <h3>产品线</h3>
      <p><strong>① 液压榨油机</strong><br/>300–620吨压力，12款标准机型，含冷榨、芝麻定制、椰子大桶等变种。</p>
      <p><strong>② 种子预处理</strong><br/>螺旋预压机、高速破碎机、立式输送机——集成后提升3–5%总出油率。</p>
      <p><strong>③ 炒籽蒸籽</strong><br/>电磁滚筒炒籽机、电热/柴火蒸籽机、导热油炒籽锅。</p>
      <p><strong>④ 过滤设备</strong><br/>气动压滤机，压榨后原油澄清。</p>
      <p class="price">支持定制配置，按客户需求推荐最适合方案。</p>
    </div>
  </div>
  <div class="contact-block">
    <h3>联系方式</h3>
    <div class="contact-row"><span class="label">联系人</span><span class="val">Eason</span></div>
    <div class="contact-row"><span class="label">WhatsApp</span><span class="val">+86 189 5714 9128</span></div>
    <div class="contact-row"><span class="label">邮箱</span><span class="val">sales@hydoilpress.com</span></div>
    <div class="contact-row"><span class="label">官网</span><span class="val">www.hydoilpress.com</span></div>
    <div class="contact-row"><span class="label">地址</span><span class="val">山东省</span></div>
  </div>
</div>

<!-- 产品分类 -->
${categorySections}

</body>
</html>`;

fs.writeFileSync(OUT_HTML, html, 'utf8');
console.log(`✅ 中文HTML已生成: ${OUT_HTML} (${html.length} chars, ${totalProducts} products)`);

const browser = await puppeteer.launch({ executablePath: CHROME, args: ['--no-sandbox','--disable-gpu'], headless: 'new' });
const page = await browser.newPage({ viewport: { width: 900, height: 1276 }, deviceScaleFactor: 1 });
const abs = path.resolve(OUT_HTML);
await page.goto(`file:///${abs.replace(/\\/g,'/')}`, { waitUntil: 'load', timeout: 15000 });
await new Promise(r => setTimeout(r, 1500));
await page.pdf({ path: OUT_PDF, format: 'A4', printBackground: true, margin: { top: '14mm', right: '12mm', bottom: '14mm', left: '12mm' }, displayHeaderFooter: false, scale: 1 });
await browser.close();
const size = fs.statSync(OUT_PDF).size;
console.log(`✅ PDF: ${OUT_PDF} (${(size/1024).toFixed(1)} KB)`);
