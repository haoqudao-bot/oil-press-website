# 英语内容质量优化 + 法语SEO关键词优化方案

## 背景

用户要求从两个视角对网站进行全方位优化：
1. **海外采购商视角**：内容吸引力、专业性、完整性，确保买家产生询盘意愿
2. **Google SEO视角**：系统性关键词分析与优化，确保英语和法语核心关键词稳定出现在搜索结果首页

**已完成工作**（上一轮）：
- ✅ P0-1: Formspree表单替换
- ✅ P0-2: 产品详情页meta description修复
- ✅ P0-6: 产品列表卡片描述修复
- ✅ P0-3+4: 市场页面标题和面包屑修复（背景代理完成）

**本轮重点**：修复影响询盘转化和搜索排名的核心问题，同时扩展法语SEO关键词覆盖

---

## 第一批：P0级 — 直接影响询盘与搜索索引

### P0-A: BaseLayout Description 截断问题修复
- **文件**: `src/layouts/BaseLayout.astro`
- **问题**: `maxDescLen = 150` + 自动追加CTA后缀 `Get a free quote!`，导致：
  - 印度市场页description从178字符被截断为149字符+`…`，关键信息（2-year warranty）丢失
  - Solutions首页、Model Comparison等多个页面description被截断
  - Google搜索结果展示不完整，降低点击率
- **方案**: 
  1. 将 `maxDescLen` 从 150 提升到 160（Google桌面端显示上限）
  2. 优化CTA后缀逻辑：如果传入的description已包含CTA意图（如含"quote"/"contact"），则不追加后缀
  3. 对各页面传入的description进行统一缩短，确保加后缀后不超160字符
- **验证**: 检查所有页面meta description长度 ≤ 160字符

### P0-B: 产品分类页添加 keywords + JSON-LD + CTA
- **文件**: `src/pages/products/[category].astro`
- **问题**: 4个分类页完全缺少 keywords、JSON-LD、CTA询盘引导
- **方案**:
  1. 为每个分类添加 keywords 映射（如 hydraulic-oil-press → 8-12个关键词）
  2. 添加 ItemList JSON-LD（列出当前分类下的产品）
  3. 添加 BreadcrumbList JSON-LD
  4. 在产品网格后添加深色背景 CTA 区块（Request a Quote + WhatsApp）
- **验证**: 4个分类页均有keywords、ItemList+BreadcrumbList JSON-LD、CTA区块

### P0-C: 侧边栏链接修复（分类页）
- **文件**: `src/pages/products/[category].astro`
- **问题**: 侧边栏"Hydraulic Oil Press Machine"、"Cold Press Oil Machine"、"Manual Oil Press Machine"链接指向 `/hydraulic-oil-press-machine`、`/cold-press-oil-machine`、`/manual-oil-press-machine`（不存在的路径），应指向对应产品页
- **方案**: 修改为 `/products/hydraulic-oil-press`、`/products/cold-press-hydraulic-oil-press`、`/products/mini-hydraulic-oil-press`（与Navbar修复一致）
- **验证**: 侧边栏3个链接均可正常访问

### P0-D: 产品内容文件中文混杂修复
- **文件**: `src/content/products/coconut-oil-hydraulic-press.md` 及其他含中文的规格
- **问题**: 英文规格值中包含中文，如 `300 Type Coconut (300型椰汁款)`，海外买家无法理解
- **方案**: 移除中文部分，仅保留英文。逐个检查24个产品文件的specifications字段
- **验证**: 所有产品specifications仅含英文

---

## 第二批：P1级 — 重要优化（买家体验 + SEO排名）

### P1-A: Model Comparison 页面添加 FAQPage JSON-LD
- **文件**: `src/pages/products/model-comparison.astro`
- **问题**: 页面有4个FAQ但无FAQPage结构化数据，错失Google FAQ富摘要
- **方案**: 从页面FAQ数据构建faqLd对象，传递给BaseLayout的jsonLd参数
- **范围**: 小修改（~20行代码）

### P1-B: Resources 详情页 Article Schema 补充
- **文件**: `src/pages/resources/[slug].astro`
- **问题**: Article schema缺少 `image` 和 `dateModified` 字段
- **方案**: 
  1. 添加 `image` 字段（使用resource的featured image或默认og图片）
  2. 添加 `dateModified` 字段（使用 `updatedAt` 或 `publishedAt`）
- **范围**: 小修改

### P1-C: Contact 页面添加信任徽章
- **文件**: `src/pages/contact.astro`
- **问题**: 联系页缺少社会证明元素，降低买家发送询盘的信心
- **方案**: 在表单上方添加4个信任徽章：
  - 🛡️ 2-Year Warranty
  - 🌍 50+ Countries Served
  - ⏱️ 24-Hour Response
  - 🏭 15+ Years Manufacturer
- **范围**: 小修改

### P1-D: Solutions 首页标题优化
- **文件**: `src/pages/solutions/index.astro`
- **问题**: Title `Oil Pressing Solutions — Complete Hydraulic Oil Press Machine Solutions` 约70字符+品牌后缀，被截断
- **方案**: 缩短为 `Hydraulic Oil Press Solutions by Seed Type & Scale`（~49字符+后缀≈69字符仍需再优化）
  - 最终建议: `Oil Press Solutions | Seed Type & Production Scale`（48字符+后缀=66字符，需截断为60→约42字符标题+后缀）
  - 实际最佳: `Oil Press Solutions by Seed & Scale`（36字符+后缀=55字符，完整显示）
- **范围**: 单行修改

### P1-E: 产品分类页 description 长度优化
- **文件**: `src/content/categories/*.md`（4个分类的description）
- **问题**: 分类description可能超长被截断，需确保加CTA后缀后≤160字符
- **方案**: 逐个检查4个分类的description.en长度，如超标则缩短
- **范围**: 小修改

### P1-F: 首页国家标签添加市场页链接
- **文件**: `src/pages/index.astro`
- **问题**: "Trusted By" 区块22个国家标签纯文本不可点击，错失内链SEO价值和用户导航
- **方案**: 将匹配11个核心市场的国家名转为 `<a>` 标签链接到 `/markets/{country}`
- **范围**: 中等修改

---

## 第三批：P1级法语SEO关键词专项优化

### P1-G: fr.json 法语关键词扩展
- **文件**: `src/i18n/fr.json`
- **问题**: `common.defaultKeywords` 仅有6个法语关键词，缺少高搜索量长尾词
- **方案**: 扩展 `defaultKeywords` 至 12-15 个，覆盖：
  - 核心词: `presse à huile hydraulique`, `machine de pressage d'huile`, `pressage à froid`
  - 产品词: `presse à huile de coco`, `presse à huile de sésame`, `presse à huile d'arachide`
  - 长尾词: `prix presse à huile hydraulique`, `machine extraction huile`, `équipement de pressage d'huile`
  - 市场词: `presse à huile Afrique`, `presse à huile Inde`
  - 应用词: `production huile végétale`, `pressage à froid noix de coco`

### P1-H: 产品内容文件法语 description 优化
- **文件**: `src/content/products/*.md`（24个文件）
- **问题**: 产品法语description直接从英语翻译，未针对法语搜索习惯优化关键词
- **方案**: 逐个检查24个产品的 `description.fr` 字段，确保：
  1. 包含核心法语关键词（如 `presse à huile hydraulique` 而非生硬翻译）
  2. 长度 ≤ 130字符（留出CTA后缀空间）
  3. 包含具体技术参数（吨位、压力等）增强搜索相关性

### P1-I: 法语页面 title 关键词优化
- **文件**: `src/i18n/fr.json` 中的 `site.title` 和各板块 title
- **问题**: 法语页面title关键词密度不足
- **方案**: 优化 fr.json 中的关键 title 字段：
  - `site.title`: 确保包含 `Presse à Huile Hydraulique` + `Fabricant`
  - `home.heroTitle`: 包含核心法语关键词
  - `products.title`: `Presse à Huile Hydraulique — Nos Produits`
  - `solutions.title`: `Solutions de Pressage d'Huile`
  - `contact.title`: `Contactez-nous | Presse à Huile Haonuo`

### P1-J: 法语市场页 H1/Title 关键词优化
- **文件**: `src/pages/[locale]/markets/*.astro`（11个市场页的法语版本，如果存在）
- **问题**: 法语市场页可能缺少或关键词不够精准
- **方案**: 检查所有法语市场页（`/fr/markets/nigeria` 等），确认：
  1. 法语title包含 `presse à huile` + 国家名法语版
  2. 法语H1包含核心关键词
  3. 法语description ≤ 130字符+CTA
  - 注：如果法语市场页由同一个 .astro 模板动态生成，需检查 [locale] 路由下是否有对应页面

---

## 第四批：P2级 — 持续优化

### P2-A: 产品 seoKeywords 扩展（英语）
- **文件**: `src/content/products/*.md`（24个文件）
- **方案**: 每个产品的 seoKeywords 从 4 个扩展到 8-12 个，覆盖：
  - 核心词 + 型号词（如 `HN325 hydraulic oil press`）
  - 应用词（如 `sesame oil press machine`）
  - 长尾词（如 `325 ton hydraulic oil press price`）
  - 同义词（如 `cold press oil extractor`）

### P2-B: 产品FAQ差异化
- **文件**: `src/content/products/*.md`
- **问题**: 24个产品的FAQ中，保修/运输/安装等问题答案完全相同，Google判定重复内容
- **方案**: 为每个型号的通用FAQ答案添加型号特定细节（如HN325的保修→提及具体2年+HN325备件库存）

### P2-C: BaseLayout 添加 robots meta + Organization @id
- **文件**: `src/layouts/BaseLayout.astro`
- **方案**:
  1. 添加 `<meta name="robots" content="index, follow">`
  2. Organization JSON-LD 添加 `@id: 'https://www.hydoilpress.com/#organization'`

### P2-D: 内链锚文本优化
- **文件**: 多个页面
- **问题**: 通用锚文本如 "View Details"/"Explore" 无SEO价值
- **方案**: 替换为含关键词的描述性文本，如 "View HN325 Specifications"/"Explore Coconut Oil Solutions"

---

## 关键文件清单

| 文件 | 涉及任务 |
|------|----------|
| `src/layouts/BaseLayout.astro` | P0-A, P2-C |
| `src/pages/products/[category].astro` | P0-B, P0-C |
| `src/pages/products/model-comparison.astro` | P1-A |
| `src/pages/resources/[slug].astro` | P1-B |
| `src/pages/contact.astro` | P1-C |
| `src/pages/solutions/index.astro` | P1-D |
| `src/pages/index.astro` | P1-F |
| `src/i18n/fr.json` | P1-G, P1-I |
| `src/content/products/*.md` | P0-D, P1-H, P2-A, P2-B |
| `src/content/categories/*.md` | P1-E |

## 实施顺序

1. **第1天**: P0-A → P0-B → P0-C → P0-D（核心截断+缺失功能修复）
2. **第2天**: P1-A → P1-B → P1-C → P1-D → P1-E → P1-F（小修改快速见效）
3. **第3天**: P1-G → P1-H → P1-I → P1-J（法语SEO关键词专项）
4. **第4天**: P2-A → P2-B → P2-C → P2-D（持续优化）
5. **每日结束**: `npx astro build` 验证无编译错误

## 验证方式

1. 每批修改后执行 `npx astro build` 确认无编译错误
2. 检查 `dist/` 目录 HTML 输出验证 meta 标签、JSON-LD
3. 用 Google Rich Results Test 验证结构化数据
4. 检查法语页面所有 /fr/ 路由正常返回
5. 验证所有内部链接不跳转到错误语言/404页面
