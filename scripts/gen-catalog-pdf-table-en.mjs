// Table Catalog PDF — ENGLISH
import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import puppeteer from 'puppeteer-core';
import sharp from 'sharp';

const PRODUCTS_DIR = path.resolve('src/content/products');
const OUT_HTML = path.resolve('catalog-pdf-table-en.html');
const OUT_PDF = path.resolve('Haonuo-Hydraulic-Oil-Press-Catalog-Table.pdf');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

// ============ Config ============
const CATEGORY_ORDER = ['hydraulic-oil-press', 'seed-processing-equipment', 'roasting-steaming-equipment', 'filtration-refining-equipment'];
const CATEGORIES = {
  'hydraulic-oil-press':        { en: 'Hydraulic Oil Presses',   useTable: true },
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

const TABLE_GROUPS = [
  { name: 'Core Lineup',   models: ['HN325','HN365','HN426','HN500'] },
  { name: 'Specialist',    models: ['HN300','HN325 Sesame','300 Type Coconut','HN325 Large Tabung Press'] },
];

// Hardness labels (EN)
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

function getSpec(specs, patterns, model) {
  let got = null;
  for (const s of specs) {
    const n = (s.name || '').toLowerCase();
    for (const p of patterns) {
      if (n.includes(p.toLowerCase())) { got = cleanSpecVal(s.value); break; }
    }
    if (got) break;
  }
  if (got && /[~\d.,]+\s*\/\s*[~\d.,]+/.test(got)) got = null;
  if (got && got !== '—') return got;
  if (model && FALLBACK_SPECS[model]) {
    const f = FALLBACK_SPECS[model];
    for (const p of patterns) {
      const k = p.toLowerCase();
      if (k.includes('pressing force') || k.includes('rated pressing force')) return f.force;
      if (k.includes('system pressure') || k.includes('hydraulic system')) return f.sysP;
      if (k.includes('cake surface')) return f.cakeP;
      if (k.includes('tabung press diameter')) return f.tbD;
      if (k.includes('tabung press inner diameter')) return f.tbD;
      if (k.includes('tabung press height')) return f.tbH;
      if (k.includes('machine weight')) return f.weight;
    }
  }
  return '—';
}
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
// For hydraulic oil presses: keep only the first sentence (product positioning).
// Drops factory-direct, lead time, seed lists (duplicated in seed hardness), warranty.
function cleanHydraulicDesc(desc) {
  if (!desc) return '';
  // Split on ". " (period + space) — first sentence is the product positioning
  const first = desc.split(/\.\s/)[0];
  return first.replace(/\.$/, '') + '.';
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
    const rawDesc = fm.description?.en || '';
    const isHydraulic = fm.category === 'hydraulic-oil-press';
    return {
      slug, model, rawModel, category: fm.category, specs,
      name: fm.title?.en || fm.title || '',
      desc: isHydraulic ? cleanHydraulicDesc(rawDesc) : rawDesc,
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

// ============ Hydraulic Table ============
function hydraulicTable(products) {
  const hydraulics = products.filter(p => p.category === 'hydraulic-oil-press');
  return `
  <div class="hydraulic-section">
  <div class="table-wrap">
    ${TABLE_GROUPS.map((group, gi) => {
      const gRows = [];
      for (const model of group.models) {
        const p = hydraulics.find(x => x.model === model); if (!p) continue;
        const force = getSpec(p.specs, ['pressing force','rated pressing force'], p.model);
        const sysP  = getSpec(p.specs, ['system pressure','hydraulic system pressure'], p.model);
        const cakeP = getSpec(p.specs, ['cake surface pressure'], p.model);
        const tbD   = getSpec(p.specs, ['tabung press diameter','tabung press inner diameter','tabung press standard inner diameter'], p.model);
        const tbH   = getSpec(p.specs, ['tabung press height','tabung press standard height'], p.model);
        let w = getSpec(p.specs, ['machine weight'], p.model);
        if (/[~\d.,]+\s*\/\s*[~\d.,]+/.test(w) && FALLBACK_SPECS[p.model]) w = FALLBACK_SPECS[p.model].weight;
        if (w !== '—' && !w.startsWith('~')) w = '~' + w;
        const tabung = (tbD !== '—' && tbH !== '—') ? `<div class="tb-line"><span class="tb-k">Dia</span> ${tbD}</div><div class="tb-line"><span class="tb-k">Ht</span> ${tbH}</div>` : '—';
        const wShort = w.replace(/\s*\([^)]+\)/,'');
        gRows.push(`
          <tr class="data-row">
            <td class="td-img"><img src="${p.img}" onerror="this.src='public/images/products/default-product.webp'"/></td>
            <td class="td-overview">
              <div class="mname">${p.model}</div>
              <div class="mtitle">${p.name}</div>
              <div class="mdesc">${p.desc}</div>
              <div class="mhard">Seed hardness: <strong>${(HARDNESS[p.model]?.label || '—')}</strong> <span class="mhard-ex">(e.g. ${HARDNESS[p.model]?.examples || '—'})</span></div>
            </td>
            <td class="td-num">${force}</td>
            <td class="td-num">${sysP}</td>
            <td class="td-num">${cakeP}</td>
            <td class="td-num">${tabung}</td>
            <td class="td-num">${wShort}</td>
            <td class="td-link"><a href="${p.url}" target="_blank">View →</a></td>
          </tr>`);
      }
      // All groups on one page — no page-break between them
      const pb = '';
      return `<table class="hyd-table">
    <colgroup>
      <col style="width:32mm"/>
      <col style="width:72mm"/>
      <col style="width:15mm"/>
      <col style="width:15mm"/>
      <col style="width:14mm"/>
      <col style="width:16mm"/>
      <col style="width:14mm"/>
      <col style="width:12mm"/>
    </colgroup>
    <thead>
      <tr>
        <th colspan="8" style="text-align:left;padding:4pt 6pt;background:#FEF3C7;font-family:'Bebas Neue',sans-serif;font-size:11pt;color:#92400E;border:1pt solid #F59E0B;">${group.name}</th>
      </tr>
      <tr>
        <th>Img</th><th class="th-overview">Overview</th><th>Press</th><th>Hydraulic</th><th>Cake</th><th>Barrel</th><th>Weight</th><th>Link</th>
      </tr>
    </thead>
    <tbody>${gRows.join('\n')}</tbody>
  </table>${pb}`;
    }).join('\n')}
  </div>
  <div class="table-notes">
    <p class="notes-title">📝 Notes</p>
    <ul class="notes-list">
      <li>Standard voltage 380V/50Hz, power 2.2–3.0 kW; single/double barrel options; barrel diameter/height/cake pressure customizable.</li>
      <li>All models minimum order 1 unit, factory direct, 1-year warranty included.</li>
    </ul>
  </div>
</div>`;
}

// ============ Cards (non-hydraulic) ============
function productCardRight(p) {
  const specs = p.specs.filter(s => !/model/i.test(s.name) && !/moq/i.test(s.name)).slice(0, 6);
  const specRows = specs.map((s,i)=>`<tr class="${i%2?'alt':''}"><td class="sn">${s.name}</td><td class="sv">${s.value}</td></tr>`).join('\n');
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
  if (meta.useTable) {
    return `<section class="cat-section page-break-before"><h2 class="cat-title"><span class="cat-label">${meta.en}</span><span class="cat-en">(${items.length} models)</span></h2>${hydraulicTable(items)}<div class="page-break"></div></section>`;
  }
  const cards = items.map(productCardRight).join('\n');
  // No page-break between roasting-steaming and filtration-refining (same page)
  const skipBreakWithNext = cat === 'roasting-steaming-equipment';
  const pb = (isLast || skipBreakWithNext) ? '' : '<div class="page-break"></div>';
  return `<section class="cat-section"><h2 class="cat-title"><span class="cat-label">${meta.en}</span><span class="cat-en">(${items.length} models)</span></h2>${cards}${pb}</section>`;
}).join('\n');

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"/>
<title>Haonuo · Hydraulic Oil Press Catalog 2026 (Table Edition)</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
@page { size: A4 portrait; margin: 14mm 10mm; }
*{box-sizing:border-box;margin:0;padding:0;}
html,body{margin:0;padding:0;}
.page-break{page-break-before:always;break-before:page;}
.page-break-before{page-break-before:always;break-before:page;}
a{color:#d97706;text-decoration:underline;}

/* COVER + INTRO — together on P1, fills the page */
.cover{padding-top:12mm;position:relative;margin-bottom:0;}
.cover-top{display:flex;justify-content:space-between;margin-bottom:25pt;}
.cover-logo{font-family:'Bebas Neue',sans-serif;font-size:28pt;color:#0A0E17;}
.cover-logo .dot{color:#F59E0B;}
.cover-tag{font-family:'JetBrains Mono',monospace;font-size:9pt;color:#6b7280;}
.cover-sub{font-size:12pt;color:#6b7280;letter-spacing:3px;margin-bottom:14pt;}
.cover-title{font-family:'Bebas Neue',sans-serif;font-size:62pt;line-height:.9;color:#0A0E17;margin-bottom:6pt;}
.cover-title .amber{color:#F59E0B;}
.cover-title .sub{font-family:'Bebas Neue',sans-serif;font-size:24pt;letter-spacing:5px;margin-left:8pt;color:#4b5563;}
.cover-desc{font-family:'Inter',sans-serif;font-size:11pt;color:#4b5563;max-width:145mm;line-height:1.7;margin-bottom:0;}

.intro{padding-top:14pt;border-top:2pt solid #F59E0B;margin-top:0pt;page-break-inside:avoid;break-inside:avoid;}
.intro h1{font-family:'Bebas Neue',sans-serif;font-size:18pt;color:#0A0E17;border-bottom:2pt solid #F59E0B;padding-bottom:3pt;margin-bottom:10pt;letter-spacing:1px;}
.intro-grid{display:grid;grid-template-columns:1.4fr 1fr;gap:12pt;margin-bottom:10pt;}
.intro-text{font-family:'Inter',sans-serif;font-size:9.5pt;color:#374151;line-height:1.7;}
.intro-text p{margin-bottom:4pt;}
.intro-side{background:#f9fafb;border-left:3pt solid #F59E0B;padding:10pt 12pt;}
.intro-side h3{font-family:'Bebas Neue',sans-serif;font-size:12pt;color:#0A0E17;margin-bottom:5pt;letter-spacing:1px;}
.intro-side p{font-family:'Inter',sans-serif;font-size:8.5pt;color:#4b5563;margin-bottom:3pt;line-height:1.65;}
.contact-block{margin-top:0pt;padding:10pt 14pt;background:#0A0E17;color:white;border-radius:4pt;}
.contact-block h3{font-family:'Bebas Neue',sans-serif;font-size:14pt;color:#F59E0B;margin-bottom:5pt;letter-spacing:1px;}
.contact-row{display:flex;justify-content:space-between;font-family:'Inter',sans-serif;font-size:9pt;margin-bottom:3pt;}
.contact-row .label{color:#9ca3af;}
.contact-row .val{color:white;}

/* CATEGORY */
.cat-section{padding-top:2mm;}
.cat-title{font-family:'Bebas Neue',sans-serif;font-size:18pt;color:#0A0E17;border-top:3pt solid #F59E0B;padding-top:6pt;margin-bottom:6pt;display:flex;justify-content:space-between;align-items:baseline;}
.cat-en{font-family:'JetBrains Mono',monospace;font-size:8pt;color:#9ca3af;letter-spacing:1px;}

/* ===== TABLE HYDRAULIC (full-page per group) ===== */
.table-wrap{margin-bottom:10pt;}
.table-notes{background:#FFFBEB;border:1pt solid #FCD34D;border-radius:4pt;padding:8pt 12pt;margin-top:6pt;font-family:'Inter',sans-serif;font-size:8.5pt;color:#78350F;page-break-inside:avoid;break-inside:avoid;}
.table-notes .notes-title{font-size:9.5pt;font-weight:700;color:#B45309;margin:0 0 4pt 0;}
.table-notes .notes-list{margin:0;padding-left:14pt;}
.table-notes .notes-list li{margin:2pt 0;line-height:1.55;}
.table-notes .notes-list li strong{color:#78350F;}
.hyd-table{width:100%;border-collapse:collapse;font-size:9pt;table-layout:auto;}
.hyd-table th{background:#0A0E17;color:#F59E0B;font-family:'JetBrains Mono',monospace;font-size:8.5pt;padding:8pt 3pt;text-align:center;border:1pt solid #374151;white-space:nowrap;}
.hyd-table td{padding:9pt 3pt;border:1pt solid #e5e7eb;vertical-align:middle;}
.hyd-table th{vertical-align:middle;padding:8pt 3pt;}
.hyd-table .group-row td{background:#FEF3C7;font-family:'Bebas Neue',sans-serif;font-size:12pt;color:#92400E;border:1pt solid #F59E0B;padding:5pt 8pt;letter-spacing:1px;}
.hyd-table .data-row:nth-child(even){background:#fafafa;}
.hyd-table .td-img{background:#f9fafb;text-align:center;}
.hyd-table .td-img img{width:28mm;height:20mm;object-fit:contain;}
.hyd-table .td-overview{white-space:normal;}
.hyd-table .td-num{text-align:center;font-family:'JetBrains Mono',monospace;font-size:8.5pt;color:#374151;line-height:1.4;word-break:break-word;}
.hyd-table .td-link{white-space:nowrap;text-align:center;}
.hyd-table .td-link a{font-size:8.5pt;color:#d97706;}
.hyd-table .tb-line{font-family:'JetBrains Mono',monospace;font-size:8pt;color:#374151;line-height:1.4;margin-bottom:1pt;}
.hyd-table .tb-line:last-child{margin-bottom:0;}
.hyd-table .tb-k{color:#9ca3af;font-size:7.5pt;text-transform:uppercase;letter-spacing:.5px;display:block;}
.hyd-table .mname{font-family:'JetBrains Mono',monospace;font-weight:600;color:#F59E0B;font-size:10pt;}
.hyd-table .mtitle{font-family:'Inter',sans-serif;font-weight:700;color:#0A0E17;font-size:11pt;margin:1.5pt 0;}
.hyd-table .mdesc{font-family:'Inter',sans-serif;color:#4b5563;font-size:9pt;line-height:1.5;margin-bottom:2pt;}
.hyd-table .mhard{font-family:'Inter',sans-serif;color:#6b7280;font-size:9pt;margin-top:2pt;}
.hyd-table .mhard-ex{color:#9ca3af;font-size:8.5pt;}

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
    <div class="cover-tag">CATALOG · 2026 · TABLE EDITION</div>
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
      <p>This catalog lists all standard production models organized by equipment category. Hydraulic oil presses are compared in a specification table, other equipment is shown as product cards.</p>
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
    <div class="contact-row"><span class="label">Email</span><span class="val"><a href="mailto:info@hydoilpress.com" style="color:#F59E0B;text-decoration:underline;">info@hydoilpress.com</a></span></div>
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

<div class="contact-block" style="margin-top:20pt;">
  <h3>CONTACT</h3>
  <div class="contact-row"><span class="label">Contact</span><span class="val">Eason</span></div>
  <div class="contact-row"><span class="label">WhatsApp</span><span class="val">+86 189 5714 9128</span></div>
  <div class="contact-row"><span class="label">Email</span><span class="val"><a href="mailto:info@hydoilpress.com" style="color:#F59E0B;text-decoration:underline;">info@hydoilpress.com</a></span></div>
  <div class="contact-row"><span class="label">Web</span><span class="val"><a href="https://www.hydoilpress.com" style="color:#F59E0B;text-decoration:underline;">www.hydoilpress.com</a></span></div>
</div>

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
