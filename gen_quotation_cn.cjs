const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, 
        AlignmentType, BorderStyle, WidthType, ShadingType,
        VerticalAlign } = require('docx');
const fs = require('fs');

const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };
const headerShade = { fill: "1F4E79", type: ShadingType.CLEAR };
const altShade = { fill: "F2F2F2", type: ShadingType.CLEAR };
const font = { ascii: "Arial", hAnsi: "Arial", eastAsia: "Microsoft YaHei" };

function cell(text, width, shade, bold, align) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: shade || undefined,
    verticalAlign: VerticalAlign.CENTER,
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
    children: [new Paragraph({
      alignment: align || AlignmentType.LEFT,
      children: [new TextRun({
        text: text,
        bold: bold || false,
        font: font,
        size: 20,
        color: shade ? "FFFFFF" : "000000"
      })]
    })]
  });
}

function h(text, size) {
  return new TextRun({ text: text, bold: true, size: size || 24, font: font, color: "1F4E79" });
}
function p(text, size) {
  return new TextRun({ text: text, font: font, size: size || 22 });
}

const doc = new Document({
  styles: {
    default: { document: { run: { font: font, size: 22 } } }
  },
  sections: [{
    properties: {
      page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
    },
    children: [
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 120 },
        children: [new TextRun({ text: "浩诺液压榨油机厂", bold: true, size: 32, font: font, color: "1F4E79" })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 240 },
        children: [new TextRun({ text: "报 价 单", bold: true, size: 28, font: font })] }),

      new Paragraph({ spacing: { after: 60 }, children: [p("收件人：srugoa@gmail.com")] }),
      new Paragraph({ spacing: { after: 60 }, children: [p("发件人：Eason / 浩诺机械")] }),
      new Paragraph({ spacing: { after: 60 }, children: [p("日期：2026 年 11 月 20 日")] }),
      new Paragraph({ spacing: { after: 240 }, children: [p("主题：HN300 型液压榨油机 — FOB 青岛")] }),

      new Paragraph({ spacing: { before: 200, after: 120 }, children: [h("一、设备及价格", 24)] }),

      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [2800, 3400, 2826],
        rows: [
          new TableRow({ cantSplit: true, children: [
            cell("项目", 2800, headerShade, true, AlignmentType.CENTER),
            cell("规格 / 说明", 3400, headerShade, true, AlignmentType.CENTER),
            cell("FOB 青岛价", 2826, headerShade, true, AlignmentType.CENTER)
          ]}),
          new TableRow({ cantSplit: true, children: [
            cell("液压榨油机", 2800, null, false),
            cell("HN300 单筒型", 3400, null, false),
            cell("USD 4,600.00", 2826, null, false, AlignmentType.CENTER)
          ]}),
          new TableRow({ cantSplit: true, children: [
            cell("出口木箱", 2800, altShade, false),
            cell("标准出口包装", 3400, altShade, false),
            cell("已包含", 2826, altShade, false, AlignmentType.CENTER)
          ]}),
          new TableRow({ cantSplit: true, children: [
            cell("出口报关及装船", 2800, null, false),
            cell("青岛港", 3400, null, false),
            cell("已包含", 2826, null, false, AlignmentType.CENTER)
          ]}),
          new TableRow({ cantSplit: true, children: [
            cell("FOB 青岛总价", 2800, headerShade, true, AlignmentType.CENTER),
            cell("", 3400, headerShade),
            cell("USD 4,600.00", 2826, headerShade, true, AlignmentType.CENTER)
          ]})
        ]
      }),

      new Paragraph({ spacing: { before: 200, after: 120 }, children: [h("二、技术参数", 24)] }),

      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [4500, 4526],
        rows: [
          new TableRow({ cantSplit: true, children: [
            cell("参数", 4500, headerShade, true, AlignmentType.CENTER),
            cell("数值", 4526, headerShade, true, AlignmentType.CENTER)
          ]}),
          new TableRow({ cantSplit: true, children: [cell("型号", 4500, altShade), cell("HN300 单筒型", 4526, altShade)] }),
          new TableRow({ cantSplit: true, children: [cell("压榨力", 4500), cell("300 吨", 4526)] }),
          new TableRow({ cantSplit: true, children: [cell("系统压力", 4500, altShade), cell("60 MPa", 4526, altShade)] }),
          new TableRow({ cantSplit: true, children: [cell("饼面压力", 4500), cell("25 MPa", 4526)] }),
          new TableRow({ cantSplit: true, children: [cell("料筒内径", 4500, altShade), cell("390 mm", 4526, altShade)] }),
          new TableRow({ cantSplit: true, children: [cell("料筒高度", 4500), cell("800 mm", 4526)] }),
          new TableRow({ cantSplit: true, children: [cell("油缸行程", 4500, altShade), cell("850 mm", 4526, altShade)] }),
          new TableRow({ cantSplit: true, children: [cell("电机功率", 4500), cell("2.2 KW", 4526)] }),
          new TableRow({ cantSplit: true, children: [cell("机器重量", 4500, altShade), cell("约 1.2 吨", 4526, altShade)] }),
          new TableRow({ cantSplit: true, children: [cell("外形尺寸", 4500), cell("1100 x 1100 x 2350 mm", 4526)] }),
          new TableRow({ cantSplit: true, children: [cell("标准电压", 4500, altShade), cell("380V / 50Hz / 三相", 4526, altShade)] })
        ]
      }),

      new Paragraph({ spacing: { before: 200, after: 120 }, children: [h("三、价格说明", 24)] }),
      new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "价格包含：", bold: true, font: font })] }),
      new Paragraph({ spacing: { after: 60, indent: { left: 360 } }, children: [p("• 设备本身")] }),
      new Paragraph({ spacing: { after: 60, indent: { left: 360 } }, children: [p("• 出口木箱包装")] }),
      new Paragraph({ spacing: { after: 120, indent: { left: 360 } }, children: [p("• 青岛港出口报关及装船")] }),
      new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "价格不含：", bold: true, font: font })] }),
      new Paragraph({ spacing: { after: 60, indent: { left: 360 } }, children: [p("• 国际海运运费")] }),
      new Paragraph({ spacing: { after: 60, indent: { left: 360 } }, children: [p("• 海运保险")] }),
      new Paragraph({ spacing: { after: 120, indent: { left: 360 } }, children: [p("• 目的港清关及送货到工厂")] }),

      new Paragraph({ spacing: { before: 200, after: 120 }, children: [h("四、付款与交期", 24)] }),
      new Paragraph({ spacing: { after: 60 }, children: [p("付款方式：30% 预付（T/T 银行转账）确认订单，70% 发货前付清。")] }),
      new Paragraph({ spacing: { after: 120 }, children: [p("生产周期：收到预付后 15-25 个工作日。")] }),

      new Paragraph({ spacing: { before: 200, after: 120 }, children: [h("五、保修", 24)] }),
      new Paragraph({ spacing: { after: 120 }, children: [p("发货后 12 个月保修，终身技术支持（WhatsApp / 视频指导 / 英文操作手册）。")] }),

      new Paragraph({ spacing: { before: 200, after: 120 }, children: [h("六、针对您应用的说明", 24)] }),
      new Paragraph({ spacing: { after: 120 }, children: [p("此型号为我厂紧凑型入门机。390mm 料筒可轻松装下直径 250mm 以内的袋子。建议先用少量样品试压，优化您特定叶材的压榨时间和压力参数。")] }),

      new Paragraph({ spacing: { before: 400 }, alignment: AlignmentType.RIGHT, children: [p("此致")] }),
      new Paragraph({ spacing: { after: 60 }, alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Eason", bold: true, font: font })] }),
      new Paragraph({ alignment: AlignmentType.RIGHT, children: [p("浩诺液压榨油机厂")] }),
      new Paragraph({ alignment: AlignmentType.RIGHT, children: [p("WhatsApp：+86 xxxxxxxxxx")] })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("d:/Users/YYJ/Documents/Trae/HN300_报价单_中文.docx", buffer);
  console.log("Done");
});
