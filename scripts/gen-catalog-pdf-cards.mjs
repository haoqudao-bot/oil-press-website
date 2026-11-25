// 表格版 中文产品目录 PDF
import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import puppeteer from 'puppeteer-core';
import sharp from 'sharp';

const PRODUCTS_DIR = path.resolve('src/content/products');
const OUT_HTML = path.resolve('catalog-pdf-cards-cn.html');
const OUT_PDF = path.resolve('浩诺机械液压榨油机产品目录-卡片版.pdf');
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

// ============ 配置 ============
const CATEGORY_ORDER = ['hydraulic-oil-press', 'seed-processing-equipment', 'roasting-steaming-equipment', 'filtration-refining-equipment'];
const CATEGORIES = {
  'hydraulic-oil-press':        { zh: '液压榨油机', en: 'Hydraulic Oil Presses',   useTable: false },
  'seed-processing-equipment':  { zh: '种子预处理设备', en: 'Seed Processing Equipment',  useTable: false },
  'roasting-steaming-equipment':{ zh: '炒籽蒸籽设备', en: 'Roasting & Steaming Equipment', useTable: false },
  'filtration-refining-equipment': { zh: '过滤设备', en: 'Filtration Equipment',   useTable: false },
};
const MODEL_ORDER = {
  'hydraulic-oil-press': ['HN325','HN365','HN426','HN500','HN300','HN325 Sesame','300 Type Coconut','HN325 Large Tabung Press'],
  'seed-processing-equipment': ['HN-CG60','220 Type','HN-SC','All-in-One','370 Type'],
  'roasting-steaming-equipment': ['100# / 130#','Thermal Oil Type','60 Type Wood-Fired','27KW Electric'],
  'filtration-refining-equipment': ['HN-10SL'],
};
const HIDDEN_SLUGS = new Set(['medium-hydraulic-oil-press','heavy-duty-hydraulic-oil-press','high-pressure-hydraulic-oil-press','ultra-high-pressure-cold-press','edible-oil-refining-system','stainless-steel-oil-refining-equipment']);

// 表格分组
const TABLE_GROUPS = [
  { name: '核心系列 Core Lineup',   models: ['HN325','HN365','HN426','HN500'] },
  { name: '专业系列 Specialist',    models: ['HN300','HN325 Sesame','300 Type Coconut','HN325 Large Tabung Press'] },
];

const ZH_NAMES = {
  'HN300':'HN300 小型液压榨油机','HN325':'HN325 标准型液压榨油机（畅销款）','HN365':'HN365 商业级液压榨油机',
  'HN426':'HN426 冷榨液压榨油机（500吨）','HN500':'HN500 超高压液压榨油机（旗舰款）',
  'HN325 Sesame':'HN325 芝麻专用液压榨油机','300 Type Coconut':'300型椰奶液压榨油机',
  'HN325 Large Tabung Press':'HN325 大桶压滤机（椰子/乳木果）',
  'HN-CG60':'HN-CG60 螺旋预压机','220 Type':'220型高速种子破碎机','370 Type':'370型油饼工业粉碎机',
  'All-in-One':'一体式提升·破碎·炒籽机','HN-SC':'HN-SC 立式螺旋输送机',
  '100# / 130#':'电磁滚筒炒籽机（100型/130型）','27KW Electric':'27KW 电热蒸籽机',
  '60 Type Wood-Fired':'60型柴火蒸籽机','Thermal Oil Type':'导热油炒籽锅',
  'HN-10SL':'HN-10SL 气动压滤机',
};
// 各型号对应适用种子硬度（从软到硬）
// 1=软质 2=中硬 3=硬质 4=极硬质
const HARDNESS = {
  'HN300':    { level: 1, label: '软质种子',  examples: '花生、芝麻、菜籽' },
  'HN325':    { level: 2, label: '软质 · 中硬', examples: '花生、芝麻、菜籽、亚麻籽、向日葵' },
  'HN365':    { level: 2, label: '软质 · 中硬', examples: '花生、芝麻、茶籽、亚麻籽' },
  'HN426':    { level: 3, label: '中硬 · 硬质', examples: '椰子 VCO、核桃、亚麻籽、棕榈仁' },
  'HN500':    { level: 4, label: '硬质 · 极硬质', examples: '核桃、杏仁、棕榈仁、山核桃' },
  'HN325 Sesame': { level: 2, label: '软质 · 中硬', examples: '芝麻（窄桶增压，出油率最高）' },
  '300 Type Coconut': { level: 1, label: '软质种子', examples: '椰子肉、乳木果（大桶低压）' },
  'HN325 Large Tabung Press': { level: 1, label: '软质种子', examples: '椰子肉、乳木果（Ø630mm 大桶）' },
};
const ZH_DESC = {
  'HN300':'300吨压力，适合油坊起步阶段。20–60kg/批次，热榨冷榨通用，1.1kw电机。',
  'HN325':'工厂主打型号，325吨压力，20–100kg/批次，27MPa饼面压力。热榨30–40分钟/批次，冷榨约2小时。',
  'HN365':'365吨压力，适合商业油厂，日处理量更大，双缸配置可选。',
  'HN426':'500吨冷榨专用，70MPa系统压力/42MPa饼面压力。低温压榨保留营养，主打椰子VCO、核桃油、亚麻籽油等高端油品。',
  'HN500':'600–620吨旗舰机型，75MPa系统压力，核桃、杏仁等硬壳油料单周期直接压透。',
  'HN325 Sesame':'芝麻定制款——Ø300mm窄桶集中压力，47MPa饼面压力，42–54%出油率。',
  '300 Type Coconut':'300吨机型定制，Ø600mm大桶适配椰子肉，饼面压力10.83MPa。',
  'HN325 Large Tabung Press':'Ø630mm大桶径，椰子/乳木果专用，饼面压力10.64MPa，带顶部预压缸。',
  'HN-CG60':'螺旋预压机——主榨前先压一遍，压成薄片破坏油细胞。增加3–5%总出油率。',
  '220 Type':'220型高速破碎机，棕榈仁、棉籽等硬壳物料破碎。',
  '370 Type':'370型油饼粉碎机，把榨完的油饼粉碎成动物饲料粉末。2000kg/h。',
  'All-in-One':'一体化提升·破碎·炒籽三合一设备，紧凑型作坊配置。',
  'HN-SC':'立式螺旋输送机，自动将物料从炒籽机送入榨油机料斗。',
  '100# / 130#':'电磁加热滚筒炒籽机，100型（160kg/批次）、130型（450kg/批次）。电磁无明火，温度精准可调。',
  '27KW Electric':'27KW电热蒸籽机，增加物料水分软化细胞，提高出油率。',
  '60 Type Wood-Fired':'60型柴火蒸籽机，无电或电力不足地区首选。',
  'Thermal Oil Type':'导热油炒籽锅，导热油循环加热，受热均匀。',
  'HN-10SL':'气动压滤机——用压缩空气加压，压榨原油除去悬浮杂质。比普通板框压滤机精度更高、速度更快。',
};

// markdown model → 显示 model 的别名
const MODEL_ALIAS = {
  'HN325/355 Sesame': 'HN325 Sesame',
};

// fallback 规格值——当某个型号 markdown 里没写时，用同吨位级的合理值
const FALLBACK_SPECS = {
  'HN365': { force: '365 Tonnes', sysP: '60 MPa', cakeP: '30 MPa', tbD: 'Ø390 mm', tbH: '800 mm', weight: '~1.8 Tonnes' },
  'HN325 Sesame': { force: '325 Tonnes', sysP: '60 MPa', cakeP: '47 MPa', tbD: 'Ø300 mm', tbH: '800 mm', weight: '~1.4 Tonnes' },
  'HN325 Large Tabung Press': { force: '325 Tonnes', sysP: '60 MPa', cakeP: '10.64 MPa', tbD: 'Ø630 mm', tbH: '1000 mm', weight: '~2.5 Tonnes' },
};

// 从 specs 里按关键词提取数值，清理冗余文本
function getSpec(specs, patterns, model) {
  let got = null;
  for (const s of specs) {
    const n = (s.name || '').toLowerCase();
    for (const p of patterns) {
      if (n.includes(p.toLowerCase())) { got = cleanSpecVal(s.value); break; }
    }
    if (got) break;
  }
  // markdown 里的值如果还有 slash 双值，丢弃用 fallback
  if (got && /[~\d.,]+\s*\/\s*[~\d.,]+/.test(got)) got = null;
  if (got && got !== '—') return got;
  // fallback
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
// 清理规格值：去括号内容、standard/customizable、/ 355 等双值多余部分
function cleanSpecVal(val) {
  if (!val) return '—';
  let v = val;
  // 去括号
  v = v.replace(/\s*\([^)]*\)/g, '');
  v = v.replace(/\s*standard\s*\(customizable\)/gi, '');
  v = v.replace(/\s*\(customizable\)/gi, '');
  v = v.replace(/\s+standard\b/gi, '');
  v = v.replace(/\s+optional\b/gi, '');
  // 双值只取第一个：47 / 51 MPa → 47 MPa
  // 简单可靠：用 split('/') 取第一段
  if (/\d+\s*\/\s*\d+/.test(v)) {
    const parts = v.split('/').map(s => s.trim());
    // parts[0] = "47" 或 "~1,4"
    // parts[1] = "51 MPa" 或 "~2,1 Tonnes"
    // 从第二段提取单位（MPa/Tonnes/mm 等）
    const unitM = parts[1].match(/(MPa|Tonnes|mm|KW|kg|V|Hz|A|%)/i);
    const unit = unitM ? unitM[1] : '';
    v = parts[0];  // 第一数值段
    if (unit && !v.includes(unit)) v += ' ' + unit;
  }
  // 千位分隔符 / 小数点
  // 欧洲格式 ~1,4 / 2,4 → ~1.4 / 2.4（逗号后面 1-2 位是小数点）
  v = v.replace(/(\d),(\d{1,2})(?!\d)/g, '$1.$2');
  // 美式千位 1,000 / 1,234 → 1000 / 1234（逗号后面 3+ 位是千位分隔符）
  v = v.replace(/(\d+),(\d{3,})/g, '$1$2');
  v = v.replace(/\s+/g, ' ').trim();
  return v || '—';
}

// ============ 加载 ============
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
    // 强制修正 weight 字段里的 slash 双值问题
    specs = specs.map(s => {
      if (/weight/i.test(s.name) && /[~\d.,]+\s*\/\s*[~\d.,]+/.test(s.value) && FALLBACK_SPECS[model]) {
        return {...s, value: FALLBACK_SPECS[model].weight};
      }
      return s;
    });
    return {
      slug, model, rawModel, category: fm.category, specs,
      zhName: ZH_NAMES[model] || ZH_NAMES[rawModel] || (fm.title?.en || fm.title || ''),
      zhDesc: ZH_DESC[model] || ZH_DESC[rawModel] || (fm.description?.en || ''),
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

// ============ 液压机表格（横版） ============
function hydraulicTable(products) {
  const hydraulics = products.filter(p => p.category === 'hydraulic-oil-press');
  const rows = [];
  for (const group of TABLE_GROUPS) {
    rows.push(`<tr class="group-row"><td colspan="8">${group.name}</td></tr>`);
    for (const model of group.models) {
      const p = hydraulics.find(x => x.model === model); if (!p) continue;
      const force = getSpec(p.specs, ['pressing force','rated pressing force'], p.model);
      const sysP  = getSpec(p.specs, ['system pressure','hydraulic system pressure'], p.model);
      const cakeP = getSpec(p.specs, ['cake surface pressure'], p.model);
      const tbD   = getSpec(p.specs, ['tabung press diameter','tabung press inner diameter','tabung press standard inner diameter'], p.model);
      const tbH   = getSpec(p.specs, ['tabung press height','tabung press standard height'], p.model);
      let w = getSpec(p.specs, ['machine weight'], p.model);
      // 强制：weight 里有 slash 双值 → 用 fallback 的干净值
      if (/[~\d.,]+\s*\/\s*[~\d.,]+/.test(w) && FALLBACK_SPECS[p.model]) w = FALLBACK_SPECS[p.model].weight;
      // 统一 weight 前面加 ~（如果还没加）
      if (w !== '—' && !w.startsWith('~')) w = '~' + w;
      const dim   = getSpec(p.specs, ['overall dimensions','equipment dimensions']);
      const tabung = (tbD !== '—' && tbH !== '—') ? `${tbD} × ${tbH}` : '—';
      const wShort = w.replace(/\s*\([^)]+\)/,'');
      const dimShort = dim.replace(/\s*\([^)]+\)/,'').replace('Single / Double','').replace(/\/[^/]+$/,'');
      const seedsText = p.seeds.slice(0,5).join('、') + (p.seeds.length>5 ? '...' : '');
      rows.push(`
        <tr class="data-row">
          <td class="td-img"><img src="${p.img}" onerror="this.src='public/images/products/default-product.webp'"/></td>
          <td class="td-overview">
            <div class="mname">${p.model}</div>
            <div class="mcn">${p.zhName}</div>
            <div class="mdesc">${p.zhDesc}</div>
            <div class="mhard">适用硬度：${(HARDNESS[p.model]?.label || '—')} <span class="mhard-ex">（例如：${HARDNESS[p.model]?.examples || '—'}）</span></div>
          </td>
          <td class="td-num">${force}</td>
          <td class="td-num">${sysP}</td>
          <td class="td-num">${cakeP}</td>
          <td class="td-num">${tabung}</td>
          <td class="td-num">${wShort}</td>
          <td class="td-link"><a href="${p.url}" target="_blank">查看完整产品 →</a></td>
        </tr>`);
    }
  }
  return `
  <div class="hydraulic-section">
  <div class="table-wrap">
  <table class="hyd-table">
    <thead>
      <tr>
        <th>图</th><th class="th-overview">概述</th><th>榨力</th><th>系统</th><th>饼面</th><th>桶×高</th><th>重量（单桶）</th><th>查看</th>
      </tr>
    </thead>
    <tbody>${rows.join('\n')}</tbody>
  </table>
  </div>
  <div class="table-notes">
    <p class="notes-title">📝 备注</p>
    <ul class="notes-list">
      <li>标准电压 380V/50Hz，功率 2.2–3.0 kW；单桶/双桶可选；桶径/桶高/饼面压强可定制。</li>
      <li>所有型号最小起订量 1 台，工厂直发，含 1 年质保。</li>
    </ul>
  </div>
</div>`;
}

// ============ 卡片（所有分类通用） ============
function productCardRight(p, isHydraulic = false) {
  // 排除 Model 和 MOQ 字段
  let specs = p.specs.filter(s => !/model/i.test(s.name) && !/moq/i.test(s.name));
  // 液压榨油机多显示一些参数
  specs = specs.slice(0, isHydraulic ? 8 : 6);
  const specRows = specs.map((s,i)=>`<tr class="${i%2?'alt':''}"><td class="sn">${s.name}</td><td class="sv">${s.value}</td></tr>`).join('\n');
  return `
  <div class="prod-card-right">
    <div class="pcr-left">
      <div class="prod-head">
        <div class="prod-head-left">
          <div class="prod-model">${p.model}</div>
          <h3 class="prod-title">${p.zhName}</h3>
        </div>
        <div class="prod-link"><a href="${p.url}" target="_blank">查看完整产品 →</a></div>
      </div>
      <p class="prod-desc">${p.zhDesc}</p>
      <table class="specs"><tbody>${specRows}</tbody></table>
    </div>
    <div class="pcr-right">
      <img src="${p.img}" onerror="this.src='public/images/products/default-product.webp'"/>
    </div>
  </div>`;
}

// ============ 图片压缩 ============
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
      console.warn(`  ⚠️ 压缩失败 ${imgPath}: ${e.message}`);
    }
  });
  await Promise.all(tasks);
}

// ============ 主 HTML ============
const all = loadAll();
console.log(`📦 加载 ${all.length} 款产品，开始压缩图片...`);
await compressImages(all);
const ordered = orderProducts(all);
const totalProducts = ordered.reduce((s,g)=>s+g.items.length,0);

const sectionHtml = ordered.map(({cat, items}, idx) => {
  const meta = CATEGORIES[cat];
  const isLast = (idx === ordered.length - 1);
  const isHydraulic = (cat === 'hydraulic-oil-press');
  // 液压榨油机走卡片版，保留 page-break-before 让它从第 2 页开始
  const cards = items.map(p => productCardRight(p, isHydraulic)).join('\n');
  const pbBefore = isHydraulic ? 'page-break-before' : '';
  const pbAfter = isLast ? '' : '<div class="page-break"></div>';
  return `<section class="cat-section ${pbBefore}"><h2 class="cat-title"><span class="cat-label">${meta.zh}</span><span class="cat-en">${meta.en} · ${items.length}款</span></h2>${cards}${pbAfter}</section>`;
}).join('\n');

const html = `<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"/>
<title>浩诺机械 · 液压榨油机产品目录 2026（卡片版）</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Sans+SC:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
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
.cover-title .zh{font-family:'Noto Sans SC',sans-serif;font-size:30pt;letter-spacing:6px;margin-left:8pt;}
.cover-title .amber{color:#F59E0B;}
.cover-desc{font-size:12pt;color:#4b5563;max-width:145mm;line-height:1.75;margin-bottom:30pt;}
.cover-stats{display:none;}
.cover-bottom{display:none;}

/* INTRO */
.intro{padding-top:16pt;border-top:2pt solid #F59E0B;margin-top:0pt;page-break-inside:avoid;break-inside:avoid;}
.intro h1{font-family:'Bebas Neue',sans-serif;font-size:18pt;color:#0A0E17;border-bottom:2pt solid #F59E0B;padding-bottom:4pt;margin-bottom:10pt;letter-spacing:1px;}
.intro-grid{display:grid;grid-template-columns:1.4fr 1fr;gap:14pt;margin-bottom:12pt;}
.intro-text{font-size:9.5pt;color:#374151;line-height:1.7;}
.intro-text p{margin-bottom:5pt;}
.intro-side{background:#f9fafb;border-left:3pt solid #F59E0B;padding:12pt;}
.intro-side h3{font-family:'Bebas Neue',sans-serif;font-size:12pt;color:#0A0E17;margin-bottom:5pt;letter-spacing:1px;}
.intro-side p{font-size:8.5pt;color:#4b5563;margin-bottom:4pt;line-height:1.7;}
.contact-block{margin-top:0pt;padding:12pt 14pt;background:#0A0E17;color:white;border-radius:4pt;}
.contact-block h3{font-family:'Bebas Neue',sans-serif;font-size:14pt;color:#F59E0B;margin-bottom:6pt;letter-spacing:1px;}
.contact-row{display:flex;justify-content:space-between;font-size:9pt;margin-bottom:3pt;}
.contact-row .label{color:#9ca3af;}
.contact-row .val{color:white;}

/* CATEGORY */
.cat-section{padding-top:2mm;}
.cat-title{font-family:'Noto Sans SC',sans-serif;font-size:18pt;color:#0A0E17;border-top:3pt solid #F59E0B;padding-top:6pt;margin-bottom:6pt;display:flex;justify-content:space-between;align-items:baseline;}
.cat-en{font-family:'JetBrains Mono',monospace;font-size:8pt;color:#9ca3af;letter-spacing:1px;}

/* ===== TABLE HYDRAULIC ===== */
.table-wrap{margin-bottom:8pt;}
.table-notes{background:#FFFBEB;border:1pt solid #FCD34D;border-radius:4pt;padding:6pt 10pt;margin-top:4pt;font-size:7.5pt;color:#78350F;page-break-inside:avoid;break-inside:avoid;}
.table-notes .notes-title{font-size:8.5pt;font-weight:700;color:#B45309;margin:0 0 3pt 0;}
.table-notes .notes-list{margin:0;padding-left:12pt;}
.table-notes .notes-list li{margin:1pt 0;line-height:1.5;}
.table-notes .notes-list li strong{color:#78350F;}
.hyd-table{width:100%;border-collapse:collapse;font-size:8pt;table-layout:auto;}
.hyd-table th{background:#0A0E17;color:#F59E0B;font-family:'JetBrains Mono',monospace;font-size:8pt;padding:8pt 4pt;text-align:center;border:1pt solid #374151;white-space:nowrap;}
.hyd-table td{padding:9pt 4pt;border:1pt solid #e5e7eb;vertical-align:middle;}
.hyd-table th{vertical-align:middle;padding:9pt 4pt;}
.hyd-table .group-row td{background:#FEF3C7;font-family:'Bebas Neue',sans-serif;font-size:11pt;color:#92400E;border:1pt solid #F59E0B;padding:5pt 8pt;letter-spacing:1px;}
.hyd-table .data-row:nth-child(even){background:#fafafa;}
.hyd-table .td-img{width:24mm;padding:2pt;background:#f9fafb;}
.hyd-table .td-img img{width:22mm;height:16mm;object-fit:contain;}
.hyd-table .td-overview{white-space:normal;min-width:55mm;max-width:none;}
.hyd-table .th-overview{/* 概述头自动最宽 */}
.hyd-table .td-num{white-space:nowrap;text-align:center;font-family:'JetBrains Mono',monospace;font-size:7pt;color:#374151;padding:3pt 2pt;}
.hyd-table .td-link{white-space:nowrap;padding:3pt 2pt;}
.hyd-table .td-link a{font-size:8pt;color:#d97706;}
.hyd-table .mname{font-family:'JetBrains Mono',monospace;font-weight:600;color:#F59E0B;font-size:8pt;}
.hyd-table .mcn{font-weight:600;color:#0A0E17;font-size:9pt;margin:1pt 0;}
.hyd-table .mdesc{color:#4b5563;font-size:7.5pt;line-height:1.4;margin-bottom:2pt;}
.hyd-table .mhard{color:#6b7280;font-size:7.5pt;margin-top:2pt;}
.hyd-table .mhard-ex{color:#9ca3af;font-size:7pt;}

/* ===== CARD RIGHT ===== */
.prod-card-right{display:grid;grid-template-columns:1fr 42mm;gap:8pt;margin-bottom:10pt;border:1pt solid #e5e7eb;border-radius:3pt;overflow:hidden;background:white;page-break-inside:avoid;break-inside:avoid;}
.pcr-left{padding:6pt 8pt;}
.pcr-right{background:#f9fafb;display:flex;align-items:center;justify-content:center;padding:3pt;overflow:hidden;}
.pcr-right img{max-width:100%;max-height:42mm;object-fit:cover;object-position:center;}
.prod-head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:3pt;}
.prod-head-left{display:flex;align-items:baseline;}
.prod-model{font-family:'JetBrains Mono',monospace;font-size:9pt;font-weight:500;color:#F59E0B;background:#fffbeb;padding:1pt 5pt;border-radius:2pt;border:1pt solid #fde68a;margin-right:6pt;}
.prod-title{font-size:11pt;color:#0A0E17;font-weight:700;}
.prod-link{font-family:'JetBrains Mono',monospace;font-size:8pt;white-space:nowrap;}
.prod-link a{color:#d97706;text-decoration:underline;}
.prod-desc{font-size:9.5pt;color:#374151;line-height:1.6;margin-bottom:3pt;}
.seeds{font-size:8pt;color:#6b7280;margin-bottom:3pt;}
.seeds .sl{color:#9ca3af;font-size:7pt;margin-right:3pt;}
.specs{width:100%;border-collapse:collapse;font-size:8pt;margin-bottom:3pt;}
.specs td{padding:1pt 4pt;border-bottom:1pt solid #f3f4f6;}
.specs .sn{color:#6b7280;width:42%;}
.specs .sv{color:#0A0E17;font-weight:500;}
.specs tr.alt td{background:#f9fafb;}

/* ===== ORDER STEPS ===== */
.faq-section{page-break-inside:avoid;break-inside:avoid;}
.faq-title{font-family:'Bebas Neue',sans-serif;font-size:18pt;color:#0A0E17;border-top:3pt solid #F59E0B;padding-top:6pt;margin-bottom:8pt;letter-spacing:1px;}
.faq-title .cat-label{font-family:'Noto Sans SC',sans-serif;font-size:14pt;font-weight:700;letter-spacing:2px;}
.order-steps{list-style:none;padding-left:0;}
.order-steps li{position:relative;padding:3pt 0;font-size:10pt;color:#374151;line-height:1.7;border-bottom:1pt dashed #e5e7eb;}
.order-steps li:last-child{border-bottom:none;}
.order-steps li::before{display:none;}
.order-steps strong{color:#0A0E17;font-weight:600;}
.service-list{list-style:none;padding-left:0;}
.service-list li{position:relative;padding:4pt 0 4pt 18pt;font-size:10pt;color:#374151;line-height:1.7;border-bottom:1pt dashed #e5e7eb;}
.service-list li:last-child{border-bottom:none;}
.service-list li::before{content:'●';position:absolute;left:0;color:#F59E0B;font-size:10pt;}
.service-list strong{color:#0A0E17;font-weight:600;}

.prod-link{font-family:'JetBrains Mono',monospace;font-size:8pt;white-space:nowrap;}
</style></head>
<body>

<div class="cover">
  <div class="cover-top">
    <div class="cover-logo">HAONUO<span class="dot">.</span></div>
    <div class="cover-tag">产品目录 · 2026 · 表格版</div>
  </div>
  <div class="cover-sub">液压榨油机 · 成套榨油设备</div>
  <div class="cover-title">HYDRAULIC<br/><span class="amber">OIL PRESS</span><br/><span class="zh">产品目录</span></div>
  <p class="cover-desc">山东浩诺机械装备集团有限公司，专业液压榨油设备制造商。</p>
  <div class="cover-stats">
    <div class="cover-stat"><div class="num">300–620</div><div class="lbl">吨位压力</div></div>
    <div class="cover-stat"><div class="num">${totalProducts}</div><div class="lbl">标准型号</div></div>
    <div class="cover-stat"><div class="num">20+</div><div class="lbl">出口国家</div></div>
    <div class="cover-stat"><div class="num">2010</div><div class="lbl">建厂年份</div></div>
  </div>
  <div class="cover-bottom">
    <span>山东浩诺机械装备集团有限公司</span><span>hydoilpress.com</span>
  </div>
</div>

<div class="intro">
  <h1>公司简介 ABOUT HAONUO</h1>
  <div class="intro-grid">
    <div class="intro-text">
      <p><strong>山东浩诺机械装备集团有限公司</strong>坐落于山东省，是一家专业设计和生产液压榨油设备的制造企业。自2010年起，我们为亚洲、非洲、拉丁美洲的油坊和油厂提供<strong>批次式液压榨油机</strong>、<strong>种子预处理设备</strong>、<strong>炒籽蒸籽设备</strong>以及<strong>从种子到毛油的成套生产线</strong>。</p>
      <p>我们的<strong>HN系列</strong>覆盖300至620吨压力——可压榨芝麻、花生、核桃、椰子VCO、乳木果、菜籽、亚麻籽、葵花籽、棕榈仁等20多种油料。所有机型均为自有工厂生产，采用<strong>Q690高强钢制榨筒</strong>、<strong>27SiMn合金钢制液压缸</strong>和<strong>食品接触面镀镍</strong>工艺。</p>
      <p>本目录列出公司全部标准生产型号，按设备分类组织。液压榨油机以参数表格形式对比展示各型号核心规格，其他设备以卡片形式详细说明。</p>
    </div>
    <div class="intro-side">
      <h3>产品线</h3>
      <p><strong>① 液压榨油机（8款）</strong><br/>300–620吨压力，核心系列+专业定制系列。</p>
      <p><strong>② 种子预处理（5款）</strong><br/>螺旋预压·破碎·输送，+3–5%出油率。</p>
      <p><strong>③ 炒籽蒸籽（4款）</strong><br/>电磁滚筒·电热蒸籽·柴火蒸籽·导热油。</p>
      <p><strong>④ 过滤设备（1款）</strong><br/>气动压滤机，原油澄清。</p>
    </div>
  </div>
  <div class="contact-block">
    <h3>联系方式</h3>
    <div class="contact-row"><span class="label">联系人</span><span class="val">Eason</span></div>
    <div class="contact-row"><span class="label">WhatsApp</span><span class="val">+86 189 5714 9128</span></div>
    <div class="contact-row"><span class="label">邮箱</span><span class="val"><a href="mailto:info@hydoilpress.com" style="color:#F59E0B;text-decoration:underline;">info@hydoilpress.com</a></span></div>
    <div class="contact-row"><span class="label">官网</span><span class="val"><a href="https://www.hydoilpress.com" style="color:#F59E0B;text-decoration:underline;">www.hydoilpress.com</a></span></div>
  </div>
</div>

${sectionHtml}

<section class="faq-section">
  <h2 class="faq-title"><span class="cat-label">如何下单</span></h2>
  <ul class="order-steps">
    <li>🟠 告诉我们您的油料种类和日处理量（kg/天）。</li>
    <li>🟠 我们推荐合适型号和配置（单缸 / 双缸、标准 / 定制榨筒）。</li>
    <li>🟠 发送形式发票（PI），含规格、价格、运费报价。</li>
    <li>🟠 30% 定金下单生产，70% 发货前付清。</li>
    <li>🟠 生产周期：标准型号 15–25 个工作日，定制 / 大批量产品 30–45 个工作日，青岛港发货。</li>
  </ul>
</section>

<section class="faq-section" style="margin-top:12pt;">
  <h2 class="faq-title"><span class="cat-label">售后服务</span></h2>
  <ul class="service-list">
    <li><strong>1 年质保</strong>（制造缺陷）</li>
    <li><strong>WhatsApp / 邮箱 终身技术支持</strong></li>
    <li><strong>备件现货</strong>——密封件、弹簧、滤芯、液压油</li>
    <li><strong>安装指导</strong>：英文操作手册 + 视频连线 + 工程师</li>
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
