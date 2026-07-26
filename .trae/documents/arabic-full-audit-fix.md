# 阿拉伯语网站全面审核与修复计划

## 摘要

对阿拉伯语网站进行全面用户体验与内容质量审核后，发现6大类共50+项问题。本计划按严重程度分5个阶段修复，确保所有阿拉伯语页面达到100%翻译完成、翻译准确、视觉呈现专业且符合阿拉伯语阅读习惯。

---

## 当前状态分析

### 已完成的工作
- ✅ ar.json 翻译文件已完整（474行，覆盖en.json所有键 + 55个额外的home键 + 10个about键）
- ✅ 产品/解决方案/资源 MD文件的 title.ar 和 description.ar 100%填充
- ✅ content/config.ts 已定义 specificationsAr, applicableSeedsAr, faqAr, processStepsAr 字段
- ✅ products/[slug].astro 已实现 ar>fr>en 三级回退渲染逻辑
- ✅ solutions/[slug].astro 已实现 ar>fr>en 三级回退渲染逻辑
- ✅ resources/[slug].astro 已实现 ar>fr>en 三级回退渲染逻辑
- ✅ BaseLayout.astro 已正确设置 dir="rtl"
- ✅ global.css 已有14条RTL基础规则
- ✅ 404和英文跳转问题已修复

### 核心问题清单（按严重程度排序）

#### 🔴 严重（P0）- 影响用户体验和内容可理解性
1. **24个产品MD的 specificationsAr/applicableSeedsAr/faqAr 全部为空** — 阿拉伯语产品页显示英文规格/种子/FAQ
2. **18个解决方案MD的 processStepsAr/faqAr 全部为空** — 阿拉伯语方案页显示英文步骤/FAQ
3. **ar-market-data.ts 为空** — 阿拉伯语市场页全部使用法语数据
4. **ar-product-bodies-1/2/3.ts 为空** — 阿拉伯语产品页正文使用英文原文
5. **ar-solution-bodies.ts 为空** — 阿拉伯语方案页正文使用英文原文
6. **ar-resource-bodies.ts 为空** — 阿拉伯语资源页正文使用英文原文

#### 🟠 重要（P1）- 影响页面专业性和一致性
7. **markets/[market].astro 未导入arMarketData** — 第5行只导入frMarketData，第59行直接使用法语数据
8. **首页index.astro的getLocalizedSpecs只处理法语** — 产品规格在阿拉伯语页显示英文
9. **首页产品型号只处理法语modelFr** — 无阿拉伯语型号支持
10. **products/index.astro的getLocalizedSeeds/getLocalizedModel只处理法语** — 产品列表页同样缺失阿拉伯语
11. **about.astro WhatsApp链接硬编码法语消息** — 阿拉伯语用户点击发送法语消息
12. **contact.astro多个硬编码英文回退** — 地址、表单主题、地图标题等
13. **markets/index.astro大量内联条件缺少id locale** — 统计数字、按钮文本等
14. **solutions/index.astro市场名称缺少阿拉伯语** — 阿拉伯语用户看到英文国名

#### 🟡 中等（P2）- RTL布局和视觉呈现问题
15. **about.astro时间轴RTL手动覆盖脆弱** — inline style + 无效CSS（transform: translateX(1.5)缺单位）
16. **markets/index.astro使用ml-1/ml-2物理方向** — RTL下不自动翻转，应使用ms-1/ms-2
17. **global.css缺少Hero轮播箭头RTL翻转**
18. **global.css缺少CTA链接箭头方向RTL翻转**
19. **about.astro面包屑结构化数据硬编码字符串** — 应使用翻译键

#### 🟢 低（P3）- 代码质量和一致性
20. **markets/index.astro页面标题/描述未使用翻译键**
21. **resources/index.astro localePath函数缺少en处理**
22. **BaseLayout meta标签英文硬编码回退**
23. **首页轮播aria-label英文回退**

---

## 实施计划

### 阶段1：页面渲染逻辑修复（P1问题7-14）

**目标：** 确保所有页面模板正确支持阿拉伯语回退逻辑

#### 1.1 市场详情页 markets/[market].astro
- **文件：** `src/pages/[locale]/markets/[market].astro`
- **修改：**
  - 第5行后添加 `import { arMarketData } from '../../../data/ar-market-data';`
  - 第59行 `const marketData = frMarketData[market];` 改为：
    ```typescript
    const marketData = currentLocale === 'ar' && arMarketData[market] ? arMarketData[market] : frMarketData[market];
    ```
  - 第171行产品规格添加阿拉伯语回退：
    ```typescript
    {(currentLocale === 'ar' && product.data.specificationsAr?.length > 0 ? product.data.specificationsAr : currentLocale === 'fr' && product.data.specificationsFr?.length > 0 ? product.data.specificationsFr : product.data.specifications).slice(0, 2).map(spec => (...))}
    ```

#### 1.2 首页 index.astro
- **文件：** `src/pages/[locale]/index.astro`
- **修改：**
  - getLocalizedSpecs函数添加阿拉伯语支持（第33-38行）：
    ```typescript
    function getLocalizedSpecs(product: any): { name: string; value: string }[] {
      if (currentLocale === 'ar' && product.data.specificationsAr?.length > 0) {
        return product.data.specificationsAr;
      }
      if (currentLocale === 'fr' && product.data.specificationsFr?.length > 0) {
        return product.data.specificationsFr;
      }
      return product.data.specifications;
    }
    ```
  - 产品型号显示添加阿拉伯语支持（第528行）：
    ```astro
    {currentLocale === 'ar' && product.data.modelAr ? product.data.modelAr : currentLocale === 'fr' && product.data.modelFr ? product.data.modelFr : product.data.model}
    ```

#### 1.3 产品列表页 products/index.astro
- **文件：** `src/pages/[locale]/products/index.astro`
- **修改：**
  - getLocalizedSeeds函数添加阿拉伯语支持（第62-67行）
  - getLocalizedModel函数添加阿拉伯语支持（第70-75行）

#### 1.4 关于页 about.astro
- **文件：** `src/pages/[locale]/about.astro`
- **修改：**
  - WhatsApp链接使用翻译键替换硬编码法语消息（第365行）
  - 面包屑结构化数据使用翻译键替换内联条件（第26-27行）
  - 国家名称添加阿拉伯语翻译（第65-68行）
  - 时间轴RTL布局改用Tailwind逻辑属性（第175-194行）

#### 1.5 联系页 contact.astro
- **文件：** `src/pages/[locale]/contact.astro`
- **修改：**
  - 表单subject使用翻译键（第117行）
  - 地址文本使用翻译键（第267行）
  - WhatsApp预设消息回退值（第68行）
  - 地图title回退值（第336行）

#### 1.6 市场列表页 markets/index.astro
- **文件：** `src/pages/[locale]/markets/index.astro`
- **修改：**
  - 页面标题/描述移至ar.json翻译键
  - 统计文本添加id locale支持
  - ml-1/ml-2改为ms-1/ms-2
  - CTA按钮文本使用翻译键

#### 1.7 解决方案列表页 solutions/index.astro
- **文件：** `src/pages/[locale]/solutions/index.astro`
- **修改：**
  - 市场名称添加阿拉伯语翻译（第64-75行）

---

### 阶段2：阿拉伯语内容数据填充（P0问题1-6）

**目标：** 填充所有阿拉伯语翻译内容，确保100%翻译完成

> **重要说明：** 这是工作量最大的阶段，需要翻译约5000-6000行/段文本。由于翻译量大，将分批执行，优先处理用户最可能访问的页面。

#### 2.1 市场数据 ar-market-data.ts
- **文件：** `src/data/ar-market-data.ts`
- **内容：** 翻译11个市场的完整阿拉伯语数据（参照fr-market-data.ts结构）
  - nigeria, india, indonesia, pakistan, philippines, egypt, south-africa, kenya, uk, usa, middle-east
  - 每个市场包含：title, description, heroTitle, heroDesc, seedsTitle, seeds, productsTitle, quoteTitle, quoteDesc, quoteCards, quoteCta, shippingTitle, shipping, faqTitle, faqs, ctaTitle, ctaDesc, ctaButton, whatsappText, breadcrumbHome, breadcrumbMarkets, breadcrumbMarket

#### 2.2 产品MD文件 specificationsAr/applicableSeedsAr/faqAr
- **文件：** `src/content/products/*.md`（24个文件）
- **内容：** 每个产品文件添加：
  - specificationsAr: 规格名称和值的阿拉伯语翻译
  - applicableSeedsAr: 适用种子的阿拉伯语名称
  - faqAr: FAQ的阿拉伯语问答
- **参照：** 对应的 specificationsFr/applicableSeedsFr/faqFr 字段

#### 2.3 解决方案MD文件 processStepsAr/faqAr
- **文件：** `src/content/solutions/*.md`（18个文件）
- **内容：** 每个方案文件添加：
  - processStepsAr: 流程步骤的阿拉伯语翻译
  - faqAr: FAQ的阿拉伯语问答

#### 2.4 产品正文 ar-product-bodies-1/2/3.ts
- **文件：** `src/data/ar-product-bodies-1.ts`, `ar-product-bodies-2.ts`, `ar-product-bodies-3.ts`
- **内容：** 24个产品的阿拉伯语正文Markdown内容
- **参照：** fr-product-bodies-1/2/3.ts 的结构和内容

#### 2.5 解决方案正文 ar-solution-bodies.ts
- **文件：** `src/data/ar-solution-bodies.ts`
- **内容：** 18个方案的阿拉伯语正文Markdown内容
- **参照：** fr-solution-bodies.ts

#### 2.6 资源正文 ar-resource-bodies.ts
- **文件：** `src/data/ar-resource-bodies.ts`
- **内容：** 20篇资源文章的阿拉伯语正文Markdown内容
- **参照：** fr-resource-bodies.ts

---

### 阶段3：RTL布局CSS增强（P2问题15-18）

**目标：** 确保阿拉伯语页面视觉呈现专业，符合RTL阅读习惯

#### 3.1 global.css 增加RTL规则
- **文件：** `src/styles/global.css`
- **新增规则：**
  ```css
  /* Hero轮播箭头RTL翻转 */
  [dir="rtl"] .hero-prev { right: auto; left: 1rem; }
  [dir="rtl"] .hero-next { left: auto; right: 1rem; }

  /* CTA链接箭头RTL翻转 */
  [dir="rtl"] a svg.arrow-right {
    transform: rotate(180deg);
  }

  /* 网格布局RTL适配 */
  [dir="rtl"] .grid-flow-col { grid-auto-flow: column dense; }
  ```

#### 3.2 about.astro 时间轴RTL重构
- **文件：** `src/pages/[locale]/about.astro`
- **修改：** 删除手动RTL覆盖（第175-194行的inline style），改用Tailwind逻辑属性
  - `left-4` → `start-4`, `right-4` → `end-4`
  - `md:left-1/2` → `md:start-1/2`
  - `ml-12` → `ms-12`, `mr-12` → `me-12`
  - `md:pl-12` → `md:ps-12`, `md:pr-12` → `md:pe-12`
  - 删除 `transform: translateX(1.5)` 无效CSS
  - 删除 `textAlign: 'right'` 内联样式（dir="rtl"已全局处理）

#### 3.3 物理方向属性替换
- **涉及文件：** markets/index.astro, contact.astro
- **修改：**
  - `ml-1` → `ms-1`, `ml-2` → `ms-2`
  - `mr-*` → `me-*`
  - `pl-*` → `ps-*`, `pr-*` → `pe-*`
  - `left-*` → `start-*`, `right-*` → `end-*`
  - `text-left` → `text-start`, `text-right` → `text-end`

---

### 阶段4：翻译质量验证与修复

**目标：** 确保所有阿拉伯语翻译准确、专业、文化适配

#### 4.1 ar.json 翻译质量审查
- **文件：** `src/i18n/ar.json`
- **检查项：**
  - 绝对化用语是否已全部替换（之前已修复4项，需二次确认）
  - 行业术语一致性（معصرة زيت = oil press, هيدروليكي = hydraulic, ضغط بارد = cold press）
  - 技术规格翻译准确性（吨/吨力, kW, mm等单位）
  - 文化适配（避免不恰当表述，确保阿拉伯商业用语习惯）

#### 4.2 市场数据翻译验证
- **检查项：**
  - 国名/城市名阿拉伯语标准译法
  - 货币单位翻译（Naira → نيرا, INR → روبية هندية, IDR → روبية إندونيسية）
  - 港口名称阿拉伯语音译
  - FAQ回答的专业性和准确性

#### 4.3 产品规格翻译验证
- **检查项：**
  - 规格名称标准阿拉伯语表述
  - 数值单位翻译（kg → كجم, mm → ملم, kW → كيلوواط, ton → طن）
  - 种子名称的阿拉伯语标准名称

---

### 阶段5：构建验证与最终确认

**目标：** 确保所有修改不破坏现有功能，所有页面正常渲染

#### 5.1 构建测试
- 清除.astro缓存
- 运行 `npm run build` 确保无构建错误
- 运行 `npm run dev` 启动开发服务器

#### 5.2 页面验证清单
逐页访问并验证以下阿拉伯语页面：
- [ ] /ar/ — 首页
- [ ] /ar/about — 关于页
- [ ] /ar/contact — 联系页
- [ ] /ar/products — 产品列表
- [ ] /ar/products/[slug] — 产品详情（抽查3-5个）
- [ ] /ar/solutions — 解决方案列表
- [ ] /ar/solutions/[slug] — 方案详情（抽查3-5个）
- [ ] /ar/resources — 资源列表
- [ ] /ar/resources/[slug] — 资源详情（抽查3-5个）
- [ ] /ar/markets — 市场列表
- [ ] /ar/markets/[market] — 市场详情（抽查3-5个）

#### 5.3 验证标准
- 所有可见文本为阿拉伯语（无英文残留）
- 文本右对齐（RTL布局正确）
- 交互元素（按钮、链接、表单）阿拉伯语显示正确
- 无布局错乱、元素重叠或截断
- 面包屑导航正确显示
- 产品规格/种子/FAQ为阿拉伯语
- 市场数据为阿拉伯语（非法语）
- 无绝对化用语

---

## 假设与决策

1. **翻译方式：** 所有阿拉伯语翻译由AI生成，需确保专业术语准确。对于不确定的术语，优先采用阿拉伯语行业标准表述。
2. **回退策略：** 保持 ar > fr > en 三级回退。如果阿拉伯语数据缺失，优先显示法语而非英文（因法语更接近阿拉伯语用户的阅读习惯）。
3. **modelAr字段：** 产品型号（如HN426）是国际通用编号，不需要翻译。但如需在型号前添加阿拉伯语描述性文字，需在config.ts添加modelAr字段。**决策：不添加modelAr字段，产品型号保持原样显示。**
4. **市场页面数据：** ar-market-data.ts 将基于fr-market-data.ts结构翻译，但内容直接从法语翻译为阿拉伯语（非法语→英→阿的二次翻译），以确保翻译质量。
5. **资源文章正文：** ar-resource-bodies.ts 的工作量最大（2195行法语对应内容），分批完成，确保不遗漏。
6. **不破坏现有功能：** 每次修改后验证英文和法语页面仍正常工作。

---

## 风险评估

| 风险 | 概率 | 影响 | 缓解措施 |
|------|------|------|----------|
| 翻译量过大导致遗漏 | 高 | 中 | 分批执行，每批完成后验证 |
| AI翻译术语不准确 | 中 | 高 | 使用行业标准术语表，关键术语二次审核 |
| MD文件修改导致构建错误 | 中 | 高 | 修改后立即构建测试 |
| RTL布局修改影响LTR页面 | 低 | 高 | 使用CSS选择器`[dir="rtl"]`隔离RTL规则 |
| Dev server缓存损坏 | 中 | 中 | 定期重启，验证前清除.astro缓存 |

---

## 执行顺序

**阶段1**（页面渲染逻辑）→ **阶段2**（内容数据填充）→ **阶段3**（RTL布局）→ **阶段4**（翻译质量验证）→ **阶段5**（构建验证）

阶段2工作量最大，将分6个子任务按优先级执行：
1. 市场数据（用户最可能访问）
2. 产品MD frontmatter（产品页核心内容）
3. 解决方案MD frontmatter
4. 产品正文
5. 解决方案正文
6. 资源正文
