const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, 
        AlignmentType, HeadingLevel, BorderStyle, WidthType, ShadingType,
        VerticalAlign } = require('docx');
const fs = require('fs');

const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };
const headerShade = { fill: "1F4E79", type: ShadingType.CLEAR };
const altShade = { fill: "F2F2F2", type: ShadingType.CLEAR };

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
        font: { ascii: "Arial", hAnsi: "Arial" },
        size: 20,
        color: shade ? "FFFFFF" : "000000"
      })]
    })]
  });
}

const doc = new Document({
  styles: {
    default: {
      document: { run: { font: { ascii: "Arial", hAnsi: "Arial" }, size: 22 } }
    }
  },
  sections: [{
    properties: {
      page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
    },
    children: [
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 120 },
        children: [new TextRun({ text: "HAONUO HYDRAULIC OIL PRESS FACTORY", bold: true, size: 32, font: { ascii: "Arial", hAnsi: "Arial" }, color: "1F4E79" })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 240 },
        children: [new TextRun({ text: "PROFORMA INVOICE / QUOTATION", bold: true, size: 28, font: { ascii: "Arial", hAnsi: "Arial" } })] }),

      new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "To: srugoa@gmail.com", size: 22, font: { ascii: "Arial", hAnsi: "Arial" } })] }),
      new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "From: Eason / Haonuo Machinery", size: 22, font: { ascii: "Arial", hAnsi: "Arial" } })] }),
      new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Date: November 20, 2026", size: 22, font: { ascii: "Arial", hAnsi: "Arial" } })] }),
      new Paragraph({ spacing: { after: 240 }, children: [new TextRun({ text: "Subject: HN300 Hydraulic Oil Press - FOB Qingdao", size: 22, font: { ascii: "Arial", hAnsi: "Arial" } })] }),

      new Paragraph({ spacing: { before: 200, after: 120 },
        children: [new TextRun({ text: "1. EQUIPMENT & PRICE", bold: true, size: 24, font: { ascii: "Arial", hAnsi: "Arial" }, color: "1F4E79" })] }),

      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [2800, 3400, 2826],
        rows: [
          new TableRow({ cantSplit: true, children: [
            cell("Description", 2800, headerShade, true, AlignmentType.CENTER),
            cell("Model / Spec", 3400, headerShade, true, AlignmentType.CENTER),
            cell("Price (FOB Qingdao)", 2826, headerShade, true, AlignmentType.CENTER)
          ]}),
          new TableRow({ cantSplit: true, children: [
            cell("Hydraulic Oil Press", 2800, null, false),
            cell("HN300 Simple (Single Barrel)", 3400, null, false),
            cell("USD 4,600.00", 2826, null, false, AlignmentType.CENTER)
          ]}),
          new TableRow({ cantSplit: true, children: [
            cell("Wooden Export Crate", 2800, altShade, false),
            cell("Included (standard)", 3400, altShade, false),
            cell("Included", 2826, altShade, false, AlignmentType.CENTER)
          ]}),
          new TableRow({ cantSplit: true, children: [
            cell("Export Customs & Loading", 2800, null, false),
            cell("Qingdao Port", 3400, null, false),
            cell("Included", 2826, null, false, AlignmentType.CENTER)
          ]}),
          new TableRow({ cantSplit: true, children: [
            cell("TOTAL FOB QINGDAO", 2800, headerShade, true, AlignmentType.CENTER),
            cell("", 3400, headerShade),
            cell("USD 4,600.00", 2826, headerShade, true, AlignmentType.CENTER)
          ]})
        ]
      }),

      new Paragraph({ spacing: { before: 200, after: 120 },
        children: [new TextRun({ text: "2. TECHNICAL SPECIFICATIONS", bold: true, size: 24, font: { ascii: "Arial", hAnsi: "Arial" }, color: "1F4E79" })] }),

      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        columnWidths: [4500, 4526],
        rows: [
          new TableRow({ cantSplit: true, children: [
            cell("Parameter", 4500, headerShade, true, AlignmentType.CENTER),
            cell("Value", 4526, headerShade, true, AlignmentType.CENTER)
          ]}),
          new TableRow({ cantSplit: true, children: [cell("Model", 4500, altShade), cell("HN300 Simple (Single)", 4526, altShade)] }),
          new TableRow({ cantSplit: true, children: [cell("Pressing Force", 4500), cell("300 Tonnes", 4526)] }),
          new TableRow({ cantSplit: true, children: [cell("System Pressure", 4500, altShade), cell("60 MPa", 4526, altShade)] }),
          new TableRow({ cantSplit: true, children: [cell("Cake Surface Pressure", 4500), cell("25 MPa", 4526)] }),
          new TableRow({ cantSplit: true, children: [cell("Tabung Press Inner Diameter", 4500, altShade), cell("390 mm", 4526, altShade)] }),
          new TableRow({ cantSplit: true, children: [cell("Tabung Press Height", 4500), cell("800 mm", 4526)] }),
          new TableRow({ cantSplit: true, children: [cell("Cylinder Stroke", 4500, altShade), cell("850 mm", 4526, altShade)] }),
          new TableRow({ cantSplit: true, children: [cell("Motor Power", 4500), cell("2.2 KW", 4526)] }),
          new TableRow({ cantSplit: true, children: [cell("Machine Weight", 4500, altShade), cell("~1.2 Tonnes", 4526, altShade)] }),
          new TableRow({ cantSplit: true, children: [cell("Overall Dimensions", 4500), cell("1100 x 1100 x 2350 mm", 4526)] }),
          new TableRow({ cantSplit: true, children: [cell("Standard Voltage", 4500, altShade), cell("380V / 50Hz / 3-Phase", 4526, altShade)] })
        ]
      }),

      new Paragraph({ spacing: { before: 200, after: 120 },
        children: [new TextRun({ text: "3. TERMS & CONDITIONS", bold: true, size: 24, font: { ascii: "Arial", hAnsi: "Arial" }, color: "1F4E79" })] }),

      new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "PRICE INCLUDES:", bold: true, font: { ascii: "Arial", hAnsi: "Arial" } })] }),
      new Paragraph({ spacing: { after: 60, indent: { left: 360 } }, children: [new TextRun({ text: "• Equipment itself", font: { ascii: "Arial", hAnsi: "Arial" } })] }),
      new Paragraph({ spacing: { after: 60, indent: { left: 360 } }, children: [new TextRun({ text: "• Wooden export packaging", font: { ascii: "Arial", hAnsi: "Arial" } })] }),
      new Paragraph({ spacing: { after: 120, indent: { left: 360 } }, children: [new TextRun({ text: "• Export customs + loading at Qingdao Port", font: { ascii: "Arial", hAnsi: "Arial" } })] }),

      new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "PRICE EXCLUDES:", bold: true, font: { ascii: "Arial", hAnsi: "Arial" } })] }),
      new Paragraph({ spacing: { after: 60, indent: { left: 360 } }, children: [new TextRun({ text: "• International sea freight", font: { ascii: "Arial", hAnsi: "Arial" } })] }),
      new Paragraph({ spacing: { after: 60, indent: { left: 360 } }, children: [new TextRun({ text: "• Marine insurance", font: { ascii: "Arial", hAnsi: "Arial" } })] }),
      new Paragraph({ spacing: { after: 60, indent: { left: 360 } }, children: [new TextRun({ text: "• Destination port customs clearance & delivery", font: { ascii: "Arial", hAnsi: "Arial" } })] }),

      new Paragraph({ spacing: { before: 200, after: 60 },
        children: [new TextRun({ text: "4. PAYMENT & LEAD TIME", bold: true, size: 24, font: { ascii: "Arial", hAnsi: "Arial" }, color: "1F4E79" })] }),

      new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Payment: 30% deposit (T/T bank transfer) to confirm order, 70% balance before shipment.", font: { ascii: "Arial", hAnsi: "Arial" } })] }),
      new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "Lead time: 15-25 working days after deposit received.", font: { ascii: "Arial", hAnsi: "Arial" } })] }),

      new Paragraph({ spacing: { before: 200, after: 60 },
        children: [new TextRun({ text: "5. WARRANTY", bold: true, size: 24, font: { ascii: "Arial", hAnsi: "Arial" }, color: "1F4E79" })] }),

      new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: "12 months from date of shipment. Lifetime technical support via WhatsApp, video calls, and English operation manuals.", font: { ascii: "Arial", hAnsi: "Arial" } })] }),

      new Paragraph({ spacing: { before: 200, after: 60 },
        children: [new TextRun({ text: "6. NOTES FOR YOUR APPLICATION", bold: true, size: 24, font: { ascii: "Arial", hAnsi: "Arial" }, color: "1F4E79" })] }),

      new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text: "This is our smallest and most economical press. The 390mm tabung easily fits ~20L bags (up to 250mm diameter). We recommend testing with a small sample first to optimize pressing time and pressure for your specific leaf material.", font: { ascii: "Arial", hAnsi: "Arial" } })] }),

      new Paragraph({ spacing: { before: 400 }, alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Best regards,", font: { ascii: "Arial", hAnsi: "Arial" } })] }),
      new Paragraph({ spacing: { after: 60 }, alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Eason", bold: true, font: { ascii: "Arial", hAnsi: "Arial" } })] }),
      new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Haonuo Hydraulic Oil Press Factory", font: { ascii: "Arial", hAnsi: "Arial" } })] }),
      new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "WhatsApp: +86 xxxxxxxxxx", font: { ascii: "Arial", hAnsi: "Arial" } })] })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("d:/Users/YYJ/Documents/Trae/HN300_Quotation.docx", buffer);
  console.log("Done: HN300_Quotation.docx");
});
