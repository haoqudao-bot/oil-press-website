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
NET_FILLS = {
    "国内直连": PatternFill("solid", fgColor="D4EFDF"),
    "需VPN": PatternFill("solid", fgColor="FDEDEC"),
}

headers = [
    "序号", "Tier", "优先级", "网络要求", "目录名称", "注册入口", "网址",
    "类型", "注册费用", "IP限制等级", "IP限制说明",
    "注册状态", "用户名/邮箱", "密码", "公司主页链接", "审核通过日期", "NAP一致", "备注"
]

for col, h in enumerate(headers, 1):
    c = ws.cell(1, col, h)
    c.font = HEAD_FONT
    c.fill = HEAD_FILL
    c.alignment = CENTER
    c.border = BORDER

data = [
    # ═══════════════════ Tier 1 — 全球 B2B ═══════════════════
    [1, "Tier 1", "P0", "国内直连", "Alibaba.com", "https://www.alibaba.com/signup/", "www.alibaba.com", "全球最大 B2B", "免费 basic / $2.9k+ Gold", "极严", "1 手机号/邮箱 = 1 号，同 IP 多号触发风控", "", "", "", "", "", "", ""],
    [2, "Tier 1", "P0", "国内直连", "Made-in-China.com", "https://www.made-in-china.com/supplier-membership.html", "www.made-in-china.com", "工业品专业 B2B", "免费 / ¥1.8k Gold", "中等", "同电脑多号偶尔触发验证，建议 1 设备 1 号", "", "", "", "", "", "", ""],
    [3, "Tier 1", "P1", "需VPN", "Global Sources", "https://www.globalsources.com/", "www.globalsources.com", "老牌 B2B", "免费 / $3k Verified", "较松", "邮箱注册即可，偶发 429 重试即可", "", "", "", "", "", "", ""],
    [4, "Tier 1", "P1", "国内直连", "Europages", "https://www.europages.com/join-us", "www.europages.com", "欧洲最大 B2B", "免费 / €$$ Premium", "较松", "邮箱注册即可", "", "", "", "", "", "", ""],
    [5, "Tier 1", "P2", "需VPN", "TradeKey", "https://www.tradekey.com/", "www.tradekey.com", "中东/南亚 B2B", "免费 / $ Gold", "较松", "邮箱注册，免费版功能受限", "", "", "", "", "", "", ""],
    [6, "Tier 1", "P2", "需VPN", "ECVV", "https://www.ecvv.com/", "www.ecvv.com", "老牌 B2B", "免费 / $$ Premium", "较松", "邮箱注册，站点偏慢", "", "", "", "", "", "", ""],
    [7, "Tier 1", "P2", "需VPN", "EC21 (China Suppliers)", "https://www.ec21.com/", "www.ec21.com", "韩国 B2B", "免费 / $$ Premium", "较松", "邮箱注册即可", "", "", "", "", "", "", ""],
    # ═══════════════════ Tier 2 — 行业垂直 ═══════════════════
    [8, "Tier 2", "P1", "国内直连", "AgMachine Global", "https://www.agmachine.com/contact-us", "www.agmachine.com", "全球农机目录", "免费", "较松", "发邮件申请加入 manufacturers 名录", "", "", "", "", "", "", "实测 200 OK，注册走 Contact Us 发邮件"],
    [9, "Tier 2", "P0", "国内直连", "MachineryOffers", "https://www.machineryoffers.com/member/register", "www.machineryoffers.com", "工业机械 B2B", "免费", "较松", "邮箱+公司名注册，实测 200 OK", "", "", "", "", "", "", "替代原 directindustry（403）"],
    [10, "Tier 2", "P2", "需VPN", "AsianProducts", "https://www.asianproducts.com/", "www.asianproducts.com", "东南亚 B2B", "免费 / $$ Premium", "较松", "邮箱注册", "", "", "", "", "", "", ""],
    # ═══════════════════ Tier 3 — 区域 B2B ═══════════════════
    [11, "Tier 3", "P1", "需VPN", "IndiaMART", "https://www.indiamart.com/", "www.indiamart.com", "印度最大 B2B", "免费 / ₹ Gold", "中等", "注册时选 International Seller，国家选 China，需印度手机号验证", "", "", "", "", "", "", "注：IndiaMART 默认印度地址，务必选国际卖家通道"],
    [12, "Tier 3", "P1", "需VPN", "TradeIndia", "https://www.tradeindia.com/", "www.tradeindia.com", "印度 B2B", "免费 / ₹ Gold", "中等", "同上，选 International Seller 通道", "", "", "", "", "", "", "注：IndiaMART + TradeIndia 印度双雄，两个都要"],
    [13, "Tier 3", "P2", "需VPN", "AfricaTradePortal", "https://www.africatradeportal.com/", "www.africatradeportal.com", "非洲 B2B", "免费", "较松", "邮箱注册，部分时间连不上", "", "", "", "", "", "", ""],
    # ═══════════════════ Tier 4 — 权威企业名录 + NAP ═══════════════════
    [14, "Tier 4", "P0", "国内直连", "Google Business Profile", "https://business.google.com/create", "business.google.com", "Google 地图", "免费", "极严", "1 主体 1 号，同 IP 多号触发人工审核", "", "", "", "", "", "", "地址不能填大陆街道，填 Shandong Province, China 作为服务区域"],
    [15, "Tier 4", "P0", "国内直连", "Bing Places for Business", "https://www.bingplaces.com/", "www.bingplaces.com", "Bing 地图", "免费", "极严", "微软账号体系，1 账号关联 1 主体", "", "", "", "", "", "", "同 GBP，填服务区域 Shandong Province, China"],
    [16, "Tier 4", "P0", "需VPN", "LinkedIn Company", "https://www.linkedin.com/", "www.linkedin.com", "企业社交", "免费 / $$ Premium", "极严", "真实个人账号创建公司页，主体必须真实", "", "", "", "", "", "", "国内直连首页即可，注册公司页需 VPN"],
    [17, "Tier 4", "P1", "需VPN", "Facebook Business Page", "https://www.facebook.com/pages/create", "www.facebook.com", "社交企业页", "免费", "极严", "1 真实账号 1 主体，频繁切 IP 会封号", "", "", "", "", "", "", ""],
    [18, "Tier 4", "P2", "需VPN", "Kompass", "https://www.kompass.com/", "www.kompass.com", "全球企业名录", "免费基础 / $ Premium", "较松", "邮箱注册，国内直连部分时间 403", "", "", "", "", "", "", ""],
    [19, "Tier 4", "P2", "需VPN", "Manta", "https://www.manta.com/", "www.manta.com", "中小企业目录", "免费 / $", "较松", "邮箱注册，偶发 403", "", "", "", "", "", "", ""],
]

for r_idx, row in enumerate(data, 2):
    tier = row[1]
    ip_level = row[9]
    net_req = row[3]
    for c_idx, val in enumerate(row, 1):
        cell = ws.cell(r_idx, c_idx, val)
        cell.font = BODY_FONT
        cell.border = BORDER
        cell.alignment = CENTER if c_idx in [1, 2, 3, 4, 8, 10, 12, 14, 16, 17] else LEFT
    for c in range(1, len(headers) + 1):
        ws.cell(r_idx, c).fill = TIER_FILLS.get(tier, PatternFill())
    ws.cell(r_idx, 10).fill = IP_FILLS.get(ip_level, PatternFill())
    ws.cell(r_idx, 4).fill = NET_FILLS.get(net_req, PatternFill())

col_widths = [6, 10, 8, 10, 26, 42, 28, 22, 22, 10, 46, 10, 26, 16, 32, 16, 10, 48]
for i, w in enumerate(col_widths, 1):
    ws.column_dimensions[get_column_letter(i)].width = w

ws.auto_filter.ref = f"A1:{get_column_letter(len(headers))}{len(data) + 1}"
ws.freeze_panes = "A2"

# ── Sheet 2: NAP 统一信息 ──
ws2 = wb.create_sheet("NAP 统一信息")
nap = [
    ["字段", "值（注册时复制使用）"],
    ["公司名（英文）", "Shandong Haonuo Machinery Equipment Group Co., Ltd."],
    ["一句话描述（英文）", "Manufacturer of hydraulic oil presses for coconut, shea, palm kernel, mustard, peanut, and sesame extraction. Factory direct, ISO 9001."],
    ["网址", "https://www.hydoilpress.com/"],
    ["Logo", "与主站同一矢量 SVG"],
    ["地址（大陆）", "Shandong Province, China"],
    ["地址（地图平台填法）", "不填具体街道，填 Shandong Province, China 作为服务区域"],
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
ws2.column_dimensions["B"].width = 72

# ── Sheet 3: 已放弃清单 ──
ws3 = wb.create_sheet("已放弃清单")
abandoned = [
    ["原推荐目录", "问题", "替代方案"],
    ["foodtechdirectory.com", "站点已关 / 连不上", "MachineryOffers.com（国内直连）"],
    ["oilmachinerydirectory.com", "站点已关 / 连不上", "MachineryOffers.com + AgMachine"],
    ["machinerytrader.com", "403 拦国内 IP + 注册无网址字段 + 二手机平台不适合", "直接放弃"],
    ["directindustry-china.cn", "注册页面报错 + 拦国内 IP", "MachineryOffers.com"],
    ["directindustry.com", "403 拦国内 IP", "MachineryOffers.com"],
    ["hotfrog.com", "注册入口 404", "放弃"],
    ["used-machinery.de", "二手机平台，不适合新设备", "放弃"],
    ["Yelp (biz.yelp.com)", "不支持中国大陆地区注册，地址只有台湾/香港", "放弃，对 B2B 榨油机工厂无意义"],
    ["Apple Maps Connect", "大陆地址无法认领", "放弃"],
    ["AgMachine 注册入口", "原以为没有注册，实际走 Contact Us 发邮件申请", "更新注册入口列"],
]
for r, row in enumerate(abandoned, 1):
    for c, val in enumerate(row, 1):
        cell = ws3.cell(r, c, val)
        cell.font = HEAD_FONT if r == 1 else BODY_FONT
        is_bad = (r > 1 and any(x in str(val) for x in ["放弃", "不支持", "连不上"]))
        cell.fill = HEAD_FILL if r == 1 else (PatternFill("solid", fgColor="FADBD8") if is_bad else (TIER_FILLS["Tier 3"] if r % 2 == 0 else PatternFill()))
        cell.border = BORDER
        cell.alignment = LEFT

ws3.column_dimensions["A"].width = 34
ws3.column_dimensions["B"].width = 44
ws3.column_dimensions["C"].width = 42

# ── Sheet 4: 注册指南 ──
ws4 = wb.create_sheet("注册指南")
guide = [
    ["注册节奏建议"],
    ["第 1 周（国内直连，开干！）"],
    ["  P0: Alibaba → MIC → GBP → Bing Places"],
    ["  P1: Europages → MachineryOffers"],
    ["  P2: AgMachine（发邮件）"],
    [],
    ["第 2 周（开 VPN，11 个）"],
    ["  P0: LinkedIn → Facebook"],
    ["  P1: Global Sources → IndiaMART → TradeIndia"],
    ["  P2: TradeKey → ECVV → EC21 → AsianProducts → AfricaTradePortal → Kompass → Manta"],
    [],
    ["关键注意事项"],
    ["  1. LinkedIn/Facebook 先注册公司页再关联个人账号"],
    ["  2. IndiaMART/TradeIndia：注册时必须选 International Seller，国家选 China"],
    ["  3. GBP/Bing Places：地址不填大陆街道，填 Shandong Province, China（服务区域）"],
    ["  4. Apple Maps / Yelp：已从清单划掉，大陆地址无法注册"],
    ["  5. 所有平台填公司信息时，NAP 参考第 2 个 Sheet"],
    ["  6. 每个注册完就在第一个 Sheet 填一行，改状态为「待审核」"],
    ["  7. 极严限制的平台（🔴级）不要在同一 IP 批量注册"],
    ["  8. AgMachine 不走在线注册，发邮件到 contact@agmachine.com 申请加入"],
]
for r, val in enumerate(guide, 1):
    text = val[0] if val else ""
    cell = ws4.cell(r, 1, text)
    cell.font = BODY_FONT
    if text.startswith("注册节奏"):
        cell.font = Font(bold=True, size=12, color="1E3A5F", name="Arial")
    cell.alignment = LEFT

ws4.column_dimensions["A"].width = 72

out = r"d:\Users\YYJ\Documents\Trae\industry-directory-registration-template.xlsx"
wb.save(out)
print(f"Saved: {out} ({len(data)} directories, 4 sheets)")
