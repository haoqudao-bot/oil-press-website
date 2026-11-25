// Cards Catalog PDF — ENGLISH
import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import puppeteer from 'puppeteer-core';
import sharp from 'sharp';

const PRODUCTS_DIR = path.resolve('src/content/products');
const OUT_HTML = path.resolve('catalog-pdf-cards-en.html');
const OUT_PDF = path.resolve('Haonuo-Hydraulic-Oil-Press-Catalog-Cards.pdf');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

// ============ Config ============
const CATEGORY_ORDER = ['hydraulic-oil-press', 'seed-processing-equipment', 'roasting-steaming-equipment', 'filtration-refining-equipment'];
const CATEGORIES = {
  'hydraulic-oil-press':        { en: 'Hydraulic Oil Presses',   useTable: false },
  'seed-processing-equipment':  { en: 'Seed Processing Equipment',  useTable: false },
  'roasting-steaming-equipment':{ en: 'Roasting & Steaming Equipment', useTable: false },
  'filtration-refining-equipment': { en: 'Filtration Equipment',   useTable: false },
};
const MODEL_ORDER = {
  'hydraulic-oil-press': ['HN325','HN365','HN426','HN500','HN300','HN325 Sesame','300 Type Coconut','HN325 Large Tabung Press'],
  'seed-processing-equipment': ['HN-CG60','220 Type','HN-SC','All-in-One','370 Type'],
  'roasting-steaming-equipment': ['100# / 130#','Thermal Oil Type','60 Type Wood-Fired','27KW Electric'],
  'filtration-refining-equipment': ['HN-10SL'],
};
const HIDDEN_SLUGS = new Set(['medium-hydraulic-oil-press','heavy-duty-hydraulic-oil-press','high-pressure-hydraulic-oil-press','ultra-high-pressure-cold-press','edible-oil-refining-system','stainless-steel-oil-refining-equipment']);

const HARDNESS = {
  'HN300':    { level: 1, label: 'Soft seeds',        examples: 'peanut, sesame, rapeseed' },
  'HN325':    { level: 2, label: 'Soft · medium',     examples: 'peanut, sesame, rapeseed, flaxseed, sunflower' },
  'HN365':    { level: 2, label: 'Soft · medium',     examples: 'peanut, sesame, tea seed, flaxseed' },
  'HN426':    { level: 3, label: 'Medium · hard',     examples: 'coconut VCO, walnut, flaxseed, palm kernel' },
  'HN500':    { level: 4, label: 'Hard · extra-hard', examples: 'walnut, almond, palm kernel, hickory' },
  'HN325 Sesame': { level: 2, label: 'Soft · medium', examples: 'sesame (narrow barrel concentrates pressure, highest oil yield)' },
  '300 Type Coconut': { level: 1, label: 'Soft seeds', examples: 'coconut meat, shea butter (large barrel, low pressure)' },
  'HN325 Large Tabung Press': { level: 1, label: 'Soft seeds', examples: 'coconut meat, shea butter (Ø630mm large barrel)' },
};

const MODEL_ALIAS = { 'HN325/355 Sesame': 'HN325 Sesame' };

const FALLBACK_SPECS = {
  'HN365': { force: '365 Tonnes', sysP: '60 MPa', cakeP: '30 MPa', tbD: 'Ø390 mm', tbH: '800 mm', weight: '~1.8 Tonnes' },
  'HN325 Sesame': { force: '325 Tonnes', sysP: '60 MPa', cakeP: '47 MPa', tbD: 'Ø300 mm', tbH: '800 mm', weight: '~1.4 Tonnes' },
  'HN325 Large Tabung Press': { force: '325 Tonnes', sysP: '60 MPa', cakeP: '10.64 MPa', tbD: 'Ø630 mm', tbH: '1000 mm', weight: '~2.5 Tonnes' },
};

function cleanSpecVal(val) {
  if (!val) return '—';
  let v = val;
  v = v.replace(/\s*\([^)]*\)/g, '');
  v = v.replace(/\s*standard\s*\(customizable\)/gi, '');
  v = v.replace(/\s*\(customizable\)/gi, '');
  v = v.replace(/\s+standard\b/gi, '');
  v = v.replace(/\s+optional\b/gi, '');
  if (/\d+\s*\/\s*\d+/.test(v)) {
    const parts = v.split('/').map(s => s.trim());
    const unitM = parts[1].match(/(MPa|Tonnes|mm|KW|kg|V|Hz|A|%)/i);
    const unit = unitM ? unitM[1] : '';
    v = parts[0];
    if (unit && !v.includes(unit)) v += ' ' + unit;
  }
  v = v.replace(/(\d),(\d{1,2})(?!\d)/g, '$1.$2');
  v = v.replace(/(\d+),(\d{3,})/g, '$1$2');
  v = v.replace(/\s+/g, ' ').trim();
  return v || '—';
}

// ============ Load ============
function parseFM(c) {
  if (c.charCodeAt(0) === 0xFEFF) c = c.slice(1);
  const m = c.match(/^---\r?\n([\s\S]*?)\r?\n---/); if (!m) return null;
  try { return yaml.parse(m[1]); } catch { return null; }
}
function loadAll() {
  return fs.readdirSync(PRODUCTS_DIR).filter(f=>f.endsWith('.md')).map(f=>{
    const raw = fs.readFileSync(path.join(PRODUCTS_DIR,f),'utf8');
    const fm = parseFM(raw); if (!fm) return null;
    const slug = f.replace('.md',''); if (HIDDEN_SLUGS.has(slug)) return null;
    const rawModel = fm.model || 'Custom';
    const model = MODEL_ALIAS[rawModel] || rawModel;
    let specs = fm.specifications || [];
    specs = specs.map(s => {
      if (/weight/i.test(s.name) && /[~\d.,]+\s*\/\s*[~\d.,]+/.test(s.value) && FALLBACK_SPECS[model]) {
        return {...s, value: FALLBACK_SPECS[model].weight};
      }
      return s;
    });
    return {
      slug, model, rawModel, category: fm.category, specs,
      name: fm.title?.en || fm.title || '',
      desc: fm.description?.en || '',
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
    list.sort((a,b) => {
      const ai = order.indexOf(a.model), bi = order.indexOf(b.model);
      if (ai>=0 && bi>=0) return ai-bi;
      if (ai>=0) return -1; if (bi>=0) return 1;
      return a.model.localeCompare(b.model);
    });
    out.push({ cat, items: list });
  }
  return out;
}

// ============ Cards ============
function productCardRight(p, isHydraulic = false) {
  let specs = p.specs.filter(s => !/model/i.test(s.name) && !/moq/i.test(s.name));
  specs = specs.map(s => ({ name: s.name, value: cleanSpecVal(s.value) })).filter(s => s.value && s.value !== '—');
  specs = specs.slice(0, isHydraulic ? 8 : 6);
  const specRows = specs.map((s,i)=>`<tr class="${i%2?'alt':''}"><td class="sn">${s.name}</td><td class="sv">${s.value}</td></tr>`).join('\n');
  const hardnessRow = isHydraulic && HARDNESS[p.model]
    ? `<p class="hardness-line"><strong>Seed hardness:</strong> ${HARDNESS[p.model].label} <span class="hardness-ex">(${HARDNESS[p.model].examples})</span></p>`
    : '';
  return `
  <div class="prod-card-right">
    <div class="pcr-left">
      <div class="prod-head">
        <div class="prod-head-left">
          <div class="prod-model">${p.model}</div>
          <h3 class="prod-title">${p.name}</h3>
        </div>
        <div class="prod-link"><a href="${p.url}" target="_blank">View →</a></div>
      </div>
      <p class="prod-desc">${p.desc}</p>
      ${hardnessRow}
      <table class="specs"><tbody>${specRows}</tbody></table>
    </div>
    <div class="pcr-right">
      <img src="${p.img}" onerror="this.src='public/images/products/default-product.webp'"/>
    </div>
  </div>`;
}

// ============ Image compression ============
const IMG_CACHE = new Map();
async function compressImages(products) {
  const tasks = products.map(async (p) => {
    const imgPath = path.resolve(p.img);
    if (!fs.existsSync(imgPath)) return;
    if (IMG_CACHE.has(imgPath)) { p.img = IMG_CACHE.get(imgPath); return; }
    try {
      const buf = await sharp(imgPath)
        .resize(600, null, { withoutEnlargement: true })
        .webp({ quality: 70 })
        .toBuffer();
      const dataUrl = `data:image/webp;base64,${buf.toString('base64')}`;
      IMG_CACHE.set(imgPath, dataUrl);
      p.img = dataUrl;
      console.log(`  📷 ${path.basename(imgPath)} → ${(buf.length/1024).toFixed(1)} KB`);
    } catch (e) {
      console.warn(`  ⚠️ Compression failed ${imgPath}: ${e.message}`);
    }
  });
  await Promise.all(tasks);
}

// ============ Main HTML ============
const all = loadAll();
console.log(`📦 Loaded ${all.length} products, compressing images...`);
await compressImages(all);
const ordered = orderProducts(all);
const totalProducts = ordered.reduce((s,g)=>s+g.items.length,0);

const sectionHtml = ordered.map(({cat, items}, idx) => {
  const meta = CATEGORIES[cat];
  const isLast = (idx === ordered.length - 1);
  const isHydraulic = (cat === 'hydraulic-oil-press');
  const cards = items.map(p => productCardRight(p, isHydraulic)).join('\n');
  const pbBefore = isHydraulic ? 'page-break-before' : '';
  const pbAfter = isLast ? '' : '<div class="page-break"></div>';
  return `<section class="cat-section ${pbBefore}"><h2 class="cat-title"><span class="cat-label">${meta.en}</span><span class="cat-en">(${items.length} models)</span></h2>${cards}${pbAfter}</section>`;
}).join('\n');

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"/>
<title>Haonuo · Hydraulic Oil Press Catalog 2026 (Cards Edition)</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
@page { size: A4 portrait; margin: 14mm 10mm; }
*{box-sizing:border-box;margin:0;padding:0;}
html,body{margin:0;padding:0;}
.page-break{page-break-before:always;break-before:page;}
.page-break-before{page-break-before:always;break-before:page;}
a{color:#d97706;text-decoration:underline;}

/* COVER */
.cover{padding-top:14mm;position:relative;}
.cover-top{display:flex;justify-content:space-between;margin-bottom:50pt;}
.cover-logo{font-family:'Bebas Neue',sans-serif;font-size:26pt;color:#0A0E17;}
.cover-logo .dot{color:#F59E0B;}
.cover-tag{font-family:'JetBrains Mono',monospace;font-size:9pt;color:#6b7280;}
.cover-sub{font-size:11pt;color:#6b7280;letter-spacing:2px;margin-bottom:16pt;}
.cover-title{font-family:'Bebas Neue',sans-serif;font-size:68pt;line-height:.9;color:#0A0E17;margin-bottom:8pt;}
.cover-title .amber{color:#F59E0B;}
.cover-title .sub{font-family:'Bebas Neue',sans-serif;font-size:24pt;letter-spacing:6px;margin-left:8pt;color:#4b5563;}
.cover-desc{font-family:'Inter',sans-serif;font-size:12pt;color:#4b5563;max-width:145mm;line-height:1.75;margin-bottom:30pt;}

/* INTRO */
.intro{padding-top:16pt;border-top:2pt solid #F59E0B;margin-top:0pt;page-break-inside:avoid;break-inside:avoid;}
.intro h1{font-family:'Bebas Neue',sans-serif;font-size:18pt;color:#0A0E17;border-bottom:2pt solid #F59E0B;padding-bottom:4pt;margin-bottom:10pt;letter-spacing:1px;}
.intro-grid{display:grid;grid-template-columns:1.4fr 1fr;gap:14pt;margin-bottom:12pt;}
.intro-text{font-family:'Inter',sans-serif;font-size:9.5pt;color:#374151;line-height:1.7;}
.intro-text p{margin-bottom:5pt;}
.intro-side{background:#f9fafb;border-left:3pt solid #F59E0B;padding:12pt;}
.intro-side h3{font-family:'Bebas Neue',sans-serif;font-size:12pt;color:#0A0E17;margin-bottom:5pt;letter-spacing:1px;}
.intro-side p{font-family:'Inter',sans-serif;font-size:8.5pt;color:#4b5563;margin-bottom:4pt;line-height:1.7;}
.contact-block{margin-top:0pt;padding:12pt 14pt;background:#0A0E17;color:white;border-radius:4pt;}
.contact-block h3{font-family:'Bebas Neue',sans-serif;font-size:14pt;color:#F59E0B;margin-bottom:6pt;letter-spacing:1px;}
.contact-row{display:flex;justify-content:space-between;font-family:'Inter',sans-serif;font-size:9pt;margin-bottom:3pt;}
.contact-row .label{color:#9ca3af;}
.contact-row .val{color:white;}

/* CATEGORY */
.cat-section{padding-top:2mm;}
.cat-title{font-family:'Bebas Neue',sans-serif;font-size:18pt;color:#0A0E17;border-top:3pt solid #F59E0B;padding-top:6pt;margin-bottom:6pt;display:flex;justify-content:space-between;align-items:baseline;}
.cat-en{font-family:'JetBrains Mono',monospace;font-size:8pt;color:#9ca3af;letter-spacing:1px;}

/* ===== CARD RIGHT ===== */
.prod-card-right{display:grid;grid-template-columns:1fr 42mm;gap:8pt;margin-bottom:10pt;border:1pt solid #e5e7eb;border-radius:3pt;overflow:hidden;background:white;page-break-inside:avoid;break-inside:avoid;}
.pcr-left{padding:6pt 8pt;}
.pcr-right{background:#f9fafb;display:flex;align-items:center;justify-content:center;padding:3pt;overflow:hidden;}
.pcr-right img{max-width:100%;max-height:42mm;object-fit:cover;object-position:center;}
.prod-head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:3pt;}
.prod-head-left{display:flex;align-items:baseline;}
.prod-model{font-family:'JetBrains Mono',monospace;font-size:9pt;font-weight:500;color:#F59E0B;background:#fffbeb;padding:1pt 5pt;border-radius:2pt;border:1pt solid #fde68a;margin-right:6pt;}
.prod-title{font-family:'Inter',sans-serif;font-size:11pt;color:#0A0E17;font-weight:700;}
.prod-link{font-family:'JetBrains Mono',monospace;font-size:8pt;white-space:nowrap;}
.prod-link a{color:#d97706;text-decoration:underline;}
.prod-desc{font-family:'Inter',sans-serif;font-size:9.5pt;color:#374151;line-height:1.6;margin-bottom:3pt;}
.hardness-line{font-family:'Inter',sans-serif;font-size:8pt;color:#6b7280;margin-bottom:3pt;background:#f9fafb;padding:2pt 4pt;border-radius:2pt;}
.hardness-ex{color:#9ca3af;font-size:7.5pt;}
.specs{width:100%;border-collapse:collapse;font-family:'Inter',sans-serif;font-size:8pt;margin-bottom:3pt;}
.specs td{padding:1pt 4pt;border-bottom:1pt solid #f3f4f6;}
.specs .sn{color:#6b7280;width:42%;}
.specs .sv{color:#0A0E17;font-weight:500;}
.specs tr.alt td{background:#f9fafb;}

/* ===== ORDER STEPS ===== */
.faq-section{page-break-inside:avoid;break-inside:avoid;}
.faq-title{font-family:'Bebas Neue',sans-serif;font-size:18pt;color:#0A0E17;border-top:3pt solid #F59E0B;padding-top:6pt;margin-bottom:8pt;letter-spacing:1px;}
.faq-title .cat-label{font-family:'Bebas Neue',sans-serif;font-size:14pt;font-weight:700;letter-spacing:2px;}
.order-steps{list-style:none;padding-left:0;}
.order-steps li{position:relative;padding:3pt 0;font-family:'Inter',sans-serif;font-size:10pt;color:#374151;line-height:1.7;border-bottom:1pt dashed #e5e7eb;}
.order-steps li:last-child{border-bottom:none;}
.order-steps li::before{display:none;}
.order-steps strong{color:#0A0E17;font-weight:600;}
.service-list{list-style:none;padding-left:0;}
.service-list li{position:relative;padding:4pt 0 4pt 18pt;font-family:'Inter',sans-serif;font-size:10pt;color:#374151;line-height:1.7;border-bottom:1pt dashed #e5e7eb;}
.service-list li:last-child{border-bottom:none;}
.service-list li::before{content:'●';position:absolute;left:0;color:#F59E0B;font-size:10pt;}
.service-list strong{color:#0A0E17;font-weight:600;}
</style></head>
<body>

<div class="cover">
  <div class="cover-top">
    <div class="cover-logo">HAONUO<span class="dot">.</span></div>
    <div class="cover-tag">CATALOG · 2026 · CARDS EDITION</div>
  </div>
  <div class="cover-sub">HYDRAULIC OIL PRESS · COMPLETE OIL PROCESSING LINES</div>
  <div class="cover-title">HYDRAULIC<br/><span class="amber">OIL PRESS</span><br/><span class="sub">PRODUCT CATALOG</span></div>
  <p class="cover-desc">Shandong Haonuo Machinery Equipment Group Co., Ltd. — Professional manufacturer of hydraulic oil press equipment since 2010.</p>
</div>

<div class="intro">
  <h1>ABOUT HAONUO</h1>
  <div class="intro-grid">
    <div class="intro-text">
      <p><strong>Shandong Haonuo Machinery Equipment Group Co., Ltd.</strong>, based in Shandong, is a specialized manufacturer of hydraulic oil processing equipment. Since 2010 we have supplied <strong>batch hydraulic oil presses</strong>, <strong>seed pre-treatment equipment</strong>, <strong>roasting and steaming equipment</strong>, and <strong>complete seed-to-crude-oil production lines</strong> to oil mills across Asia, Africa and Latin America.</p>
      <p>Our <strong>HN Series</strong> covers 300 to 620 tonnes of pressing force — suitable for sesame, peanut, walnut, coconut VCO, shea butter, rapeseed, flaxseed, sunflower, palm kernel and 20+ other oilseeds. All machines are manufactured in our own factory using <strong>Q690 high-strength steel barrels</strong>, <strong>27SiMn alloy steel hydraulic cylinders</strong> and <strong>nickel-plated food-contact surfaces</strong>.</p>
      <p>This catalog lists all standard production models organized by equipment category. Every model is shown as a product card with key specifications.</p>
    </div>
    <div class="intro-side">
      <h3>PRODUCT LINES</h3>
      <p><strong>① Hydraulic Oil Presses (8 models)</strong><br/>300–620 tonnes. Core lineup + specialist custom models.</p>
      <p><strong>② Seed Processing (5 models)</strong><br/>Pre-pressing, crushing, conveying. +3–5% yield.</p>
      <p><strong>③ Roasting & Steaming (4 models)</strong><br/>Induction drum, electric steamer, wood-fired, thermal oil.</p>
      <p><strong>④ Filtration (1 model)</strong><br/>Pneumatic filter press for crude oil clarification.</p>
    </div>
  </div>
  <div class="contact-block">
    <h3>CONTACT</h3>
    <div class="contact-row"><span class="label">Contact</span><span class="val">Eason</span></div>
    <div class="contact-row"><span class="label">WhatsApp</span><span class="val">+86 189 5714 9128</span></div>
    <div class="contact-row"><span class="label">Email</span><span class="val"><a href="mailto:sales@hydoilpress.com" style="color:#F59E0B;text-decoration:underline;">sales@hydoilpress.com</a></span></div>
    <div class="contact-row"><span class="label">Web</span><span class="val"><a href="https://www.hydoilpress.com" style="color:#F59E0B;text-decoration:underline;">www.hydoilpress.com</a></span></div>
  </div>
</div>

${sectionHtml}

<section class="faq-section">
  <h2 class="faq-title"><span class="cat-label">HOW TO ORDER</span></h2>
  <ul class="order-steps">
    <li>🟠 Tell us your oilseed type and daily processing capacity (kg/day).</li>
    <li>🟠 We recommend suitable model and configuration (single / double barrel, standard / custom barrel).</li>
    <li>🟠 Send Proforma Invoice (PI) with specs, price and freight quote.</li>
    <li>🟠 30% deposit to start production, 70% paid before shipment.</li>
    <li>🟠 Lead time: standard models 15–25 working days, custom / large orders 30–45 working days. Shipment from Qingdao Port.</li>
  </ul>
</section>

<section class="faq-section" style="margin-top:12pt;">
  <h2 class="faq-title"><span class="cat-label">AFTER-SALES</span></h2>
  <ul class="service-list">
    <li><strong>1-year warranty</strong> (manufacturing defects)</li>
    <li><strong>Lifetime WhatsApp / email technical support</strong></li>
    <li><strong>Spare parts in stock</strong> — seals, springs, filters, hydraulic oil</li>
    <li><strong>Installation guidance</strong> — English manual + video call + engineer</li>
  </ul>
</section>

</body></html>`;

fs.writeFileSync(OUT_HTML, html, 'utf8');
console.log(`✅ HTML: ${OUT_HTML} (${html.length} chars)`);

const browser = await puppeteer.launch({ executablePath: CHROME, args: ['--no-sandbox','--disable-gpu'], headless: 'new' });
const page = await browser.newPage({ viewport: { width: 1000, height: 1414 }, deviceScaleFactor: 1 });
const abs = path.resolve(OUT_HTML);
await page.goto(`file:///${abs.replace(/\\/g,'/')}`, { waitUntil: 'load', timeout: 15000 });
await new Promise(r => setTimeout(r, 1500));
await page.pdf({ path: OUT_PDF, format: 'A4', printBackground: true, margin: { top: '14mm', right: '10mm', bottom: '14mm', left: '10mm' }, displayHeaderFooter: false, scale: 0.9 });
await browser.close();
const size = fs.statSync(OUT_PDF).size;
console.log(`✅ PDF: ${OUT_PDF} (${(size/1024).toFixed(1)} KB)`);
