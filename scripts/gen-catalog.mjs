// Generate Word product catalog from Astro markdown files
import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
         Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
         ShadingType, PageNumber, PageBreak, LevelFormat } from 'docx';

const PRODUCTS_DIR = path.resolve('src/content/products');
const OUTPUT = path.resolve('Haonuo_Hydraulic_Oil_Press_Catalog.docx');

const CATEGORY_NAMES = {
  'hydraulic-oil-press': { en: 'Hydraulic Oil Presses', zh: '液压榨油机系列' },
  'seed-processing-equipment': { en: 'Seed Processing Equipment', zh: '种子预处理设备' },
  'roasting-steaming-equipment': { en: 'Roasting & Steaming Equipment', zh: '炒籽蒸籽设备' },
  'filtration-refining-equipment': { en: 'Filtration & Refining Equipment', zh: '过滤精炼设备' },
};

function parseFrontmatter(content) {
  // Strip BOM if present
  if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
  const m = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  try {
    return yaml.parse(m[1]);
  } catch (e) {
    console.error('  YAML parse error:', e.message.substring(0, 80));
    return null;
  }
}

function loadProducts() {
  const files = fs.readdirSync(PRODUCTS_DIR).filter(f => f.endsWith('.md'));
  const products = [];
  for (const f of files) {
    const raw = fs.readFileSync(path.join(PRODUCTS_DIR, f), 'utf8');
    const fm = parseFrontmatter(raw);
    if (!fm) continue;
    products.push({
      file: f,
      title: fm.title?.en || fm.title,
      model: fm.model || 'Custom',
      category: fm.category,
      description: fm.description?.en || fm.description || '',
      specs: fm.specifications || [],
      seeds: fm.applicableSeeds || [],
      featured: fm.featured || false,
    });
  }
  return products.sort((a, b) => {
    if (a.category !== b.category) return a.category.localeCompare(b.category);
    return a.model.localeCompare(b.model);
  });
}

// --- Document building blocks ---
const FONT = { ascii: 'Arial', hAnsi: 'Arial', eastAsia: 'Microsoft YaHei' };
const border = { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' };
const borders = { top: border, bottom: border, left: border, right: border };

function makeRun(text, opts = {}) {
  return new TextRun({ text, font: FONT, size: opts.size || 22, bold: opts.bold || false, color: opts.color });
}

function makeHeading1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    children: [makeRun(text, { size: 36, bold: true, color: '1F4E79' })],
    spacing: { before: 360, after: 240 },
  });
}

function makeHeading2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    children: [makeRun(text, { size: 28, bold: true, color: '2E75B6' })],
    spacing: { before: 280, after: 180 },
  });
}

function makeHeading3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    children: [makeRun(text, { size: 24, bold: true, color: '404040' })],
    spacing: { before: 200, after: 120 },
  });
}

function makePara(runs) {
  if (typeof runs === 'string') runs = [makeRun(runs)];
  return new Paragraph({ children: runs, spacing: { after: 100 } });
}

function makeSpecsTable(specs) {
  const colW = [2800, 6226]; // DXA, content width = 9026 (A4 1" margins)
  const rows = [];
  // Header row
  rows.push(new TableRow({
    cantSplit: true,
    children: [
      new TableCell({ borders, width: { size: colW[0], type: WidthType.DXA },
        shading: { fill: '1F4E79', type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 120, right: 120 },
        children: [new Paragraph({ children: [makeRun('Specification', { size: 20, bold: true, color: 'FFFFFF' })] })] }),
      new TableCell({ borders, width: { size: colW[1], type: WidthType.DXA },
        shading: { fill: '1F4E79', type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 120, right: 120 },
        children: [new Paragraph({ children: [makeRun('Value', { size: 20, bold: true, color: 'FFFFFF' })] })] }),
    ],
  }));
  // Data rows
  specs.forEach((s, i) => {
    const shade = i % 2 === 0 ? 'F2F2F2' : 'FFFFFF';
    rows.push(new TableRow({
      cantSplit: true,
      children: [
        new TableCell({ borders, width: { size: colW[0], type: WidthType.DXA },
          shading: { fill: shade, type: ShadingType.CLEAR },
          margins: { top: 60, bottom: 60, left: 120, right: 120 },
          children: [new Paragraph({ children: [makeRun(s.name || '', { size: 20, bold: true })] })] }),
        new TableCell({ borders, width: { size: colW[1], type: WidthType.DXA },
          shading: { fill: shade, type: ShadingType.CLEAR },
          margins: { top: 60, bottom: 60, left: 120, right: 120 },
          children: [new Paragraph({ children: [makeRun(s.value || '', { size: 20 })] })] }),
      ],
    }));
  });
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: colW,
    rows,
  });
}

// --- Build document ---
const products = loadProducts();
const categories = [...new Set(products.map(p => p.category))];

const children = [];

// ===== COVER PAGE =====
children.push(new Paragraph({ spacing: { before: 2400 } }));
children.push(new Paragraph({
  alignment: AlignmentType.CENTER,
  children: [makeRun('HAONUO MACHINERY', { size: 56, bold: true, color: '1F4E79' })],
}));
children.push(new Paragraph({
  alignment: AlignmentType.CENTER,
  children: [makeRun('Equipment Group Co., Ltd.', { size: 32, color: '2E75B6' })],
}));
children.push(new Paragraph({ spacing: { before: 600 } }));
children.push(new Paragraph({
  alignment: AlignmentType.CENTER,
  children: [makeRun('Hydraulic Oil Press Equipment', { size: 40, bold: true, color: '404040' })],
}));
children.push(new Paragraph({
  alignment: AlignmentType.CENTER,
  children: [makeRun('Product Catalog 2026', { size: 32, color: '666666' })],
}));
children.push(new Paragraph({ spacing: { before: 1200 } }));
children.push(new Paragraph({
  alignment: AlignmentType.CENTER,
  children: [makeRun('Factory-direct manufacturer since 2010', { size: 24, color: '666666' })],
}));
children.push(new Paragraph({
  alignment: AlignmentType.CENTER,
  children: [makeRun('Exporting to 20+ countries worldwide', { size: 24, color: '666666' })],
}));
children.push(new Paragraph({ children: [new PageBreak()] }));

// ===== COMPANY INTRO =====
children.push(makeHeading1('About Haonuo Machinery'));
children.push(makePara([
  makeRun('Shandong Haonuo Machinery Equipment Group Co., Ltd. ', { bold: true }),
  makeRun('is a professional manufacturer of hydraulic oil press equipment based in Shandong Province, China. Since 2010 we have designed and built batch-mode hydraulic presses, seed preparation equipment, and complete oil production lines for small workshops through to industrial oil mills across Asia, Africa and Latin America.'),
]));
children.push(makePara(
  'Our core product line — the HN series hydraulic oil presses — covers pressing forces from 300 to 620 tonnes, pressing sesame, peanut, walnut, coconut VCO, shea butter, rapeseed, flaxseed, sunflower, palm kernel, and over 20 other oilseeds. All machines are built in our own factory with Q690 high-strength steel barrels, 27SiMn alloy steel cylinders, and nickel-plated food-contact surfaces.'
));
children.push(makePara(
  'This catalog lists all standard production models, organized by equipment category. Custom configurations available on request.'
));
children.push(makePara([
  makeRun('Contact: ', { bold: true }),
  makeRun('Eason'),
]));
children.push(makePara([
  makeRun('WhatsApp: ', { bold: true }),
  makeRun('+86 18957149128'),
]));
children.push(makePara([
  makeRun('Email: ', { bold: true }),
  makeRun('sales@hydoilpress.com'),
]));
children.push(makePara([
  makeRun('Website: ', { bold: true }),
  makeRun('www.hydoilpress.com'),
]));
children.push(new Paragraph({ children: [new PageBreak()] }));

// ===== CATALOG =====
for (const cat of categories) {
  const catProducts = products.filter(p => p.category === cat);
  const catName = CATEGORY_NAMES[cat]?.en || cat;

  // Category heading
  children.push(new Paragraph({
    pageBreakBefore: true,
    children: [makeRun(catName, { size: 40, bold: true, color: '1F4E79' })],
    spacing: { after: 120 },
  }));
  children.push(new Paragraph({
    children: [makeRun(`${catProducts.length} model${catProducts.length > 1 ? 's' : ''} listed`, { size: 22, color: '666666' })],
    spacing: { after: 300 },
  }));

  for (const p of catProducts) {
    // Model header
    const modelStr = p.model ? `(${p.model})` : '';
    children.push(makeHeading2(`${p.title} ${modelStr}`));
    children.push(makePara([
      makeRun('Model: ', { bold: true }),
      makeRun(p.model),
      makeRun('    '),
      makeRun('Category: ', { bold: true }),
      makeRun(catName),
    ]));

    if (p.description) {
      children.push(makePara(p.description));
    }

    if (p.seeds && p.seeds.length > 0) {
      children.push(makePara([
        makeRun('Applicable Oilseeds: ', { bold: true }),
        makeRun(p.seeds.join(', ')),
      ]));
    }

    // Specs table
    if (p.specs && p.specs.length > 0) {
      children.push(new Paragraph({ spacing: { before: 120 } }));
      children.push(makeSpecsTable(p.specs));
      children.push(new Paragraph({ spacing: { after: 200 } }));
    }

    children.push(new Paragraph({ spacing: { before: 200, after: 200 } }));
  }
}

// ===== FOOTER SECTION =====
children.push(new Paragraph({ children: [new PageBreak()] }));
children.push(makeHeading1('How to Order'));
children.push(makePara(
  '1. Tell us your seed type and daily target throughput (kg/day)'
));
children.push(makePara(
  '2. We recommend the right model and configuration (single or double barrel, standard or custom tabung press)'
));
children.push(makePara(
  '3. Send a proforma invoice with specs, price, and shipping quote'
));
children.push(makePara(
  '4. 50% deposit to start production, 50% before shipment'
));
children.push(makePara(
  '5. Production lead time: 7–15 days. Shipment from Qingdao port.'
));
children.push(new Paragraph({ spacing: { before: 400 } }));
children.push(makeHeading1('After-Sales Service'));
children.push(makePara(
  '• 1-year warranty covering manufacturing defects'
));
children.push(makePara(
  '• Lifetime technical support via WhatsApp and email'
));
children.push(makePara(
  '• Spare parts available from stock — seals, springs, filter elements, hydraulic oil'
));
children.push(makePara(
  '• Installation guidance: English operation manual + video call support + overseas engineer on request'
));

// --- Assemble document ---
const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: FONT, size: 22 },
      },
    },
    paragraphStyles: [
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 36, bold: true, font: FONT },
        paragraph: { spacing: { before: 360, after: 240 }, outlineLevel: 0, keepNext: false, keepLines: false } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 28, bold: true, font: FONT },
        paragraph: { spacing: { before: 280, after: 180 }, outlineLevel: 1, keepNext: false, keepLines: false } },
      { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 24, bold: true, font: FONT },
        paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 2, keepNext: false, keepLines: false } },
    ],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 }, // A4
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
      },
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          alignment: AlignmentType.RIGHT,
          children: [makeRun('Haonuo Machinery — Hydraulic Oil Press Catalog', { size: 16, color: '999999' })],
        })],
      }),
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            makeRun('Page ', { size: 16, color: '999999' }),
            new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 16, color: '999999' }),
            makeRun(' of ', { size: 16, color: '999999' }),
            new TextRun({ children: [PageNumber.TOTAL_PAGES], font: FONT, size: 16, color: '999999' }),
          ],
        })],
      }),
    },
    children,
  }],
});

const buffer = await Packer.toBuffer(doc);
fs.writeFileSync(OUTPUT, buffer);
console.log(`✅ Catalog generated: ${OUTPUT}`);
console.log(`   Products: ${products.length}`);
console.log(`   Categories: ${categories.length}`);
for (const c of categories) {
  const n = products.filter(p => p.category === c).length;
  console.log(`   - ${CATEGORY_NAMES[c]?.en || c}: ${n}`);
}
