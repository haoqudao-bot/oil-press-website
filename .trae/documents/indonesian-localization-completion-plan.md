# 印尼语本地化全面同步完成计划

## 概要
在已完成英语、法语、阿拉伯语本地化的基础上，对印尼语(id)进行全面同步处理，确保所有页面100%内容翻译完成、翻译准确无误、专业术语规范、视觉呈现符合印尼语阅读习惯、通过最终验收测试。

## 当前状态分析

### 已完成的基建工作 ✅
1. **id.json语言包** — 478行完整翻译，9处绝对化用语已修复（terbaik→kompetitif等）
2. **数据文件** — 7个id数据文件已创建：
   - `id-product-bodies-1.ts` (产品1-8)
   - `id-product-bodies-2.ts` (产品9-16)
   - `id-product-bodies-3.ts` (产品17-24)
   - `id-solution-bodies.ts` (18个解决方案)
   - `id-resource-bodies.ts` (20个资源)
   - `id-market-data.ts` (11个市场)
   - `id-product-bodies.ts` (汇总文件)
3. **渲染逻辑** — 所有核心页面已添加id回退链：
   - `[slug].astro` — 产品详情页（specs/seeds/faq/body）
   - `[category].astro` — 分类页（model/seeds）
   - `products/index.astro` — 产品列表页（model/seeds）
   - `solutions/[slug].astro` — 解决方案页（body/faq/steps）
   - `resources/[slug].astro` — 资源页（body）
   - `markets/[market].astro` — 市场页（marketData）
   - `index.astro` — 首页（model/specs）
   - `hydraulic-oil-press-machine.astro` — 内联翻译+回退
   - `cold-press-oil-machine.astro` — 内联翻译+回退
   - `manual-oil-press-machine.astro` — 内联翻译
4. **SEO基础设施** — og:locale=id_ID, hreflang=id, 语言选择器含ID

### 发现的遗留问题 ⚠️

#### P0: 阻断性问题（必须修复）

**1. 8个产品MD缺失specificationsId/applicableSeedsId/faqId**
以下文件只有空字段或字段不存在：
| 文件 | modelId | specificationsId | applicableSeedsId | faqId |
|------|---------|------------------|-------------------|-------|
| mini-hydraulic-oil-press.md | '' | 缺失 | 缺失 | 缺失 |
| standard-hydraulic-oil-press.md | '' | ✅有内容 | ✅有内容 | ❌**缺失** |
| stainless-steel-hydraulic-oil-press.md | '' | 缺失 | 缺失 | 缺失 |
| heavy-duty-hydraulic-oil-press.md | '' | 缺失 | 缺失 | 缺失 |
| medium-hydraulic-oil-press.md | '' | 缺失 | 缺失 | 缺失 |
| cold-press-hydraulic-oil-press.md | '' | 缺失 | 缺失 | 缺失 |
| high-pressure-hydraulic-oil-press.md | '' | 缺失 | 缺失 | 缺失 |
| ultra-high-pressure-hydraulic-oil-press.md | '' | 缺失 | 缺失 | 缺失 |

**2. 数据文件中36处绝对化用语未修复**（后台agent eb0ee763 正在处理）：
- id-product-bodies-2.ts: 3处"terbaik"
- id-product-bodies-3.ts: 1处"ideal untuk"
- id-solution-bodies.ts: ~10处"ideal untuk/terbaik"
- id-resource-bodies.ts: ~22处"ideal/terbaik"

#### P1: 严重问题

**3. 翻译完整性待验证**：
- 需确认所有24个产品MD的id body内容是否与英文版本一致
- 需确认所有18个解决方案MD的id processStepsId/faqId是否完整
- 需确认所有20个资源的id body内容是否完整
- 需确认11个市场的id market data是否完整

**4. SEO合规性检查**：
- meta description长度是否符合160字符限制
- title标签是否包含目标关键词
- 结构化数据中的印尼语字段是否正确填充
- hreflang标签是否正确指向/id/路径

#### P2: 一般问题

**5. 文化适应性审查**：
- 数字格式（印尼使用点号作为千位分隔符 vs 英文逗号）
- 货币表示是否正确（Rupiah/USD）
- 日期格式本地化
- 文化参考适配性

**6. 视觉呈现检查**：
- 印尼语文本长度可能比英文长20-30%，需验证布局是否溢出
- 字体显示是否正常（无乱码）
- 表单元素宽度是否适合印尼语文本

#### P3: 轻微问题

**7. 交互元素验证**：
- 所有按钮、菜单、提示信息的印尼语显示
- 错误消息的印尼语翻译
- 表单placeholder和validation messages

## 实施计划

### 步骤1: 完成产品MD frontmatter修复（P0）

**操作**: 为8个缺失的产品MD文件添加完整的id frontmatter字段
- 文件列表: mini, standard(仅faqId), stainless-steel, heavy-duty, medium, cold-press, high-pressure, ultra-high-pressure
- 为每个文件添加:
  - `modelId`: 对应型号的印尼语命名
  - `specificationsId`: 将specifications翻译为印尼语
  - `applicableSeedsId`: 将种子名称翻译为印尼语
  - `faqId`: 将FAQ翻译为印尼语

**方法**: 使用并行agent加速处理，每个agent负责2-3个文件

### 步骤2: 绝对化用语批量修复（P0-P1）

**操作**: 修复数据文件中的36处绝对化用语
**替换规则**:
| 原文 | 替换为 |
|------|--------|
| "ideal untuk" | "cocok untuk" |
| "terbaik" | "yang sesuai/paling sesuai/kompetitif" |
| "hasil terbaik" | "hasil optimal" |
| "kualitas terbaik" | "kualitas tinggi" |
| "Mesin terbaik" | "Mesin yang direkomendasikan" |

### 步骤3: 构建验证

**命令**: `npm run build`
**预期结果**: 无错误，dist/id/下应有363+页面

### 步骤4: 翻译完整性全面审查

#### 4.1 产品详情页审查
- 检查每个产品的id body内容是否存在且非空
- 验证body内容与英文版本的章节结构一致性
- 确认无英文残留文本

#### 4.2 解决方案页审查
- 验证18个解决方案的processStepsId和faqId字段
- 检查body内容完整性

#### 4.3 资源页审查
- 验证20个资源的body内容
- 特别关注技术指南类内容的准确性

#### 4.4 市场页审查
- 验证11个市场数据的标题、描述、FAQ

#### 4.5 特殊页面审查
- /id/hydraulic-oil-press-machine — 内联FAQ翻译
- /id/cold-press-oil-machine — 内联FAQ翻译
- /id/manual-oil-press-machine — 内联FAQ翻译
- /id/ — 首页数字、CTA、产品展示

### 步骤5: SEO合规性检查

5.1 **On-page SEO**:
- [ ] 所有id页面title标签含关键词且<60字符
- [ ] meta description含关键词且<160字符
- [ ] H1-H6标题层级正确
- [ ] 图片alt属性为印尼语
- [ ] URL结构符合SEO最佳实践

5.2 **技术SEO**:
- [ ] canonical URL正确指向/id/路径
- [ ] hreflang标签包含id-ID
- [ ] og:locale设置为id_ID
- [ ] sitemap.xml包含所有/id/路径
- [ ] 结构化数据(Product/FAQPage/BreadcrumbList)字段完整

5.3 **内容SEO**:
- [ ] 关键词密度合理（避免stuffing）
- [ ] 内部链接锚文本为印尼语
- [ ] 面包屑导航正确

### 步骤6: 文化适应性审查

6.1 **数字格式**: 印尼使用点号(.)作为千位分隔符
- 示例: "1,500" → "1.500", "2.2 KW"保持不变（小数点）

6.2 **货币**: 
- 确认价格引用使用"Harga pabrik kompetitif"而非具体金额
- 如涉及Rupiah，使用标准缩写(Rp)或全称

6.3 **日期格式**: 
- 印尼习惯: "9 Juli 2026" 或 "2026-07-09"

6.4 **文化参考**:
- 移除任何特定文化背景的表达（如西方节日引用）
- 确保示例场景贴近东南亚用户

### 步骤7: 问题修复与二次验证

7.1 **建立问题清单**: 按P0-P3分级记录所有发现的问题
7.2 **逐项修复**: 
- 翻译修正
- 布局调整
- 字段补全
7.3 **二次审核**: 重新运行构建和内容扫描确认修复有效

### 步骤8: 最终交付验证

8.1 **完整构建验证**: `npm run build` → 0错误
8.2 **关键页面抽查**: 
- /id/ (首页)
- /id/products/ (产品列表)
- /id/products/hydraulic-oil-press (分类页)
- /id/products/[slug] × 5 (随机抽样)
- /id/solutions/coconut-oil-pressing (解决方案)
- /id/resources/oil-press-buying-guide-2026 (资源)
- /id/markets/nigeria (市场)

8.3 **交互元素验证**:
- 导航菜单全部可点击且显示印尼语
- 语言切换正常工作
- 表单提交正常
- FAQ手风琴正常展开/收起

8.4 **生成质量报告**: 包含修复前后对比、验证结果统计

## 假设与决策

1. **假设**: 后台agent 0ccc16de 和 eb0ee763 可能仍在运行。如果已完成，直接进入步骤2；如果未完成，先检查其输出。
2. **决策**: 采用并行agent策略加速P0问题的修复，将8个产品MD分配给2-3个agent同时处理。
3. **决策**: 对于绝对化用语的"ideal untuk"，区分两种情况：
   - 技术性描述（如"ideal for hard seeds"）→ 替换为"cocok untuk"
   - 推荐性表述（如"the best choice is..."）→ 替换为"yang direkomendasikan"
4. **约束**: 不修改已完成的英语/法语/阿拉伯语内容，只处理印尼语相关文件。

## 验证清单

- [ ] 24个产品MD文件均包含完整的modelId/specificationsId/applicableSeedsId/faqId
- [ ] 18个解决方案MD文件均包含完整的processStepsId/faqId
- [ ] 6个id数据文件无绝对化用语残留
- [ ] `npm run build` 构建成功，无错误
- [ ] dist/id/目录下页面数量 ≥ 360
- [ ] 所有/id/路径页面无404错误
- [ ] 页面中无英文残留文本（除专有名词外）
- [ ] SEO元数据完整且合规
- [ ] 印尼语文化适应性通过审核
- [ ] 交互元素显示正常

## 预计产出

1. **8个更新的产品MD文件** — 含完整id frontmatter
2. **6个修复的数据文件** — 无绝对化用语
3. **构建成功报告** — 0错误
4. **质量验证报告** — 包含问题清单和修复记录
5. **100%印尼语覆盖** — 所有页面完整翻译
