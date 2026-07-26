# 英语内容全面质量检测与SEO优化方案

## Context

用户要求从两个视角对网站英语内容进行全面审计与优化：
1. **海外采购商视角**：内容吸引力、专业性、完整性，确保买家产生询盘意愿
2. **Google SEO视角**：关键词布局、meta优化、结构化数据、内链结构

经过全面探索，发现以下核心问题：
- 联系表单使用 mailto: 而非真正的表单提交，直接导致询盘流失
- 产品详情页 meta description 使用通用模板，24个产品页面描述雷同
- 市场页标题含 `&Factory` 排版错误且超长被截断
- 产品分类页完全缺少 keywords、JSON-LD、CTA
- 市场页面包屑路径错误（Solutions 而非 Markets）
- 产品列表卡片显示原始 Markdown 截断而非精炼描述
- About/Solutions 页面大量硬编码英文，未复用 i18n 体系

---

## P0 — 直接影响询盘与索引（必须立即修复）

### P0-1: 联系表单替换为 Formspree 提交
- **文件**: `src/pages/contact.astro`, `src/pages/[locale]/contact.astro`
- **问题**: 表单用 `mailto:` 依赖本地邮件客户端，海外买家大量使用 Webmail，直接导致询盘流失
- **方案**:
  1. `<form>` 添加 `action="https://formspree.io/f/{form_id}" method="POST"`
  2. 添加隐藏字段 `_subject`、`_gotcha`（防垃圾）
  3. 删除 JS 中的 `form.addEventListener('submit', ...)` mailto 逻辑
  4. 改为 Formspree 重定向到 `/contact?success=true`，页面通过 URL 参数显示成功消息
- **范围**: 中等修改

### P0-2: 产品详情页 meta description 使用产品专属描述
- **文件**: `src/pages/products/[slug].astro` 第108行
- **问题**: `description={...通用模板...}` 24个产品描述雷同，Google 判定低质量
- **方案**: 改为 `description={product.data.description?.en || ...回退模板...}`
- **范围**: 单行修改

### P0-3: 市场页面标题修复（&无空格 + 超长截断）
- **文件**: 11个 `src/pages/markets/*.astro`
- **问题**: 标题 `"Oil Press Machine in Nigeria &Factory Direct from Haonuo"` 含排版错误，且加品牌后缀超60字符被截断
- **方案**: 重构标题格式为核心关键词前置，如 `"Oil Press Machine in Nigeria | Haonuo"`；同时修正 H1 中的 `&Factory`
- **范围**: 每文件中等修改

### P0-4: 市场页面面包屑路径修复
- **文件**: 同 P0-3 的11个文件 + `src/pages/markets/index.astro`
- **问题**: 面包屑显示 `Home > Solutions > Nigeria`，实际 URL 是 `/markets/nigeria`
- **方案**: 视觉面包屑和 BreadcrumbList JSON-LD 中的 `Solutions` 改为 `Markets`，URL 改为 `/markets`
- **范围**: 每文件小修改

### P0-5: 产品分类页添加 keywords 和 JSON-LD
- **文件**: `src/pages/products/[category].astro`
- **问题**: 无 keywords、无 jsonLd，4个分类页完全缺少 SEO 信号
- **方案**:
  1. 添加 `keywords` 参数（从分类数据或硬编码映射）
  2. 添加 ItemList + BreadcrumbList JSON-LD
- **范围**: 中等修改

### P0-6: 产品列表页卡片描述修复
- **文件**: `src/pages/products/index.astro`, `src/pages/products/[category].astro`
- **问题**: `product.body?.slice(0,100)` 显示原始 Markdown 截断，极不专业
- **方案**: 改为 `product.data.description?.en`
- **范围**: 每文件单行修改

---

## P1 — 重要优化（显著提升买家体验与搜索排名）

### P1-1: About 页面硬编码英文替换为 i18n 翻译键
- **文件**: `src/pages/about.astro`, `src/i18n/en.json`, fr.json, ar.json, id.json
- **问题**: ~80%内容硬编码英文，en.json 已有完整翻译键但未引用
- **方案**: 将所有硬编码文本替换为 `t.about.xxx` 键引用，补充 en.json 中缺失的键
- **范围**: 大改

### P1-2: Solutions 首页硬编码英文替换为 i18n 翻译键
- **文件**: `src/pages/solutions/index.astro`, en.json, fr.json, ar.json, id.json
- **问题**: ~100%内容硬编码英文
- **方案**: 同 P1-1 模式，替换为 i18n 键
- **范围**: 大改

### P1-3: 市场页面增加互链
- **文件**: 11个 `src/pages/markets/*.astro`
- **问题**: 市场页面之间零互链，不利于 PageRank 传递和买家跨市场浏览
- **方案**: 在 FAQ 与 CTA 之间添加 "Explore Other Markets" 区块，优先展示同区域市场
- **范围**: 中等修改

### P1-4: 产品分类页添加 CTA 和 FAQ
- **文件**: `src/pages/products/[category].astro`
- **问题**: 分类页只有产品网格，无询盘引导
- **方案**: 在产品网格后添加深色背景 CTA 区块（Request a Quote + WhatsApp）
- **范围**: 中等修改

### P1-5: 资源详情页 Article Schema 添加 image 字段
- **文件**: `src/pages/resources/[slug].astro`
- **方案**: articleLd 对象添加 `image` 字段
- **范围**: 小修改

### P1-6: Model Comparison 页面添加 FAQPage JSON-LD
- **文件**: `src/pages/products/model-comparison.astro`
- **问题**: 页面有4个 FAQ 但无 FAQPage 结构化数据
- **方案**: 添加 faqLd 对象并传递给 BaseLayout
- **范围**: 小修改

### P1-7: Markets 首页 H1 标题添加核心关键词
- **文件**: `src/pages/markets/index.astro`
- **问题**: H1 为 "Global Reach, Local Expertise"，缺乏搜索关键词
- **方案**: 改为 "Hydraulic Oil Press Machine — Global Markets & Regional Solutions"，原 H1 移为副标题
- **范围**: 小修改

### P1-8: Contact 页面添加信任徽章
- **文件**: `src/pages/contact.astro`
- **问题**: 联系页缺少社会证明元素
- **方案**: 在表单上方添加信任徽章（2-Year Warranty / 50+ Countries / 24hr Response / 15+ Years）
- **范围**: 小修改

---

## P2 — 进阶优化（持续提升效果）

### P2-1: 独立着陆页与分类页重复内容处理
- 确保3个着陆页有独特 title/description，与分类页区分
- 着陆页保留独特内容（FAQ、购买指南），使其有独立索引价值

### P2-2: 内链锚文本优化
- 将通用锚文本（"Explore"/"View Details"）替换为含关键词的描述性文本

### P2-3: 产品 seoKeywords 扩展
- 24个产品 .md 文件的 seoKeywords 从3-4个扩展至8-12个
- 覆盖核心词、长尾词、变体、应用词

### P2-4: 产品详情页 JSON-LD 完善
- offers 中移除无 price 的 priceCurrency，避免 GSC 报错
- 预留 aggregateRating 结构

---

## 实施顺序

1. **第一批**: P0-1 ~ P0-6（1-2天）— 直接影响询盘和索引
2. **第二批**: P1-5 ~ P1-8（1天）— 小修改快速见效
3. **第三批**: P1-1 ~ P1-4（2-3天）— 大改动
4. **第四批**: P2 逐步迭代

## 验证方式

1. 每批修改后执行 `npx astro build` 确认无编译错误
2. 检查 dist/ 目录 HTML 输出验证 meta 标签、JSON-LD
3. 用 Google Rich Results Test 验证结构化数据
4. 用 `npx astro preview` 预览页面显示效果
5. 检查所有内部链接不跳转到错误语言

## 关键文件清单

- `src/pages/contact.astro` — 表单替换
- `src/pages/products/[slug].astro` — meta description 修复
- `src/pages/products/[category].astro` — keywords + JSON-LD + CTA
- `src/pages/products/index.astro` — 卡片描述修复
- `src/pages/markets/*.astro`（11个）— 标题/面包屑/互链
- `src/pages/about.astro` — i18n 替换
- `src/pages/solutions/index.astro` — i18n 替换
- `src/pages/resources/[slug].astro` — Article Schema
- `src/pages/products/model-comparison.astro` — FAQPage Schema
- `src/i18n/en.json` — 翻译键补充
