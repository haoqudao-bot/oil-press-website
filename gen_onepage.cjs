const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, 
        AlignmentType, BorderStyle, WidthType, ShadingType, VerticalAlign } = require('docx');
const fs = require('fs');

const border = { style: BorderStyle.SINGLE, size: 1, color: "BBBBBB" };
const borders = { top: border, bottom: border, left: border, right: border };
const headerShade = { fill: "1F4E79", type: ShadingType.CLEAR };
const font = { ascii: "Arial", hAnsi: "Arial", eastAsia: "Microsoft YaHei" };

function cell(text, w, shade, bold, align, sz) {
  return new TableCell({ borders, width: { size: w, type: WidthType.DXA }, shading: shade || undefined,
    verticalAlign: VerticalAlign.CENTER, margins: { top: 40, bottom: 40, left: 80, right: 80 },
    children: [new Paragraph({ alignment: align || AlignmentType.LEFT, spacing: { before: 0, after: 0 },
      children: [new TextRun({ text: text || "", bold: bold || false, font: font, size: sz || 18, color: shade ? "FFFFFF" : "000000" })] })] });
}
function line(text, bold, color, sz) {
  return new Paragraph({ spacing: { before: 60, after: 0 },
    children: [new TextRun({ text: text, bold: bold || false, color: color || "000000", font: font, size: sz || 18 })] });
}

const doc = new Document({
  styles: { default: { document: { run: { font: font, size: 18 } } } },
  sections: [{
    properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 720, right: 720, bottom: 720, left: 720 } } },
    children: [
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 60 },
        children: [new TextRun({ text: "浩诺液压榨油机厂  |  报 价 单", bold: true, size: 26, font: font, color: "1F4E79" })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 120 },
        children: [new TextRun({ text: "收件：srugoa@gmail.com  |  发件：Eason  |  2026-11-20  |  HN300 FOB 青岛", size: 16, font: font })] }),

      line("一、设备及价格", true, "1F4E79", 20),
      new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, columnWidths: [2200, 3200, 2600], rows: [
        new TableRow({ cantSplit: true, children: [
          cell("项目", 2200, headerShade, true, AlignmentType.CENTER, 16),
          cell("规格", 3200, headerShade, true, AlignmentType.CENTER, 16),
          cell("FOB 青岛价", 2600, headerShade, true, AlignmentType.CENTER, 16) ]}),
        new TableRow({ cantSplit: true, children: [
          cell("液压榨油机", 2200, null, false, AlignmentType.LEFT, 16),
          cell("HN300 单筒型", 3200, null, false, AlignmentType.LEFT, 16),
          cell("USD 4,600.00", 2600, null, false, AlignmentType.CENTER, 16) ]}),
        new TableRow({ cantSplit: true, children: [
          cell("出口木箱", 2200, { fill: "F2F2F2", type: ShadingType.CLEAR }, false, AlignmentType.LEFT, 16),
          cell("标准出口包装", 3200, { fill: "F2F2F2", type: ShadingType.CLEAR }, false, AlignmentType.LEFT, 16),
          cell("已包含", 2600, { fill: "F2F2F2", type: ShadingType.CLEAR }, false, AlignmentType.CENTER, 16) ]}),
        new TableRow({ cantSplit: true, children: [
          cell("报关及装船", 2200, null, false, AlignmentType.LEFT, 16),
          cell("青岛港", 3200, null, false, AlignmentType.LEFT, 16),
          cell("已包含", 2600, null, false, AlignmentType.CENTER, 16) ]})
      ]}),

      line("二、技术参数", true, "1F4E79", 20),
      new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, columnWidths: [2250, 2250, 2250, 2250], rows: [
        new TableRow({ cantSplit: true, children: [
          cell("型号", 2250, headerShade, true, AlignmentType.CENTER, 16), cell("HN300 单筒", 2250, null, false, AlignmentType.CENTER, 16),
          cell("压榨力", 2250, headerShade, true, AlignmentType.CENTER, 16), cell("300 吨", 2250, null, false, AlignmentType.CENTER, 16) ]}),
        new TableRow({ cantSplit: true, children: [
          cell("系统压力", 2250, headerShade, true, AlignmentType.CENTER, 16), cell("60 MPa", 2250, null, false, AlignmentType.CENTER, 16),
          cell("饼面压力", 2250, headerShade, true, AlignmentType.CENTER, 16), cell("25 MPa", 2250, null, false, AlignmentType.CENTER, 16) ]}),
        new TableRow({ cantSplit: true, children: [
          cell("料筒内径", 2250, headerShade, true, AlignmentType.CENTER, 16), cell("390 mm", 2250, null, false, AlignmentType.CENTER, 16),
          cell("料筒高度", 2250, headerShade, true, AlignmentType.CENTER, 16), cell("800 mm", 2250, null, false, AlignmentType.CENTER, 16) ]}),
        new TableRow({ cantSplit: true, children: [
          cell("油缸行程", 2250, headerShade, true, AlignmentType.CENTER, 16), cell("850 mm", 2250, null, false, AlignmentType.CENTER, 16),
          cell("电机功率", 2250, headerShade, true, AlignmentType.CENTER, 16), cell("2.2 KW", 2250, null, false, AlignmentType.CENTER, 16) ]}),
        new TableRow({ cantSplit: true, children: [
          cell("重量", 2250, headerShade, true, AlignmentType.CENTER, 16), cell("约 1.2 吨", 2250, null, false, AlignmentType.CENTER, 16),
          cell("外形尺寸", 2250, headerShade, true, AlignmentType.CENTER, 16), cell("1100×1100×2350 mm", 2250, null, false, AlignmentType.CENTER, 16) ]}),
        new TableRow({ cantSplit: true, children: [
          cell("标准电压", 4500, headerShade, true, AlignmentType.CENTER, 16), cell("380V / 50Hz / 三相", 4500, null, false, AlignmentType.CENTER, 16) ]})
      ]}),

      line("三、价格说明 / 付款 / 保修", true, "1F4E79", 20),
      new Paragraph({ spacing: { before: 40, after: 40 }, children: [new TextRun({ text: "包含：设备、木箱、青岛港报关装船  |  不含：国际海运、保险、目的港清关及送货", font: font, size: 16 })] }),
      new Paragraph({ spacing: { before: 0, after: 40 }, children: [new TextRun({ text: "付款：30% 预付（T/T），70% 发货前付清  |  交期：收预付后 15-25 工作日", font: font, size: 16 })] }),
      new Paragraph({ spacing: { before: 0, after: 0 }, children: [new TextRun({ text: "保修：发货后 12 个月保修 + 终身技术支持（WhatsApp / 视频 / 英文手册）", font: font, size: 16 })] }),

      line("四、应用建议", true, "1F4E79", 20),
      new Paragraph({ spacing: { before: 40, after: 40 }, children: [new TextRun({ text: "此为我厂最小最经济型号。390mm 料筒可装下直径 250mm 以内的 ~20L 袋子。建议先拿少量样品试压，优化您特定叶材的压榨参数。", font: font, size: 16 })] }),

      new Paragraph({ spacing: { before: 120 }, alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "此致", font: font, size: 16 })] }),
      new Paragraph({ spacing: { after: 20 }, alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Eason  |  浩诺液压榨油机厂  |  WhatsApp：+86 xxxxxxxxxx", bold: true, font: font, size: 16 })] })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("d:/Users/YYJ/Documents/Trae/HN300_报价单_1页版.docx", buffer);
  console.log("Done");
});
