// Generate catalog-pdf.html from product markdown files → print to PDF
import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import puppeteer from 'puppeteer-core';

const PRODUCTS_DIR = path.resolve('src/content/products');
const OUT_HTML = path.resolve('catalog-pdf-source.html');
const OUT_PDF = path.resolve('Haonuo_Catalog_2026.pdf');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

// ===== ORDERING (user spec) =====
const CATEGORIES = {
  'hydraulic-oil-press':        { label: 'Hydraulic Oil Presses',              zh: '液压榨油机' },
  'seed-processing-equipment':  { label: 'Seed Processing Equipment',          zh: '种子预处理设备' },
  'roasting-steaming-equipment':{ label: 'Roasting & Steaming Equipment',      zh: '炒籽蒸籽设备' },
  'filtration-refining-equipment': { label: 'Filtration Equipment',            zh: '过滤设备' },
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
      return {
        slug,
        model: fm.model || 'Custom',
        category: fm.category,
        title: fm.title?.en || fm.title || '',
        desc: fm.description?.en || fm.description || '',
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
      if (ai >= 0) return -1;
      if (bi >= 0) return 1;
      return a.model.localeCompare(b.model);
    });
    out.push({ cat, items: list });
  }
  return out;
}

// ===== HTML HELPERS =====
function productCard(p) {
  // Remove 'Model' from specs (redundant), keep rest — pick top 8 meaningful ones
  const specs = p.specs.filter(s => !/model/i.test(s.name)).slice(0, 9);
  const specRows = specs.map((s, i) => `
        <tr class="${i % 2 ? 'alt' : ''}">
          <td class="sn">${s.name}</td>
          <td class="sv">${s.value}</td>
        </tr>`).join('\n');

  const seedsHtml = p.seeds.length ? `
        <div class="seeds"><span class="sl">Oilseeds:</span> ${p.seeds.join(' · ')}</div>` : '';

  return `
  <div class="prod-card">
    <div class="prod-head">
      <div class="prod-model">${p.model}</div>
      <h3 class="prod-title">${p.title}</h3>
    </div>
    <div class="prod-body">
      <div class="prod-img">
        <img src="${p.img}" alt="${p.title}" onerror="this.src='/images/products/default-product.webp'"/>
      </div>
      <div class="prod-right">
        <p class="prod-desc">${p.desc}</p>
        ${seedsHtml}
        <div class="spec-wrap">
          <table class="specs">
            <tbody>${specRows}</tbody>
          </table>
        </div>
        <div class="prod-link"><a href="${p.url}">View full details → ${p.url}</a></div>
      </div>
    </div>
  </div>`;
}

// ===== BUILD HTML =====
const all = loadAll();
const ordered = orderProducts(all);
const totalProducts = ordered.reduce((s, g) => s + g.items.length, 0);

const categorySections = ordered.map(({ cat, items }) => {
  const meta = CATEGORIES[cat];
  const cards = items.map(productCard).join('\n');
  return `
<section class="cat-section">
  <h2 class="cat-title"><span class="cat-label">${meta.label}</span><span class="cat-en">${items.length} MODELS</span></h2>
  ${cards}
</section>
<div class="page-break"></div>`;
}).join('\n');

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<title>Haonuo Machinery — Product Catalog 2026</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  @page { size: A4; margin: 14mm 12mm; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Inter', sans-serif; font-size: 11px; color: #1f2937; line-height: 1.5; }
  .page-break { page-break-before: always; break-before: page; }
  h1, h2, h3 { font-weight: 700; }
  a { color: #d97706; text-decoration: underline; }

  /* ===== COVER ===== */
  .cover { page-break-after: always; padding-top: 60mm; position: relative; min-height: 260mm; }
  .cover-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 50mm; }
  .cover-logo { font-family: 'Bebas Neue', sans-serif; font-size: 22pt; color: #0A0E17; letter-spacing: 1px; }
  .cover-logo .dot { color: #F59E0B; }
  .cover-tag { font-family: 'JetBrains Mono', monospace; font-size: 9pt; color: #6b7280; }
  .cover-sub { font-family: 'JetBrains Mono', monospace; font-size: 10pt; color: #6b7280; letter-spacing: 2px; margin-bottom: 14pt; }
  .cover-title { font-family: 'Bebas Neue', sans-serif; font-size: 72pt; line-height: 0.9; color: #0A0E17; margin-bottom: 8pt; }
  .cover-title .amber { color: #F59E0B; }
  .cover-desc { font-size: 13pt; color: #4b5563; max-width: 140mm; line-height: 1.6; margin-bottom: 40mm; }
  .cover-stats { display: flex; gap: 30pt; border-top: 2px solid #0A0E17; padding-top: 14pt; }
  .cover-stat .num { font-family: 'Bebas Neue', sans-serif; font-size: 28pt; color: #F59E0B; }
  .cover-stat .lbl { font-family: 'JetBrains Mono', monospace; font-size: 9pt; color: #6b7280; text-transform: uppercase; letter-spacing: 1px; }
  .cover-bottom { position: absolute; bottom: 18mm; left: 14mm; right: 14mm; display: flex; justify-content: space-between; font-family: 'JetBrains Mono', monospace; font-size: 8pt; color: #6b7280; }

  /* ===== INTRO ===== */
  .intro { page-break-after: always; padding-top: 10mm; }
  .intro h1 { font-family: 'Bebas Neue', sans-serif; font-size: 36pt; color: #0A0E17; border-bottom: 3pt solid #F59E0B; padding-bottom: 6pt; margin-bottom: 12pt; }
  .intro-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 20pt; margin-bottom: 16pt; }
  .intro-text { font-size: 11pt; color: #374151; line-height: 1.7; }
  .intro-text p { margin-bottom: 8pt; }
  .intro-side { background: #f9fafb; border-left: 3pt solid #F59E0B; padding: 12pt; }
  .intro-side h3 { font-family: 'Bebas Neue', sans-serif; font-size: 14pt; color: #0A0E17; margin-bottom: 8pt; }
  .intro-side p { font-size: 10pt; color: #4b5563; margin-bottom: 6pt; line-height: 1.6; }
  .intro-side .price { color: #d97706; font-weight: 600; }
  .contact-block { margin-top: 16pt; padding: 12pt; background: #0A0E17; color: white; border-radius: 4pt; }
  .contact-block h3 { font-family: 'Bebas Neue', sans-serif; font-size: 16pt; color: #F59E0B; margin-bottom: 8pt; }
  .contact-row { display: flex; justify-content: space-between; font-size: 10pt; margin-bottom: 4pt; font-family: 'JetBrains Mono', monospace; }
  .contact-row .label { color: #9ca3af; }
  .contact-row .val { color: white; }

  /* ===== CATEGORY SECTION ===== */
  .cat-section { padding-top: 4mm; }
  .cat-title { font-family: 'Bebas Neue', sans-serif; font-size: 22pt; color: #0A0E17; border-top: 3pt solid #F59E0B; padding-top: 8pt; margin-bottom: 8pt; display: flex; justify-content: space-between; align-items: baseline; }
  .cat-label { }
  .cat-en { font-family: 'JetBrains Mono', monospace; font-size: 10pt; color: #9ca3af; letter-spacing: 1px; }

  /* ===== PRODUCT CARD ===== */
  .prod-card { margin-bottom: 14pt; page-break-inside: avoid; break-inside: avoid; }
  .prod-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4pt; }
  .prod-model { font-family: 'JetBrains Mono', monospace; font-size: 11pt; font-weight: 500; color: #F59E0B; background: #fffbeb; padding: 2pt 6pt; border-radius: 2pt; border: 1pt solid #fde68a; }
  .prod-title { font-family: 'Inter', sans-serif; font-size: 12pt; color: #0A0E17; flex: 1; margin-left: 8pt; }
  .prod-body { display: grid; grid-template-columns: 38mm 1fr; gap: 8pt; border: 1pt solid #e5e7eb; border-radius: 3pt; overflow: hidden; }
  .prod-img { background: #f9fafb; display: flex; align-items: center; justify-content: center; height: 28mm; }
  .prod-img img { max-width: 100%; max-height: 100%; object-fit: contain; }
  .prod-right { padding: 6pt 8pt; }
  .prod-desc { font-size: 10pt; color: #374151; line-height: 1.5; margin-bottom: 4pt; }
  .seeds { font-size: 8pt; color: #6b7280; margin-bottom: 4pt; font-family: 'JetBrains Mono', monospace; }
  .seeds .sl { color: #9ca3af; text-transform: uppercase; font-size: 7pt; letter-spacing: 1px; margin-right: 4pt; }
  .specs { width: 100%; border-collapse: collapse; font-size: 9pt; margin-bottom: 4pt; }
  .specs td { padding: 2pt 4pt; border-bottom: 1pt solid #f3f4f6; }
  .specs .sn { color: #6b7280; width: 38%; }
  .specs .sv { color: #0A0E17; font-weight: 500; }
  .specs tr.alt td { background: #f9fafb; }
  .prod-link { font-size: 8pt; font-family: 'JetBrains Mono', monospace; }

  /* ===== FOOTER ===== */
  .doc-footer { position: fixed; bottom: -6mm; left: 14mm; right: 14mm; font-family: 'JetBrains Mono', monospace; font-size: 7pt; color: #9ca3af; display: flex; justify-content: space-between; }
</style>
</head>
<body>

<!-- COVER -->
<div class="cover">
  <div class="cover-top">
    <div class="cover-logo">HAONUO<span class="dot">.</span></div>
    <div class="cover-tag">PRODUCT CATALOG · 2026</div>
  </div>
  <div class="cover-sub">HYDRAULIC OIL PRESS · OIL MILL EQUIPMENT</div>
  <div class="cover-title">HYDRAULIC<br/><span class="amber">OIL PRESS</span><br/>EQUIPMENT</div>
  <p class="cover-desc">Factory-direct manufacturer of batch-mode hydraulic oil presses, seed preparation equipment, and complete oil production lines. Serving small workshops through to industrial mills across 20+ countries.</p>
  <div class="cover-stats">
    <div class="cover-stat"><div class="num">300–620</div><div class="lbl">TONNES FORCE</div></div>
    <div class="cover-stat"><div class="num">${totalProducts}</div><div class="lbl">STANDARD MODELS</div></div>
    <div class="cover-stat"><div class="num">20+</div><div class="lbl">COUNTRIES</div></div>
    <div class="cover-stat"><div class="num">2010</div><div class="lbl">ESTABLISHED</div></div>
  </div>
  <div class="cover-bottom">
    <span>Shandong Haonuo Machinery Equipment Group Co., Ltd.</span>
    <span>hydoilpress.com</span>
  </div>
</div>

<!-- INTRO -->
<div class="intro">
  <h1>About Haonuo Machinery</h1>
  <div class="intro-grid">
    <div class="intro-text">
      <p><strong>Shandong Haonuo Machinery Equipment Group Co., Ltd.</strong> is a professional hydraulic oil press manufacturer based in Shandong Province, China. Since 2010 we have designed and built batch-mode hydraulic presses, seed preparation equipment, roasting & steaming machines, and complete oil production lines for small workshops through to industrial oil mills.</p>
      <p>Our flagship <strong>HN series</strong> covers pressing forces from 300 to 620 tonnes — pressing sesame, peanut, walnut, coconut VCO, shea butter, rapeseed, flaxseed, sunflower, palm kernel, and 20+ other oilseeds. All machines are built in our own factory with <strong>Q690 high-strength steel barrels</strong>, <strong>27SiMn alloy steel cylinders</strong>, and <strong>nickel-plated food-contact surfaces</strong>.</p>
      <p>We export to markets across Southeast Asia, Africa, the Middle East, and Latin America. This catalog lists all standard production models organized by equipment category.</p>
    </div>
    <div class="intro-side">
      <h3>Product Line</h3>
      <p><strong>① Hydraulic Oil Presses</strong><br/>300 – 620 tonne presses, 12 standard models including cold-press and custom variants.</p>
      <p><strong>② Seed Processing</strong><br/>Pre-press, crushing, conveying — +3–5% total oil yield when integrated.</p>
      <p><strong>③ Roasting & Steaming</strong><br/>Electromagnetic drum roasters, electric & wood-fired steamers, thermal oil pans.</p>
      <p><strong>④ Filtration</strong><br/>Pneumatic filter press for post-press crude oil clarification.</p>
      <p class="price">Custom configurations available on request.</p>
    </div>
  </div>
  <div class="contact-block">
    <h3>Contact Us</h3>
    <div class="contact-row"><span class="label">CONTACT</span><span class="val">Eason</span></div>
    <div class="contact-row"><span class="label">WHATSAPP</span><span class="val">+86 189 5714 9128</span></div>
    <div class="contact-row"><span class="label">EMAIL</span><span class="val">info@hydoilpress.com</span></div>
    <div class="contact-row"><span class="label">WEBSITE</span><span class="val">www.hydoilpress.com</span></div>
    <div class="contact-row"><span class="label">LOCATION</span><span class="val">Shandong Province, China</span></div>
  </div>
</div>

<!-- CATEGORIES -->
${categorySections}

</body>
</html>`;

fs.writeFileSync(OUT_HTML, html, 'utf8');
console.log(`HTML written: ${OUT_HTML} (${html.length} chars, ${totalProducts} products)`);

// ===== PDF =====
const browser = await puppeteer.launch({ executablePath: CHROME, args: ['--no-sandbox','--disable-gpu'], headless: 'new' });
const page = await browser.newPage({ viewport: { width: 900, height: 1276 }, deviceScaleFactor: 1 });
// Load via file://
const abs = path.resolve(OUT_HTML);
await page.goto(`file:///${abs.replace(/\\/g,'/')}`, { waitUntil: 'load', timeout: 15000 });
await new Promise(r => setTimeout(r, 1500));
await page.pdf({ path: OUT_PDF, format: 'A4', printBackground: true, margin: { top: '14mm', right: '12mm', bottom: '14mm', left: '12mm' }, displayHeaderFooter: false, scale: 1 });
await browser.close();
const size = fs.statSync(OUT_PDF).size;
console.log(`✅ PDF: ${OUT_PDF} (${(size/1024).toFixed(1)} KB)`);
