# 英语内容全面质量检测与优化方案

## 摘要

基于对网站全部英语内容的系统性审计，从**海外采购商视角**和**Google SEO视角**两个维度识别出18项优化任务，按优先级分为P0（直接影响买家理解/SEO索引）、P1（影响转化和排名）、P2（持续优化）三级。

---

## 当前状态分析

### 采购商视角：核心问题

1. **英语规格字段混入法语** — 12个产品文件的specifications中含"personnalisable"（法语"可定制"），1个产品含"tonnes/jour"和"entièrement personnalisable"，英语买家无法理解
2. **生产时间承诺不一致** — 24个产品FAQ中23个写"15-20 working days"，但project_memory约束要求"20-30 working days"，买家可能因承诺不符而产生投诉
3. **产品总列表页3个断链** — 侧边栏"Hydraulic Oil Press Machine"/"Cold Press Oil Machine"/"Manual Oil Press Machine"指向不存在的路径，买家点击后404
4. **About页出现中文公司名** — "山东浩诺机械设备集团有限公司"出现在英文页面，降低专业度
5. **FAQ高度同质化** — 12+个通用FAQ跨24产品完全相同，买家看不出型号差异
6. **Contact页"What to Expect"也写"15-20 working days"** — 与产品FAQ同样的不一致

### SEO视角：核心问题

1. **seoKeywords严重不足** — 全部24个产品仅2-5个关键词，远低于8-12个目标，长尾词覆盖缺失
2. **en.json缺少SEO关键字段** — 无`common.defaultKeywords`、`common.defaultTitle`、`common.defaultDesc`、`common.ctaSuffix`，BaseLayout回退到硬编码值
3. **FAQ重复内容** — Google可能将高度相同的FAQ答案判定为thin/duplicate content，影响页面质量评分
4. **产品总列表页缺少keywords和JSON-LD** — 与分类页不同，产品总列表页未传递keywords和ItemList schema
5. **内链锚文本缺乏SEO价值** — "View Details"/"Explore"/"Learn More"等通用文本占主导

---

## 第一批：P0级 — 直接影响买家理解与SEO索引

### P0-A: 英语规格字段法语替换（12个文件，63处）

- **文件**: `src/content/products/*.md`（12个受影响文件）
- **问题**: 英语specifications字段含法语"personnalisable"，`edible-oil-refining-system.md`更含"tonnes/jour"和"entièrement personnalisable"
- **方案**: 
  - 在英语specifications块中：`(personnalisable)` → `(customizable)`
  - `edible-oil-refining-system.md`：`1-100 tonnes/jour (entièrement personnalisable)` → `1-100 tons/day (fully customizable)`
  - **注意**：仅修改英语specifications块，不修改specificationsFr块中的法语
- **受影响文件清单**：
  - standard-hydraulic-oil-press.md (6处)
  - cold-press-hydraulic-oil-press.md (6处)
  - heavy-duty-hydraulic-oil-press.md (6处)
  - mini-hydraulic-oil-press.md (6处)
  - high-pressure-hydraulic-oil-press.md (6处)
  - medium-hydraulic-oil-press.md (6处)
  - stainless-steel-hydraulic-oil-press.md (6处)
  - ultra-high-pressure-cold-press.md (6处)
  - ultra-high-pressure-hydraulic-oil-press.md (6处)
  - animal-fat-hydraulic-press.md (5处)
  - edible-oil-refining-system.md (3处，含tonnes/jour)
  - stainless-steel-oil-refining-equipment.md (1处)
- **验证**: `grep -r "personnalisable" src/content/products/` 仅在specificationsFr块中出现

### P0-B: 产品总列表页侧边栏断链修复

- **文件**: `src/pages/products/index.astro`（第109-129行）
- **问题**: 侧边栏3个快捷链接指向不存在的路径
- **方案**: 
  - `/hydraulic-oil-press-machine` → `/products/standard-hydraulic-oil-press`
  - `/cold-press-oil-machine` → `/products/cold-press-hydraulic-oil-press`
  - `/manual-oil-press-machine` → `/products/mini-hydraulic-oil-press`
- **验证**: 3个链接均可正常访问，返回200

### P0-C: 生产时间统一修正为"20-30 working days"（24个文件+Contact页）

- **文件**: `src/content/products/*.md`（24个文件的FAQ字段）+ `src/pages/contact.astro`
- **问题**: 产品FAQ中"15-20 working days production time"与project_memory约束"20-30 working days"矛盾
- **方案**:
  - 英语FAQ：`15-20 working days production time` → `20-30 working days production time (shipping time additional)`
  - 法语FAQ：`15-20 jours ouvrables` / `15-20 jours ouvrés` → `20-30 jours ouvrés (délai d'expédition en supplément)`
  - Contact页"What to Expect"步骤3描述中如有"15-20"也需修正
- **受影响行**（英语FAQ，约20个文件）：
  - 所有含 `15-20 working days production time` 的faq answer
- **受影响行**（法语FAQ，约5个文件）：
  - electric-seed-steamer.md, integrated-feeder-crusher-roaster.md, thermal-oil-roasting-pan.md, wood-fired-seed-steamer.md（含`15-20 jours ouvrables`）
  - pneumatic-oil-filter-press.md 已正确写 `20-30 jours ouvrés`，无需修改
- **验证**: `grep -r "15-20 working days\|15-20 jours" src/content/products/` 返回0结果

### P0-D: About页中文公司名移除

- **文件**: `src/pages/about.astro`（第92行）
- **问题**: 英文页面出现"山东浩诺机械设备集团有限公司"
- **方案**: 移除括号内的中文公司名，仅保留英文全称
  - `Shandong Haonuo Machinery Equipment Group Co., Ltd. (山东浩诺机械设备集团有限公司)` → `Shandong Haonuo Machinery Equipment Group Co., Ltd.`
- **验证**: `grep "山东" src/pages/about.astro` 返回0结果

---

## 第二批：P1级 — 影响买家转化与搜索排名

### P1-A: en.json补充SEO关键字段

- **文件**: `src/i18n/en.json`
- **问题**: 缺少`common.defaultKeywords`、`common.defaultTitle`、`common.defaultDesc`、`common.ctaSuffix`，BaseLayout回退到硬编码值
- **方案**: 在`common`对象中添加：
  ```json
  "defaultKeywords": "hydraulic oil press, oil press machine, cold press oil machine, hydraulic oil press manufacturer, cold press hydraulic oil press, oil press machine price, coconut oil press, sesame oil press, peanut oil press, Haonuo Machinery, oil extraction machine, seed oil press",
  "defaultTitle": "Haonuo Machinery - Hydraulic Oil Press Manufacturer",
  "defaultDesc": "Professional hydraulic oil press manufacturer since 2010. Cold press technology for coconut, sesame, peanut & more. Factory-direct pricing. Get a free quote!",
  "ctaSuffix": " Get a free quote!"
  ```
- **验证**: BaseLayout读取这些字段不再回退到硬编码值

### P1-B: 产品总列表页添加keywords + ItemList JSON-LD

- **文件**: `src/pages/products/index.astro`
- **问题**: 产品总列表页未传递keywords给BaseLayout，缺少ItemList结构化数据
- **方案**:
  1. 添加关键词数组传给BaseLayout的keywords prop
  2. 添加ItemList JSON-LD列出所有产品
  3. 添加BreadcrumbList JSON-LD
- **验证**: 产品总列表页HTML源码包含keywords meta标签和ItemList JSON-LD

### P1-C: 产品seoKeywords扩展（24个文件，从2-5个→8-12个）

- **文件**: `src/content/products/*.md`（24个文件）
- **方案**: 每个产品的seoKeywords扩展至8-12个，覆盖：
  - 核心词（如 `hydraulic oil press machine`）
  - 型号词（如 `HN325 hydraulic oil press`）
  - 应用词（如 `sesame oil press machine`、`coconut oil extraction`）
  - 长尾词（如 `325 ton hydraulic oil press price`）
  - 同义词（如 `cold press oil extractor`）
  - 地域词（如 `oil press machine for Nigeria`，仅适用时添加）
  
  **关键词映射示例**：
  - standard-hydraulic-oil-press: `hydraulic oil press machine`, `hydraulic oil press`, `standard hydraulic oil press`, `oil press machine`, `HN325 oil press`, `325 ton oil press`, `sesame oil press machine`, `peanut oil press`, `cold press oil machine`, `oil press machine price`
  - cold-press-hydraulic-oil-press: `cold press oil machine`, `cold press hydraulic oil press`, `hydraulic cold press oil machine`, `cold press oil extractor`, `HN426 cold press`, `500 ton oil press`, `coconut oil press machine`, `walnut oil press`, `cold pressed oil machine`, `VCO press machine`
  - (其他22个产品类似扩展)
- **验证**: 每个产品的seoKeywords数量 ≥ 8个

### P1-D: Contact页"What to Expect"生产时间修正

- **文件**: `src/pages/contact.astro`
- **问题**: "What to Expect"步骤3描述可能写"15-20 working days"（需确认）
- **方案**: 检查并修正为"20-30 working days (shipping time additional)"
- **验证**: Contact页不再出现"15-20 working days"

### P1-E: 产品FAQ差异化（24个文件）

- **文件**: `src/content/products/*.md`
- **问题**: 12+个通用FAQ跨产品完全相同，Google重复内容风险
- **方案**: 为通用FAQ添加型号特定信息，保持核心答案一致但增加差异化细节：
  - **保修FAQ**: 添加"对于HN325，我们额外提供液压泵站的1年专项保修"等型号专属条款
  - **运输FAQ**: 已通过P0-C统一生产时间为20-30天，此FAQ也会因生产时间修正而有所变化
  - **安装FAQ**: 添加型号特定的安装注意事项（如"HN426冷压机型需确保地面承重≥3吨"）
  - **认证FAQ**: 添加"HN325/HN426通过48小时连续满载测试，测试视频随货提供"等补充信息
  - **备件FAQ**: 添加型号特定备件信息（如"HN325常用密封件型号：φ325×φ260，库存常备"）
  - **发电机FAQ**: 已有kVA差异（5kVA vs 5.5kVA），但可添加更多型号特定建议
  
  **差异化策略**：每个产品至少5个FAQ包含型号特定信息（oil yield + raw materials + generator已有，需再增加2-3个）
- **验证**: 比较3个产品的通用FAQ，答案有明显差异化

### P1-F: 内链锚文本优化

- **文件**: 多个页面中的CTA和链接文本
- **问题**: "View Details"/"Explore"/"Learn More"等通用锚文本无SEO价值
- **方案**: 替换为含关键词的描述性文本：
  - 产品卡片 "View Details" → "View {Model} Specifications"（如"View HN325 Specifications"）
  - 解决方案卡片 "Explore" → "Explore {Oil Type} Solutions"（如"Explore Coconut Oil Solutions"）
  - 首页CTA "View Products" → "Browse Oil Press Machines"
  - 其他 "Learn More" → 含具体产品/方案名的锚文本
- **涉及文件**: `src/pages/index.astro`, `src/pages/products/index.astro`, `src/pages/solutions/index.astro`, `src/pages/products/[category].astro`
- **验证**: 搜索"View Details"/"Explore"等通用文本，确认已替换

### P1-G: 首页stats区块highlight标签修正

- **文件**: `src/pages/index.astro`（第58行）
- **问题**: "3,000"统计项的highlight标签显示"Quality Tested"，应为"m²"（对应"m² Production Facility"）
- **方案**: 将 `{ value: '3,000', label: t.home.statsArea, highlight: 'Quality Tested' }` 中的 `highlight` 改为 `'m²'`
- **验证**: 首页"3,000"统计项下方显示"m²"

---

## 第三批：P2级 — 持续优化

### P2-A: 产品详情页"Recommended Oil Seeds"绿色标签+"+ more"指示器

- **文件**: `src/pages/products/[slug].astro`（第184-201行）
- **问题**: 现有实现已显示applicableSeeds，但project_memory约束要求"绿色标签 + '+ more' 指示器"格式
- **方案**: 
  - 当前种子标签样式 `bg-green-50 text-green-700` 已是绿色标签（符合约束）
  - 添加"+ more"指示器文本，提示该机型也可处理其他油料
  - 例如在种子标签后添加 `<span class="text-sm text-steel-500">+ more oil seeds available</span>`
- **验证**: 产品详情页种子区域显示绿色标签和"+ more"文本

### P2-B: 市场总览页面包屑JSON-LD修正

- **文件**: `src/pages/markets/index.astro`
- **问题**: 面包屑JSON-LD中position 2和3都叫"Markets"，都指向`/markets`，存在冗余
- **方案**: 修正为标准的2级面包屑：
  - Position 1: Home → `https://www.hydoilpress.com/`
  - Position 2: Markets → `https://www.hydoilpress.com/markets`
  - 移除冗余的position 3
- **验证**: 面包屑JSON-LD仅2级，无重复

### P2-C: 页脚Privacy Policy和Terms of Service占位处理

- **文件**: `src/components/Footer.astro`
- **问题**: 页脚"Privacy Policy"和"Terms of Service"标签无实际链接（href="#"或无href）
- **方案**: 
  - 短期：如果暂无内容，移除这两个链接，改为纯文本标签或添加`title="Coming soon"`属性
  - 长期：创建实际Privacy Policy和Terms页面
- **验证**: 页脚不再有指向空页面的链接

### P2-D: OG图片路径确认与修复

- **文件**: BaseLayout + 产品内容文件
- **问题**: OG默认图片`public/images/og-default.webp`需确认存在；产品页OG图片使用相对路径未加域名前缀
- **方案**:
  1. 确认`public/images/og-default.webp`文件存在
  2. 在[slug].astro中传递ogImage时，添加域名前缀：`https://www.hydoilpress.com${product.data.images[0]}`
- **验证**: 产品页`og:image` meta标签返回完整URL

---

## 关键文件清单

| 文件 | 涉及任务 |
|------|----------|
| `src/content/products/*.md`（24个） | P0-A, P0-C, P1-C, P1-E |
| `src/pages/products/index.astro` | P0-B, P1-B, P1-F |
| `src/pages/about.astro` | P0-D |
| `src/i18n/en.json` | P1-A |
| `src/pages/contact.astro` | P1-D |
| `src/pages/index.astro` | P1-F, P1-G |
| `src/pages/products/[slug].astro` | P2-A, P2-D |
| `src/pages/products/[category].astro` | P1-F |
| `src/pages/solutions/index.astro` | P1-F |
| `src/pages/markets/index.astro` | P2-B |
| `src/components/Footer.astro` | P2-C |

## 实施顺序

1. **第1步**: P0-A → P0-B → P0-C → P0-D（核心买家理解问题修复）
2. **第2步**: P1-A → P1-B → P1-C → P1-D → P1-G（SEO基础设施强化）
3. **第3步**: P1-E → P1-F（内容质量提升，工作量较大）
4. **第4步**: P2-A → P2-B → P2-C → P2-D（持续优化）
5. **每步结束后**: `npx astro build` 验证无编译错误

## 验证方式

1. 每批修改后执行 `npx astro build` 确认无编译错误
2. `grep -r "personnalisable" src/content/products/` 仅在specificationsFr块中出现
3. `grep -r "15-20 working days\|15-20 jours" src/content/products/` 返回0结果
4. 产品总列表页3个侧边栏链接均返回200
5. en.json的common对象包含4个新字段
6. 抽查3个产品页面的FAQ，确认差异化
7. 首页stats区块"3,000"标签显示"m²"
