// 中文产品目录生成器 - 带产品图，紧凑版
import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
         Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
         ShadingType, PageNumber, PageBreak, ImageRun, VerticalAlign } from 'docx';

const PRODUCTS_DIR = path.resolve('src/content/products');
const IMAGES_DIR = path.resolve('public/images/products');
const OUTPUT = path.resolve('海诺机械液压榨油机产品目录.docx');

// 中文分类名（带排序权重：核心产品液压榨油机排第一）
const CATEGORY_ORDER = ['hydraulic-oil-press', 'seed-processing-equipment', 'roasting-steaming-equipment'];
const CATEGORIES = {
  'hydraulic-oil-press': { zh: '液压榨油机', en: 'Hydraulic Oil Presses' },
  'seed-processing-equipment': { zh: '种子预处理设备', en: 'Seed Processing' },
  'roasting-steaming-equipment': { zh: '炒籽蒸籽设备', en: 'Roasting & Steaming' },
};

// 中文产品名映射
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
  'HN325 Large Tabung Press': 'HN325大桶压滤机（椰子/乳木果）',
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
  'Custom (1-50 T/D)': '不锈钢食用油精炼设备',
  'Custom (1-100 T/D)': '食用油全套精炼系统',
};

// 中文简短描述（每个产品1-2句话，紧凑）
const ZH_DESC = {
  'HN300': '300吨压力，适合油坊起步阶段。20–60kg/批次，热榨冷榨通用，1.1kw电机。',
  'HN325': '工厂主打型号，325吨压力，20–100kg/批次，27MPa饼面压力。热榨30–40分钟/批次，冷榨约2小时。单缸1.42吨，双缸1.72吨。',
  'HN355': '355吨压力，比HN325出油率略高，适合中等规模油坊。',
  'HN365': '365吨压力，适合商业油厂，日处理量更大，双缸配置可选。',
  'HN400': '400吨重型液压榨油机，适合硬质油料（核桃、杏仁壳等）。',
  'HN426': '500吨冷榨专用，70MPa系统压力/42MPa饼面压力。低温压榨保留营养，主打椰子VCO、核桃油、亚麻籽油等高端油品。',
  'HN480': '480吨高压机型，适合硬质硬壳油料。',
  'HN480B': '480吨超高压冷榨机，比HN426压力略高，适合更硬的材料。',
  'HN500': '600–620吨旗舰机型，最强压力，核桃、杏仁等硬壳油料单周期直接压透。',
  'HN325 Large Tabung Press': 'HN325加大桶径版本（500mm），针对椰子肉、乳木果设计，20–35kg/批次。',
  'HN325/355 Sesame': '芝麻定制款——300mm窄桶集中压力，47–51MPa饼面压力，42–54%出油率。',
  '300 Type Coconut': '300型椰奶/椰油专用液压榨油机，定制桶形。',
  'HN-CG60': '螺旋预压机——主榨前先压一遍，压成薄片破坏油细胞。增加3–5%总出油率。500kg/h（7.5kw）/750kg/h（11kw）。预压机本身不出油，油由后续液压榨出。',
  '220 Type': '220型高速破碎机，棕榈仁、棉籽等硬壳物料破碎。',
  '370 Type': '370型油饼粉碎机，把榨完的油饼粉碎成动物饲料粉末。2000kg/h。',
  'All-in-One': '一体化提升·破碎·炒籽三合一设备，紧凑型作坊配置。',
  'HN-SC': '立式螺旋输送机，自动将物料从炒籽机送入榨油机料斗。',
  '100# / 130#': '电磁加热滚筒炒籽机，100型（160kg/批次）、130型（450kg/批次）。电磁无明火，温度精准可调。',
  '27KW Electric': '27KW 电热蒸籽机，增加物料水分软化细胞，提高出油率。温度可控。',
  '60 Type Wood-Fired': '60型柴火蒸籽机，无电或电力不足地区首选，烧木柴/生物质燃料。',
  'Thermal Oil Type': '导热油炒籽锅，导热油循环加热，受热均匀，适合传统风味炒籽工艺。',
  'HN-10SL': '气动压滤机——用压缩空气加压，压榨原油除去悬浮杂质。比普通板框压滤机精度更高、速度更快。',
  'Custom (1-50 T/D)': '小型不锈钢精炼设备，1–50吨/天。完成脱胶→脱酸→脱色全流程。与食品、化妆品用油标准对齐。',
  'Custom (1-100 T/D)': '大型食用油精炼系统，1–100吨/天。全套脱胶、脱酸、脱色、脱臭工艺，生产国标一级食用油。',
};

const FONT = { ascii: 'Arial', hAnsi: 'Arial', eastAsia: 'Microsoft YaHei' };
const border = { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' };
const borders = { top: border, bottom: border, left: border, right: border };

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
      const fm = parseFM(raw);
      if (!fm) return null;
      const slug = f.replace('.md', '');
      const imgRel = fm.images?.[0] || '';
      const imgFile = imgRel ? path.basename(imgRel) : '';
      return {
        slug, category: fm.category, model: fm.model || 'Custom',
        enTitle: fm.title?.en || fm.title || '',
        descEn: fm.description?.en || '',
        specs: fm.specifications || [],
        seeds: fm.applicableSeeds || [],
        imgFile,
      };
    })
    .filter(Boolean)
    .sort((a, b) => (a.category === b.category ? a.model.localeCompare(b.model) : a.category.localeCompare(b.category)));
}

function zhName(p) { return ZH_NAMES[p.model] || p.enTitle; }
function zhDesc(p) { return ZH_DESC[p.model] || ''; }

function tryLoadImage(imgFile) {
  if (!imgFile) return null;
  const full = path.join(IMAGES_DIR, imgFile);
  if (!fs.existsSync(full)) return null;
  try { return fs.readFileSync(full); } catch { return null; }
}

const P = (text, opts = {}) => {
  if (typeof text === 'string') text = [new TextRun({ text, font: FONT, size: opts.size || 20, bold: opts.bold, color: opts.color })];
  return new Paragraph({ children: text, spacing: { after: opts.after ?? 80, before: opts.before || 0 }, alignment: opts.align });
};

function makeSpecsCompact(specs) {
  // 把规格表压缩成 "规格：xxx | xxx | xxx" 的一行或两行
  const items = specs.slice(0, 8).map(s => `${s.name}: ${s.value}`);
  return new Paragraph({
    spacing: { after: 60 },
    children: [
      new TextRun({ text: '规格参数：', font: FONT, size: 18, bold: true, color: '1F4E79' }),
      new TextRun({ text: items.join('  |  '), font: FONT, size: 18, color: '333333' }),
    ],
  });
}

function makeProductBlock(p, idx, total) {
  const children = [];
  // 产品标题（带序号）
  children.push(P([
    new TextRun({ text: `${idx}. `, font: FONT, size: 22, bold: true, color: '1F4E79' }),
    new TextRun({ text: zhName(p), font: FONT, size: 22, bold: true, color: '1F4E79' }),
    new TextRun({ text: `  [型号: ${p.model}]`, font: FONT, size: 18, color: '888888' }),
  ], { after: 60 }));

  // 产品图 + 描述（两栏：左图右文）
  const imgData = tryLoadImage(p.imgFile);
  if (imgData) {
    const w = 200, h = 200; // 正方形小图
    children.push(new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      columnWidths: [3200, 5826],
      rows: [new TableRow({
        children: [
          new TableCell({
            width: { size: 3200, type: WidthType.DXA },
            borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
            margins: { top: 0, bottom: 0, left: 0, right: 200 },
            verticalAlign: VerticalAlign.CENTER,
            children: [new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [new ImageRun({ type: 'webp', data: imgData, transformation: { width: w, height: h } })],
            })],
          }),
          new TableCell({
            width: { size: 5826, type: WidthType.DXA },
            borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
            margins: { top: 0, bottom: 0, left: 0, right: 0 },
            verticalAlign: VerticalAlign.CENTER,
            children: [
              zhDesc(p) ? new Paragraph({
                spacing: { after: 40 },
                children: [new TextRun({ text: zhDesc(p), font: FONT, size: 18, color: '333333' })],
              }) : null,
              p.seeds.length > 0 ? new Paragraph({
                spacing: { after: 40 },
                children: [
                  new TextRun({ text: '适用油料：', font: FONT, size: 16, bold: true, color: '666666' }),
                  new TextRun({ text: p.seeds.join('、'), font: FONT, size: 16, color: '666666' }),
                ],
              }) : null,
            ].filter(Boolean),
          }),
        ],
      })],
    }));
  } else {
    if (zhDesc(p)) children.push(P(zhDesc(p), { size: 18, color: '333333', after: 40 }));
    if (p.seeds.length > 0) children.push(P([
      new TextRun({ text: '适用油料：', font: FONT, size: 16, bold: true, color: '666666' }),
      new TextRun({ text: p.seeds.join('、'), font: FONT, size: 16, color: '666666' }),
    ], { after: 40 }));
  }

  // 规格参数（一行压缩版）
  if (p.specs.length > 0) {
    children.push(makeSpecsCompact(p.specs));
  }
  children.push(P('', { after: 120 }));
  return children;
}

// ===== 主程序 =====
// 按 CATEGORY_ORDER 排序，过滤掉精炼设备
const products = loadAll()
  .filter(p => CATEGORY_ORDER.includes(p.category))
  .sort((a, b) => {
    const ai = CATEGORY_ORDER.indexOf(a.category);
    const bi = CATEGORY_ORDER.indexOf(b.category);
    if (ai !== bi) return ai - bi;
    return a.model.localeCompare(b.model);
  });
const categories = [...new Set(products.map(p => p.category))];
const allChildren = [];

// ===== 封面 =====
for (let i = 0; i < 6; i++) allChildren.push(P('', { after: 200 }));
allChildren.push(P('山东海诺机械装备集团有限公司', { size: 44, bold: true, color: '1F4E79', align: AlignmentType.CENTER, after: 200 }));
allChildren.push(P('HAONUO MACHINERY EQUIPMENT GROUP CO., LTD.', { size: 22, color: '2E75B6', align: AlignmentType.CENTER, after: 400 }));
allChildren.push(P('液压榨油机及成套榨油设备', { size: 36, bold: true, color: '404040', align: AlignmentType.CENTER, after: 200 }));
allChildren.push(P('产品目录 2026', { size: 28, color: '666666', align: AlignmentType.CENTER, after: 400 }));
for (let i = 0; i < 4; i++) allChildren.push(P('', { after: 100 }));
allChildren.push(P('工厂直销 · 1年质保 · 出口20+国家', { size: 20, color: '666666', align: AlignmentType.CENTER }));
allChildren.push(P('自2010年专业制造液压榨油机', { size: 18, color: '888888', align: AlignmentType.CENTER }));
allChildren.push(new Paragraph({ children: [new PageBreak()] }));

// ===== 公司简介 + 联系方式（紧凑版）=====
allChildren.push(P('公司简介', { size: 28, bold: true, color: '1F4E79', after: 200 }));
allChildren.push(P([
  new TextRun({ text: '山东海诺机械装备集团有限公司', font: FONT, size: 20, bold: true }),
  new TextRun({ text: '坐落于山东省，是一家专业设计和生产液压榨油设备的制造企业。自2010年起，我们为亚洲、非洲、拉丁美洲的油坊和油厂提供：', font: FONT, size: 20 }),
], { after: 80 }));
allChildren.push(P('• 批次式液压榨油机（300–620吨压力，覆盖芝麻、花生、核桃、椰子VCO、乳木果、菜籽、亚麻籽等20+种油料）', { size: 20, after: 40 }));
allChildren.push(P('• 种子预处理、炒籽蒸籽、过滤精炼等配套设备', { size: 20, after: 40 }));
allChildren.push(P('• 从种子到毛油的成套榨油生产线', { size: 20, after: 200 }));
allChildren.push(P([
  new TextRun({ text: '所有机型均为自有工厂生产，', font: FONT, size: 20 }),
  new TextRun({ text: 'Q690高强钢制榨筒 + 27SiMn合金钢制液压缸 + 食品接触面镀镍', font: FONT, size: 20, bold: true, color: '2E75B6' }),
  new TextRun({ text: '。', font: FONT, size: 20 }),
], { after: 200 }));
allChildren.push(P([
  new TextRun({ text: '联系方式', font: FONT, size: 22, bold: true, color: '1F4E79' }),
], { after: 80 }));
const contactItems = [
  '联系人：Eason',
  'WhatsApp：+86 189 5714 9128',
  '邮箱：sales@hydoilpress.com',
  '官网：www.hydoilpress.com',
  '地址：山东省',
];
contactItems.forEach(t => allChildren.push(P(t, { size: 18, after: 30 })));
allChildren.push(new Paragraph({ children: [new PageBreak()] }));

// ===== 目录分类（紧凑版：每个分类一个板块，不强制分页）=====
let globalIdx = 1;
for (const cat of categories) {
  const catProducts = products.filter(p => p.category === cat);
  const catZh = CATEGORIES[cat]?.zh || cat;
  const catEn = CATEGORIES[cat]?.en || cat;

  // 分类标题（大号，蓝色）
  allChildren.push(P([
    new TextRun({ text: catZh, font: FONT, size: 32, bold: true, color: '1F4E79' }),
    new TextRun({ text: `（${catEn}）`, font: FONT, size: 20, color: '666666' }),
  ], { after: 60, before: 200 }));
  allChildren.push(P(`共 ${catProducts.length} 款产品`, { size: 16, color: '888888', after: 120 }));

  catProducts.forEach(p => {
    const blocks = makeProductBlock(p, globalIdx++, catProducts.length);
    allChildren.push(...blocks);
  });
}

// ===== 下单 & 售后 =====
allChildren.push(new Paragraph({ children: [new PageBreak()] }));
allChildren.push(P('如何下单', { size: 28, bold: true, color: '1F4E79', after: 120 }));
const orderSteps = [
  '1. 告诉我们您的油料种类 和 日处理量（kg/天）',
  '2. 我们推荐合适型号和配置（单缸/双缸、标准/定制榨筒）',
  '3. 发送形式发票（PI），含规格、价格、运费报价',
  '4. 50%定金下单生产，50%发货前付清',
  '5. 生产周期 7–15 天，青岛港发货',
];
orderSteps.forEach(t => allChildren.push(P(t, { size: 20, after: 40 })));

allChildren.push(P('', { after: 200 }));
allChildren.push(P('售后服务', { size: 28, bold: true, color: '1F4E79', after: 120 }));
const svc = [
  '• 1年质保（制造缺陷）',
  '• WhatsApp / 邮箱 终身技术支持',
  '• 备件现货——密封件、弹簧、滤芯、液压油',
  '• 安装指导：英文操作手册 + 视频连线 + 海外工程师',
];
svc.forEach(t => allChildren.push(P(t, { size: 20, after: 40 })));

// ===== 组装文档 =====
const doc = new Document({
  styles: {
    default: { document: { run: { font: FONT, size: 20 } } },
    paragraphStyles: [
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 32, bold: true, font: FONT },
        paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 0, keepNext: false, keepLines: false } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 28, bold: true, font: FONT },
        paragraph: { spacing: { before: 160, after: 80 }, outlineLevel: 1, keepNext: false, keepLines: false } },
    ],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 1200, right: 1200, bottom: 1200, left: 1200 },
      },
    },
    headers: {
      default: new Header({ children: [new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [new TextRun({ text: '海诺机械 · 液压榨油机产品目录', font: FONT, size: 14, color: 'AAAAAA' })],
      })] }),
    },
    footers: {
      default: new Footer({ children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({ text: '第 ', font: FONT, size: 14, color: 'AAAAAA' }),
          new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 14, color: 'AAAAAA' }),
          new TextRun({ text: ' 页 / 共 ', font: FONT, size: 14, color: 'AAAAAA' }),
          new TextRun({ children: [PageNumber.TOTAL_PAGES], font: FONT, size: 14, color: 'AAAAAA' }),
          new TextRun({ text: ' 页', font: FONT, size: 14, color: 'AAAAAA' }),
        ],
      })] }),
    },
    children: allChildren,
  }],
});

const buf = await Packer.toBuffer(doc);
fs.writeFileSync(OUTPUT, buf);
console.log(`✅ 中文目录已生成：${OUTPUT}`);
console.log(`   产品数: ${products.length} / 分类数: ${categories.length}`);
const stats = {};
products.forEach(p => stats[p.category] = (stats[p.category] || 0) + 1);
Object.entries(stats).forEach(([c, n]) => console.log(`   · ${CATEGORIES[c]?.zh || c}: ${n} 款`));
