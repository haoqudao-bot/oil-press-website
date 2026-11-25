const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle, WidthType, PageBreak } = require('docx');
const fs = require('fs');

const COMPANY_NAME = "Shandong Haonuo Machinery Equipment Group Co., Ltd.";
const COMPANY_NAME_CN = "山东浩诺机械设备集团有限公司";

function pageHeader(text) {
    return new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 100 },
        children: [new TextRun({ text: text, size: 18, color: "666666", font: "Microsoft YaHei" })]
    });
}

function title(text) {
    return new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 400, after: 200 },
        children: [new TextRun({ text: text, bold: true, size: 36, color: "1a365d", font: "Microsoft YaHei" })]
    });
}

function heading1(text) {
    return new Paragraph({
        spacing: { before: 400, after: 200 },
        border: { bottom: { color: "2b6cb0", space: 1, style: BorderStyle.SINGLE, size: 4 } },
        children: [new TextRun({ text: text, bold: true, size: 28, color: "1a365d", font: "Microsoft YaHei" })]
    });
}

function heading2(text) {
    return new Paragraph({
        spacing: { before: 300, after: 150 },
        children: [new TextRun({ text: text, bold: true, size: 24, color: "2b6cb0", font: "Microsoft YaHei" })]
    });
}

function body(text) {
    return new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: text, size: 20, font: "Microsoft YaHei" })]
    });
}

function bodyBold(text) {
    return new Paragraph({
        spacing: { after: 120 },
        children: [new TextRun({ text: text, bold: true, size: 20, font: "Microsoft YaHei" })]
    });
}

function bullet(text) {
    return new Paragraph({
        spacing: { after: 80 },
        indent: { left: 360 },
        children: [new TextRun({ text: "• " + text, size: 20, font: "Microsoft YaHei" })]
    });
}

function emptyLine() {
    return new Paragraph({ spacing: { after: 100 }, children: [] });
}

// Build document
const doc = new Document({
    styles: {
        default: {
            document: { run: { font: "Microsoft YaHei", size: 20 } }
        }
    },
    sections: [{
        properties: {
            page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } }
        },
        children: [
            // ===== 封面 =====
            emptyLine(), emptyLine(), emptyLine(), emptyLine(), emptyLine(),
            pageHeader("产品目录 · Product Catalog"),
            title("液压榨油机及油料加工设备"),
            body("Hydraulic Oil Press Machines & Oilseed Processing Equipment"),
            emptyLine(), emptyLine(),
            body(COMPANY_NAME),
            body(COMPANY_NAME_CN),
            body("Complete range of hydraulic oil presses and oil processing equipment"),
            body("从种子预处理到压榨、过滤和精炼的全套油料加工生产线"),

            new Paragraph({ children: [new PageBreak()] }),

            // ===== 关于公司 =====
            pageHeader("产品目录 · Product Catalog · 关于公司"),
            heading1("关于公司 About the Company"),
            body(`${COMPANY_NAME} 是专业液压榨油机制造商，提供全套油料加工设备：从种子预处理和炒制，到压榨、过滤和精炼。`),
            body(`Shandong Haonuo Machinery Equipment Group Co., Ltd. is a professional hydraulic oil press manufacturer offering complete oil processing equipment: from seed preparation and roasting, through pressing, filtering and refining.`),
            emptyLine(),
            body("本目录涵盖六大产品线："),
            bullet("液压榨油机（压力 300-620 吨）"),
            bullet("炒制和蒸籽设备"),
            bullet("种子预处理设备"),
            bullet("输送设备"),
            bullet("过滤和精炼设备"),
            bullet("前一代型号档案"),

            new Paragraph({ children: [new PageBreak()] }),

            // ===== 1. 液压榨油机 =====
            pageHeader("产品目录 · Product Catalog · 1. 液压榨油机"),
            heading1("1. 液压榨油机 Hydraulic Oil Presses"),
            body("立式液压榨油机主力产品线，压力 300-620 吨。可热压或冷压花生、芝麻、油菜籽、椰子、核桃及其他油料作物。"),
            emptyLine(),

            heading2("标准液压榨油机 HN325"),
            body("325 吨压力，适合小型作坊和新手油厂。每循环产能 20-100kg，饼面压强 27 MPa。可热压或冷压。"),
            bullet("压力：325 吨"),
            bullet("饼面压强：27 MPa"),
            bullet("每循环产能：20-100kg"),
            bullet("电机功率：2.2 KW"),
            bullet("电压：380V / 50Hz / 三相"),
            emptyLine(),

            heading2("HN365 立式液压榨油机"),
            bullet("额定压榨力：365 吨"),
            bullet("饼面压强：30 MPa"),
            bullet("机架：高强度钢，壁厚 3cm"),
            bullet("电机功率：2.2 KW"),
            emptyLine(),

            heading2("冷压榨油机 HN426"),
            body("500 吨压力，专为优质冷压油设计。液压系统压力 70 MPa，饼面压强 42 MPa。低温萃取保留风味和有益成分——椰子 VCO、芝麻油、核桃油等。"),
            bullet("压力：500 吨"),
            bullet("液压系统压力：70 MPa"),
            bullet("饼面压强：42 MPa"),
            bullet("电机功率：2.2 KW"),
            emptyLine(),

            heading2("超高压榨油机 HN500"),
            body("620 吨工业压力，针对带壳硬质油料。液压系统压力 75 MPa，饼面压强 52 MPa。可压榨带壳核桃、杏核及其他硬质作物。"),
            bullet("型号：HN500 Simple（单筒）/ HN500 Double（双筒）"),
            bullet("液压系统压力：75 MPa"),
            bullet("压榨力：620 吨"),
            bullet("电机功率：2.2 KW"),
            emptyLine(),

            heading2("椰奶榨油机 300 Type Coconut"),
            body("300 吨压力，600mm 食品级不锈钢料筒。专为椰奶、椰浆和 VCO 提取设计。可定制配置。"),
            bullet("电机功率：2.2 KW"),
            bullet("料筒外径：300mm"),
            bullet("料筒内径：240mm"),
            bullet("料筒类型：食品级不锈钢 600mm"),
            emptyLine(),

            heading2("污泥残渣脱水压榨机 HN325LB"),
            body("325 吨压力，专为污泥、残渣和工业脱水设计。饼面压强 27 MPa。"),
            emptyLine(),

            heading2("超高压冷压榨油机 HN480B"),
            body("600 吨冷压压力，针对带壳硬质油料和优质原料。液压系统压力 65 MPa，饼面压强 48 MPa。可定制配置用于核桃及其他作物冷压。"),
            bullet("型号：HN480B Simple（单筒）/ HN480B Double（双筒）"),
            bullet("液压系统压力：65 MPa"),
            bullet("压榨力：600 吨"),
            bullet("电机功率：2.2 KW"),

            new Paragraph({ children: [new PageBreak()] }),

            // ===== 2. 炒制和蒸籽设备 =====
            pageHeader("产品目录 · Product Catalog · 2. 炒制和蒸籽设备"),
            heading1("2. 炒制和蒸籽设备 Roasting & Steaming Equipment"),
            body("种子压榨前预处理：炒制和蒸籽调节原料水分和温度，提高出油率并改善成品风味。"),
            emptyLine(),

            heading2("自动电磁滚筒炒锅 100# / 130#"),
            body("带旋转滚筒和独立温控的炒锅——无明火均匀炒制，用于热压前预处理。三种规格。"),
            emptyLine(),

            heading2("电动蒸籽机 27KW"),
            body("压榨前调节种子水分和温度的电动蒸籽机。带温控蒸籽调节原料水分温度，最大化出油率。"),
            bullet("名称：New Electric Seed Steamer"),
            bullet("加水方式：手动 / 自动（双模式）"),
            bullet("蒸籽舱深度：600mm"),
            bullet("舱内径：600mm"),
            emptyLine(),

            heading2("导热油炒锅"),
            body("导热油加热，温度均匀稳定。适合大中型油厂连续作业。"),
            emptyLine(),

            heading2("烧柴式油厂蒸籽机 60 Type Wood-Fired"),
            body("用柴火或生物质的经济型蒸籽方案——适合电网有限的地区。"),
            bullet("炉体材质：Q365B 碳钢"),
            bullet("锅炉材质：304 不锈钢（抛光）"),
            bullet("炉体尺寸：500×500×750 mm"),

            new Paragraph({ children: [new PageBreak()] }),

            // ===== 3. 种子预处理设备 =====
            pageHeader("产品目录 · Product Catalog · 3. 种子预处理设备"),
            heading1("3. 种子预处理设备 Seed Preparation Equipment"),
            body("粉碎、压片和输送原料——增加出油率并延长压榨机使用寿命。"),
            emptyLine(),

            heading2("高速种子粉碎机 220 Type"),
            body("压榨前粉碎种子。有效粉碎棕榈仁、椰干和带壳种子。"),
            bullet("电压：380V"),
            bullet("电机功率：11 KW"),
            emptyLine(),

            heading2("油籽螺旋预压机 HN-CG60"),
            body("将种子压成薄片，在主液压压榨前提高总出油率 3-5%。"),
            bullet("型号：HN-CG60（YZJ-7.5/11）"),
            bullet("电机功率：7.5 KW 标准 / 11 KW 可选"),
            bullet("电压：380V（可配置）"),
            bullet("电机转速：1460 rpm"),
            bullet("产能：500 kg/h（7.5KW）/ 750 kg/h（11KW）"),
            emptyLine(),

            heading2("\"进料-粉碎-炒锅\"一体机 All-in-One"),
            body("整合进料、粉碎和炒锅的组合机。完整种子预处理——进料、粉碎、炒制——一个工作循环完成。"),
            bullet("产能：500-1000 kg/h（视配置而定）"),
            bullet("功能：自动进料 + 粉碎 + 炒制"),
            bullet("MOQ：1 套"),

            new Paragraph({ children: [new PageBreak()] }),

            // ===== 4. 输送设备 =====
            pageHeader("产品目录 · Product Catalog · 4. 输送设备"),
            heading1("4. 输送设备 Conveying Equipment"),
            emptyLine(),

            heading2("立式螺旋输送机 HN-SC"),
            body("两米高不锈钢立式螺旋输送机，自动将种子送入榨油机、炒锅和滤油机。1.1KW 减速电机，600×600×600mm 料斗，封闭结构。"),
            bullet("材质：不锈钢（螺旋管、机架）"),
            bullet("驱动：1.1 KW 减速电机"),
            bullet("料斗尺寸：600×600×600 mm"),
            bullet("结构：封闭型"),

            new Paragraph({ children: [new PageBreak()] }),

            // ===== 5. 过滤和精炼 =====
            pageHeader("产品目录 · Product Catalog · 5. 过滤和精炼"),
            heading1("5. 过滤和精炼 Filtration & Refining"),
            body("将粗油净化至商品级：过滤去除杂质，完整精炼——脱胶、中和、脱色和脱臭。"),
            emptyLine(),

            heading2("气动滤油机 HN-10SL"),
            body("高效压力过滤，适合中小型油厂。操作简单，滤板可重复使用。"),
            bullet("过滤面积：10 m²"),
            bullet("滤板数量：20 层"),
            bullet("电机功率：1.5 KW"),
            emptyLine(),

            heading2("食用油精炼线 Custom (1-100 吨/天)"),
            body("完整精炼线：脱胶、中和、脱色和脱臭。间歇式或连续式，生产优质食用油。"),
            bullet("产能：1-100 吨/天（可定制）"),
            bullet("工艺：脱胶 → 中和 → 脱色 → 脱臭"),
            bullet("模式：间歇式 / 连续式"),

            new Paragraph({ children: [new PageBreak()] }),

            // ===== 6. 前一代型号 =====
            pageHeader("产品目录 · Product Catalog · 6. 前一代型号"),
            heading1("6. 前一代型号（档案）Previous Generation Models"),
            body("HN300、HN355、HN400 和 HN480 已被当前 HN325、HN365、HN426 和 HN500 系列替代，但仍在生产并提供售后支持。"),
            emptyLine(),
            body("如需旧型号报价或技术支持，请联系我们。"),
            emptyLine(), emptyLine(),
            pageHeader(""),
            body(COMPANY_NAME),
            body(COMPANY_NAME_CN),
            body("Website: hydoilpress.com"),
            body("Email: sales@hydoilpress.com"),
            body("WhatsApp: +86 xxxxxxxxxx"),
        ]
    }]
});

Packer.toBuffer(doc).then(buffer => {
    fs.writeFileSync('中文产品目录.docx', buffer);
    console.log('✓ 中文产品目录.docx 已生成');
    console.log('  位置：' + __dirname + '\\中文产品目录.docx');
});
