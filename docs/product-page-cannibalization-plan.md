# 液压机产品线重构方案 v3（2026-10-10，Eason 拍板版）

> 决策依据：
> - 13款本质同一种机器，仅参数差别；主推4款新款：**HN325 / HN365 / HN426 / HN500**
> - 旧款4款（HN300/HN355/HN400/HN480）**页面全部保留**，定位"旧款/入门档"，承接低流量词和型号搜索
> - HN325S 下线，内容并入 300 Type Coconut（唯一301）
> - 芝麻机、300 Type Coconut、HN325LB、HN480B 定位**定制款**，承接中等流量词
>
> v2→v3 变化：7个301缩减为1个（HN325S）；旧款页保留但做"卫星页"规范化处理。

---

## 一、为什么这样不稀释流量：三个必要条件（缺一不可）

"旧款放低流量词、新款放高流量词"方向对，但**词量词小本身不防蚕食**。Google 按"查询意图+链接权重"选页，必须同时做到：

1. **意图分层**：新款页打通用商业词，旧款页只打"型号词+参数词+旧款/替代词"，title/H1/H2 里不再与新款抢通用词
2. **链接分层**：所有营销页、solutions 页、导航、分类卡片只链新款；旧款页只从"对比表"和"新款页的旧款替代说明"获得内链。链接权重单向集中到4新款
3. **内容差异**：每款旧页重写为"规格存档+新款对比+什么情况选旧款"，与新款页相似度降到 0.3 以下。**这项工作与301方案一样省不掉**——目前 0.51–0.81 的相似度才是稀释根因

附带收益：旧款页承接报价单/PI/旧目录上的型号精确搜索（Semrush 显示0但真实存在的B2B导航型流量），销售可继续报旧款。

**红线：低流量≠随便放词。** 所有词必须与该机型真实相关；不相关的词造薄页，比没有页更糟。

---

## 二、最终架构：4新款 + 4旧款 + 4定制款 = 12页

### A. 新款4页（高流量词，主推，承接全部营销内链）

| URL | 型号 | 关键词簇（=页面实际 seoKeywords） | 实际 title（已执行，非草案） |
|-----|------|---------|-----------|
| `/products/standard-hydraulic-oil-press/` | HN325 | hydraulic oil press machine、oil press machine for small business、small hydraulic oil press machine、commercial oil press machine、hydraulic oil press machine for sale / price、325 ton hydraulic oil press、sesame/peanut oil press machine、oil press for small oil mill | `Hydraulic Oil Press Machine for Small Business — 325 Ton`（已执行：主词 small business 商业词，型号词 HN325 不进 title） |
| `/products/hn365-hydraulic-oil-press/` | HN365 | commercial hydraulic oil press、commercial oil press machine、hydraulic oil press machine、vertical hydraulic oil press、high efficiency oil press machine、hydraulic oil press machine for sale / price、365 ton hydraulic oil press、oil press for medium oil mill、large capacity oil press machine | `Commercial Hydraulic Oil Press Machine — 365 Ton`（已执行 2026-10-10：单桶为默认配置，双桶为可选升级，不得定性为双桶机） |
| `/products/cold-press-hydraulic-oil-press/` | HN426 | cold press hydraulic oil press、cold press oil machine、hydraulic cold press oil machine、cold press oil extraction machine、coconut/cold press coconut oil machine、walnut oil press machine、cold press oil machine price、500 ton hydraulic oil press（型号词不作主词） | `Cold Press Hydraulic Oil Press Machine — 500 Ton / 70 MPa`（已执行 2026-10-10：FunnelPage 四语漏斗页，主词冷榨商业词，单桶默认+双桶可选） |
| `/products/ultra-high-pressure-hydraulic-oil-press/` | HN500 | industrial hydraulic oil press、industrial oil press machine、ultra high pressure hydraulic oil press、high pressure oil press machine、heavy duty oil press machine、oil press for large oil mill、large scale oil press machine、automatic hydraulic oil press machine、industrial cold press、620 ton hydraulic oil press（型号词不作主词） | `Industrial Hydraulic Oil Press Machine — 620 Ton / 75 MPa`（已执行 2026-10-10：FunnelPage 四语漏斗页，主词工业级商业词，单桶默认+双桶可选） |

词簇分工纪律：**通用大词头部归2个落地页，油料词归 solutions 页，新款产品页打"机型+规模/结构/参数"商业长尾**，三层不互抢。

> 注（2026-10-10 核对）：表内词簇 = 各页 md 实际 `seoKeywords`，title 列 = 实际上线值，两者已逐页与 md 核对一致。四新款 title 主词 four-way 分层：**small business（325）/ commercial（365）/ cold press（426）/ industrial（500）**，互不重叠。325 与 365 的 seoKeywords 存在个别通用词重叠（hydraulic oil press machine、for sale/price）——meta keywords Google 基本忽略、仅作内部记录，真正参与排名的 title/H1/H2/正文主词已错开，无蚕食风险。

### B. 旧款4页（型号词+低流量参数词，卫星页）

| URL | 型号 | 关键词簇（低流量但相关） | 建议 title |
|-----|------|----------------------|-----------|
| `/products/mini-hydraulic-oil-press/` | HN300 | HN300 oil press、300 ton hydraulic oil press、compact/entry-level hydraulic oil press、smallest hydraulic oil press | `HN300 Hydraulic Oil Press — 300 Ton Entry Model, Specs` |
| `/products/medium-hydraulic-oil-press/` | HN355 | HN355 hydraulic oil press、360 ton oil press、medium hydraulic oil press（页面保留"升级为HN365"说明） | `HN355 Hydraulic Oil Press — 360 Ton (Upgraded: HN365)` |
| `/products/heavy-duty-hydraulic-oil-press/` | HN400 | HN400 hydraulic oil press、500 ton hydraulic press、hot and cold oil press machine | `HN400 Hydraulic Oil Press — 500 Ton Hot & Cold Press` |
| `/products/high-pressure-hydraulic-oil-press/` | HN480 | HN480 hydraulic oil press、560 ton hydraulic oil press、72 MPa oil press | `HN480 Hydraulic Oil Press — 560 Ton, 72 MPa` |

**不追的词**：home oil press machine（1,000量但产品不匹配，引来的是找几百美元家用机的人）；mini oil press machine（480量）同样不刻意打，HN300页用 "entry-level / compact commercial" 措辞自然覆盖即可。

### C. 定制款4页（中等流量词，明确 made-to-order）

| URL | 型号 | 关键词簇 | 建议 title |
|-----|------|---------|-----------|
| `/products/sesame-oil-hydraulic-press/` | HN325/355 Sesame | hydraulic sesame oil press、sesame oil extraction machine、cold pressed sesame oil machine（"芝麻怎么榨"的信息词归 sesame-oil-pressing 方案页） | `Hydraulic Sesame Oil Press Machine — Custom Configuration` |
| `/products/coconut-oil-hydraulic-press/` | 300 Type Coconut | coconut milk press machine、coconut cream extractor、hydraulic coconut press、**food grade stainless coconut press（HN325S 内容并入）** | `Coconut Milk Hydraulic Press — 600mm, Food Grade (Custom)` |
| `/products/large-barrel-hydraulic-oil-press/` | HN325LB | hydraulic sludge dewatering press、oil sludge/residue press、hydraulic dewatering filter press（**明确去油料化**） | `Hydraulic Sludge Dewatering Press — Large Barrel Residue` |
| `/products/ultra-high-pressure-cold-press/` | HN480B | 600 ton cold press、walnut oil cold press machine、custom cold press、HN480B | `HN480B Ultra High Pressure Cold Press — 600 Ton, Custom` |

### D. 枢纽2页

| URL | title |
|-----|-------|
| `/products/hydraulic-oil-press/` | `Hydraulic Oil Press Models: HN325 vs HN365 vs HN426 vs HN500`（选型页：3个选型问题→推荐新款；定制款放单独小节） |
| `/products/model-comparison/` | `Hydraulic Oil Press Comparison Chart — All 12 Models & Specs`（全型号规格表，旧款标 "entry/previous model"，定制款标 "custom"，全部可点） |

### E. 唯一删除

- HN325S `/products/stainless-steel-hydraulic-oil-press/` → 301 到 `/products/coconut-oil-hydraulic-press/`，en/fr/ar/id × 尾斜杠 = **8条规则**加入 `public/_redirects`
- 食品级不锈钢卖点作为椰奶页的一个完整板块（材质/卫生认证/接触件304）

---

## 三、旧款页的标准模板（4页统一，每页500–800词）

1. **顶部提示条**（不抢新款）：
   > The HN300 is our 300-ton entry model. Most buyers today choose the upgraded **HN325 (325 ton, improved barrel design)** — [compare HN300 vs HN325 →](/products/standard-hydraulic-oil-press/)
2. 完整规格表（该页存在的核心理由：型号精确搜索+销售引用）
3. **"HN300 vs HN325" 对比块**：参数差、价格档差、什么情况选旧款（预算极紧/产量低于某值/替换老设备），内链新款
4. 适用场景简述（从现有正文提炼，删除与新款逐字重复的套话）
5. CTA 双选："Request HN300 quote" + "Ask about the upgraded HN325"
6. 技术规范：自指 canonical（**不要把旧页 canonical 到新款，否则等于删除**）、不加 noindex、Product schema 保留
7. 小语种：fr/ar/id product-bodies 同步精简改写（不是全量长文）

定制款页模板类似：顶部 "Custom/made-to-order model — typical lead time X weeks" 条，主体为规格+定制选项+应用场景。

## 四、内链权重规则

| 位置 | 链接对象 |
|------|--------|
| 首页、2个营销落地页、solutions 页推荐产品、resources、页脚 | **只链4新款**（定制款仅在强相关方案页出现，如芝麻方案页→芝麻定制机） |
| 产品分类网格 / catalog | 4新款置顶+4定制款；**旧款4页从网格和catalog隐藏**（沿用现有 catalogHiddenSlugs 机制，HN400已在隐藏名单），仅通过对比表和新款页可达 |
| 对比表 | 12页全部列出可点 |
| 新款页 | 加"预算有限/替换旧设备？看旧款档"小节链对应旧款（新款给旧款传权重的唯一通道，反向不链营销词） |
| 落地页型号表 | HN300/HN480/HN480B/HN325S 行更新：HN325S 删除（内容已并入椰奶页），其余型号保留行但链接规范化 |

## 五、待清理的引用（grep 已定位）

- `cold-press-oil-machine.astro`(en/[locale]/ads) L275 HN325S 链接 → 椰奶页
- `hydraulic-oil-press-machine.astro`(en/[locale]) L60 HN325S 行删除
- `products/index.astro`、`[category].astro`（en+[locale]）：排序映射去掉 stainless-steel slug；旧款4个加入隐藏/降序
- `model-comparison.astro`（en+[locale]）：删 HN325S 行，其余加 entry/custom 角标
- 4个 `catalog.astro`：hiddenSlugs 更新
- `coconut-oil-hydraulic-press.md` relatedProducts：stainless slug 删除
- product-bodies：删除 stainless-steel 条目（fr/ar/id 约4个文件），旧款4条目标记保留待精简
- `public/_redirects`：+8条 HN325S 规则

sitemap 自动随内容集合更新，无需手改。

## 六、工作量与执行顺序

| 步骤 | 内容 | 提交 |
|------|------|------|
| 1 | 4新款页重写（英文1200–1800词×4 + 3小语种）、seoTitle/title 全套 | 提交1 |
| 2 | 4旧款页改卫星模板（×4语言）、4定制款页（椰奶页吸收HN325S、LB去油料化）、2枢纽页改版 | 提交2 |
| 3 | 内链清理 + catalog/网格隐藏规则 + 落地页型号表 | 与2同批 |
| 4 | 删 HN325S md/bodies + 8条301，构建验证399→395页左右，抽查301 | 提交3，部署 |

相比 v2(7个301）：省掉48条重定向、保留型号搜索资产；代价是4个旧款页要做精简改写（但比全量重写轻）。

## 七、需你确认2个事实

1. **旧款4机是否仍可接单？** 可接单→CTA 双按钮（旧款报价/看新款）；已停产只留参考→CTA 只引导新款+询盘注明
2. **定制款典型交期**（定制页要写 lead time，增强可信度；如6–8周）
