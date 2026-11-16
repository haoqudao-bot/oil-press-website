/**
 * HN426 Cold Press Hydraulic Oil Press — Specification Sheet (Word)
 * For Cristian Leabu (UK, walnut/apricot kernel, 100L/day)
 */

const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        AlignmentType, BorderStyle, WidthType, ShadingType, HeadingLevel,
        Footer, PageNumber } = require('docx');
const fs = require('fs');

const PRIMARY   = "1a365d";
const ACCENT    = "2b6cb0";
const LIGHT_BG  = "f7fafc";
const BORDER    = "e2e8f0";
const WHITE     = "ffffff";

// Cell border config
const cellBorder = { style: BorderStyle.SINGLE, size: 1, color: BORDER };
const cellBorders = { top: cellBorder, bottom: cellBorder, left: cellBorder, right: cellBorder };

// Helper: make a table with header row and alternating row colors
function makeTable(headerRow, dataRows, colWidths) {
  const border = { style: BorderStyle.SINGLE, size: 1, color: BORDER };
  const borders = { top: border, bottom: border, left: border, right: border };

  const rows = [];

  // Header row
  rows.push(new TableRow({
    cantSplit: true,
    children: headerRow.map((text, i) => new TableCell({
      borders,
      width: { size: colWidths[i], type: WidthType.DXA },
      shading: { fill: ACCENT, type: ShadingType.CLEAR },
      margins: { top: 80, bottom: 80, left: 120, right: 120 },
      children: [new Paragraph({
        children: [new TextRun({ text, bold: true, color: WHITE, font: "Arial", size: 20 })]
      })]
    }))
  }));

  // Data rows
  dataRows.forEach((row, rowIdx) => {
    rows.push(new TableRow({
      cantSplit: true,
      children: row.map((text, i) => new TableCell({
        borders,
        width: { size: colWidths[i], type: WidthType.DXA },
        shading: { fill: rowIdx % 2 === 0 ? LIGHT_BG : WHITE, type: ShadingType.CLEAR },
        margins: { top: 70, bottom: 70, left: 120, right: 120 },
        children: [new Paragraph({
          children: [new TextRun({ text, font: "Arial", size: 19 })]
        })]
      }))
    }));
  });

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    columnWidths: colWidths,
    rows
  });
}

// ── Build document ──────────────────────────────────────────

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 21 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, color: PRIMARY, font: "Arial" },
        paragraph: { spacing: { before: 280, after: 120 }, keepNext: false, keepLines: false } },
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },  // A4
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: "HAONUO Machinery · hydraulicoilpress.com · Page ", font: "Arial", size: 16, color: "a0aec0" }),
            new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 16, color: "a0aec0" }),
          ]
        })]
      })
    },
    children: [
      // ── TITLE BLOCK ──────────────────────────────────────
      new Paragraph({
        children: [new TextRun({ text: "HN426 Cold Press Hydraulic Oil Press", bold: true, font: "Arial", size: 44, color: PRIMARY })]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({ text: "500-Ton Force · 42 MPa Cake Pressure · Factory-Direct", font: "Arial", size: 22, color: ACCENT })]
      }),
      new Paragraph({
        spacing: { after: 200 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: ACCENT } },
        children: []
      }),

      // ── 1. CORE SPECIFICATIONS ───────────────────────────
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Core Specifications")] }),
      makeTable(
        ["Parameter", "Value"],
        [
          ["Model", "HN426 (Single Barrel)"],
          ["Pressing Force", "500 tons"],
          ["System Pressure", "70 MPa"],
          ["Cake Surface Pressure", "42 MPa"],
          ["Motor Power", "2.2 KW"],
          ["Standard Voltage", "380V / 50Hz (customizable for UK 415V)"],
          ["Barrel Inner Diameter", "Ø390 mm (standard, customizable)"],
          ["Barrel Height", "800 mm (standard, customizable)"],
          ["Cylinder Stroke", "850 mm"],
          ["Machine Weight (net)", "2.4 tons"],
          ["Packed Weight", "~2.6 tons (wooden crate)"],
          ["Overall Dimensions", "1200 × 1200 × 2750 mm"],
          ["Required Floor Space", "1.5 m × 1.5 m"],
          ["Minimum Ceiling Height", "2.8 m"],
        ],
        [3600, 4200]
      ),

      // ── 2. CYCLE TIME & THROUGHPUT ──────────────────────
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Cycle Time & Throughput")] }),
      makeTable(
        ["Mode", "Cycle Time", "Cake Residual Oil", "Batch Capacity"],
        [
          ["Cold Press (no heating)", "~2 hours per batch", "6–8%", "80–100 kg seeds"],
          ["Hot Press (after roasting)", "30–40 min per batch", "6–8%", "80–100 kg seeds"],
        ],
        [2000, 2200, 2000, 1600]
      ),
      new Paragraph({ spacing: { before: 120, after: 60 },
        children: [new TextRun({ text: "For your target: 100 L walnut/apricot kernel oil per day.", bold: true, font: "Arial", size: 20 })]
      }),
      new Paragraph({ children: [new TextRun({ text: "Walnut cold-press yield: 55–65% | Apricot kernel cold-press yield: ~45%. Mixed average: ~52% oil yield → 100 L oil needs ~190 kg seeds daily.", font: "Arial", size: 19 })] }),
      new Paragraph({ spacing: { after: 200 },
        children: [new TextRun({ text: "At 80–100 kg per batch / 2-hour cycle, one HN426 running ~4 hours per day is sufficient.", bold: true, color: ACCENT, font: "Arial", size: 20 })]
      }),

      // ── 3. SUITABLE OILSEEDS ─────────────────────────────
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Suitable Oilseeds")] }),
      makeTable(
        ["Category", "Oilseeds"],
        [
          ["Cold-Press Specialty", "Walnut kernel, in-shell walnut, apricot kernel, coconut (VCO), tiger nut, yellowhorn"],
          ["Conventional (hot or cold)", "Peanut, sesame, rapeseed, flaxseed, tea seed, soybean, sunflower seed"],
        ],
        [2800, 5000]
      ),

      // ── 4. MACHINE CONSTRUCTION ──────────────────────────
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Machine Construction & Key Features")] }),

      new Paragraph({ spacing: { after: 60 }, children: [
        new TextRun({ text: "Frame: ", bold: true, font: "Arial", size: 19, color: ACCENT }),
        new TextRun({ text: "3 cm thick steel plate — built for 500-ton continuous operation", font: "Arial", size: 19 })
      ]}),
      new Paragraph({ spacing: { after: 60 }, children: [
        new TextRun({ text: "Hydraulic System: ", bold: true, font: "Arial", size: 19, color: ACCENT }),
        new TextRun({ text: "German-designed high-low dual pump station, working pressure up to 70 MPa", font: "Arial", size: 19 })
      ]}),
      new Paragraph({ spacing: { after: 60 }, children: [
        new TextRun({ text: "Press Barrel: ", bold: true, font: "Arial", size: 19, color: ACCENT }),
        new TextRun({ text: "Bar-type slotted design — drains oil ~2–3% more efficiently than traditional drilled barrels", font: "Arial", size: 19 })
      ]}),
      new Paragraph({ spacing: { after: 60 }, children: [
        new TextRun({ text: "Control System: ", bold: true, font: "Arial", size: 19, color: ACCENT }),
        new TextRun({ text: "Microcomputer fully automatic — feeding → pressing → cake discharge, 4-hook removal", font: "Arial", size: 19 })
      ]}),
      new Paragraph({ spacing: { after: 60 }, children: [
        new TextRun({ text: "Barrel Option: ", bold: true, font: "Arial", size: 19, color: ACCENT }),
        new TextRun({ text: "Food-grade stainless steel available for premium edible oils", font: "Arial", size: 19 })
      ]}),
      new Paragraph({ spacing: { after: 200 }, children: [
        new TextRun({ text: "Power: ", bold: true, font: "Arial", size: 19, color: ACCENT }),
        new TextRun({ text: "Compatible with 5.5 kVA generator (recommended minimum)", font: "Arial", size: 19 })
      ]}),

      // ── 5. WHAT'S INCLUDED ───────────────────────────────
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("What's Included in the $10,000 FOB Qingdao Price")] }),
      makeTable(
        ["Included", "Details"],
        [
          ["Main Press Unit", "HN426 single barrel, hydraulic system, German pump station"],
          ["Digital Temperature Control", "Maintains cold-press temperature below 60°C"],
          ["Standard Tools", "Installation tools, wrenches, fittings"],
          ["First Set of Wearing Parts", "Seals, filter cloth, small consumables"],
          ["Documentation", "English manual + video installation guide + operation tutorials"],
          ["Voltage Customization", "Configured for UK 415V / 50Hz at no extra cost"],
        ],
        [2800, 5000]
      ),

      // ── 6. WARRANTY & AFTER-SALES ────────────────────────
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Warranty & After-Sales Support")] }),
      makeTable(
        ["Item", "Details"],
        [
          ["Factory Pre-Shipment Test", "48-hour continuous full-load test at 70 MPa / 500 tons before every shipment"],
          ["Warranty Period", "1 year covering manufacturing defects"],
          ["Technical Support", "Lifetime free remote support via WhatsApp / video call"],
          ["Common Spare Parts", "In stock: seals (~$8), filter cloth (~$15), hydraulic oil, control panel components"],
          ["Spare Parts Delivery", "DHL/FedEx express — 5–7 working days to UK addresses"],
          ["Installation Guidance", "Detailed video tutorials + live WhatsApp support during setup"],
        ],
        [2800, 5000]
      ),

      // ── 7. SHIPPING ──────────────────────────────────────
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Shipping to United Kingdom")] }),
      makeTable(
        ["Item", "Details"],
        [
          ["Machine Weight (net)", "2.4 tons"],
          ["Packed (wooden crate)", "~2.6 tons"],
          ["Sea Freight (LCL, Qingdao → Southampton/Felixstowe)", "$400 – $600 USD (estimate, final at booking)"],
          ["Transit Time (sea)", "25 – 30 days"],
          ["Production Lead Time", "15 – 25 working days (standard model, UK voltage pre-configured)"],
        ],
        [3000, 4800]
      ),

      // ── FOOTER TEXT ───────────────────────────────────────
      new Paragraph({ spacing: { before: 400 },
        border: { top: { style: BorderStyle.SINGLE, size: 4, color: BORDER } },
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "HAONUO Machinery · Shandong Haonuo Oil Press Equipment Co., Ltd.", font: "Arial", size: 17, color: "718096" })]
      }),
      new Paragraph({ alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "Factory: Shandong, China · Est. 2010 · 20+ skilled technicians", font: "Arial", size: 16, color: "718096" })]
      }),
      new Paragraph({ alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "Website: hydraulicoilpress.com · WhatsApp: +86 189 5714 9128", font: "Arial", size: 16, color: "718096" })]
      }),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("HN426_Specification_Sheet.docx", buffer);
  console.log("✅ Word document generated: HN426_Specification_Sheet.docx");
});
