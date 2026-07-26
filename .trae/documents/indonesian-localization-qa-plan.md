# 印尼语本地化全面同步与质量保障执行计划

## 当前状态总结

### 已完成的基础设施工作 ✅
| 项目 | 状态 | 详情 |
|------|------|------|
| id.json | ✅ 478行 | 包含所有UI翻译键，覆盖nav/home/products/solutions/resources/about/contact/footer/chat/common |
| config.ts schema | ✅ | modelId/specificationsId/applicableSeedsId/faqId/processStepsId 全部已添加 |
| id-product-bodies-1/2/3.ts | ✅ 24条目 | 产品详情页正文印尼语翻译 |
| id-solution-bodies.ts | ✅ 18条目 | 解决方案详情页正文印尼语翻译 |
| id-resource-bodies.ts | ✅ 20条目 | 资源详情页正文印尼语翻译 |
| id-market-data.ts | ✅ 11条目 | 11个市场页面数据印尼语翻译 |
| 渲染页面回退逻辑 | ✅ | 所有9个页面模板已添加id第一优先级回退 |
| SEO基础设施 | ✅ | og:locale=id_ID, hreflang=id, 语言选择器含ID |
| 18个解决方案MD | ✅ | processStepsId + faqId 全部完成 |
| 产品MD 9-16 | ✅ | modelId/specificationsId/applicableSeedsId/faqId 全部完成 |
| 产品MD 17-24 | ✅ | modelId/specificationsId/applicableSeedsId/faqId 全部完成 |

### 进行中
| 项目 | 状态 | 详情 |
|------|------|------|
| 产品MD 1-8 | 🔄 运行中 | Agent 2126874d 仍在执行，正在用Python脚本插入specificationsId/applicableSeedsId/faqId |

### 待完成的质量保障工作
- 构建验证（npm run build）
- 印尼语页面100%翻译完整性审查
- 专业术语规范性检查
- 绝对化用语审查
- 未验证财务数据审查
- 文化适应性审查
- SEO合规性检查
- 用户体验模拟与问题修复

---

## 执行步骤

### 步骤1：等待产品MD 1-8 Agent完成 + 验证
- 等待agent 2126874d完成
- 验证8个产品MD文件（mini-hydraulic, standard, stainless-steel, medium, cold-press, high-pressure, heavy-duty, ultra-high-pressure）的frontmatter包含完整的 modelId/specificationsId/applicableSeedsId/faqId
- 用Grep确认24个产品MD文件全部包含 specificationsId 和 faqId
- 用Grep确认18个解决方案MD文件全部包含 processStepsId 和 faqId

### 步骤2：构建验证
- 执行 `npm run build`，确认无错误
- 检查 `dist/id/` 下生成的页面数量
- 预期页面数：约363个（与英文版一致）
- 如有错误，定位并修复

### 步骤3：翻译完整性全面审查（6个并行子任务）

#### 3.1 产品详情页审查
- 抽查5个产品页面：`/id/products/mini-hydraulic-oil-press`, `/id/products/standard-hydraulic-oil-press`, `/id/products/coconut-oil-hydraulic-press`, `/id/products/high-speed-seed-crusher`, `/id/products/edible-oil-refining-system`
- 检查项：正文body/规格表/种子标签/FAQ/型号名 全部为印尼语
- 检查是否有英文残留

#### 3.2 解决方案页面审查
- 抽查3个解决方案页面：`/id/solutions/coconut-oil-pressing`, `/id/solutions/soybean-oil-pressing`, `/id/solutions/small-business-oil-press`
- 检查项：正文body/工艺步骤/FAQ/推荐产品 全部为印尼语

#### 3.3 资源页面审查
- 抽查3个资源页面：`/id/resources/hydraulic-vs-screw-oil-press`, `/id/resources/best-oil-press-machine-2026`, `/id/resources/small-oil-press-installation-guide`
- 检查项：正文body/面包屑/标题/描述 全部为印尼语

#### 3.4 市场页面审查
- 抽查3个市场页面：`/id/markets/indonesia`, `/id/markets/nigeria`, `/id/markets/india`
- 检查项：所有文本元素（hero/种子数据/FAQ/配送信息/CTA/面包屑）全部为印尼语

#### 3.5 特殊页面审查
- `/id/hydraulic-oil-press-machine` — 已有内联印尼语翻译
- `/id/cold-press-oil-machine` — 已有内联印尼语翻译
- `/id/manual-oil-press-machine` — 已有内联印尼语翻译
- `/id/products/model-comparison` — 需检查规格/种子/型号名回退

#### 3.6 首页及其他页面审查
- `/id/` — 首页所有区块
- `/id/about` — 关于页面
- `/id/contact` — 联系页面
- `/id/products` — 产品列表页
- `/id/solutions` — 解决方案列表页
- `/id/markets` — 市场列表页
- `/id/resources` — 资源列表页

### 步骤4：翻译质量专项检查

#### 4.1 绝对化用语审查
在id.json和所有id数据文件中搜索：
- "terbaik"（最好的）→ 替换为 "kompetitif"/"berkualitas"
- "terunggul"（无与伦比的）→ 替换为 "unggulan"
- "tertinggi"（最高的，需结合上下文）→ 保留数据性描述，移除主观判断
- "tanpa cacat"（零缺陷）→ 替换为 "andalkan"/"konsisten"
- "dijamin"（保证，需结合上下文）→ 如为价格保证则保留，如为效果保证则修改
- "terdepan"（领先的）→ 替换为 "maju"/"profesional"
- "ideal untuk" → 替换为 "cocok untuk"/"sesuai untuk"

#### 4.2 未验证财务数据审查
- 搜索所有印尼语数据文件中的价格数据（$、USD、Rp等货币符号）
- 确保所有价格描述使用 "Hubungi kami untuk harga" 而非具体数字
- 检查ROI计算器相关页面是否包含免责声明

#### 4.3 健康声称审查
- 搜索 "nutrisi"/"kesehatan"/"vitamin" 相关绝对化描述
- 确保不出现 "100%"/"mempertahankan semua" 等绝对化营养声称
- 添加变异性免责声明 "hasil dapat bervariasi"

#### 4.4 专业术语一致性检查
- 核对关键术语在id.json和数据文件中的一致性：
  - Hydraulic Oil Press → Mesin Press Minyak Hidrolik
  - Cold Press → Press Dingin
  - Barrel → Barrel（保留英语技术术语）
  - Cylinder → Silinder
  - Pressure → Tekanan
  - Motor Power → Daya Motor
  - System Pressure → Tekanan Sistem
  - Pressing Force → Gaya Press
  - Outer Diameter → Diameter Luar
  - Coconut → Kelapa
  - Sesame → Wijen
  - Peanut → Kacang Tanah
  - Sunflower → Bunga Matahari
  - Mustard → Sawi/Mustard
  - Palm Kernel → Inti Sawit
  - Shea Butter → Mentega Shea
  - FAQ → Pertanyaan yang Sering Diajukan

### 步骤5：SEO合规性检查

#### 5.1 技术SEO
- ✅ hreflang标签：已确认 BaseLayout.astro 包含 `<link rel="alternate" hreflang="id">`
- ✅ og:locale：已确认 `id_ID` 设置正确
- ✅ canonical URL：自动生成
- ✅ sitemap：@astrojs/sitemap 自动生成

#### 5.2 内容SEO
- 检查id.json中 defaultKeywords 是否包含印尼语关键词
- 检查产品/解决方案MD中 seoKeywords 字段
- 验证meta description长度 ≤ 160字符
- 验证title标签长度 ≤ 60字符
- 检查结构化数据（FAQPage, Product, BreadcrumbList）中印尼语内容

#### 5.3 页面可索引性
- 确认所有 /id/ 页面有 `<meta name="robots" content="index, follow">`
- 确认 robots.txt 不阻止 /id/ 路径
- 检查内链结构：导航、面包屑、页脚链接指向正确的 /id/ 路径

### 步骤6：文化适应性审查

#### 6.1 日期和数字格式
- 印尼语使用 dd/mm/yyyy 或 d month yyyy 格式
- 数字使用逗号作为千位分隔符（与英语相同）

#### 6.2 货币表示
- 检查是否提到具体货币金额，确保使用 "Hubungi kami untuk harga" 而非具体数字

#### 6.3 文化参考
- 检查是否有不适用于印尼语境的地域参考
- 确保市场页面描述准确反映印尼商业环境

### 步骤7：问题修复与二次验证

#### 7.1 问题分类标准
- **阻断性（P0）**：页面404、构建错误、关键内容缺失
- **严重（P1）**：英文残留、翻译错误、专业术语错误
- **一般（P2）**：格式问题、标点符号、轻微翻译不一致
- **轻微（P3）**：排版微调、间距优化

#### 7.2 修复流程
1. 汇总所有发现的问题到结构化清单
2. 按P0→P1→P2→P3优先级排序
3. 逐项实施修复
4. 修复后重新构建验证
5. 抽查修复后的页面确认问题已解决

### 步骤8：最终交付验证

- 执行完整构建 `npm run build`，确认0错误
- 抽查5-8个关键页面，确认100%印尼语内容
- 验证所有交互元素（导航、按钮、表单、FAQ折叠）显示印尼语
- 生成最终质量报告

---

## 风险与注意事项

1. **产品MD 1-8 Agent可能失败**：如agent超时或出错，需手动为8个产品文件添加id字段
2. **构建缓存问题**：长时间运行dev server可能导致缓存损坏，需重启或删除.astro目录
3. **绝对化用语可能分散在多个文件**：需在id.json、id-product-bodies-*.ts、id-solution-bodies.ts、id-resource-bodies.ts、id-market-data.ts中全面搜索
4. **内联翻译页面**：hydraulic-oil-press-machine.astro、cold-press-oil-machine.astro、manual-oil-press-machine.astro 中的印尼语文本是内联的三元表达式，需单独检查
5. **FAQ内容体量**：产品FAQ条目多（12-15条/产品），需仔细检查翻译准确性

---

## 文件路径参考

### 数据文件
- `src/data/id-product-bodies.ts`（汇总）
- `src/data/id-product-bodies-1.ts`（产品1-8）
- `src/data/id-product-bodies-2.ts`（产品9-16）
- `src/data/id-product-bodies-3.ts`（产品17-24）
- `src/data/id-solution-bodies.ts`
- `src/data/id-resource-bodies.ts`
- `src/data/id-market-data.ts`

### 翻译键
- `src/i18n/id.json`

### Schema
- `src/content/config.ts`

### 渲染页面
- `src/pages/[locale]/products/[slug].astro`
- `src/pages/[locale]/products/[category].astro`
- `src/pages/[locale]/products/index.astro`
- `src/pages/[locale]/solutions/[slug].astro`
- `src/pages/[locale]/resources/[slug].astro`
- `src/pages/[locale]/markets/[market].astro`
- `src/pages/[locale]/index.astro`
- `src/pages/[locale]/hydraulic-oil-press-machine.astro`
- `src/pages/[locale]/cold-press-oil-machine.astro`
- `src/pages/[locale]/manual-oil-press-machine.astro`

### 布局与组件
- `src/layouts/BaseLayout.astro`
- `src/components/Navbar.astro`
- `src/components/Footer.astro`
