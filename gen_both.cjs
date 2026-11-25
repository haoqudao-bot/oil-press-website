const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, 
        AlignmentType, BorderStyle, WidthType, ShadingType, VerticalAlign } = require('docx');
const fs = require('fs');

const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };
const headerShade = { fill: "1F4E79", type: ShadingType.CLEAR };
const altShade = { fill: "F2F2F2", type: ShadingType.CLEAR };
const fontEn = { ascii: "Arial", hAnsi: "Arial" };
const fontCn = { ascii: "Arial", hAnsi: "Arial", eastAsia: "Microsoft YaHei" };

function makeCell(text, w, shade, bold, align, fnt) {
  return new TableCell({
    borders, width: { size: w, type: WidthType.DXA }, shading: shade || undefined,
    verticalAlign: VerticalAlign.CENTER, margins: { top: 80, bottom: 80, left: 120, right: 120 },
    children: [new Paragraph({ alignment: align || AlignmentType.LEFT,
      children: [new TextRun({ text: text || "", bold: bold || false, font: fnt, size: 20, color: shade ? "FFFFFF" : "000000" })] })] });
}
function makeH(text, fnt, size) {
  return new TextRun({ text, bold: true, size: size || 24, font: fnt, color: "1F4E79" });
}
function makeP(text, fnt) {
  return new TextRun({ text, font: fnt, size: 22 });
}

function buildDoc(lang) {
  const isEn = lang === 'en';
  const fnt = isEn ? fontEn : fontCn;
  const t = {
    titleMain: isEn ? "HAONUO HYDRAULIC OIL PRESS FACTORY" : "浩诺液压榨油机厂",
    titleSub: isEn ? "QUOTATION" : "报 价 单",
    to: isEn ? "To:" : "收件人：",
    from: isEn ? "From:" : "发件人：",
    date: isEn ? "Date:" : "日期：",
    subject: isEn ? "Subject:" : "主题：",
    dateVal: isEn ? "November 20, 2026" : "2026 年 11 月 20 日",
    subjectVal: isEn ? "HN300 Hydraulic Oil Press - FOB Qingdao" : "HN300 入门型液压榨油机 — FOB 青岛",
    // Sec 1
    s1: isEn ? "1. Equipment & Price" : "一、设备及价格",
    colItem: isEn ? "Item" : "项目", colSpec: isEn ? "Specification" : "规格", colPrice: isEn ? "FOB Qingdao" : "FOB 青岛价",
    press: isEn ? "Hydraulic Oil Press" : "液压榨油机",
    modelName: isEn ? "HN300 Entry-level (Compact Single Barrel)" : "HN300 入门型（紧凑型单筒）",
    crate: isEn ? "Export Wooden Crate" : "出口木箱", crateVal: isEn ? "Standard export packaging" : "标准出口包装",
    customs: isEn ? "Customs & Loading" : "出口报关及装船", customsVal: isEn ? "Qingdao Port" : "青岛港",
    total: isEn ? "TOTAL FOB QINGDAO" : "FOB 青岛总价",
    // Sec 2
    s2: isEn ? "2. Technical Specifications" : "二、技术参数",
    colParam: isEn ? "Parameter" : "参数", colValue: isEn ? "Value" : "数值",
    pModel: isEn ? "Model" : "型号", pModelVal: isEn ? "HN300 Entry-level" : "HN300 入门型",
    pForce: isEn ? "Pressing Force" : "压榨力", pForceVal: isEn ? "300 Tonnes" : "300 吨",
    pSysPress: isEn ? "System Pressure" : "系统压力", pSysPressVal: isEn ? "60 MPa" : "60 MPa",
    pCakePress: isEn ? "Cake Surface Pressure" : "饼面压力", pCakePressVal: isEn ? "25 MPa" : "25 MPa",
    pTabungID: isEn ? "Tabung Press Inner Diameter" : "料筒内径", pTabungIDVal: isEn ? "390 mm" : "390 mm",
    pTabungH: isEn ? "Tabung Press Height" : "料筒高度", pTabungHVal: isEn ? "800 mm" : "800 mm",
    pStroke: isEn ? "Cylinder Stroke" : "油缸行程", pStrokeVal: isEn ? "850 mm" : "850 mm",
    pMotor: isEn ? "Motor Power" : "电机功率", pMotorVal: isEn ? "2.2 KW" : "2.2 KW",
    pWeight: isEn ? "Machine Weight" : "机器重量", pWeightVal: isEn ? "~1.2 Tonnes" : "约 1.2 吨",
    pDim: isEn ? "Overall Dimensions" : "外形尺寸", pDimVal: isEn ? "1100 x 1100 x 2350 mm" : "1100 x 1100 x 2350 mm",
    pVolt: isEn ? "Standard Voltage" : "标准电压", pVoltVal: isEn ? "380V / 50Hz / 3-Phase" : "380V / 50Hz / 三相",
    // Sec 3
    s3: isEn ? "3. Price Inclusions / Exclusions" : "三、价格说明",
    incl: isEn ? "INCLUDES:" : "价格包含：", excl: isEn ? "EXCLUDES:" : "价格不含：",
    incl1: isEn ? "Equipment itself" : "设备本身", incl2: isEn ? "Wooden export packaging" : "出口木箱包装",
    incl3: isEn ? "Export customs + loading at Qingdao Port" : "青岛港出口报关及装船",
    excl1: isEn ? "International sea freight" : "国际海运运费", excl2: isEn ? "Marine insurance" : "海运保险",
    excl3: isEn ? "Destination customs clearance & delivery" : "目的港清关及送货到工厂",
    // Sec 4
    s4: isEn ? "4. Payment & Lead Time" : "四、付款与交期",
    pay: isEn ? "Payment: 30% deposit (T/T bank transfer) to confirm order, 70% balance before shipment." : "付款方式：30% 预付（T/T 银行转账）确认订单，70% 发货前付清。",
    lead: isEn ? "Lead time: 15-25 working days after deposit received." : "生产周期：收到预付后 15-25 个工作日。",
    // Sec 5
    s5: isEn ? "5. Warranty" : "五、保修",
    warranty: isEn ? "12 months from date of shipment. Lifetime technical support via WhatsApp, video calls, and English operation manuals." : "发货后 12 个月保修，终身技术支持（WhatsApp / 视频指导 / 英文操作手册）。",
    // Sec 6
    s6: isEn ? "6. Application Notes" : "六、应用说明",
    notes: isEn ? "Our HN300 Entry-level model is a compact 300-ton press designed for small-scale production. The 390mm tabung easily fits ~20L bags (up to 250mm diameter). We recommend testing with a small sample first to optimize pressing time and pressure for your specific leaf material." : "HN300 入门型为紧凑型 300 吨压榨机，专为小批量生产设计。390mm 料筒可轻松装下直径 250mm 以内的 ~20L 袋子。建议先拿少量样品试压，优化您特定叶材的压榨时间和压力参数。",
    sign: isEn ? "Best regards," : "此致",
    brand: isEn ? "Haonuo Hydraulic Oil Press Factory" : "浩诺液压榨油机厂",
  };

  return new Document({
    styles: { default: { document: { run: { font: fnt, size: 22 } } } },
    sections: [{
      properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
      children: [
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 120 }, children: [makeH(t.titleMain, fnt, 32)] }),
        new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 240 }, children: [makeH(t.titleSub, fnt, 28)] }),
        new Paragraph({ spacing: { after: 60 }, children: [makeP(t.to + " srugoa@gmail.com", fnt)] }),
        new Paragraph({ spacing: { after: 60 }, children: [makeP(t.from + " Eason / " + t.brand, fnt)] }),
        new Paragraph({ spacing: { after: 60 }, children: [makeP(t.date + " " + t.dateVal, fnt)] }),
        new Paragraph({ spacing: { after: 240 }, children: [makeP(t.subject + " " + t.subjectVal, fnt)] }),

        new Paragraph({ spacing: { before: 200, after: 120 }, children: [makeH(t.s1, fnt)] }),
        new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, columnWidths: [2800, 3400, 2826], rows: [
          new TableRow({ cantSplit: true, children: [makeCell(t.colItem, 2800, headerShade, true, AlignmentType.CENTER, fnt), makeCell(t.colSpec, 3400, headerShade, true, AlignmentType.CENTER, fnt), makeCell(t.colPrice, 2826, headerShade, true, AlignmentType.CENTER, fnt)] }),
          new TableRow({ cantSplit: true, children: [makeCell(t.press, 2800, null, false, AlignmentType.LEFT, fnt), makeCell(t.modelName, 3400, null, false, AlignmentType.LEFT, fnt), makeCell("USD 4,600.00", 2826, null, false, AlignmentType.CENTER, fnt)] }),
          new TableRow({ cantSplit: true, children: [makeCell(t.crate, 2800, altShade, false, AlignmentType.LEFT, fnt), makeCell(t.crateVal, 3400, altShade, false, AlignmentType.LEFT, fnt), makeCell(isEn ? "Included" : "已包含", 2826, altShade, false, AlignmentType.CENTER, fnt)] }),
          new TableRow({ cantSplit: true, children: [makeCell(t.customs, 2800, null, false, AlignmentType.LEFT, fnt), makeCell(t.customsVal, 3400, null, false, AlignmentType.LEFT, fnt), makeCell(isEn ? "Included" : "已包含", 2826, null, false, AlignmentType.CENTER, fnt)] }),
          new TableRow({ cantSplit: true, children: [makeCell(t.total, 2800, headerShade, true, AlignmentType.CENTER, fnt), makeCell("", 3400, headerShade, false, AlignmentType.CENTER, fnt), makeCell("USD 4,600.00", 2826, headerShade, true, AlignmentType.CENTER, fnt)] })
        ]}),

        new Paragraph({ spacing: { before: 200, after: 120 }, children: [makeH(t.s2, fnt)] }),
        new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, columnWidths: [4500, 4526], rows: [
          new TableRow({ cantSplit: true, children: [makeCell(t.colParam, 4500, headerShade, true, AlignmentType.CENTER, fnt), makeCell(t.colValue, 4526, headerShade, true, AlignmentType.CENTER, fnt)] }),
          new TableRow({ cantSplit: true, children: [makeCell(t.pModel, 4500, altShade, false, AlignmentType.LEFT, fnt), makeCell(t.pModelVal, 4526, altShade, false, AlignmentType.LEFT, fnt)] }),
          new TableRow({ cantSplit: true, children: [makeCell(t.pForce, 4500, null, false, AlignmentType.LEFT, fnt), makeCell(t.pForceVal, 4526, null, false, AlignmentType.LEFT, fnt)] }),
          new TableRow({ cantSplit: true, children: [makeCell(t.pSysPress, 4500, altShade, false, AlignmentType.LEFT, fnt), makeCell(t.pSysPressVal, 4526, altShade, false, AlignmentType.LEFT, fnt)] }),
          new TableRow({ cantSplit: true, children: [makeCell(t.pCakePress, 4500, null, false, AlignmentType.LEFT, fnt), makeCell(t.pCakePressVal, 4526, null, false, AlignmentType.LEFT, fnt)] }),
          new TableRow({ cantSplit: true, children: [makeCell(t.pTabungID, 4500, altShade, false, AlignmentType.LEFT, fnt), makeCell(t.pTabungIDVal, 4526, altShade, false, AlignmentType.LEFT, fnt)] }),
          new TableRow({ cantSplit: true, children: [makeCell(t.pTabungH, 4500, null, false, AlignmentType.LEFT, fnt), makeCell(t.pTabungHVal, 4526, null, false, AlignmentType.LEFT, fnt)] }),
          new TableRow({ cantSplit: true, children: [makeCell(t.pStroke, 4500, altShade, false, AlignmentType.LEFT, fnt), makeCell(t.pStrokeVal, 4526, altShade, false, AlignmentType.LEFT, fnt)] }),
          new TableRow({ cantSplit: true, children: [makeCell(t.pMotor, 4500, null, false, AlignmentType.LEFT, fnt), makeCell(t.pMotorVal, 4526, null, false, AlignmentType.LEFT, fnt)] }),
          new TableRow({ cantSplit: true, children: [makeCell(t.pWeight, 4500, altShade, false, AlignmentType.LEFT, fnt), makeCell(t.pWeightVal, 4526, altShade, false, AlignmentType.LEFT, fnt)] }),
          new TableRow({ cantSplit: true, children: [makeCell(t.pDim, 4500, null, false, AlignmentType.LEFT, fnt), makeCell(t.pDimVal, 4526, null, false, AlignmentType.LEFT, fnt)] }),
          new TableRow({ cantSplit: true, children: [makeCell(t.pVolt, 4500, altShade, false, AlignmentType.LEFT, fnt), makeCell(t.pVoltVal, 4526, altShade, false, AlignmentType.LEFT, fnt)] })
        ]}),

        new Paragraph({ spacing: { before: 200, after: 120 }, children: [makeH(t.s3, fnt)] }),
        new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: t.incl, bold: true, font: fnt, size: 22 })] }),
        new Paragraph({ spacing: { after: 60, indent: { left: 360 } }, children: [makeP((isEn ? "- " : "• ") + t.incl1, fnt)] }),
        new Paragraph({ spacing: { after: 60, indent: { left: 360 } }, children: [makeP((isEn ? "- " : "• ") + t.incl2, fnt)] }),
        new Paragraph({ spacing: { after: 120, indent: { left: 360 } }, children: [makeP((isEn ? "- " : "• ") + t.incl3, fnt)] }),
        new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: t.excl, bold: true, font: fnt, size: 22 })] }),
        new Paragraph({ spacing: { after: 60, indent: { left: 360 } }, children: [makeP((isEn ? "- " : "• ") + t.excl1, fnt)] }),
        new Paragraph({ spacing: { after: 60, indent: { left: 360 } }, children: [makeP((isEn ? "- " : "• ") + t.excl2, fnt)] }),
        new Paragraph({ spacing: { after: 120, indent: { left: 360 } }, children: [makeP((isEn ? "- " : "• ") + t.excl3, fnt)] }),

        new Paragraph({ spacing: { before: 200, after: 120 }, children: [makeH(t.s4, fnt)] }),
        new Paragraph({ spacing: { after: 60 }, children: [makeP(t.pay, fnt)] }),
        new Paragraph({ spacing: { after: 120 }, children: [makeP(t.lead, fnt)] }),

        new Paragraph({ spacing: { before: 200, after: 120 }, children: [makeH(t.s5, fnt)] }),
        new Paragraph({ spacing: { after: 120 }, children: [makeP(t.warranty, fnt)] }),

        new Paragraph({ spacing: { before: 200, after: 120 }, children: [makeH(t.s6, fnt)] }),
        new Paragraph({ spacing: { after: 120 }, children: [makeP(t.notes, fnt)] }),

        new Paragraph({ spacing: { before: 400 }, alignment: AlignmentType.RIGHT, children: [makeP(t.sign, fnt)] }),
        new Paragraph({ spacing: { after: 60 }, alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Eason", bold: true, font: fnt, size: 22 })] }),
        new Paragraph({ alignment: AlignmentType.RIGHT, children: [makeP(t.brand, fnt)] }),
        new Paragraph({ alignment: AlignmentType.RIGHT, children: [makeP((isEn ? "WhatsApp: " : "WhatsApp：") + "+86 xxxxxxxxxx", fnt)] })
      ]
    }]
  });
}

Promise.all([
  Packer.toBuffer(buildDoc('en')),
  Packer.toBuffer(buildDoc('cn'))
]).then(([en, cn]) => {
  fs.writeFileSync("d:/Users/YYJ/Documents/Trae/HN300_Quotation_EN.docx", en);
  fs.writeFileSync("d:/Users/YYJ/Documents/Trae/HN300_报价单_中文.docx", cn);
  console.log("Both done");
});
