"""
HN426 Cold Press Hydraulic Oil Press — Specification Sheet
For Cristian Leabu (UK, walnut/apricot kernel, 100L/day)
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    KeepTogether, PageBreak, HRFlowable
)

# ── Color palette ────────────────────────────────────────
PRIMARY   = HexColor('#1a365d')   # Dark navy
ACCENT    = HexColor('#2b6cb0')   # Medium blue
LIGHT_BG  = HexColor('#f7fafc')   # Light gray
BORDER    = HexColor('#e2e8f0')   # Light border
TEXT_DARK = HexColor('#2d3748')

# ── Font: use reportlab's built-in Helvetica (no CJK needed, EN only) ──
FONT_BODY = 'Helvetica'
FONT_BOLD = 'Helvetica-Bold'

# ── Build document ────────────────────────────────────────
output_path = r"d:\Users\YYJ\Documents\Trae\HN426_Specification_Sheet.pdf"

doc = SimpleDocTemplate(
    output_path,
    pagesize=letter,
    leftMargin=0.75 * inch,
    rightMargin=0.75 * inch,
    topMargin=0.75 * inch,
    bottomMargin=0.75 * inch,
)

styles = getSampleStyleSheet()

# Custom styles
title_style = ParagraphStyle(
    'CustomTitle', fontName=FONT_BOLD, fontSize=22, leading=26,
    textColor=PRIMARY, spaceAfter=4, alignment=TA_LEFT,
)
subtitle_style = ParagraphStyle(
    'CustomSub', fontName=FONT_BODY, fontSize=11, leading=14,
    textColor=ACCENT, spaceAfter=16, alignment=TA_LEFT,
)
h1_style = ParagraphStyle(
    'CustomH1', fontName=FONT_BOLD, fontSize=14, leading=18,
    textColor=PRIMARY, spaceBefore=16, spaceAfter=8,
)
body_style = ParagraphStyle(
    'CustomBody', fontName=FONT_BODY, fontSize=10, leading=14,
    textColor=TEXT_DARK, spaceAfter=6,
)
note_style = ParagraphStyle(
    'CustomNote', fontName=FONT_BODY, fontSize=9, leading=12,
    textColor=HexColor('#718096'), spaceAfter=6,
)
footer_style = ParagraphStyle(
    'CustomFooter', fontName=FONT_BODY, fontSize=8, leading=11,
    textColor=HexColor('#a0aec0'), alignment=TA_CENTER,
)

story = []

# ═══════════════════════════════════════════════════════════
# HEADER
# ═══════════════════════════════════════════════════════════

story.append(Paragraph("HN426 Cold Press Hydraulic Oil Press", title_style))
story.append(Paragraph("500-Ton Force · 42 MPa Cake Pressure · Factory-Direct", subtitle_style))
story.append(HRFlowable(width="100%", thickness=2, color=ACCENT, spaceAfter=14))

# ═══════════════════════════════════════════════════════════
# SECTION 1 — Core Specifications
# ═══════════════════════════════════════════════════════════

story.append(Paragraph("Core Specifications", h1_style))

spec_data = [
    ["Parameter", "Value"],
    ["Model", "HN426 (Single Barrel)"],
    ["Pressing Force", "500 tons"],
    ["System Pressure", "70 MPa"],
    ["Cake Surface Pressure", "42 MPa"],
    ["Motor Power", "2.2 KW"],
    ["Standard Voltage", "380V / 50Hz (customizable for UK 415V)"],
    ["Barrel Inner Diameter (Standard)", "Ø390 mm"],
    ["Barrel Height (Standard)", "800 mm"],
    ["Cylinder Stroke", "850 mm"],
    ["Machine Weight", "2.4 tons (net)"],
    ["Packed Weight (wooden crate)", "~2.6 tons"],
    ["Overall Dimensions", "1200 × 1200 × 2750 mm"],
    ["Required Floor Space", "1.5 m × 1.5 m"],
    ["Minimum Ceiling Height", "2.8 m"],
]

spec_table = Table(spec_data, colWidths=[2.8 * inch, 3.8 * inch])
spec_table.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), ACCENT),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('FONTNAME', (0, 0), (-1, 0), FONT_BOLD),
    ('FONTSIZE', (0, 0), (-1, 0), 10),
    ('FONTSIZE', (0, 1), (-1, -1), 9.5),
    ('BACKGROUND', (0, 1), (0, -1), LIGHT_BG),
    ('FONTNAME', (0, 1), (0, -1), FONT_BOLD),
    ('TEXTCOLOR', (0, 1), (0, -1), PRIMARY),
    ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 10),
    ('RIGHTPADDING', (0, 0), (-1, -1), 10),
    ('TOPPADDING', (0, 0), (-1, -1), 7),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 7),
    ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
]))
story.append(spec_table)

# ═══════════════════════════════════════════════════════════
# SECTION 2 — Cycle Time & Throughput
# ═══════════════════════════════════════════════════════════

story.append(Paragraph("Cycle Time & Throughput", h1_style))

cycle_data = [
    ["Mode", "Cycle Time", "Cake Residual Oil", "Batch Capacity"],
    ["Cold Press (no heating)", "~2 hours per batch", "6–8%", "80–100 kg seeds"],
    ["Hot Press (after roasting)", "30–40 min per batch", "6–8%", "80–100 kg seeds"],
]
cycle_table = Table(cycle_data, colWidths=[1.7*inch, 1.8*inch, 1.6*inch, 1.5*inch])
cycle_table.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), ACCENT),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('FONTNAME', (0, 0), (-1, 0), FONT_BOLD),
    ('FONTSIZE', (0, 0), (-1, 0), 9.5),
    ('FONTSIZE', (0, 1), (-1, -1), 9),
    ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 8),
    ('RIGHTPADDING', (0, 0), (-1, -1), 8),
    ('TOPPADDING', (0, 0), (-1, -1), 6),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
    ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
]))
story.append(cycle_table)
story.append(Spacer(1, 6))
story.append(Paragraph(
    "<b>For your target: 100 L walnut/apricot kernel oil per day.</b><br/>"
    "Walnut cold-press yield: 55–65% | Apricot kernel cold-press yield: ~45%.<br/>"
    "Mixed average: ~52% oil yield → 100 L oil needs ~190 kg seeds daily.<br/>"
    "At 80–100 kg per batch / 2-hour cycle, <b>one HN426 running ~4 hours per day is sufficient.</b>",
    body_style
))

# ═══════════════════════════════════════════════════════════
# SECTION 3 — Oils Suitable for HN426
# ═══════════════════════════════════════════════════════════

story.append(Paragraph("Suitable Oilseeds", h1_style))

seeds_data = [
    ["Category", "Oilseeds"],
    ["★ Cold-Press Specialty", "Walnut kernel, in-shell walnut, apricot kernel, coconut (VCO), tiger nut, yellowhorn"],
    ["Conventional (hot or cold)", "Peanut, sesame, rapeseed, flaxseed, tea seed, soybean, sunflower seed"],
]
seeds_table = Table(seeds_data, colWidths=[2.2*inch, 4.4*inch])
seeds_table.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), ACCENT),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('FONTNAME', (0, 0), (-1, 0), FONT_BOLD),
    ('FONTSIZE', (0, 0), (-1, 0), 10),
    ('FONTSIZE', (0, 1), (-1, -1), 9.5),
    ('BACKGROUND', (0, 1), (0, -1), LIGHT_BG),
    ('FONTNAME', (0, 1), (0, -1), FONT_BOLD),
    ('TEXTCOLOR', (0, 1), (0, -1), PRIMARY),
    ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 10),
    ('RIGHTPADDING', (0, 0), (-1, -1), 10),
    ('TOPPADDING', (0, 0), (-1, -1), 8),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
    ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
]))
story.append(seeds_table)

# ═══════════════════════════════════════════════════════════
# SECTION 4 — Machine Construction
# ═══════════════════════════════════════════════════════════

story.append(Paragraph("Machine Construction & Key Features", h1_style))

features = [
    ("Frame", "3 cm thick steel plate — built for 500-ton continuous operation"),
    ("Hydraulic System", "German-designed high-low dual pump station, working pressure up to 70 MPa"),
    ("Press Barrel", "Bar-type slotted design — drains oil ~2–3% more efficiently than traditional drilled barrels"),
    ("Control System", "Microcomputer fully automatic — feeding → pressing → cake discharge, 4-hook removal"),
    ("Barrel Option", "Food-grade stainless steel available for premium edible oils"),
    ("Power", "Compatible with 5.5 kVA generator (recommended minimum)"),
]

for feature_name, feature_desc in features:
    story.append(Paragraph(
        "<b><font color='#2b6cb0'>" + feature_name + "</font></b> — " + feature_desc,
        body_style
    ))

# ═══════════════════════════════════════════════════════════
# SECTION 5 — What's Included & Warranty
# ═══════════════════════════════════════════════════════════

story.append(Paragraph("What's Included in the $10,000 FOB Qingdao Price", h1_style))

included_data = [
    ["Included", "Details"],
    ["Main Press Unit", "HN426 single barrel, hydraulic system, German pump station"],
    ["Digital Temperature Control", "Maintains cold-press temperature below 60°C"],
    ["Standard Tools", "Installation tools, wrenches, fittings"],
    ["First Set of Wearing Parts", "Seals, filter cloth, small consumables"],
    ["Documentation", "English manual + video installation guide + operation tutorials"],
    ["Voltage Customization", "Configured for UK 415V / 50Hz at no extra cost"],
]
included_table = Table(included_data, colWidths=[2.2*inch, 4.4*inch])
included_table.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), ACCENT),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('FONTNAME', (0, 0), (-1, 0), FONT_BOLD),
    ('FONTSIZE', (0, 0), (-1, 0), 10),
    ('FONTSIZE', (0, 1), (-1, -1), 9.5),
    ('BACKGROUND', (0, 1), (0, -1), LIGHT_BG),
    ('FONTNAME', (0, 1), (0, -1), FONT_BOLD),
    ('TEXTCOLOR', (0, 1), (0, -1), PRIMARY),
    ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 10),
    ('RIGHTPADDING', (0, 0), (-1, -1), 10),
    ('TOPPADDING', (0, 0), (-1, -1), 7),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 7),
    ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
]))
story.append(included_table)

# ═══════════════════════════════════════════════════════════
# SECTION 6 — Warranty & After-Sales
# ═══════════════════════════════════════════════════════════

story.append(Paragraph("Warranty & After-Sales Support", h1_style))

warranty_data = [
    ["Item", "Details"],
    ["Factory Pre-Shipment Test", "48-hour continuous full-load test at 70 MPa / 500 tons before every shipment"],
    ["Warranty Period", "1 year covering manufacturing defects"],
    ["Technical Support", "Lifetime free remote support via WhatsApp / video call"],
    ["Common Spare Parts", "In stock: seals (~$8), filter cloth (~$15), hydraulic oil, control panel components"],
    ["Spare Parts Delivery", "DHL/FedEx express — 5–7 working days to UK addresses"],
    ["Installation Guidance", "Detailed video tutorials + live WhatsApp support during setup"],
]
warranty_table = Table(warranty_data, colWidths=[2.2*inch, 4.4*inch])
warranty_table.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), ACCENT),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('FONTNAME', (0, 0), (-1, 0), FONT_BOLD),
    ('FONTSIZE', (0, 0), (-1, 0), 10),
    ('FONTSIZE', (0, 1), (-1, -1), 9.5),
    ('BACKGROUND', (0, 1), (0, -1), LIGHT_BG),
    ('FONTNAME', (0, 1), (0, -1), FONT_BOLD),
    ('TEXTCOLOR', (0, 1), (0, -1), PRIMARY),
    ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 10),
    ('RIGHTPADDING', (0, 0), (-1, -1), 10),
    ('TOPPADDING', (0, 0), (-1, -1), 7),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 7),
    ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
]))
story.append(warranty_table)

# ═══════════════════════════════════════════════════════════
# SECTION 7 — Shipping
# ═══════════════════════════════════════════════════════════

story.append(Paragraph("Shipping to United Kingdom", h1_style))

shipping_data = [
    ["Item", "Details"],
    ["Machine Weight (net)", "2.4 tons"],
    ["Packaged (wooden crate)", "~2.6 tons"],
    ["Sea Freight (LCL, Qingdao → Southampton/Felixstowe)", "$400 – $600 USD (estimate, final at booking)"],
    ["Transit Time (sea)", "25 – 30 days"],
    ["Production Lead Time", "15 – 25 working days (standard model, UK voltage pre-configured)"],
]
shipping_table = Table(shipping_data, colWidths=[2.6*inch, 4.0*inch])
shipping_table.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), ACCENT),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('FONTNAME', (0, 0), (-1, 0), FONT_BOLD),
    ('FONTSIZE', (0, 0), (-1, 0), 10),
    ('FONTSIZE', (0, 1), (-1, -1), 9.5),
    ('BACKGROUND', (0, 1), (0, -1), LIGHT_BG),
    ('FONTNAME', (0, 1), (0, -1), FONT_BOLD),
    ('TEXTCOLOR', (0, 1), (0, -1), PRIMARY),
    ('ALIGN', (0, 0), (-1, -1), 'LEFT'),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('LEFTPADDING', (0, 0), (-1, -1), 10),
    ('RIGHTPADDING', (0, 0), (-1, -1), 10),
    ('TOPPADDING', (0, 0), (-1, -1), 7),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 7),
    ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
]))
story.append(shipping_table)

# ═══════════════════════════════════════════════════════════
# FOOTER
# ═══════════════════════════════════════════════════════════

story.append(Spacer(1, 24))
story.append(HRFlowable(width="100%", thickness=1, color=BORDER))
story.append(Spacer(1, 8))
story.append(Paragraph(
    "HAONUO Machinery · Shandong Haonuo Oil Press Equipment Co., Ltd.<br/>"
    "Factory: Shandong, China · Est. 2010 · 20+ skilled technicians<br/>"
    "Website: hydraulicoilpress.com · WhatsApp: +86 189 5714 9128",
    footer_style
))

# ── Build ──────────────────────────────────────────────────
doc.build(story)
print(f"✅ PDF generated: {output_path}")
