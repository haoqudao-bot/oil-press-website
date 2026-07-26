# 印尼语(id)本地化完整实施方案

## Context

网站已完成英语、法语、阿拉伯语本地化。印尼语页面虽已生成(`dist/id/`存在)，但内容几乎全部降级为英语——缺少独立数据文件、产品/方案/资源的印尼语body内容、规格参数种子FAQ等frontmatter字段。用户要求全面同步印尼语翻译，确保100%翻译完成、SEO合规、文化适配。

## 现状差距

| 类别 | 现状 | 差距 |
|------|------|------|
| id.json | 406行，基本完整 | 缺少~40个key（nav新闻/指南、products视频/型号/保修、solutions区域分类、about里程碑、contact邮件相关、common市场相关） |
| 数据文件 | 无 | 缺少id-product-bodies(24产品)、id-solution-bodies(18方案)、id-resource-bodies(20资源)、id-market-data(11市场) |
| 产品MD frontmatter | 有title.id/description.id | 缺少specificationsId/applicableSeedsId/faqId |
| 解决方案MD frontmatter | 有title.id/description.id | 缺少processStepsId/faqId |
| 页面渲染逻辑 | getStaticPaths含'id' | specs/seeds/faq/body fallback链无id处理，直接降级英文；markets页面id降级到法语 |
| SEO | BaseLayout已处理id | keywords过滤未含id，日期本地化有bug |

## 实施计划

### 阶段1: 基础设施 (先修)

**1.1 补全 id.json 缺失key**

文件: `src/i18n/id.json`

添加约40个缺失key，涵盖:
- `nav.newsCantonFair/newsMustardOilBoom/newsSesameOilSurge` + 17个指南/对比导航key
- `products.productVideo/model/warranty`
- `solutions.byOilType/byOilTypeDesc/byRegion/byRegionDesc/byScale/byScaleDesc/allMarkets/countries50/viewMarket`
- `resources.news`
- `about.milestone2010/milestone2013/milestone2016/milestone2020/milestone2025`
- `contact.inquirySent/inquirySentDesc/googleMaps/whatsappPresetMessage/mapTitle/emailSubject/emailBody*/emailPlaceholder/toggleDropdown/menuButton`
- `common.slide/previous/next/countriesServed/continents/happyClients/yearsExportExperience/machines/clients/countries/exploreMarket/regionalFootprint/featuredMarkets/whyTrustedWorldwide/dontSeeCountry/getInTouch/chatOnWhatsApp`

**1.2 更新 content schema**

文件: `src/content/config.ts`

products schema添加:
```
specificationsId/applicableSeedsId/faqId (均 .default([]))
```

solutions schema添加:
```
processStepsId/faqId (均 .default([]))
```

### 阶段2: 产品数据 (24产品)

**2.1 创建 id-product-bodies 分片文件**

参照 `src/data/ar-product-bodies-1/2/3.ts` 格式，创建:
- `src/data/id-product-bodies-1.ts` (产品1-8: 核心液压机)
- `src/data/id-product-bodies-2.ts` (产品9-16: 专用液压机+预处理)
- `src/data/id-product-bodies-3.ts` (产品17-24: 烘炒/过滤/精炼)
- `src/data/id-product-bodies.ts` (汇总import)

**2.2 更新24个产品MD frontmatter**

每个 `src/content/products/*.md` 添加 specificationsId/applicableSeedsId/faqId 字段，参照已有 specificationsAr/applicableSeedsAr 的格式翻译。

### 阶段3: 解决方案数据 (18方案)

**3.1 创建 id-solution-bodies.ts**

文件: `src/data/id-solution-bodies.ts`，参照 `ar-solution-bodies.ts` 格式

**3.2 更新18个解决方案MD frontmatter**

每个 `src/content/solutions/*.md` 添加 processStepsId/faqId

### 阶段4: 资源数据 (20资源)

**4.1 创建 id-resource-bodies.ts**

文件: `src/data/id-resource-bodies.ts`，参照 `ar-resource-bodies.ts` 格式

### 阶段5: 市场数据 (11市场)

**5.1 创建 id-market-data.ts**

文件: `src/data/id-market-data.ts`，参照 `ar-market-data.ts` 格式

特别注意 Indonesia 市场页面的本地化: Rupiah、Jakarta/Surabaya港口、PLN 220V/50Hz

### 阶段6: 页面渲染逻辑更新

**6.1 products/[slug].astro**
- import idProductBodies
- specs/seeds/faq fallback改为 id > ar > fr > en
- body fallback改为 id > ar > fr > en
- SEO keywords过滤添加id

**6.2 solutions/[slug].astro**
- import idSolutionBodies
- processSteps/faq fallback添加id
- body fallback添加id
- SEO keywords过滤添加id

**6.3 resources/[slug].astro**
- import idResourceBodies
- body fallback添加id
- SEO keywords过滤添加id
- 日期本地化修复(id-ID)

**6.4 markets/[market].astro**
- import idMarketData
- marketData fallback添加id（修复当前id降级到法语的bug）

**6.5 其他含产品卡片的页面**
- `index.astro`: specifications/model fallback添加id
- `products/[category].astro`: specifications/seeds/model fallback添加id
- `products/index.astro`: getLocalizedSpecs/getLocalizedModel添加id
- `hydraulic-oil-press-machine.astro`: specifications/model fallback添加id
- `cold-press-oil-machine.astro`: specifications/model fallback添加id
- `manual-oil-press-machine.astro`: specifications/model fallback添加id

### 阶段7: 验证

- `astro build` 成功，363+页面
- 检查 `dist/id/` 下页面内容为印尼语
- 检查SEO: hreflang、og:locale=id_ID、keywords
- 检查链接正确指向 `/id/` 路径

## 关键文件清单

| 文件 | 修改类型 |
|------|----------|
| `src/i18n/id.json` | 补全~40个key |
| `src/content/config.ts` | 添加id字段到schema |
| `src/data/id-product-bodies-1.ts` | 新建 |
| `src/data/id-product-bodies-2.ts` | 新建 |
| `src/data/id-product-bodies-3.ts` | 新建 |
| `src/data/id-product-bodies.ts` | 新建 |
| `src/data/id-solution-bodies.ts` | 新建 |
| `src/data/id-resource-bodies.ts` | 新建 |
| `src/data/id-market-data.ts` | 新建 |
| `src/content/products/*.md` (24个) | 添加specificationsId/applicableSeedsId/faqId |
| `src/content/solutions/*.md` (18个) | 添加processStepsId/faqId |
| `src/pages/[locale]/products/[slug].astro` | 渲染逻辑+id数据加载 |
| `src/pages/[locale]/solutions/[slug].astro` | 渲染逻辑+id数据加载 |
| `src/pages/[locale]/resources/[slug].astro` | 渲染逻辑+id数据加载 |
| `src/pages/[locale]/markets/[market].astro` | 渲染逻辑+id数据加载 |
| `src/pages/[locale]/index.astro` | specifications/model fallback |
| `src/pages/[locale]/products/[category].astro` | specifications/seeds fallback |
| `src/pages/[locale]/products/index.astro` | getLocalizedSpecs/getLocalizedModel |
| `src/pages/[locale]/hydraulic-oil-press-machine.astro` | specifications fallback |
| `src/pages/[locale]/cold-press-oil-machine.astro` | specifications fallback |
| `src/pages/[locale]/manual-oil-press-machine.astro` | specifications fallback |
