# hydoilpress.com — Phase 2 补充分析报告

> 修正前次报告的同行错误，补充关键词库，列出之前遗漏的分析维度。
> 数据来源：Google SERP (2026-10-02) + Semrush (US DB + 全球)

---

## 一、真实同行分析（修正）

前次报告的"同行" SIMEC、grainocraft 均非榨油机同行。本次从 Google SERP 抓取真实同行并分析。

### 同行榜单（Google 搜索 "hydraulic oil press manufacturer" / "cold press oil machine" / "oil press machine manufacturer china"）

| 域名 | 类型 | Semrush 数据 | 说明 |
|------|------|-------------|------|
| **gondormachinery.com** | 综合食品机械（含榨油机） | AS 11 / **2.7K 自然流量** / 5.5K 关键词 / 340 引用域 | 行业领头羊，多语言（fr/de/es），有案例页、食谱页 |
| **oilmillchina.com** (HUIPIN) | 榨油机专业厂 | AS 6 / 14 流量 / 394 关键词 / 397 引用域 | 有一定关键词覆盖但流量极低 |
| **chinapacificmachinery.com** | 榨油机 | AS 2 / 0 流量 / 2 关键词 / 290 引用域 | 与 hydoilpress 同水平 |
| **qfoilpressmachine.com** (QiFeng) | 液压榨油机 | — | Google 排前列 |
| **wmmachinery.com** | 不锈钢液压榨油机 | — | Google 排前列 |
| **sinoder.com** | 榨油机+脱壳机 | — | Google 排前列 |
| **rayoneoilpress.com** | 冷榨油机 | — | "cold press oil machine" 制造商 |
| **oilpresschina.com** | 螺旋榨油机 | — | |
| **mikim-machinery.com** | 榨油生产线 | — | |
| **dsoilpress.com** | 榨油/萃取 | — | |

### 关键发现：gondormachinery.com 是真正的对标对象

- **流量差距**：gondor 2.7K vs hydoilpress 0 → 差 2700 倍
- **关键词差距**：gondor 5.5K vs hydoilpress 0 → 差 5500 倍
- **AI 引用**：gondor 被 ChatGPT 引用 474 次、Gemini 133 次 → AI SEO 做得好
- **内容策略**：多语言 + 案例页 + 食谱/画廊页 + 企业页 → 内容矩阵完整
- **结论**：hydoilpress 的内容量和覆盖面远低于同行标杆

---

## 二、关键词库（docs/keyword-library.csv）

### 库规模
- **92 个关键词**，按优先级 P0-P3 分级
- 数据字段：keyword, global_volume, us_volume, kd, intent, priority, category, target_page

### 优先级分布

| 优先级 | 数量 | 定义 |
|--------|------|------|
| **P0** | 5 | KD ≤ 10% 且 搜索量 ≥ 100 且 Commercial → 立即做 |
| **P1** | 32 | KD 11-25% Commercial，或 KD ≤ 10% 小词 → 短期（1-3 月） |
| **P2** | 39 | KD 26-40%，或 Info 意图 → 中期（3-6 月） |
| **P3** | 16 | KD > 40% 或大词 → 长期（6-12 月） |

### 类别分布

| 类别 | 数量 | 说明 |
|------|------|------|
| oil-type | 47 | 按油料作物（coconut/sesame/mustard/palm...） |
| core | 27 | 核心产品词（oil press machine / cold press...） |
| use-case | 11 | 按用途/规模（home/small business/industrial） |
| commercial | 7 | 商业意图（price/manufacturer/for sale） |

### P0 金矿词（5 个，立即抢占）

| 关键词 | 全球量 | KD | 意图 | 目标页 |
|--------|--------|-----|------|--------|
| cold press oil machine | 14,800 | 8% | Commercial | /cold-press-oil-machine/ |
| commercial oil press machine | 310 | 4% | Commercial | /solutions/commercial-oil-press/ |
| sesame oil cold press | 590 | 5% | Commercial | /solutions/sesame-oil-pressing/ |
| natural oil extraction machine | 390 | 6% | — | /hydraulic-oil-press-machine/ |
| animal fat oil extraction machine | 170 | 1% | — | 新建 animal-fat 页 |

### 印度市场权重
核心词印度搜索量占比：
- cold press oil machine: IN 12,100 / 全球 14,800 = **82%**
- oil press machine: IN 2,900 / 6,300 = 46%
- oil extraction machine: IN 5,400 / 7,300 = 74%
- oil expeller: IN 4,000 / 4,400 = 91%
- oil mill: IN 1,900 / 3,600 = 53%
- hydraulic oil press machine: IN 390 / 610 = 64%

**结论：印度占行业搜索量 50-90%。/markets/india/ 已有本地化内容（mustard/sesame/peanut/coconut、INR 报价、220V/50Hz、kachi ghani、港口、GST 文档），但仍可增强：增加印度本地客户案例、印度卢比价格区间、更多油料作物（cottonseed、sunflower、soybean）的详细压榨参数。**

---

## 三、之前遗漏的分析维度

前次报告只覆盖了 SEO/GEO/buyer/conversion 的表层。以下维度未深入分析：

### 1. 技术 SEO（未审计）
- **Core Web Vitals**：LCP / FID / CLS 是否达标？（需用 PageSpeed Insights 或 GSC 实测）
- **移动友好性**：移动端加载速度、布局是否正常
- **索引状态**：Google 实际收录了多少页面？是否有被排除的页面？（需查 GSC "页面索引"报告）
- **robots.txt**：是否正确放行？是否意外屏蔽了重要页面？
- **sitemap 覆盖率**：sitemap 中提交的 URL 是否都被收录？
- **重复内容**：多语言页面是否有规范标签？同一内容是否在多个 URL 出现？
- **规范标签 (canonical)**：是否正确设置，避免自引用/跨语言混乱
- **HTTPS / 安全**：证书有效性、mixed content
- **404/断链**：站内和站外断链检查
- **状态码分布**：是否有大量 3xx/4xx/5xx

### 2. 结构化数据 (Schema)（部分已有，需补强）
- **Product schema**：✓ 已有（name/brand/category/sku/image/description），但缺 **Offer**（价格/货币/可用性）和 **AggregateRating**（评分）→ 影响富结果展示
- **Organization schema**：✓ BaseLayout 中已有
- **FAQ schema**：✓ FAQ 页和各市场页已有 FAQPage schema
- **Breadcrumb schema**：✓ 产品页和市场页已有
- **Article schema**：资源/指南页是否有 NewsArticle schema？（待确认）
- **gondor 被 AI 大量引用可能与其结构化数据完善有关**

### 3. 内部链接（未分析）
- **链接深度**：重要页面（核心产品页）点击深度是否 ≤ 3 次？
- **锚文本分布**：是否过度优化？是否有自然锚文本？
- **孤立页面**：是否有页面没有任何内部链接指向？
- **链接权重传递**：首页权重是否有效传递到产品页？
- **相关内容链接**：产品页是否链接到相关解决方案/指南？

### 4. E-E-A-T 信号（未评估）
- **作者署名**：资源/指南文章是否有作者信息？
- **专业资质**：是否展示工程师团队、技术认证？
- **真实案例**：是否有客户案例、工厂实拍？（已有 factory 图片，但需确认用于内容页）
- **信任信号**：SSL、隐私政策、退款政策、客户评价
- **gondor 有 Corporate Culture 页、案例页、食谱页 → E-E-A-T 信号更强**

### 5. 转化率优化（CRO）（未深入）
- **表单字段数**：询盘表单是否太长？（建议 ≤ 5 字段）
- **CTA 可见性**：产品页 CTA 是否在首屏可见？
- **社会证明**：是否有客户评价、案例视频？
- **信任徽章**：ISO、CE 认证展示？
- **退出挽留**：是否有离开弹窗？
- **询盘响应速度**：承诺响应时间？
- **多渠道联系**：WhatsApp、微信、邮件、电话是否齐全？

### 6. 追踪与分析（未确认）
- **GA4**：是否正确安装？是否设置了转化事件（询盘提交）？
- **Google Search Console**：是否已验证？是否有数据？
- **Clarity**：已安装（Clarity.astro），是否配置了热力图目标？
- **转化漏斗**：是否追踪了 访问 → 产品页 → 询盘 的转化路径？
- **UTM 参数**：广告/外链是否带 UTM？

### 7. AI 可见度（未评估）
- **llms.txt**：已创建（Phase 1），但是否被 AI 爬取？
- **AI 引用次数**：Semrush 显示 hydoilpress AI 引用 = 0（gondor 有 474 次）
- **AI 优化**：内容是否用自然语言回答常见问题？是否适合 AI 摘要提取？
- **AI Overview 排名**：是否出现在 Google AI Overview 中？

### 8. 印度市场专门策略（未做）
- 印度占 50-90% 搜索量，但无印度卢比定价、无印度本地案例
- 是否需要印度本地联系方式/代理？
- 印度常用支付方式？
- 印度市场特定油料作物（mustard, groundnut/peanut, sesame, sunflower, cottonseed）是否覆盖？

### 9. 视频 SEO（未做）
- gondor 被 YouTube 引用 3 次（Semrush 数据）
- 是否有产品演示视频并优化了 YouTube 标题/描述？
- 视频是否嵌入产品页？

### 10. 外链建设策略（除了 disavow）
- **垃圾外链**：123 个引用域，98% 评分 0-10，anchors 含 "guest posting"/"seo backlinks" → 需 disavow
- **高质量外链机会**：
  - 行业目录（Thomasnet、Kompass、Alibaba 认证供应商页）
  - 贸易展会网站（如 Canton Fair）
  - 行业媒体投稿
  - 客户网站反向链接
  - 政府/商会网站

### 11. 本地 SEO（未做）
- Google Business Profile：是否注册？（如果有实体地址）
- 本地目录：Yelp、Yellow Pages、行业目录
- NAP 一致性：Name/Address/Phone 在各平台是否一致

### 12. 页面速度（未实测）
- 图片是否全部 WebP 且懒加载？（项目中已有 .webp）
- 字体加载策略？
- JS 是否延迟加载？
- CSS 是否内联关键部分？

### 13. 多语言 SEO 质量（未审计）
- hreflang 已配置（Phase 1），但需验证 Google Search Console 中是否正确识别
- 各语言内容质量是否一致？还是仅模板翻译？
- 阿拉伯语 RTL 布局是否正确？
- 印尼语内容是否本地化？

### 14. 季节性趋势（未分析）
- 不同油料作物的收获季节 → 搜索量季节性波动
- 是否需要按季节调整内容/推广？
- 斋月（中东/印尼）、排灯节（印度）等节日对食用油需求的影响

---

## 四、修正后的行动项总清单（含遗漏维度）

### P0 — 立即执行（1-2 周）
1. **修复 slug/title 互换**：heavy-duty vs medium 两个产品 md 的 title 和 model 互换
2. **垃圾外链 Disavow**：导出 Semrush 引用域 → 提交 GSC Disavow
3. **抢占 5 个 P0 金矿词**：优化目标页标题/H1/内容，确保完全匹配
4. **Product schema 补强**：所有产品页 Product schema 增加 Offer（价格/货币/可用性）和 AggregateRating（评分）
5. **Article schema**：资源/指南页增加 NewsArticle schema
6. **修复 title/desc 超长**：/markets/ (64→≤60), /services/ (64→≤60), /hydraulic-oil-press-machine/ desc 164→≤160
7. **/faq/ 添加 H1**

### P1 — 短期（1-3 月）
8. **印度市场内容增强**：在现有基础上增加 cottonseed/sunflower/soybean 详细压榨参数、印度本地客户案例、INR 价格区间表
9. **补齐油料作物页面**：rice bran、canola、black seed、neem、grape seed、pumpkin seed、argan、moringa、fish oil、animal fat
10. **内部链接优化**：从首页/分类页链接到所有 P0/P1 关键词目标页，锚文本自然
11. **GA4 转化追踪**：设置询盘表单提交为转化事件
12. **GSC 验证 + 数据检查**：确认索引状态，提交 sitemap，检查排除页面
13. **E-E-A-T 增强**：资源页添加作者署名，about 页展示团队/资质
14. **Core Web Vitals 优化**：PageSpeed Insights 实测，优化 LCP/CLS

### P2 — 中期（3-6 月）
15. **39 个 P2 关键词覆盖**：按类别批量创建/优化页面
16. **价格页**：创建 "oil press machine price" 专门页，覆盖价格意图流量
17. **制造商页**：创建 "oil press machine manufacturer" 页面
18. **案例研究页**：参考 gondor，创建 3-5 个客户案例页（带国家/作物/产量/ROI）
19. **视频内容**：产品演示视频，上传 YouTube 优化标题，嵌入产品页
20. **AI SEO**：检查 llms.txt 是否被爬取，优化内容为 AI 摘要友好格式
21. **外链建设**：提交行业目录，联系客户获取反向链接
22. **Google Business Profile**：注册并优化（如有实体地址）

### P3 — 长期（6-12 月）
23. **16 个 P3 大词排名提升**：通过持续内容+外链积累权重
24. **季节性内容营销**：按作物收获季节发布指南
25. **多语言内容质量提升**：各语言独立撰写非模板翻译
26. **行业媒体投稿**：建立行业影响力

---

## 五、数据来源

- Google SERP 真实同行抓取：2026-10-02
- Semrush 域名概览：gondormachinery.com / oilmillchina.com / chinapacificmachinery.com
- Semrush 关键词概览：cold press oil machine / oil press machine / oil extraction machine / hydraulic oil press / commercial oil press machine / hydraulic oil press machine 等
- 关键词库文件：[docs/keyword-library.csv](../docs/keyword-library.csv)

---

## 六、14 项遗漏维度 — 实际审计结果

基于代码级检查（2026-10-02），逐项给出实际状态和具体问题。

### 1. 技术 SEO

| 检查项 | 状态 | 详情 |
|--------|------|------|
| robots.txt | ✓ 良好 | 允许所有爬虫，显式允许 GPTBot/ClaudeBot/PerplexityBot/Google-Extended，有 sitemap 引用 |
| sitemap | ✓ 良好 | `@astrojs/sitemap` 配置 i18n hreflang，过滤 ads/404 页面 |
| canonical | ✓ 良好 | BaseLayout 用 `Astro.url.pathname` 生成自引用 canonical |
| hreflang | ✓ 良好 | 4 语言 + x-default，Navbar 语言切换用真实 `<a href>` 便于爬虫发现 |
| meta robots | ✓ 良好 | 默认 index, follow；ads 页应 noindex |
| 安全头 | ⚠ 部分 | 有 X-Frame-Options/X-Content-Type-Options/X-XSS-Protection/Referrer-Policy；**缺 CSP、HSTS、Permissions-Policy** |
| Title 重复 bug | ❌ 问题 | `services.astro` 传入 `title="...| Haonuo Machinery"`，BaseLayout 会再加 `| Haonuo Machinery`，导致重复。`markets/index.astro` 同样问题（title 含 `| Haonuo`）。最终 title 超 60 字符 |
| Description 超长 | ⚠ | `hydraulic-oil-press-machine` description 165 字符 + CTA suffix = 超 160，被截断 |
| GSC 验证 | ✓ | `google-site-verification` 和 `msvalidate.01` meta 已配置 |

**需修复**：
- services.astro 和 markets/index.astro 的 title 去掉已含的品牌后缀
- hydraulic description 缩短到 ≤ 140 字符（留空间给 CTA suffix）
- _headers 补充 CSP、HSTS、Permissions-Policy

### 2. 结构化数据 (Schema)

| Schema 类型 | 状态 | 详情 |
|-------------|------|------|
| Organization | ✓ | BaseLayout 全局注入，含地址、电话、成立时间、sameAs |
| Product | ⚠ 缺字段 | 产品页已有 name/brand/category/sku/image/description，**缺 Offer（价格/货币/可用性）和 AggregateRating（评分）** |
| FAQPage | ✓ | FAQ 页 + 各市场页 + 部分产品页已有 |
| BreadcrumbList | ✓ | 产品页 + 市场页 + 资源页已有 |
| Article | ✓ | 全部 12 个资源页已有 Article schema，含 author（Eason, Senior Engineer） |

**需补强**：产品页 Product schema 加 Offer + AggregateRating

### 3. 内部链接

| 检查项 | 状态 | 详情 |
|--------|------|------|
| Navbar | ✓ 完善 | Products（4分类+3旗舰页+对比+目录）、Solutions（15油料+11市场+4规模）、Resources（10指南+2对比+ROI）、About、Contact |
| Footer | ⚠ 不足 | 只链接 6 个主导航 + 4 个产品分类，**无具体产品页、解决方案页、市场页链接** |
| 产品页内链 | ⚠ | Navbar/Footer 均不直接链接到具体产品页（如 /products/heavy-duty-hydraulic-oil-press），只能通过分类页进入，链接深度 ≥ 3 |
| 锚文本 | — | 未发现过度优化，多为自然描述性锚文本 |

**需优化**：Footer 增加热门产品页、解决方案页、市场页的直接链接

### 4. E-E-A-T

| 信号 | 状态 | 详情 |
|------|------|------|
| 公司成立时间 | ✓ | 2010 年，多处展示 |
| 工厂面积 | ✓ | 2,000 m² 自有车间 |
| 出口国家 | ✓ | 50+ 国家 |
| 工厂实拍 | ✓ | About 页有 6+ 张工厂/车间/验货实拍图 |
| 质量控制 | ✓ | 48 小时出厂测试 |
| 客户复购 | ✓ | "Most new orders from returning buyers" |
| 作者署名 | ✓ | 资源页 Article schema 含 Eason, Senior Hydraulic Press Engineer |
| ISO/CE 认证 | ❌ 缺 | 全站无任何认证标识展示 |
| 工程师团队 | ❌ 缺 | About 页无团队介绍、无工程师资质 |
| 具体客户案例 | ❌ 缺 | 只有笼统提到 Nigeria/India/Philippines，无具体客户名称、产量、ROI 数据 |
| 客户评价 | ❌ 缺 | 无客户评价/评分展示 |

**需补强**：添加 ISO/CE 认证标识、工程师团队介绍、3-5 个具体客户案例（带数据）

### 5. 转化率优化 (CRO)

| 检查项 | 状态 | 详情 |
|--------|------|------|
| 表单字段 | ✓ 合理 | 7 字段（name, email, phone, company, country, product, message），仅 3 必填 |
| 反垃圾 | ✓ | Cloudflare Turnstile + honeypot |
| 多渠道联系 | ✓ | Email / WeChat / Phone / WhatsApp / Address / Working Hours |
| 信任徽章 | ✓ | 4 个（工厂直销、全球出口、1年保修、24h响应） |
| 响应时间承诺 | ✓ | "Response within 24 hours" |
| Google Maps | ✓ | 嵌入地图 |
| 询盘流程说明 | ✓ | 4 步 "What to expect" |
| GA4 转化追踪 | ❌ 缺 | 表单提交 submitForm() 无 `gtag('event', 'generate_lead')` |
| 退出挽留 | ❌ 缺 | 无离开弹窗 |
| WhatsApp 浮动按钮 | ✓ | ChatWidget 组件 |

**需补强**：表单提交加 GA4 generate_lead 事件

### 6. 追踪与分析

| 工具 | 状态 | 详情 |
|------|------|------|
| GA4 | ✓ 已装 | ID: G-ZLCCQTLZF7，GDPR 同意后加载 |
| Clarity | ✓ 已装 | ID: y148gpq3n6，GDPR 同意后加载 |
| GSC | ✓ 已验证 | google-site-verification meta 已配置 |
| Bing | ✓ 已验证 | msvalidate.01 meta 已配置 |
| 转化事件 | ❌ 缺 | 无询盘提交转化追踪 |
| UTM 规范 | ❌ 缺 | 未检查广告链接是否带 UTM |
| 转化漏斗 | ❌ 缺 | 无 访问→产品页→询盘 的漏斗分析 |

**需补强**：GA4 添加 generate_lead 转化事件

### 7. AI 可见度

| 检查项 | 状态 | 详情 |
|--------|------|------|
| llms.txt | ✓ | 有产品列表、关键页面、事实数据（成立时间/面积/产量/支持种子数） |
| robots.txt AI 爬虫 | ✓ | 显式允许 GPTBot/ClaudeBot/PerplexityBot/Google-Extended |
| AI 引用次数 | ❌ 0 | Semrush 显示 ChatGPT 提及 0，gondor 有 474 次 |
| AI 摘要友好度 | ⚠ | 内容结构清晰，但缺少 FAQ 问答块在所有页面（仅部分页有） |

**需补强**：在核心产品页增加 FAQ 块（提升 AI 摘要提取概率）

### 8. 印度市场

| 检查项 | 状态 | 详情 |
|--------|------|------|
| 本地化内容 | ✓ 良好 | mustard/sesame/peanut/coconut 油料作物、INR 报价、220V/50Hz 电压、kachi ghani 传统工艺、Nhava Sheva/Mundra 港口、GST 文档、18-22 天运输 |
| FAQ schema | ✓ | 有 5 个印度相关 FAQ + FAQPage schema |
| Breadcrumb schema | ✓ | 有 |
| 客户案例 | ❌ 缺 | 无印度本地客户案例 |
| INR 价格表 | ❌ 缺 | 只说 "quote in INR"，无价格区间表 |
| 更多油料作物 | ⚠ | 缺 cottonseed/sunflower/soybean 详细压榨参数（印度主要油料） |

### 9. 视频 SEO

| 检查项 | 状态 | 详情 |
|--------|------|------|
| 产品页视频 | ❌ 全部缺失 | 21 个产品的 videoUrl 均为空字符串，产品页无视频展示 |
| 本地视频资源 | ⚠ 未使用 | public/videos/ 有 factory-tour.mp4 和 hydraulic-press-demo.mp4，但未嵌入任何页面 |
| YouTube 频道 | ❌ 无 | 无 YouTube 频道链接，无视频 SEO |
| Video schema | ❌ 缺 | 无 VideoObject schema |

**需补强**：将现有 2 个视频嵌入首页/产品页，创建 YouTube 频道上传产品演示

### 10. 外链建设

| 检查项 | 状态 | 详情 |
|--------|------|------|
| 引用域总数 | 123 | Semrush 数据 |
| 质量分布 | ❌ 极差 | 98% 在 0-10 评分区间，0 个 21-100 评分域 |
| 锚文本 | ❌ 垃圾 | "guest posting", "seo backlinks", "15k per month", "boost seo" |
| TLD 分布 | .com 57% / .shop 23% / .online 11% | 典型 PBN 模式 |
| 来源国 | Moldova | 垃圾外链产地 |

**需执行**：导出引用域列表 → Google Search Console 提交 Disavow

### 11. 本地 SEO

| 检查项 | 状态 | 详情 |
|--------|------|------|
| Organization schema 地址 | ✓ | 有完整地址（Qingzhou, Weifang, Shandong） |
| Google Business Profile | ❌ 未确认 | 代码中无 GBP 链接，无法确认是否注册 |
| 本地目录 | ❌ 缺 | 无 Thomasnet/Kompass 等行业目录提交 |
| NAP 一致性 | — | 需外部检查各平台 Name/Address/Phone 是否一致 |

### 12. 页面速度

| 检查项 | 状态 | 详情 |
|--------|------|------|
| 图片格式 | ✓ 优秀 | 59 WebP / 2 JPG（97% WebP） |
| 图片懒加载 | ⚠ 不足 | 仅首页和广告页有 loading="lazy"，**产品页/市场页/资源页图片无 lazy loading** |
| 字体加载 | ✓ 合理 | Google Fonts + preconnect，2 个字体族 |
| JS 延迟 | ✓ | Astro 默认优化 |
| 缓存策略 | ✓ 良好 | HTML 1天，/_astro/ 和 /images/ 1年 immutable |

**需优化**：产品页/市场页/资源页图片加 loading="lazy"

### 13. 多语言 SEO 质量

| 检查项 | 状态 | 详情 |
|--------|------|------|
| 语言文件大小 | ✓ 均衡 | en 98KB / fr 112KB / ar 131KB / id 102KB（ar 因 UTF-8 编码偏大，属正常） |
| RTL 处理 | ✓ | BaseLayout 根据 locale 设置 dir="rtl" |
| hreflang | ✓ | 4 语言 + x-default |
| 语言切换 | ✓ | Navbar 真实链接，非 JS 跳转 |
| 内容本地化 | ⚠ 待验证 | 文件大小相近说明非空模板，但内容质量需人工审核各语言 |

### 14. 季节性趋势

| 检查项 | 状态 | 详情 |
|--------|------|------|
| 季节性内容 | ❌ 未做 | 无按作物收获季节发布的内容 |
| 节日营销 | ❌ 未做 | 无排灯节（印度）、斋月（中东/印尼）等节日相关内容 |
| 搜索趋势分析 | ❌ 未做 | 未分析各关键词的月度搜索量波动 |

---

## 七、审计发现汇总（按优先级）

### 严重问题（P0，立即修复）
1. **Title 重复 bug**：services.astro / markets/index.astro 传入的 title 已含品牌名，BaseLayout 重复追加 → title 超 60 字符
2. **垃圾外链**：123 引用域 98% 低分，anchors 含 "seo backlinks" → 需 Disavow
3. **slug/title 互换**：heavy-duty-hydraulic-oil-press.md 与 medium-hydraulic-oil-press.md 的 title/model 互换

### 中等问题（P1，短期修复）
4. **GA4 无转化追踪**：表单提交未触发 generate_lead 事件
5. **产品页无视频**：21 个产品 videoUrl 全空，现有 2 个视频未使用
6. **Product schema 缺 Offer + AggregateRating**
7. **图片懒加载不全**：产品页/市场页/资源页缺 loading="lazy"
8. **Footer 内链不足**：无具体产品/解决方案/市场页链接
9. **E-E-A-T 缺认证/团队/案例**：无 ISO/CE、无工程师介绍、无具体客户案例

### 低优先级（P2，中期优化）
10. 安全头补 CSP/HSTS/Permissions-Policy
11. 核心产品页加 FAQ 块（提升 AI 摘要概率）
12. 印度页加客户案例 + INR 价格表 + cottonseed/sunflower/soybean 参数
13. 创建 YouTube 频道 + Video schema
14. 季节性/节日内容营销
