"""Generate catalog Word doc from product frontmatter."""
import sys, os, yaml, re
from pathlib import Path
from docx import Document
from docx.shared import Pt, Inches, Cm, RGBColor, Emu
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

PRODUCTS_DIR = Path('src/content/products')
IMG_PREFIX = 'public/images/products/'

def load_products():
    prods = {}
    for f in sorted(PRODUCTS_DIR.glob('*.md')):
        raw = f.read_text(encoding='utf-8-sig')
        fm = yaml.safe_load(raw.split('---', 2)[1])
        prods[fm['model']] = fm
    return prods

def clean(v):
    if not v: return '—'
    v = re.sub(r'\s*\([^)]*\)', '', v)
    v = re.sub(r'\s+standard\b', '', v, flags=re.I)
    v = re.sub(r'\s*optional\b', '', v, flags=re.I)
    if re.search(r'\d+\s*/\s*\d+', v):
        parts = v.split('/')
        m = re.search(r'(MPa|Tonnes|mm|KW|kg|V|Hz|A|%)', parts[1])
        unit = m.group(1) if m else ''
        v = parts[0].strip()
        if unit and unit not in v: v += ' ' + unit
    v = re.sub(r'(\d),(\d{1,2})(?!\d)', r'\1.\2', v)
    v = re.sub(r'(\d+),(\d{3,})', r'\1\2', v)
    return re.sub(r'\s+', ' ', v).strip() or '—'

def get_spec(specs, patterns):
    for s in specs or []:
        n = (s.get('name') or '').lower()
        for p in patterns:
            if p.lower() in n: return clean(s.get('value', ''))
    return '—'

def add_cell(table, row, col, text, bold=False, size=9, align=None):
    cell = table.cell(row, col)
    cell.text = ''
    p = cell.paragraphs[0]
    run = p.add_run(str(text))
    run.font.size = Pt(size)
    run.font.bold = bold
    run.font.name = 'Arial'
    if align: p.alignment = align
    return cell

def set_cell_bg(cell, color):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = OxmlElement('w:shd')
    shd.set(qn('w:fill'), color)
    tcPr.append(shd)

# ============ 加载 ============
prods = load_products()
print(f'Loaded {len(prods)} products')

# 型号顺序 + 分组
HYDRAULIC = [
    ('HN325', '核心系列'), ('HN365', None), ('HN426', None), ('HN500', None),
    ('HN300', '专业系列'), ('HN325/355 Sesame', None), ('300 Type Coconut', None), ('HN325 Large Tabung Press', None),
]
OTHER_CATS = {
    '种子预处理设备': ['HN-CG60', '220 Type', 'HN-SC', 'All-in-One', '370 Type'],
    '炒籽蒸籽设备': ['100# / 130#', 'Thermal Oil Type', '60 Type Wood-Fired', '27KW Electric'],
    '过滤设备': ['HN-10SL'],
}

ZH = {
    'HN300':'HN300 小型液压榨油机','HN325':'HN325 标准型液压榨油机（畅销款）','HN365':'HN365 商业级液压榨油机',
    'HN426':'HN426 冷榨液压榨油机（500吨）','HN500':'HN500 超高压液压榨油机（旗舰款）',
    'HN325/355 Sesame':'HN325 芝麻专用液压榨油机','300 Type Coconut':'300型椰奶液压榨油机',
    'HN325 Large Tabung Press':'HN325 大桶压滤机（椰子/乳木果）',
}
HARDNESS = {
    'HN300':'软质种子（花生、芝麻、菜籽）',
    'HN325':'软质·中硬（花生、芝麻、菜籽、亚麻籽、向日葵）',
    'HN365':'软质·中硬（花生、芝麻、茶籽、亚麻籽）',
    'HN426':'中硬·硬质（椰子VCO、核桃、亚麻籽、棕榈仁）',
    'HN500':'硬质·极硬质（核桃、杏仁、棕榈仁、山核桃）',
    'HN325/355 Sesame':'软质·中硬（芝麻·窄桶增压，出油率最高）',
    '300 Type Coconut':'软质种子（椰子肉、乳木果·大桶低压）',
    'HN325 Large Tabung Press':'软质种子（椰子肉、乳木果·Ø630mm大桶）',
}
FALLBACK = {
    'HN365': {'force':'365 Tonnes','sysP':'60 MPa','cakeP':'30 MPa','tbD':'Ø390 mm','tbH':'800 mm','weight':'~1.8 Tonnes'},
}

def get_spec_with_fb(p, patterns, key):
    v = get_spec(p.get('specifications', []), patterns)
    if v == '—' and p['model'] in FALLBACK:
        return FALLBACK[p['model']].get(key, '—')
    return v

# ============ 生成文档 ============
doc = Document()

# 页边距
for section in doc.sections:
    section.top_margin = Cm(2)
    section.bottom_margin = Cm(2)
    section.left_margin = Cm(2)
    section.right_margin = Cm(2)

# --- 封面 ---
for _ in range(4): doc.add_paragraph()
p = doc.add_paragraph()
p.alignment = WD_ALIGN_PARAGRAPH.CENTER
r = p.add_run('HYDRAULIC OIL PRESS\nEQUIPMENT CATALOG')
r.font.size = Pt(36); r.font.bold = True; r.font.name = 'Arial'
r.font.color.rgb = RGBColor(10, 14, 23)

p = doc.add_paragraph()
p.alignment = WD_ALIGN_PARAGRAPH.CENTER
r = p.add_run('产品目录 · 2026')
r.font.size = Pt(18); r.font.name = 'Arial'
r.font.color.rgb = RGBColor(217, 119, 6)

doc.add_paragraph()
p = doc.add_paragraph()
p.alignment = WD_ALIGN_PARAGRAPH.CENTER
r = p.add_run('Shandong Haonuo Machinery Equipment Group Co., Ltd.')
r.font.size = Pt(14); r.font.name = 'Arial'

doc.add_page_break()

# --- 公司简介 ---
doc.add_heading('公司简介', level=1)
doc.add_paragraph(
    '山东海诺机械装备集团有限公司成立于2010年，专注于液压榨油机及整套榨油生产线的研发、制造和出口。'
    '产品覆盖300–620吨压力区间，核心产品HN325标准型为工厂主打型号，月产量30+台。'
    '服务全球20+国家和地区的油厂和油坊客户，提供从设备选型、生产线设计、安装调试到终身技术支持的一站式服务。'
)

doc.add_heading('联系方式', level=2)
contact = [
    ('公司名', 'Shandong Haonuo Machinery Equipment Group Co., Ltd.'),
    ('联系人', 'Eason'),
    ('WhatsApp', '+86 18957149128'),
    ('邮箱', 'sales@hydoilpress.com'),
    ('官网', 'https://www.hydoilpress.com'),
]
for k, v in contact:
    p = doc.add_paragraph()
    run1 = p.add_run(f'{k}：')
    run1.font.bold = True; run1.font.size = Pt(10)
    run2 = p.add_run(v)
    run2.font.size = Pt(10)

doc.add_page_break()

# --- 液压榨油机表格 ---
doc.add_heading('① 液压榨油机', level=1)

headers = ['型号', '概述', '榨力', '系统压强', '饼面压强', '桶径×桶高', '重量', '查看']
table = doc.add_table(rows=1, cols=len(headers))
table.alignment = WD_TABLE_ALIGNMENT.CENTER
table.style = 'Table Grid'

# 表头
for i, h in enumerate(headers):
    c = table.rows[0].cells[i]
    c.text = h
    for p in c.paragraphs:
        for run in p.runs:
            run.font.bold = True; run.font.size = Pt(9)
    set_cell_bg(c, 'F59E0B')
    for p in c.paragraphs:
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER

# 数据行
current_group = None
for model, group in HYDRAULIC:
    p = prods.get(model)
    if not p:
        print(f'  SKIP {model} — not found')
        continue

    if group and group != current_group:
        # 分组头
        row = table.add_row()
        row.cells[0].merge(row.cells[-1])
        cell = row.cells[0]
        cell.text = f'  {group}'
        set_cell_bg(cell, 'FEF3C7')
        for para in cell.paragraphs:
            para.alignment = WD_ALIGN_PARAGRAPH.LEFT
            for run in para.runs:
                run.font.bold = True; run.font.size = Pt(9); run.font.color.rgb = RGBColor(180, 83, 9)
        current_group = group

    row = table.add_row()
    zh_name = ZH.get(model, p.get('title', {}).get('en', model))
    url = f"https://www.hydoilpress.com/products/{p.get('slug','')}/"

    # 型号
    c0 = row.cells[0]
    c0.text = ''
    run = c0.paragraphs[0].add_run(model)
    run.font.bold = True; run.font.size = Pt(9)

    # 概述
    c1 = row.cells[1]
    c1.text = ''
    p1 = c1.paragraphs[0]
    r = p1.add_run(f'{zh_name}\n')
    r.font.bold = True; r.font.size = Pt(9)
    desc = p.get('description', {}).get('zh') or p.get('description', {}).get('en', '')
    # 取第一段
    desc = desc.split('\n')[0][:120]
    r2 = p1.add_run(f'{desc}\n')
    r2.font.size = Pt(8); r2.font.color.rgb = RGBColor(75, 85, 99)
    r3 = p1.add_run(f'适用硬度：{HARDNESS.get(model, "—")}')
    r3.font.size = Pt(7.5); r3.font.color.rgb = RGBColor(107, 114, 128)

    # 规格
    specs = p.get('specifications', [])
    add_cell(table, len(table.rows)-1, 2, get_spec_with_fb(p, ['pressing force','rated pressing force'], 'force'), size=9, align=WD_ALIGN_PARAGRAPH.CENTER)
    add_cell(table, len(table.rows)-1, 3, get_spec_with_fb(p, ['system pressure','hydraulic system pressure'], 'sysP'), size=9, align=WD_ALIGN_PARAGRAPH.CENTER)
    add_cell(table, len(table.rows)-1, 4, get_spec_with_fb(p, ['cake surface pressure'], 'cakeP'), size=9, align=WD_ALIGN_PARAGRAPH.CENTER)
    tbD = get_spec_with_fb(p, ['tabung press diameter','tabung press inner diameter','tabung press standard inner diameter'], 'tbD')
    tbH = get_spec_with_fb(p, ['tabung press height','tabung press standard height'], 'tbH')
    tb = f'{tbD} × {tbH}' if tbD != '—' and tbH != '—' else '—'
    add_cell(table, len(table.rows)-1, 5, tb, size=9, align=WD_ALIGN_PARAGRAPH.CENTER)
    add_cell(table, len(table.rows)-1, 6, get_spec_with_fb(p, ['machine weight'], 'weight'), size=9, align=WD_ALIGN_PARAGRAPH.CENTER)

    # 查看链接
    add_cell(table, len(table.rows)-1, 7, url, size=8)

print('✅ Hydraulic table done')

doc.add_page_break()

# --- 其他分类：卡片式 ---
ZH_CAT = {'种子预处理设备':'② 种子预处理设备','炒籽蒸籽设备':'③ 炒籽蒸籽设备','过滤设备':'④ 过滤设备'}
for cat, models in OTHER_CATS.items():
    doc.add_heading(ZH_CAT[cat], level=1)
    for model in models:
        p = prods.get(model)
        if not p:
            print(f'  SKIP {model}')
            continue
        zh_name = ZH.get(model, p.get('title', {}).get('en', model))
        desc = p.get('description', {}).get('zh') or p.get('description', {}).get('en', '')
        desc = desc.split('\n')[0][:150]
        url = f"https://www.hydoilpress.com/products/{p.get('slug','')}/"

        # 产品名 + 型号
        para = doc.add_paragraph()
        run_m = para.add_run(f'[{model}] {zh_name}')
        run_m.font.bold = True; run_m.font.size = Pt(11)

        # 描述
        para2 = doc.add_paragraph(desc)
        para2.runs[0].font.size = Pt(9) if para2.runs else None

        # 规格表
        specs = p.get('specifications', [])
        if specs:
            st = doc.add_table(rows=min(len(specs), 8), cols=2)
            st.style = 'Light Grid Accent 1'
            for i, s in enumerate(specs[:8]):
                st.cell(i, 0).text = str(s.get('name', ''))
                st.cell(i, 1).text = clean(str(s.get('value', '')))
                for c in st.cell(i, 0).paragraphs:
                    for r in c.runs: r.font.size = Pt(8); r.font.bold = True
                for c in st.cell(i, 1).paragraphs:
                    for r in c.runs: r.font.size = Pt(8)

        # 链接
        para3 = doc.add_paragraph()
        run_l = para3.add_run(f'查看完整产品 → {url}')
        run_l.font.size = Pt(8); run_l.font.color.rgb = RGBColor(217, 119, 6)

        doc.add_paragraph()

    doc.add_page_break()

# --- 如何下单 ---
doc.add_heading('如何下单', level=1)
steps = [
    '告诉我们您的油料种类和日处理量（kg/天）。',
    '我们推荐合适型号和配置（单缸/双缸、标准/定制榨筒）。',
    '发送形式发票（PI），含规格、价格、运费报价。',
    '30%定金下单生产，70%发货前付清。',
    '生产周期：标准型号15–25工作日，定制/大批量30–45工作日，青岛港发货。',
]
for s in steps:
    doc.add_paragraph(s, style='List Bullet')

# --- 售后服务 ---
doc.add_heading('售后服务', level=1)
services = [
    '1年质保（制造缺陷）',
    'WhatsApp/邮箱 终身技术支持',
    '备件现货——密封件、弹簧、滤芯、液压油',
    '安装指导：英文操作手册 + 视频连线 + 工程师',
]
for s in services:
    doc.add_paragraph(s, style='List Bullet')

# ============ 保存 ============
out = Path('海诺机械液压榨油机产品目录.docx')
doc.save(str(out))
print(f'✅ 已保存: {out.resolve()} ({out.stat().st_size/1024:.1f} KB)')
