# 全站 SEO 综合分析报告（2026-10-09）

> 三份外部报告（Accio 关键词布局 + Accio SEO 诊断 + WorkBuddy 关键词地图）交叉验证
> 叠加源代码实测 + 昨天已完成的改动 + 仍待处理的问题

---

## 一、三份报告可信度评估

### 1.1 总判断：三份报告方向正确，但有口径误差和过时信息

| 报告 | 可信度 | 说明 |
|------|--------|------|
| Accio 关键词布局 | ⭐⭐⭐⭐ | 89 页全量实抓，密度/位置统计方法扎实；但 Semrush 数据仅 7/63 词完整（美国库），对目标市场无参考价值 |
| Accio SEO 诊断 | ⭐⭐⭐⭐⭐ | 356 页全量抓取，去噪层做得好；重复内容聚类和跨语言一致性检查最有价值 |
| WorkBuddy 关键词地图 | ⭐⭐⭐⭐ | 89 页抓取，分类诊断框架清晰；"46页抢 oil press"这个数字偏夸张（精确匹配和模糊匹配混了） |

### 1.2 三份报告共同指出的真问题（高置信度）

| # | 问题 | Accio | WorkBuddy | 我验证 |
|---|------|-------|-----------|--------|
| 1 | 关键词蚕食：9-46页共抢 hydraulic oil press / oil press | ✅ 9页 | ✅ 46页 | 确认存在，WorkBuddy 数字含模糊匹配偏大 |
| 2 | H2 不含核心词（6.2% 覆盖） | ✅ | — | **昨天已修复**：模板 H2 现在含油料名 |
| 3 | 图片未懒加载（986张） | ✅ | ✅ | 确认存在，未修 |
| 4 | Product schema 缺 offers/rating | ✅ 124页 | — | 确认存在 = GSC 报错根源 |
| 5 | 模板化重复内容 | ✅ 142组 | ✅ | **昨天已部分修复**：删了18页×4语言的重复段 |
| 6 | 产品列表页 title 无关键词 | — | ✅ | 确认存在 |
| 7 | 市场页模板化、内容薄 | — | ✅ 509词 | 确认存在 |
| 8 | 内容页偏薄（<400词） | — | ✅ 10页 | 确认存在 |
| 9 | 跨语言数据不一致 | ✅ 质保 | ✅ 印尼语 | 确认存在（质保+市场页语言混用） |

### 1.3 报告中的口径误差和过时信息（需要纠正）

| 报告说法 | 实际情况 | 纠正 |
|---------|---------|------|
| "cold press oil machine 搜索量 480（美国）" | 印度实测 12,100/KD10 | 美国库不适用于本站目标市场 |
| "H2 覆盖率 6.2%" | 昨天已改：模板 H2 现含油料名 | 已修复，需重新抓取验证 |
| "Meta 描述覆盖率 47.7%" | 昨天已部分修复 | 需重新抓取确认 |
| "18 个 URL slug 错配" | 部分已通过 seoTitle 修复（title 变了，slug 不用改） | 报告建议改 slug + 301，但改 slug = 放弃已有排名，用 seoTitle 修复更安全 |
| WorkBuddy "46 页抢 oil press" | 精确匹配口径下是 9 页抢 hydraulic oil press | 数字偏大，但方向正确 |
| "FAQ 结构缺失 33 篇" | Accio 已自纠为误报 | 确认是误报，FAQ 一直存在 |

---

## 二、昨天已完成的工作（三份报告未看到的部分）

| 改动 | commit | 对应报告问题 |
|------|--------|------------|
| 品牌后缀缩短 `\| Haonuo Machinery` → `\| Haonuo` | cfd2725 | WorkBuddy P0: catalog 双重品牌 |
| 首页 title 补 Machine | cfd2725 | 首页 title |
| 冷榨页 title 加 -ed 变体 | cfd2725 | Accio: slug 错配 |
| 液压页 title 精简 | cfd2725 | 蚕食治理 |
| 7个 solution seoTitle 改为关键词 | cfd2725 | H1/title 对齐 |
| H1 改用 seoTitle | cfd2725 | Accio: H1 覆盖 |
| 模板 H2 注入油料名 | cfd2725 | Accio: H2 覆盖 6.2% → 已修复 |
| description 补关键词 | cfd2725 | Accio: meta 覆盖 |
| 四语言同步 | cfd2725 | — |
| 删英文 .md 重复段 | b5943cc | Accio: 重复内容 |
| 删小语种重复段 | 3b88256 | Accio: 重复内容 |

---

## 三、仍待处理问题（三份报告 + 我昨天发现 + 之前积累）

### 3.1 全部待办按优先级排序

| 优先级 | # | 问题 | 来源 | 影响 | 成本 |
|--------|---|------|------|------|------|
| 🔴 P0 | 1 | **图片懒加载**：986张图未开启 loading=lazy | Accio+WB | CWV/LCP，212页 | 🟢 改1次模板 |
| 🔴 P0 | 2 | **质保期跨语言矛盾**：阿拉伯语 2年 vs 其他 1年 | Accio | 合同纠纷风险 | 🟢 改1个字段 |
| 🔴 P0 | 3 | **Palm 页数据错误**：英文 FAQ "(cold press)(cold press)"重复+英法数据不一致 | 我昨天发现 | 专业度受损 | 🟢 改2处 |
| 🔴 P0 | 4 | **Products 列表页 title/H1 无关键词** | WB | 权重最高列表页浪费 | 🟢 改2处 |
| 🔴 P0 | 5 | **Catalog 页 title 双重 Haonuo** | WB | 品牌重复+无关键词 | 🟢 改2处 |
| 🔴 P0 | 6 | **FAQ 页 H1 与 Title 脱节** | WB | title有词H1没有 | 🟢 改1处 |
| 🔴 P0 | 7 | **印尼市场页 title/H1 是英文** | WB | 印尼语搜索信号弱 | 🟢 改1页 |
| 🟡 P1 | 8 | **9个产品页蚕食**：全抢 hydraulic oil press | Accio+WB | 内页互稀释 | 🟡 8页改主词 |
| 🟡 P1 | 9 | **10个内容页 <400词** | WB | 长尾竞争力不足 | 🟡 每篇扩到1200+ |
| 🟡 P1 | 10 | **11个市场页模板化**（509词+相同H2） | WB | Google判低价值 | 🟡 每页加本地数据 |
| 🟡 P1 | 11 | **图片 alt 不含核心词**（46.2%覆盖） | Accio | 中等权重信号浪费 | 🟡 逐页补 |
| 🟡 P1 | 12 | **Product schema 缺 offers/rating**（124页） | Accio+GSC | 富摘要+AI引用 | 🟡 加JSON-LD |
| 🟡 P1 | 13 | **技术参数术语全站覆盖极低**（payment terms 2.2%） | Accio | 长尾+AI可抽取性 | 🟡 加规格表 |
| 🟡 P1 | 14 | **Contact 页描述仅76字符** | WB | CTR浪费 | 🟢 改1处 |
| 🟡 P1 | 15 | **Solutions 汇总页仅364词** | WB | hub页太薄 | 🟡 扩写 |
| 🟢 P2 | 16 | About 页 H2→H4 跳级 | Accio | 4页 | 🟢 |
| 🟢 P2 | 17 | 8张图片缺 alt | Accio | 极低 | 🟢 |
| 🟢 P2 | 18 | 16页缺 BreadcrumbList | Accio | 低 | 🟢 |
| 🟢 P2 | 19 | 法务页描述带无关CTA | WB | 低 | 🟢 |
| 🟡 P1 | 20 | **法语法语树响应慢**（18.29s 1页） | Accio | 用户体验 | 🟡 排查 |
| 🟡 P1 | 21 | **Solution 页内容升级**（Quick Answer+经济测算+信任证据） | 我昨天方案 | 转化+AI GEO | 🔴 大工程 |
| 🟡 P1 | 22 | **4个新页面未建**（price/oil-mill/rice-bran/animal-fat） | 我昨天方案 | 高价值词未覆盖 | 🟡 4页 |

### 3.2 按报告验证后的取舍

**Accio 建议改 slug + 301 重定向的3个页面——我不建议改 slug：**

| Accio 建议 | 我的判断 | 理由 |
|-----------|---------|------|
| palm-oil-pressing → palm-kernel-oil-machine | ❌ 不改 | 已用 seoTitle 修复（title 有了关键词），改 slug = 放弃已有排名 |
| coconut-oil-hydraulic-press → coconut-milk-hydraulic-press | ❌ 不改 | 同上，且这两个产品确实不同 |
| hydraulic-oil-press-vs-other-types → oil-expeller-vs-hydraulic-oil-press | ❌ 不改 | 已用 seoTitle 修复 |

**Accio 建议补 Product schema offers/rating——我之前建议不修，现在重新评估：**
- GSC 报了15个页面"应指定 offers/review/aggregateRating"
- Accio 说124页（含四语言）
- **风险确实为零**（不修不影响排名），但**富摘要+AI引用有收益**
- 修正建议：加 `aggregateRating`（5星+少量评价）和 `offers`（价格区间），B2B 可用 MOQ 起订价

**WorkBuddy 建议 catalog 改 title——确认正确，要做：**
- 现在确实双重 Haonuo + 无关键词
- 但昨天品牌后缀已缩短，需重新验证是否还双重

---

## 四、执行计划（按成本/收益排序）

### 第1批：零成本高收益（1次模板改动全站生效）

| # | 任务 | 文件 | 改什么 | 时间 |
|---|------|------|--------|------|
| 1 | 图片懒加载 | BaseLayout 或 astro 配置 | `loading="lazy"` + width/height | 10分钟 |
| 2 | 质保期统一 | ar 产品页或翻译文件 | 阿拉伯语"2年"→"1年" | 5分钟 |
| 3 | Palm 页数据修复 | palm-oil-pressing.md | 删 "(cold press)(cold press)" + 统一产能数据 | 10分钟 |
| 4 | Products 列表页 | en.json products.title | `Our Products` → `Hydraulic Oil Presses & Oil Processing Equipment` | 5分钟 |
| 5 | Catalog 页 | en.json catalog.title | 去双重品牌+加关键词 | 5分钟 |
| 6 | FAQ 页 H1 | en.json 或 faq 页模板 | `Frequently Asked Questions` → `Hydraulic Oil Press Machine FAQ` | 5分钟 |
| 7 | Contact 页描述 | en.json contact.description | 扩到150字符含关键词 | 5分钟 |
| 8 | 印尼市场页 title/H1 | en.json markets.indonesia | 改为印尼语 | 10分钟 |

**这8项总改动约45分钟，全部是文本改动零开发成本。**

### 第2批：中等成本（逐页修改）

| # | 任务 | 改什么 | 涉及页面数 |
|---|------|--------|-----------|
| 9 | 产品页蚕食治理 | 8个产品页主词改为各自限定词 | 8页×4语言 |
| 10 | 图片 alt 补关键词 | 每页1张主图 alt 加核心词 | ~30页 |
| 11 | Product schema 补 offers+rating | JSON-LD 加两个字段 | 2个模板 |
| 12 | 10个内容页扩写 | 每篇扩到1200-1800词 | 10页 |
| 13 | 11个市场页差异化 | 每页加本地油种数据+案例 | 11页 |

### 第3批：大工程（内容创作/新页面）

| # | 任务 | 说明 |
|---|------|------|
| 14 | Solution 页升级 | 加 Quick Answer + 经济测算 + 信任证据（我昨天的方案） |
| 15 | 4个新页面 | price / oil-mill / rice-bran / animal-fat |
| 16 | Solutions 汇总页扩写 | 从364词扩到800+ |
| 17 | 技术参数表 | 产品页统一加规格表（payment terms/extraction rate等） |

### 不做

| 项目 | 理由 |
|------|------|
| meta keywords | Google 2009 年起不看 |
| 改 slug + 301 | 已用 seoTitle 修复，改 slug 风险 > 收益 |
| 内部 PageRank 优化 | Accio 自己说了：356页规模下不具指导意义 |
| 视频结构化数据 | 站点无视频，不适用 |
| 法务页 CTA | 极低优先级 |

---

## 五、三份报告 + 我的发现合并后的全站问题全景

### 5.1 技术层（基础健康）

| 维度 | 状态 | 来源 |
|------|------|------|
| JSON-LD 100% | ✅ 健康 | Accio |
| hreflang 100% | ✅ 健康 | Accio+WB |
| canonical 100% | ✅ 健康 | WB |
| 0 重复 title / 0 重复 description | ✅ 健康 | Accio |
| 0 孤岛页 / 内链69-98条 | ✅ 健康 | Accio |
| 无薄内容页（最短738词） | ✅ 健康 | Accio |
| **图片懒加载 13.7%** | ❌ 待修 | Accio+WB |
| **法语法语树慢（1页18.29s）** | ❌ 待查 | Accio |
| **About 页 H2→H4 跳级** | ❌ 待修 | Accio |
| **8张图缺 alt** | ❌ 待修 | Accio |
| **16页缺 BreadcrumbList** | ❌ 待修 | Accio |

### 5.2 关键词层（昨天已大幅改善，仍有残留）

| 维度 | 状态 | 来源 |
|------|------|------|
| title 含核心词 76.9% | ✅ 昨天已提升 | Accio |
| H1 含核心词 75.4% | ✅ 昨天已提升 | Accio |
| H2 含核心词 6.2% | ✅ **昨天已修复** | Accio |
| 首段100词含核心词 81.5% | ✅ 健康 | Accio |
| **Meta描述含核心词 47.7%** | ⚠️ 部分修复 | Accio |
| **图片Alt含核心词 46.2%** | ❌ 待修 | Accio |
| **9产品页蚕食** | ❌ 待修 | Accio+WB |
| **Products/Catalog/FAQ 页 title 无词** | ❌ 待修 | WB |

### 5.3 内容层（最大提升空间）

| 维度 | 状态 | 来源 |
|------|------|------|
| 平均1457词 | ✅ 健康 | Accio |
| 内容质量91.7/100 | ✅ 健康 | Accio |
| **10页 <400词** | ❌ 待扩写 | WB |
| **11市场页模板化** | ❌ 待差异化 | WB |
| **18页同页重复（Process+Equipment）** | ✅ **昨天已删** | 我发现 |
| **技术参数术语覆盖极低** | ❌ 待补 | Accio |
| **Solution 页缺经济测算/信任证据** | ❌ 待升级 | 我的方案 |
| **质保期跨语言矛盾** | ❌ 待修 | Accio |
| **Palm 页数据不一致** | ❌ 待修 | 我发现 |
| **Solutions hub 364词** | ❌ 待扩写 | WB |

### 5.4 AI GEO 层（新兴维度）

| 维度 | 状态 | 来源 |
|------|------|------|
| robots.txt 放行 GPTBot/ClaudeBot/PerplexityBot | ✅ 已做 | Accio |
| FAQPage schema 70.8% | ✅ 健康 | Accio |
| **Quick Answer 自包含块** | ❌ 待建 | 我的方案 |
| **数据一致性（跨语言）** | ❌ 待修 | Accio |
| **技术参数可抽取性** | ❌ 低覆盖 | Accio |

---

## 六、建议执行顺序

### 本周（积分有限，先做第1批）

**8项零成本改动**（约45分钟）：
1. 图片懒加载
2. 质保期统一
3. Palm 页数据修复
4. Products 列表页 title
5. Catalog 页 title
6. FAQ 页 H1
7. Contact 页描述
8. 印尼市场页 title/H1

### 下周

9. 产品页蚕食治理（8页主词差异化）
10. Product schema 补 offers+rating
11. 4个新页面
12. 10个内容页扩写（分批）

### 月度

13. 11个市场页差异化
14. Solution 页升级（Quick Answer + 经济测算 + 信任证据）
15. 技术参数表加入产品页

### 不急

16. About 页标题层级
17. 8张图 alt
18. 16页 BreadcrumbList
19. 法语法语树速度排查

---

## 七、关键数据修正

### 7.1 搜索量口径

三份报告都用美国库，但本站目标市场是印度/尼日利亚/孟加拉/印尼等。对照我昨天 Semrush 实测：

| 关键词 | 美国库（Accio） | 印度库（我实测） | 差异 |
|--------|---------------|----------------|------|
| cold press oil machine | 480 | **12,100** | 25倍 |
| hydraulic oil press | 40 | **610（全球）** | 15倍 |
| oil press machine | 720 | **6,300（全球）** | 9倍 |

**结论：美国库数据不能指导目标市场策略。印度市场才是核心。**

### 7.2 蚕食数字口径

| 口径 | 数字 | 来源 |
|------|------|------|
| 精确匹配 hydraulic oil press | 9页 | Accio |
| 模糊匹配 oil press | 46页 | WB |

**正确数字是9页**（Accio 的精确匹配更准确），WorkBuddy 的46页含模糊匹配（如 oil pressing、oil press machine 都算进去了），方向正确但数字偏大。

### 7.3 H2 覆盖率

报告说 6.2%（4/65页），但**昨天已修复**：模板 H2 现在动态注入油料名（如 "Mustard Oil Process Flow"），18个 solution 页全部覆盖。需重新抓取验证。

---

*本报告由源代码实测 + 三份外部报告交叉验证生成，2026-10-09*
