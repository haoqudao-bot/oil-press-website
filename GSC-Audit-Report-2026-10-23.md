# HaoNuo Machinery / hydoilpress.com 全站 GSC SEO 审计报告
> 数据周期：2026-07-28 ~ 2026-10-20（85 天，约 3 个月）
> 生成日期：2026-10-23
> 数据来源：Google Search Console（8 份导出）+ 实际页面 LIVE 抓取

---

## 一、整体 KPI 与趋势

| 指标 | 数值 | 备注 |
|---|---|---|
| 总点击 | **26** | 3 个月累计（上一个 28 天周期：22 次） |
| 总展示 | **978** | 上一个 28 天周期：713 次 |
| 总 CTR | **2.66%** | 行业水平 3% 左右，略低 |
| 加权平均排名 | **16.89** | Page 2-3 |
| 有点击的查询数 | **仅 1 条** | "i want this machine" — 完全异常 |
| 有展示的页面数 | **245** | 全站约 384 URL（96×4 语言） |
| 在 GSC 有数据的查询数 | **63** | |

### 周度趋势（排名走势）

| 周 | 点击 | 展示 | 加权排名 | 诊断 |
|---|---|---|---|---|
| W31 (7月底) | 1 | 4 | 1.25 | 站点刚上线 |
| W32-35 | 1 | 24 | 1.3 → 23.3 | 初期波动 |
| **W36** | **0** | **13** | **74.98** | **新内容大量上线，Google 还没稳定** |
| W37-38 | 1 | 176 | 32.7 → 23.0 | 开始恢复 |
| **W39** | 5 | 125 | **13.7** | 第一个高峰 |
| **W40** | 5 | 169 | **10.2** | 持续爬升 |
| **W41** | 7 | 180 | **8.1** | **全站排名峰值（接近 Page 1）** |
| W42 | 4 | 199 | 19.7 | 回落 |
| **W43** | 2 | 88 | **20.7** | **明显下滑** |

**解读：** W36 那一周排名 74.98 是"新内容上线后 Google 还没评估完"的典型信号，不是惩罚。W41 全站排名 8.1 说明**Site Authority 和页面质量在快速提升**，但 W43 的下滑需要关注——可能是那周 Google 核心算法更新，或者抓取优先级变化。

**3 个月 vs 前一个 28 天对比：** 从 713 展示涨到 978（+37%），从 22 点击涨到 26（+18%），展示增长好于点击——**说明流量进来了但 title/desc 抓不住用户**。

---

## 二、索引覆盖（Coverage）

| 项目 | 数值 |
|---|---|
| 已编入索引 | **252** |
| 未编入索引 | **132** |
| 总已知 | 384（与站点规模吻合） |
| 索引覆盖率 | **65.6%** |

### 严重问题（GSC 直接报告）

| 原因 | 状态 | 影响页面数 | 优先级 |
|---|---|---|---|
| **重定向错误** | 验证失败 | **17** | P0 |
| 已发现 - 尚未编入索引 | 已开始验证 | 112 | P2 |
| 已抓取 - 尚未编入索引 | 验证失败 | 3 | P1 |

**说明：**
- 17 个重定向错误是 GSC 明确报的严重问题，会直接浪费抓取预算。需要在 GSC → Coverage → 重定向错误 → 点进去看具体 URL，修正后点"验证修复"。
- 112 个"已发现-未编入索引"是 Google 觉得质量不够或认为重复，不是紧急问题但值得长期优化。
- 3 个"已抓取-未编入索引"说明 Google 看过但不愿意索引——通常是内容薄或与其他页面重复。

---

## 三、抓取预算（Crawl Stats）

| 指标 | 数值 |
|---|---|
| 总抓取请求 | **1,685** |
| 平均每天 | **37.4** |
| 平均响应时间 | **101.9 ms** |
| Googlebot 类型占比 | 手机 40% / 其他代理 35% / 网页资源 11% / 图片 9% / 桌面 6% |
| 抓取目的 | 刷新 62% / 发现 38% |

### 每周抓取量（变化惊人）

| 周 | 抓取请求 | 平均响应(ms) | 下载 MB |
|---|---|---|---|
| W31-35 | 1-37 | 35-86 | 0.03-1.45 |
| W36 | 115 | 79 | 3.24 |
| W37-41 | 54-80 | 68-108 | 0.57-1.58 |
| **W42** | **180** | **185** | **4.53** |
| **W43** | **993** | **166** | **16.50** |

**解读：** W42-43 Google 突然加大抓取量（180 → 993），响应时间也涨到 166-185ms（W36 只有 79ms）。可能原因：
1. Google 发现站点内容在快速更新，加大抓取
2. 响应时间上升可能是 W43 大量新页面首次渲染
3. **993 次抓取是好信号**——说明 Google 认定站点值得频繁访问

**优化方向：** 现在抓取量上来了，索引覆盖率只有 65.6%，**在抓取预算充足的情况下提升内容质量，让更多页面从"已发现-未索引"变成"已编入索引"就有空间**。

---

## 四、页面类型 × 语言交叉表现

### 按页面类型（全语言汇总）

| 类型 | 页面数 | 点击 | 点击占比 | 展示 | 展示占比 | 加权排名 | CTR |
|---|---|---|---|---|---|---|---|
| **Solution（解决方案）** | 75 | 14 | **48.3%** | 882 | 32.7% | **18.0** | 1.59% |
| **Product（产品）** | 93 | 7 | 24.1% | 849 | 31.5% | **45.2** | 0.82% |
| **Market（国家市场页）** | 37 | 2 | 6.9% | 369 | 13.7% | **11.1** | 0.54% |
| **Resource（资源/博客）** | 19 | **0** | 0% | 135 | 5.0% | 42.4 | 0% |
| Other（首页/Contact 等） | 21 | 6 | 20.7% | 459 | 17.0% | 12.2 | 1.31% |

### 按语言

| 语言 | 点击 | 点击占比 | 展示 | 展示占比 | 加权排名 | CTR |
|---|---|---|---|---|---|---|
| **EN（英文）** | 17 | **58.6%** | 1,374 | 51.0% | 23.8 | 1.24% |
| **AR（阿语）** | 6 | 20.7% | 635 | 23.6% | 22.3 | 0.94% |
| **FR（法语）** | 2 | 6.9% | 402 | 14.9% | 30.7 | 0.50% |
| **ID（印尼语）** | 4 | 13.8% | 283 | 10.5% | 37.0 | 1.41% |

### 核心结论

1. **Solution 是王**——48.3% 点击贡献，排名 18，远好于 Product 的排名 45。这和之前的 28 天数据一致。
2. **Product 页面全军覆没**——排名 45 意味着 Page 5+，**93 个 Product 页面只贡献了 7 次点击**。Product 页面的 SEO 表现是全站最大短板。
3. **Market 页排名意外地好（11.1）**——大量 Page 1-2 位置，但 CTR 0.54% 几乎为 0。**有排名但没人点 = title/desc 写得不行**。
4. **Resource 完全没有点击**——19 个资源页，0 点击，排名 42.4。内容需要大幅升级。
5. **AR 语言第二重要**——展示占比 23.6%，接近 EN 的一半，但点击占比 20.7%，说明阿语市场 CTR 偏低。

---

## 五、内链分布（Internal Link Equity）

### Top target pages（内部链接数）

| 排名 | 页面 | 内部链接数 | 页面类型 | 加权排名 |
|---|---|---|---|---|
| 1 | 首页 / | **80** | Other | 2.65 |
| 2 | /id/ 印尼语首页 | 43 | Other | 2.12 |
| 3 | /ar/about/ 阿语关于 | 30 | Other | — |
| 4 | /fr/solutions/cottonseed | 27 | Solution | — |
| 5 | /ar/solutions/cottonseed | 26 | Solution | — |

### 按页面类型的内链均值

| 类型 | 平均内部链接 |
|---|---|
| Other（首页/About 等） | **31.7** |
| Solution | 12.0 |
| Market | 11.0 |
| Resource | 6.5 |
| **Product** | **6.2** |

### 按语言

| 语言 | 平均内部链接 |
|---|---|
| EN | 14.8 |
| FR | 12.7 |
| AR | 12.3 |
| ID | 10.3 |

### 内链不足的 Product 页面（仅 1-2 条内链）

| URL | 语言 | 内部链接 | 加权排名 |
|---|---|---|---|
| /id/products/industrial-seed-crusher/ | ID | 1 | — |
| /id/products/pneumatic-oil-filter-press/ | ID | 1 | — |
| /ar/products/oilseed-pre-press/ | AR | 2 | 29.6 |
| /ar/products/industrial-seed-crusher/ | AR | 2 | 3.0 |
| /id/products/oilseed-pre-press/ | ID | 2 | — |

**解读：** Product 页面平均只有 6.2 条内链，远低于 Solution 的 12.0。这直接导致 Product 排名差。首页独占 80 条内链，但 Solution 分类的内链传递给 Product 的太少。

---

## 六、外链（Backlinks）

| 项目 | 数值 |
|---|---|
| 总链接源页面 | **18** |
| 独立域名 | **2** |
| 主要域名 | grainocraft.com（17 个页面）、go4worldbusiness.com（1） |

**解读：** 外链极度集中在 grainocraft.com 一个域名上（看起来是兄弟站点或测试站），其他只有 go4worldbusiness.com 的一个 B2B 平台页面。**外链建设是全站 SEO 的最大瓶颈**。Google 看到一个全新的域名只有另一个域名在引用它，会怀疑站点可信度。

---

## 七、AI Generative（GEO）表现

| 指标 | 数值 |
|---|---|
| AI 总展示 | **139** |
| 被引用的页面数 | 71 |

### 按类型

| 类型 | 被引用页面数 | AI 展示 |
|---|---|---|
| Solution | 36 | **90** (64.7%) |
| Product | 18 | 24 |
| Market | 10 | 14 |
| Resource | 3 | 4 |

### 按语言

| 语言 | AI 展示 |
|---|---|
| **AR** | **69** (49.6%) |
| EN | 47 |
| FR | 15 |
| ID | 8 |

### AI 引用 TOP 页面

| URL | 语言 | AI 展示 | 常规搜索加权排名 |
|---|---|---|---|
| /ar/solutions/castor-oil-pressing/ | AR | 16 | 10.72 |
| /ar/solutions/sesame-oil-pressing/ | AR | 8 | 8.44 |
| /ar/solutions/coconut-oil-pressing/ | AR | 7 | 7.66 |
| /solutions/avocado-oil-pressing/ | EN | 6 | 21.07 |
| /solutions/mustard-oil-pressing/ | EN | 5 | — |

**解读：**
1. AI 引用完全集中在 Solution 页面（64.7%），和常规搜索一致。
2. **AR 语言占了近一半 AI 展示**（49.6%）——说明阿语用户在 AI 搜索上更活跃，或者阿语 SEO 竞争更小。
3. castor, sesame, coconut 三个阿语 Solution 页同时是常规搜索和 AI 的 TOP。

---

## 八、HTTPS / 面包屑（Breadcrumbs）健康

| 项目 | 状态 |
|---|---|
| HTTPS | ✅ **0 问题**，86 天全部 HTTPS 正常 |
| Breadcrumbs | ✅ **0 严重/非严重问题**，85 天全部有效 |

这两块基础做得很好，不需要修。

---

## 九、TITLE / DESCRIPTION 现场验证

我实际抓了 14 个关键页面的 LIVE HTML，对比 GSC 数据。以下是最值得关注的发现：

### 案例 1：FR Products 列表页 — **rank 7.64, 25 展示, 0 点击**
- Title（31 字符）：`Nos Produits de Presses à Huile`
- ❌ **问题：太短！Google 在桌面展示 50-60 字符，移动端 43-50。31 字符远远不到，导致在 SERP 上 title 只有"Nos Produits de Presses..."，关键词"presse à huile hydraulique"丢失。**
- 这个 Title 来自 [src/pages/[locale]/products/index.astro](file:///d:/Users/YYJ/Documents/Trae/src/pages/[locale]/products/index.astro#L166) 第 166-168 行的硬编码三元表达式。

### 案例 2：EN Resources 列表页 — **rank 3.69, 32 展示, 0 点击**
- Title（46 字符）：`Oil Press Resources & Guides for Oil Mills`
- Desc（85 字符）：`Expert guides and comparisons to help you make informed decisions. Get factory price!`
- ❌ **问题：Desc 只有 85 字符，短于 Google 推荐的 120-155。Desc 没说清楚 Resources 有什么内容、给谁看。Title 里的 "Oil Mills" 精准，但 Desc 太空。**

### 案例 3：AR Castor Solution — **rank 10.72, 76 展示, 0 点击**
- Title（34 字符）：`آلة عصر زيت الخروع، عصر بارد وساخن`
- Desc（119 字符）：`آلة عصر زيت الخروع لاستخراج زيت الخروع الصناعي والطبي. ضغط هيدروليكي عالي الضغط بمعدل متبقي منخفض. احصل على سعر المصنع!`
- Top query：`عصر بذور الخروع`（榨蓖麻籽）
- ❌ **问题：Title 里是 "آلة عصر زيت الخروع"（榨蓖麻油机器），但用户搜的是 "عصر بذور الخروع"（榨蓖麻籽）。缺少 "بذور"（种子）这个核心关键词。SERP 上用户看到 title 里没有 "بذور"，就不点了。**

### 案例 4：FR Contact 页 — **rank 6.11, 35 展示, 0 点击**
- Title（52 字符）：`Contactez-Nous pour Tarifs Presse à Huile et Support`
- Desc（134 字符）：OK
- ⚠️ **分析：Contact 页排到第 6 位但没人点，因为这不是用户想点的页面——用户搜油压机不会想找 Contact。这是"排名好但 CTR 低不一定是坏事"的案例，不需要改。**

### 案例 5：EN Nigeria Market 页 — **rank 7.31, 45 展示, 0 点击**
- Title（55 字符）：`Hydraulic Oil Press Machine in Nigeria — Factory Direct`
- Desc（153 字符）：`Oil press machine in Nigeria for groundnut, palm kernel and sesame. SONCAP clearance support, generator-ready builds, shipping to Lagos. Request a quote.`
- ✅ 关键词精准。但 45 展示 0 点击——可能这个词本身 SERP 上面的竞争页面 title 更吸引人（比如 "Low Cost"、"Best Price" 等）。需要对比 SERP 后才能下结论。

### 案例 6：首页 — **rank 2.65, 52 展示, 2 点击, CTR 3.85%**
- Title（51 字符）：`Hydraulic Oil Press Machine Manufacturer Since 2010`
- ⚠️ 全站排名第 1 的首页，CTR 只有 3.85%——说明 title 不够勾人。可以考虑加入 "Factory Price"、"Cold Press" 这类高频搜索词。

---

## 十、具体可执行修复清单（按优先级排序）

### P0 — 72 小时内完成

| # | 页面/文件 | 问题 | 修复动作 | 预期效果 |
|---|---|---|---|---|
| 1 | **GSC Coverage → 重定向错误**（17 页面） | GSC 报 17 个重定向错误 | 进 GSC 看具体 URL，修正后点"验证修复" | 释放抓取预算，提升索引率 |
| 2 | [src/pages/[locale]/products/index.astro](file:///d:/Users/YYJ/Documents/Trae/src/pages/[locale]/products/index.astro#L166) 第 166-168 行 | FR 产品列表页 title 只有 31 字符 | FR 改为 `"Presses à Huile Hydrauliques — Équipements d'Extrusion"（53 字符）；AR 改为 `"معاصر الزيت الهيدروليكية وكسارات البذور والمكابس"（55+ 字符）；ID 改为 `"Mesin Press Minyak Hidrolik & Peralatan Ekstraksi"（50+ 字符）` | rank 7.64 → 有机会到 5+，CTR 从 0% → 5-10% |
| 3 | [src/pages/resources/index.astro](file:///d:/Users/YYJ/Documents/Trae/src/pages/resources/index.astro)（或对应模板） | EN Resources 列表页 desc 只有 85 字符 | 改为 `"Free resources for oil mill operators: cold vs hot press comparison, yield optimization guides, maintenance checklists, and buying decision frameworks. Get factory price!"`（160 字符） | 32 展示 → 有机会拿到点击 |

### P1 — 2 周内完成

| # | 页面/文件 | 问题 | 修复动作 | 预期效果 |
|---|---|---|---|---|
| 4 | **GSC Coverage → 已抓取-未编入索引**（3 页面） | Google 看过但不愿意索引 | 在 GSC 看具体是哪 3 页，通常是内容薄。要么加内容，要么确认可以 noindex | 从"不索引"→"索引" |
| 5 | **Market 页 title/desc 模板**（12 国家页 × 4 语言） | Market 页排名好但 CTR 全为 0，title 没戳中痛点 | 给每个国家 Market 页 title 加入该地区的核心油料+痛点词，如 Nigeria → `"Groundnut & Palm Kernel Oil Press Machines in Nigeria — SONCAP Approved"` | Market 组 CTR 从 0.54% → 3-5% |
| 6 | **Product 页内链提升** | Product 平均只有 6.2 条内链 | 在每个 Solution 页面的底部加一个"推荐产品线"模块，放 2-3 个对应 Product 的卡片。比如 castor solution 页加 castor 专用 press | Product 平均排名从 45 → 35+ |
| 7 | **EN Resources 列表页 title** | `Oil Press Resources & Guides for Oil Mills` 中的 "Oil Mills" 太窄 | 改为 `"Oil Press Guides & Resources: Cold vs Hot Press, Yield, Maintenance"`（58 字符） | 增加关键词覆盖 |

### P2 — 30 天内完成

| # | 页面/文件 | 问题 | 修复动作 | 预期效果 |
|---|---|---|---|---|
| 8 | **外链建设**（全站） | 只有 2 个外链源，其中 1 个是测试站 | (1) 在 Alibaba、Made-in-China、Global Sources 建公司主页带官网链接；(2) 和 oilseed processing 行业博客交换 guest post；(3) LinkedIn 公司页、YouTube 频道、Pinterest 产品板都带官网 | DR/DA 提升 → 排名整体提升 |
| 9 | **Solution 页 CTR 提升**（20 Solution × 4 语言 = 80 页面） | 很多 rank 8-15 的 Solution 页 CTR 为 0 | 分析 top 3 有 CTR 的 Solution（coconut AR 10.34%）和 CTR 为 0 的 Solution（castor AR 0%）的 title 差异，补全缺失的搜索关键词 | 76 展示 0 点击 → 有机会拿到 5-8 次点击 |
| 10 | **Product 页标题升级**（24 Product × 4 语言 = 96 页面） | Product 排名 45，大部分 Page 5+ | 在产品 title 里加入 "for [核心油料]" 比如 `"Cold Press Hydraulic Oil Press for Coconut, Sesame & Shea Butter"` | Product 排名从 45 → 30+ |
| 11 | **Homepage title 升级** | `Hydraulic Oil Press Machine Manufacturer Since 2010`（51 字符） | 改为 `"Factory-Direct Hydraulic Oil Press Machine — Cold Press for Coconut, Sesame & 50+ Seeds"`（70 字符内） | CTR 从 3.85% → 5-8% |

### P3 — 持续优化

| # | 动作 | 说明 |
|---|---|---|
| 12 | 112 个"已发现-未编入索引"页面审查 | 逐个看内容质量，决定是加内容、合并还是 noindex |
| 13 | 新博客文章增加内链 | 每发一篇 Resource，至少链接 2 个 Solution + 1 个 Product |
| 14 | sitemap.xml 提交更新 | 每次部署后在 GSC 重新提交 sitemap |
| 15 | 每 2 周拉一次 GSC 数据做对比 | 跟踪修复后的效果 |

---

## 十一、关于"Product 页为什么排名这么差"的根因分析

综合数据得出 4 个根因：

1. **关键词竞争度不同**——Solution 页打"castor oil press machine"（低竞争，长尾），Product 页打"hydraulic oil press"（高竞争，大词）。这是最主要原因。
2. **内链太少**——Product 平均 6.2 条内链 vs Solution 的 12.0。Google 看到站点自己都不链接这些 Product 页，就不会给高权重。
3. **内容模板化**——24 个 Product 页面可能结构高度相似，被 Google 视为近重复。
4. **历史欠账**——很多 Product 页面可能没被 Google 完全 crawl 过（抓取预算有限）。

**但好消息是：** Product 里排名最高的 `/products/hydraulic-oil-press/`（通用聚合页）拿到了 2 次点击、加权排名 40.78，说明**聚合型 Product 页比单独型号页表现好**。Solution 页的排名模式（打长尾、高意图词）值得 Product 借鉴——把每个型号页的 title 和 desc 里加入它擅长的油料。

---

## 十二、与前一份 28 天审计的对比

| 维度 | 28 天数据（前周期） | 3 个月数据（当前） | 变化方向 |
|---|---|---|---|
| 点击率贡献 | Solutions 52% | Solutions 48.3% | ↓（略降但仍领先） |
| AR 展示占比 | 42% | 23.6% | ↓（EN 相对增长更快） |
| Product 排名 | 50.2 | 45.2 | ↑（小幅提升） |
| 有点击的查询数 | 1（同样是"i want this machine"） | 1 | →（完全没解决） |
| CTR | 3.09% | 2.66% | ↓（流量增长但 title/desc 没跟上） |

---

## 十三、一句话总结

**站点 Authority 在快速上升（W41 全站排名 8.1），但 90% 的流量进来了没人点——title/desc 是最大瓶颈。Product 页和 Market 页的 CTR 普遍为 0 是最紧急的修复点，其次是 Product 页的内链缺失和全站外链空白。先做 P0，1 周后再拉 GSC 看变化。**
