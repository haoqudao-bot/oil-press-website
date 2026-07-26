# 印尼语(id)本地化 — 剩余工作计划

## 当前状态分析

### ✅ 已完成
1. **id.json** — 已补全40+翻译键（478行）
2. **config.ts** — Schema已添加 `specificationsId`、`applicableSeedsId`、`faqId`、`processStepsId` 字段
3. **id-product-bodies-1/2/3.ts** — 24个产品body翻译（700+行）
4. **id-solution-bodies.ts** — 18个解决方案body翻译（732行）
5. **页面渲染逻辑** — 10+页面已更新id优先回退链(id > ar > fr > en)

### ❌ 未完成（需修复）
1. **id-resource-bodies.ts** — 仅2/20条目（缺18条资源正文）
2. **id-market-data.ts** — 空文件（缺11个市场数据）
3. **24个产品MD frontmatter** — 缺 `specificationsId`、`applicableSeedsId`、`faqId`
4. **18个解决方案MD frontmatter** — 缺 `processStepsId`、`faqId`
5. **config.ts schema缺失 `modelId`** — 10处模板引用 `product.data.modelId` 但schema中无此字段
6. **最终构建验证** — 未执行

### 🐛 发现的Bug
- `modelId` 在9个页面文件中共10处引用，但 Zod schema 未定义此字段 → 访问 `product.data.modelId` 返回 `undefined`，印尼语页面将显示英文型号名而非印尼语型号名

---

## 实施计划

### 步骤1: 修复 config.ts schema — 添加 `modelId` 字段
**文件**: `src/content/config.ts`
**操作**: 在 products schema 的 `modelFr` 字段后添加：
```typescript
modelId: z.string().default(''),
```
**原因**: 10处模板引用 `product.data.modelId`，若无schema定义则值为undefined

### 步骤2: 补全 id-resource-bodies.ts — 18条缺失资源
**文件**: `src/data/id-resource-bodies.ts`
**操作**: 添加18条缺失的印尼语资源正文翻译：
- small-oil-press-installation-guide
- palm-oil-pressing-guide
- olive-oil-pressing-guide
- oil-refining-equipment-guide
- oil-press-voltage-electrical-guide
- oil-press-troubleshooting
- oil-press-maintenance-guide
- oil-press-machine-african-market
- news-nigeria-sesame-oil-export-2026
- news-india-mustard-oil-boom-2026
- news-haonuo-canton-fair-2026
- hydraulic-vs-screw-oil-press
- hydraulic-oil-press-price-guide
- how-to-improve-oil-yield
- flaxseed-oil-pressing-guide
- does-cold-pressing-make-difference
- ce-certified-buying-guide
- best-oil-press-machine-2026

**参考**: 对应英文资源MD文件内容 + 法语/阿拉伯语body文件翻译风格
**预计**: 约3000-4000行（每条150-250行）

### 步骤3: 创建 id-market-data.ts — 11个市场数据
**文件**: `src/data/id-market-data.ts`
**操作**: 填充11个市场的完整印尼语数据（参照 fr-market-data.ts 的 MarketData 接口）：
- nigeria, india, indonesia, pakistan, philippines
- egypt, south-africa, kenya, uk, usa, middle-east

每个市场包含：title, description, heroTitle, heroDesc, seedsTitle, seeds[], productsTitle, quoteTitle, quoteDesc, quoteCards[], quoteCta, shippingTitle, shipping{}, faqTitle, faqs[], ctaTitle, ctaDesc, ctaButton, whatsappText, breadcrumbHome, breadcrumbMarkets, breadcrumbMarket
**参考**: `fr-market-data.ts` 结构 + `ar-market-data.ts` 翻译风格
**预计**: 约500行

### 步骤4: 更新24个产品MD frontmatter
**文件**: `src/content/products/*.md`（24个文件）
**操作**: 为每个产品添加以下字段：
- `modelId`: 印尼语型号名（大多数型号如HN325保持不变，特殊型号如"300 Type Coconut"翻译为"300 Type Kelapa"）
- `specificationsId`: 印尼语规格参数数组（翻译所有name和value中的英文术语）
- `applicableSeedsId`: 印尼语适用种子标签数组
- `faqId`: 印尼语FAQ数组（翻译question和answer）

**翻译标准**:
- 规格参数name翻译对照：
  - Model → Model, System Pressure → Tekanan Sistem, Pressing Force → Gaya Press
  - Motor Power → Daya Motor, Machine Weight → Berat Mesin, etc.
- 种子标签翻译对照：
  - tea seed → biji teh, rapeseed → rapeseed/canola, peanut → kacang tanah
  - soybean → kedelai, coconut → kelapa, sesame → wijen, etc.
- FAQ需完整翻译所有问答

**并行策略**: 24个文件可分为3组（每组8个），用3个后台agent并行处理

### 步骤5: 更新18个解决方案MD frontmatter
**文件**: `src/content/solutions/*.md`（18个文件）
**操作**: 为每个解决方案添加：
- `processStepsId`: 印尼语加工步骤数组（翻译step和description）
- `faqId`: 印尼语FAQ数组（翻译question和answer）

**翻译标准**:
- 步骤翻译对照：
  - Seed Cleaning → Pembersihan Biji, Roasting → Pengovenan, etc.
- FAQ翻译需确保术语准确

**并行策略**: 18个文件可分为3组（每组6个），用3个后台agent并行处理

### 步骤6: 最终构建验证
**操作**:
1. 运行 `npm run build` 确认无错误
2. 检查 `dist/id/` 目录下生成的页面数量
3. 抽查3-5个关键页面（产品详情、解决方案、市场、资源、首页）确认：
   - 页面内容100%印尼语（无英文残留）
   - 规格/种子/FAQ显示印尼语
   - 型号名正确显示
   - SEO标签（title, description, og:locale）正确

---

## 实施顺序与依赖关系

```
步骤1 (schema修复) → 步骤4/5 (MD frontmatter) → 步骤6 (验证)
步骤2 (resource bodies) ↘
步骤3 (market data)     ↗ 可并行
```

- 步骤1 必须在步骤4/5之前（schema不定义的话frontmatter会验证失败）
- 步骤2、3、4、5可并行（互不依赖）
- 步骤6在所有步骤完成后执行

## 并行执行方案

**第一批**（立即启动）:
- Agent A: 步骤2 — 补全id-resource-bodies.ts（18条资源）
- Agent B: 步骤3 — 填充id-market-data.ts（11个市场）

**第一批完成后 + 步骤1完成后**:
- Agent C: 步骤4a — 产品MD 1-8 frontmatter
- Agent D: 步骤4b — 产品MD 9-16 frontmatter
- Agent E: 步骤4c — 产品MD 17-24 frontmatter
- Agent F: 步骤5a — 解决方案MD 1-6 frontmatter
- Agent G: 步骤5b — 解决方案MD 7-12 frontmatter
- Agent H: 步骤5c — 解决方案MD 13-18 frontmatter

**最后**:
- 主线程: 步骤6 — 构建验证

## 假设与决策

1. **modelId字段**: 大多数产品型号名(如HN325)为通用代号不需翻译，只有"300 Type Coconut"等含英文描述的需要翻译 → 在MD frontmatter中逐个设置
2. **翻译质量**: 参照阿拉伯语和法语的翻译质量标准，确保专业术语准确、无绝对化用语
3. **SEO合规**: 确保所有页面的og:locale为"id_ID"，hreflang标签正确，keywords不硬编码英文
4. **内容一致性**: 印尼语翻译需与英文/法语/阿拉伯语版本内容对齐，确保不遗漏模块
