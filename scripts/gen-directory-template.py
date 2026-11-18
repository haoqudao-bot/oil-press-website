from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Border, Side, Alignment
from openpyxl.utils import get_column_letter

wb = Workbook()
ws = wb.active
ws.title = "目录注册总表"

THIN = Side(style="thin", color="D9DEE7")
BORDER = Border(left=THIN, right=THIN, top=THIN, bottom=THIN)
CENTER = Alignment(horizontal="center", vertical="center", wrap_text=True)
LEFT = Alignment(horizontal="left", vertical="center", wrap_text=True)

HEAD_FILL = PatternFill("solid", fgColor="1E3A5F")
HEAD_FONT = Font(bold=True, color="FFFFFF", size=11, name="Arial")
BODY_FONT = Font(name="Arial", size=10)

TIER_FILLS = {
    "Tier 1": PatternFill("solid", fgColor="EBF5FB"),
    "Tier 2": PatternFill("solid", fgColor="EAFAF1"),
    "Tier 3": PatternFill("solid", fgColor="FEF9E7"),
    "Tier 4": PatternFill("solid", fgColor="F5EEF8"),
}
IP_FILLS = {
    "极严": PatternFill("solid", fgColor="FADBD8"),
    "中等": PatternFill("solid", fgColor="FDEBD0"),
    "较松": PatternFill("solid", fgColor="FFFFFF"),
}

headers = [
    "序号", "Tier", "优先级", "目录名称", "网址", "类型",
    "注册费用", "IP限制等级", "IP限制说明", "注册状态",
    "用户名/邮箱", "密码", "公司主页链接", "审核通过日期",
    "NAP一致", "备注"
]

for col, h in enumerate(headers, 1):
    c = ws.cell(1, col, h)
    c.font = HEAD_FONT
    c.fill = HEAD_FILL
    c.alignment = CENTER
    c.border = BORDER

data = [
    # Tier 1 — 全球 B2B
    [1, "Tier 1", "P0", "Alibaba.com", "www.alibaba.com", "全球最大 B2B", "免费 basic / $2.9k+ Gold", "极严", "1 手机号/邮箱 = 1 号，同 IP 多号触发风控", "", "", "", "", "", ""],
    [2, "Tier 1", "P0", "Made-in-China.com", "www.made-in-china.com", "工业品专业 B2B", "免费 / ¥1.8k Gold", "中等", "同电脑多号偶尔触发验证，建议 1 设备 1 号", "", "", "", "", "", ""],
    [3, "Tier 1", "P0", "Global Sources", "www.globalsources.com", "老牌 B2B", "免费 / $3k Verified", "较松", "邮箱注册即可", "", "", "", "", "", ""],
    [4, "Tier 1", "P1", "Europages", "www.europages.com", "欧洲最大 B2B", "免费 / €$$ Premium", "较松", "邮箱注册即可", "", "", "", "", "", ""],
    [5, "Tier 1", "P1", "TradeKey", "www.tradekey.com", "中东/南亚 B2B", "免费 / $ Gold", "较松", "邮箱注册，免费版功能受限", "", "", "", "", "", ""],
    [6, "Tier 1", "P2", "ECVV", "www.ecvv.com", "老牌 B2B", "免费 / $$ Premium", "较松", "邮箱注册", "", "", "", "", "", ""],
    [7, "Tier 1", "P2", "EC21 (China Suppliers)", "www.ec21.com", "韩国 B2B", "免费 / $$ Premium", "较松", "邮箱注册即可", "", "", "", "", "", ""],
    # Tier 2 — 垂直目录
    [8, "Tier 2", "P1", "AgMachine Global", "www.agmachine.com", "全球农机目录", "免费", "较松", "邮箱注册", "", "", "", "", "", ""],
    [9, "Tier 2", "P1", "DirectIndustry", "www.directindustry.com", "工业设备", "免费 / $$$ Premium", "中等", "需要公司邮箱验证", "", "", "", "", "", ""],
    [10, "Tier 2", "P1", "Thomasnet", "www.thomasnet.com", "北美工业采购", "免费 / $$", "中等", "需验证美/加公司地址", "", "", "", "", "", ""],
    [11, "Tier 2", "P2", "FoodTech Directory", "www.foodtechdirectory.com", "食品加工设备", "免费 / $$", "较松", "邮箱注册", "", "", "", "", "", ""],
    [12, "Tier 2", "P0", "Oil Mill Machinery Directory", "www.oilmachinerydirectory.com", "榨油机垂直", "免费", "较松", "邮箱注册，审核较快", "", "", "", "", "", ""],
    [13, "Tier 2", "P2", "MachineryTrader", "www.machinerytrader.com", "二手机械", "免费", "较松", "邮箱注册", "", "", "", "", "", ""],
    [14, "Tier 2", "P2", "Used-Machinery.de", "www.used-machinery.de", "欧洲二手机", "免费", "较松", "邮箱注册", "", "", "", "", "", ""],
    [15, "Tier 2", "P2", "IndustrialMachines.com", "www.industrialmachines.com", "工业设备聚合", "免费", "较松", "邮箱注册", "", "", "", "", "", ""],
    [16, "Tier 2", "P3", "Oilseed Processing Equipment", "www.oilseedprocessing.com", "油料加工设备", "免费 / $", "较松", "邮箱注册", "", "", "", "", "", ""],
    [17, "Tier 2", "P3", "AgriExpo Network", "www.agriexpo.online", "农机展会 B2B", "免费 / $$ Premium", "较松", "邮箱注册", "", "", "", "", "", ""],
    [18, "Tier 2", "P3", "Food-Processing.com", "www.food-processing.com", "食品加工采购", "免费", "较松", "邮箱注册", "", "", "", "", "", ""],
    [19, "Tier 2", "P3", "Process Engineering Directory", "www.processengineering.com", "过程工程设备", "免费", "较松", "邮箱注册", "", "", "", "", "", ""],
    # Tier 3 — 区域 B2B
    [20, "Tier 3", "P1", "IndiaMART", "www.indiamart.com", "印度最大 B2B", "免费 / ₹ Gold", "中等", "需印度手机号，1 手机号 1 号", "", "", "", "", "", ""],
    [21, "Tier 3", "P1", "TradeIndia", "www.tradeindia.com", "印度 B2B", "免费 / ₹ Gold", "中等", "印度手机号验证", "", "", "", "", "", ""],
    [22, "Tier 3", "P2", "Africatradeportal", "www.africatradeportal.com", "非洲 B2B", "免费", "较松", "邮箱注册", "", "", "", "", "", ""],
    [23, "Tier 3", "P2", "Asianproducts", "www.asianproducts.com", "东南亚 B2B", "免费 / $$ Premium", "较松", "邮箱注册", "", "", "", "", "", ""],
    [24, "Tier 3", "P3", "Korea B2B", "www.koreab2b.com", "韩国 B2B", "免费", "较松", "邮箱注册", "", "", "", "", "", ""],
    [25, "Tier 3", "P3", "Mercado Libre", "www.mercadolibre.com.co", "拉美电商 B2B", "免费 / $ Premium", "中等", "需当地手机号或代理", "", "", "", "", "", ""],
    [26, "Tier 3", "P3", "Desertcart", "www.desertcart.com", "中东电商 B2B", "免费", "较松", "邮箱注册", "", "", "", "", "", ""],
    [27, "Tier 3", "P2", "China Going Global", "www.chinagoingglobal.com", "中国官方 B2B", "免费", "中等", "需真实公司信息审核", "", "", "", "", "", ""],
    # Tier 4 — 权威企业名录
    [28, "Tier 4", "P0", "Google Business Profile", "business.google.com", "Google 地图", "免费", "极严", "1 主体 1 号，多地址分别建，同 IP 多号触发人工审核", "", "", "", "", "", ""],
    [29, "Tier 4", "P0", "Bing Places for Business", "www.bingplaces.com", "Bing 地图", "免费", "极严", "微软账号体系，1 账号关联 1 主体", "", "", "", "", "", ""],
    [30, "Tier 4", "P1", "Apple Maps Connect", "mapsconnect.apple.com", "Apple 地图", "免费", "中等", "Apple ID 登录，需公司验证", "", "", "", "", "", ""],
    [31, "Tier 4", "P0", "LinkedIn Company", "www.linkedin.com", "企业社交", "免费 / $$ Premium", "极严", "真实个人账号创建公司页，1 个人可管理多公司页但主体必须真实", "", "", "", "", "", ""],
    [32, "Tier 4", "P1", "Facebook Business Page", "www.facebook.com", "社交企业页", "免费", "极严", "1 真实账号 1 主体，频繁切换 IP 会封号", "", "", "", "", "", ""],
    [33, "Tier 4", "P2", "Yelp Business", "biz.yelp.com", "本地目录", "免费 / $$", "较松", "邮箱注册即可", "", "", "", "", "", ""],
    [34, "Tier 4", "P2", "Kompass", "www.kompass.com", "全球企业名录", "免费 / $ Premium", "较松", "邮箱注册", "", "", "", "", "", ""],
    [35, "Tier 4", "P2", "Manta", "www.manta.com", "中小企业目录", "免费 / $", "较松", "邮箱注册", "", "", "", "", "", ""],
]

for r, row in enumerate(data, 2):
    ip_level = row[7]
    tier = row[1]
    for c, val in enumerate(row, 1):
        cell = ws.cell(r, c, val)
        cell.font = BODY_FONT
        cell.border = BORDER
        cell.alignment = CENTER if c in [1, 2, 3, 8, 10, 14, 15] else LEFT
    # Tier fill
    for c in range(1, len(headers) + 1):
        ws.cell(r, c).fill = TIER_FILLS.get(tier, PatternFill())
    # IP severity override for that cell
    ws.cell(r, 8).fill = IP_FILLS.get(ip_level, PatternFill())

col_widths = [6, 10, 10, 28, 32, 22, 22, 12, 42, 12, 28, 18, 32, 16, 10, 30]
for i, w in enumerate(col_widths, 1):
    ws.column_dimensions[get_column_letter(i)].width = w

ws.auto_filter.ref = f"A1:{get_column_letter(len(headers))}{len(data) + 1}"
ws.freeze_panes = "A2"

# --- NAP sheet ---
ws2 = wb.create_sheet("NAP 统一信息")
nap = [
    ["字段", "值（注册时复制使用）"],
    ["公司名（英文）", "Shandong Haonuo Machinery Equipment Group Co., Ltd."],
    ["一句话描述（英文）", "Manufacturer of hydraulic oil presses for coconut, shea, palm kernel, mustard, peanut, and sesame extraction. Factory direct, ISO 9001."],
    ["网址", "https://www.hydoilpress.com/"],
    ["Logo", "与主站同一矢量 SVG"],
    ["地址", "Shandong Province, China"],
    ["联系人", "Eason"],
    ["WhatsApp", "+86 18957149128"],
    ["邮箱", "sales@hydoilpress.com"],
    ["分类 1", "Agricultural Machinery > Oilseed Processing Equipment"],
    ["分类 2", "Industrial Machinery > Hydraulic Press Equipment"],
    ["品牌色", "#1E3A5F (深蓝), #F97316 (橙色强调)"],
]
for r, row in enumerate(nap, 1):
    for c, val in enumerate(row, 1):
        cell = ws2.cell(r, c, val)
        cell.font = HEAD_FONT if r == 1 else BODY_FONT
        cell.fill = HEAD_FILL if r == 1 else (TIER_FILLS["Tier 4"] if r % 2 == 0 else PatternFill())
        cell.border = BORDER
        cell.alignment = LEFT

ws2.column_dimensions["A"].width = 22
ws2.column_dimensions["B"].width = 70

out = r"d:\Users\YYJ\Documents\Trae\industry-directory-registration-template.xlsx"
wb.save(out)
print(f"Saved: {out}")
