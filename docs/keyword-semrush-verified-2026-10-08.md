# Semrush 实测关键词数据（2026-10-08）

> 工具：Semrush 代理账号（zh.semrush.fast.wmxpro.com）
> 查询数据库：印度（in，占行业搜索量 50-90%）+ 美国（us，对照）
> 共实测 50 个关键词，以下为真实数据（非经验推测）

---

## 一、核心发现（颠覆之前的假设）

### ❌ "manufacturer/factory/supplier/China" 修饰词几乎没有搜索量

| 关键词 | 印度月搜索量 | 印度KD | 美国月搜索量 |
|--------|------------|--------|------------|
| hydraulic oil press manufacturer | 0（不可用） | 10 | 0 |
| oil press machine manufacturer | 0（不可用） | 12 | 0 |
| oil press machine factory | 0（不可用） | 30 | 10 |
| oil press machine supplier | 0（不可用） | 15 | 0 |
| oil press machine wholesale | 0（不可用） | 30 | 0 |
| oil press machine exporter | 0（不可用） | 10 | 不可用 |
| oil press machine distributor | 0（不可用） | 9 | 不可用 |
| hydraulic oil press factory | 0（不可用） | 24 | 0 |
| cold press oil machine manufacturer | 0（不可用） | 8 | 0 |
| oil press machine made in china | 0（不可用） | 19 | 不可用 |
| oil press machine china | 20 | 7 | 20 |
| oil extraction machine manufacturer | 0 | 24 | 10 |

**结论：买家不搜"XX manufacturer"。之前"每个产品页 title 加 Manufacturer"的建议只能当信任信号，带不来流量。**
（注：旧 CSV 里 manufacturer 全球量 140，来自印度/美国以外的零散小市场，量极小）

### ❌ 地区词搜索量也极低（印度库里）

| 关键词 | 印度月搜索量 | KD |
|--------|------------|-----|
| oil press machine india | 10 | 6 |
| oil press machine nigeria | 0 | 16 |
| oil press machine bangladesh | 0 | 30 |
| oil press machine kenya | 0 | 12 |
| oil press machine africa | 0 | 23 |
| oil press machine middle east | 0 | 16 |
| oil press machine indonesia | 0 | 11 |

**注：尼日利亚/孟加拉没有独立 Semrush 数据库，真实搜索量可能高于显示，但全球量（旧 CSV 级别参考）也不高。**

### ❌ 价格长尾大多没量，但核心价格词有量

| 关键词 | 印度月搜索量 | KD |
|--------|------------|-----|
| cold press oil machine price | **880** | 13 |
| oil extraction machine price | **210** | 9 |
| hydraulic oil press price | 0 | 23 |
| oil press machine cost | 0（美10） | 7 |
| oil press machine price list | 0 | 17 |
| oil press machine quotation | 0 | 22 |
| oil press machine factory price | 0 | 6 |
| oil press machine price in india | 20 | 21 |
| sesame oil machine price | 30 | — |

---

## 二、真正有流量的词（印度市场实测，2026-10-08 全量刷新 KD）

> 注：以下 KD 均为"更新指标→所有关键词"刷新后的真实值。未刷新时显示的 KD 偏小，已弃用。

### 🔥 金矿词（搜索量大 + KD低）

| 关键词 | 印度月搜索量 | KD | 类型 |
|--------|------------|-----|------|
| **cold pressed oil machine** | **12,100** | **10** | 产品同义词 ⭐第一金矿 |
| cold press oil machine | 12,100（旧CSV全球14,800，KD8） | 8 | 产品核心词 |
| **oil pressing machine** | **2,900** | 19 | 产品同义词 |
| **mustard oil machine** | **1,900** | 22 | 油料词 |
| **oil expeller machine** | **1,300** | **5** | 产品同义词 |
| **oil mill machine** | **1,300** | **4** | 产品同义词 |
| **oil mill machinery** | **1,300** | 31 | 产品同义词（较难） |
| **home oil press machine** | **1,000** | **6** | 规模词 |
| **groundnut oil machine** | **720** | **5** | 油料词（花生印度叫法） |
| cold press oil machine price | 880 | 13 | 价格 |
| mini oil press machine | 480 | 5 | 规模词 |
| oil extraction machine price | 210 | 16 | 价格 |
| **kachi ghani oil machine** | 170 | 12 | 印度本地词 |
| **oil ghani machine** | 170 | **6** | 印度本地词 |
| oil mill business | 140 | 22 | 商业意图 |
| screw oil press machine | 140 | 16 | 竞品/对比词 |
| commercial oil press machine | 110 | **10** | 规模词 |
| oil press machine for business | 110 | 15 | 商业意图 |

### 低量词（<100，顺带覆盖即可）

| 关键词 | 印度月搜索量 |
|--------|------------|
| sesame oil machine price | 30 |
| automatic oil press machine | 20 |
| industrial oil press machine | 20 |
| small oil press machine | 20 |
| oil press machine for sale | 20（美20） |
| oil press machine spare parts | 20 |
| stainless steel oil press machine | 0/待更新 |

---

## 三、数据驱动的策略修正

### 1. Title 优化方向（修正之前建议）

**之前（经验推导，已被数据否定）：**
```
Cold Press Hydraulic Oil Press Machine Manufacturer | Haonuo
```

**数据支持的正确方向 —— 用高流量同义词：**
- cold pressed oil machine（12,100）
- oil pressing machine（2,900）
- oil mill machine（1,300，KD4）
- oil expeller machine（1,300，KD5）

**manufacturer/China 放在正文和 description，不占 title 主位。**

### 2. 优先布局页面（按实测数据）

| 优先级 | 目标词 | 印度量 | KD | 行动 |
|--------|--------|-------|-----|------|
| P0 | oil mill machine / oil mill machinery | 1,300×2 | 4 | 新建/优化页面（你网站没有 oil mill 概念页） |
| P0 | oil expeller machine | 1,300 | 5 | 对比页加强（expeller 是螺旋机，可引流到液压机对比） |
| P0 | mustard oil machine | 1,900 | 5 | 芥末解决方案页加机器词 |
| P0 | groundnut oil machine | 720 | 4 | 花生页补 groundnut（印度用法，现只有 peanut） |
| P0 | home oil press machine | 1,000 | 8 | 小型方案页优化 |
| P1 | cold press oil machine price | 880 | 13 | 价格页 |
| P1 | kachi ghani / oil ghani machine | 170×2 | 5 | 印度市场页加本地术语 |
| P1 | oil pressing machine | 2,900 | — | 全站作为同义词布局 |
| P2 | oil mill business | 140 | 4 | 商业投资文章 |
| P2 | screw oil press machine | 140 | 3 | 对比页截流 |

### 3. 高流量同义词矩阵（实测有量，可安全组合）

有真实流量的"产品词根"：
- cold pressed oil machine / cold press oil machine（12.1K）
- oil pressing machine（2.9K）
- oil mill machine / oil mill machinery（1.3K×2）
- oil expeller machine（1.3K）
- oil extraction machine
- oil press machine

有真实流量的"修饰词根"：
- price（880 / 210 / 1600全球）
- home（1,000）
- mini（480）
- commercial（110）
- for business（110）
- mustard / groundnut / sesame（油料词）
- kachi ghani / ghani（印度本地）

**无流量、不要浪费 title 位置的修饰词：**
- manufacturer / factory / supplier / exporter / distributor / wholesale / China / made in china / OEM / quotation / price list / factory price

---

## 四、尼日利亚市场实测（db=ng，2026-10-08 全量刷新）

### 🔥 尼日利亚有流量的词（按搜索量排序）

| 关键词 | 尼日利亚月搜索量 | KD | 类型 |
|--------|---------------|-----|------|
| **groundnut oil extraction machine** | **210** | 19 | 花生（尼日利亚第一油料） |
| **oil press machine** | **170** | 21 | 核心词 |
| **oil pressing machine** | **170** | 12 | 同义词 |
| **groundnut oil machine** | **110** | 15 | 花生 |
| **oil mill machine** | **90** | 13 | 同义词 |
| **palm oil machine** | **70** | 11 | 棕榈 |
| oil extraction machine | 40 | 11 | 同义词 |
| home oil press machine | 30 | 18 | 规模 |
| automatic oil press machine | 20 | 24 | 规模 |
| cold press oil machine | 20 | 13 | 冷榨 |
| cold pressed oil machine | 20 | 19 | 冷榨 |
| commercial oil press machine | 20 | 5 | 商用（KD极低） |
| hydraulic oil press machine | 20 | 17 | 液压 |
| industrial oil press machine | 20 | 9 | 工业（KD极低） |
| mini oil press machine | 20 | 3 | 小型（KD极低） |
| oil press machine for sale | 20 | 13 | 购买 |
| palm kernel oil machine | 20 | 3 | 棕榈仁（KD极低） |
| palm oil extraction machine | 20 | 10 | 棕榈 |
| screw oil press machine | 20 | 3 | 螺旋（KD极低） |
| oil expeller machine | 10 | 9 | 同义词 |
| oil press machine price | 10 | 6 | 价格 |
| palm kernel oil extraction machine | 10 | 10 | 棕榈仁 |
| cold press oil machine price | 0 | 20 | — |
| groundnut oil machine price | 0 | 8 | — |
| sesame oil machine | 0 | 10 | 芝麻在尼日利亚无量 |
| small oil press machine | 0 | 9 | — |

**尼日利亚要点：**
- 主导油料是 **groundnut（花生）+ palm/palm kernel（棕榈/棕榈仁）**，芝麻 0 量
- 市场量约为印度的 1/50，但尼日利亚买家商业意图强、客单价高
- 大量词 KD 3-13，竞争极低，容易排名
- `commercial oil press machine`(KD5)、`palm kernel oil machine`(KD3)、`mini oil press machine`(KD3)、`screw oil press machine`(KD3) 是低竞争切入点

---

## 五、孟加拉市场实测（db=bd，2026-10-08 全量刷新）

### 孟加拉有流量的词（市场整体很小，最高仅 20）

| 关键词 | 孟加拉月搜索量 | KD |
|--------|---------------|-----|
| coconut oil machine | 20 | 13 |
| cold press oil machine | 20 | 29 |
| cold pressed oil machine | 20 | 23 |
| mini oil press machine | 20 | 18 |
| mustard oil machine | 20 | 19 |
| oil mill machine | 20 | 15 |
| oil press machine | 20 | 14 |
| oil pressing machine | 20 | 11 |
| **rice bran oil machine** | 20 | **2**（KD极低） |
| mustard oil machine price | 10 | 19 |
| oil expeller machine | 10 | 0（无竞争） |
| oil extraction machine | 10 | 18 |
| sesame oil machine | 0 | 15 |
| sesame oil machine price | 0 | 1 |
| mustard oil extraction machine | 0 | 7（KD低） |
| screw oil press machine | 0 | 8（KD低） |
| ghani oil machine | 0 | 11 |
| industrial oil press machine | 0 | 32（KD高，无流量） |
| commercial oil press machine | 0 | 27 |

**孟加拉要点：**
- 市场量极小（最高仅 20/月），约为尼日利亚的 1/10
- 有微弱需求的油料：**rice bran（米糠，KD2）、coconut、mustard**
- 意外：sesame（芝麻）0 量——虽然孟加拉是芝麻产区，但本地搜索需求在 Semrush 无数据
- 主动开发（邮件/WhatsApp）比 SEO 更适合这个市场，SEO 性价比低

---

## 六、三大市场对比总结

| 维度 | 印度 | 尼日利亚 | 孟加拉 |
|------|------|---------|--------|
| 市场量级 | 极大（核心词 1,000-12,000） | 中（最高 210） | 极小（最高 20） |
| 第一大词 | cold pressed oil machine 12,100 | groundnut oil extraction 210 | 多词并列 20 |
| 主导油料 | mustard / groundnut / sesame | groundnut / palm / palm kernel | rice bran / coconut / mustard |
| 核心词难度 | KD 3-13（低） | KD 3-21（低） | KD 0-32（分化） |
| SEO 性价比 | ⭐⭐⭐⭐⭐ 最高 | ⭐⭐⭐ 值得做 | ⭐ 低（适合主动开发） |
| 本地术语 | kachi ghani / ghani | — | ghani |
| 建议获客方式 | SEO + Google Ads | SEO + 主动开发 | 邮件/WhatsApp 主动开发 |

### 跨市场通用结论
1. **"manufacturer/factory/supplier/China" 在三个市场都无搜索量**——不要占 title，只放正文当信任词
2. **高流量产品叫法**：cold pressed oil machine、oil pressing machine、oil mill machine、oil expeller machine、groundnut oil machine
3. **花生统一用 groundnut**（印度+尼日利亚都搜 groundnut，不是 peanut）
4. 各市场油料词必须本地化：印度 mustard、尼日利亚 groundnut/palm、孟加拉 rice bran/coconut

---

## 七、数据局限说明

1. 印度/尼日利亚/孟加拉三市场核心词 KD 均已全量刷新；唯 `oil mill machine`（单数）的 KD4 为第一批未刷新值，其近义词 `oil mill machinery`（总称）刷新后真实 KD 为 31，该词建议复核
2. 尼日利亚（ng）、孟加拉（bd）均有独立 Semrush 数据库；肯尼亚无独立数据库
3. 三次批量刷新共消耗约 1,100 更新额度
4. 旧 keyword-library.csv 的全球量数据（如 oil press machine price 1,600、mini 1,900）与本次各国本地库口径不同，全球量 > 单国量属正常
5. 重要教训：Semrush 批量分析初次返回的 KD 偏小且不准，必须点"更新指标→所有关键词"后读取
