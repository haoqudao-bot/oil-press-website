# Solution 页面整体重写策略

> 目标：18个 solution 页面从"产品介绍页"升级为"采购商转化页"
> 三个视角：页面使命 / 信任转化 / SEO + AI GEO

---

## 一、现状诊断（基于 mustard / peanut / palm 三页实测）

### 1.1 当前页面结构

```
H1(关键词)
├─ Overview（通用介绍）
├─ Oil Yield Expectations（出油率表）
├─ Why Choose Haonuo（通用卖点）
├─ yield-block(100kg 产出表)
├─ [模板] Process Flow 卡片
├─ [模板] Recommended Equipment 卡片
├─ [模板] FAQ
└─ [模板] CTA
```

### 1.2 发现的6个核心问题

| # | 问题 | 证据 | 影响 |
|---|------|------|------|
| 1 | **Why Choose Haonuo 全是空话** | 每页都是"factory-direct pricing / designed for XX market / proven in India"同一套话术，换页只改地名 | 采购商无感，信任度低 |
| 2 | **数据跨语言不一致** | palm 页英文 FAQ 说 "600-1,200 kg/day"，法文说 "800-2,000 kg/day"；英文还有 "(cold press) (cold press)" 重复文字 | 暴露内容未校对，专业度受损 |
| 3 | **部分页面内容单薄** | peanut 有7步工艺，palm 只有4步且描述笼统("Crush palm kernels") | 页面质量参差，AI 不愿引用薄内容 |
| 4 | **没有采购商分层** | 小农户/加工厂/投资人看同一页面，没人被精准说服 | 转化漏斗断裂 |
| 5 | **没有经济测算** | 只说"yield 35-40%"，不说"100kg 原料 → 多少升油 → 按当地油价值多少钱" | B2B 买家最关心的 ROI 缺失 |
| 6 | **FAQ 没有覆盖真实异议** | 缺"电压能不能配我们国家的""坏了找谁修""怎么付款""运费多少"等真实采购障碍 | 询盘前最后的顾虑没被消除 |

### 1.3 有没有必要重写？

**有必要，但不是推倒重来，是"结构升级 + 内容加厚"。**

理由：
- 现有 Overview / Yield / FAQ 骨架可用，不用全删
- 需要新增3个关键模块（采购商分层、经济测算、信任证据）
- 需要把 Why Choose Haonuo 从空话改成可验证的事实
- 需要统一跨语言数据（修 palm 页这类不一致）

---

## 二、页面使命重新定义

一个 solution 页的使命不是"介绍我们能榨这种油"，而是：

> **让一个有这种油料、想赚钱的人，在3分钟内确认"这台机器适合我、这家工厂可信、我知道下一步怎么做"。**

对应采购商的心理路径（决策漏斗）：

```
 landing
    │
    ▼ ① 这机器能榨我的料吗？(适配性)
    ▼ ② 能出多少油/赚多少钱？(经济性)
    ▼ ③ 我需要买哪些配套？(完整方案)
    ▼ ④ 这家中国工厂靠谱吗？(信任)
    ▼ ⑤ 多少钱？怎么下单？(行动)
    ▼
  询盘
```

---

## 三、新页面结构（漏斗式，11个模块）

| 顺序 | 模块 | 使命 | SEO/GEO 作用 | 转化作用 |
|------|------|------|------------|---------|
| 1 | H1 + 一句话定位 | 说清"给谁+解决什么" | title/H1 关键词 | 3秒抓住 |
| 2 | **Quick Answer 块** | 直接回答"能不能榨/出油率/日产量" | AI 最爱引用的自包含答案块 | 立即给价值 |
| 3 | **采购商分层** | 小农户/加工厂/投资者各看哪行 | 覆盖 home/commercial/industrial 词 | 精准匹配 |
| 4 | 出油率表 | 数据说话 | 表格被 AI/精选摘要抓取 | 经济性证明 |
| 5 | **经济测算块** | 100kg原料→多少油→值多少钱 | 具体数字被 AI 引用 | ROI 说服(核心) |
| 6 | Process Flow | 工艺流程 | 模板已有 | 完整方案 |
| 7 | Recommended Equipment | 配套设备 | 模板已有 | 客单价提升 |
| 8 | **信任证据块** | 该区域真实案例/数据 | E-E-A-T 信号 | 消除不信任 |
| 9 | Why Haonuo | 改成可验证事实 | 品牌词 | 信任 |
| 10 | **FAQ(异议导向)** | 覆盖付款/运输/电压/售后 | FAQ schema 富摘要 | 消除最后顾虑 |
| 11 | CTA | 明确的下一步 | — | 询盘 |

**新增3个关键模块：② Quick Answer、⑤ 经济测算、⑧ 信任证据**
**重写1个模块：⑨ Why Haonuo(空话→事实)**
**扩写1个模块：⑩ FAQ(加采购异议)**

---

## 四、每个模块具体怎么写

### 模块② Quick Answer(AI GEO 核心)

页面顶部放一个自包含的答案块，AI 引擎直接引用：

```
✅ Quick Answer
Yes — the Haonuo hydraulic oil press extracts mustard oil efficiently.
Expect 30-38% oil yield (cold press) or 33-41% (hot press) from cleaned
mustard seeds, with residual oil in cake below 5%. A single HN325 barrel
processes 100 kg per batch (35-45 min hot press), roughly 800-1,200 kg/day.
```

为什么重要：ChatGPT/Perplexity 回答"can I press mustard with hydraulic press"时，会直接抓这段。**这是被 AI 引用的入口。**

### 模块③ 采购商分层

```
| 你是谁 | 推荐配置 | 日产量 | 适合场景 |
|--------|---------|--------|---------|
| 家庭/小作坊 | HN325 单缸 | 800-1,200 kg | 自用+周边售卖 |
| 加工厂 | HN365 或双缸 | 1,500-2,500 kg | 区域批发 |
| 投资建厂 | 整条产线(配蒸炒锅+滤油机) | 3,000+ kg | 品牌化销售 |
```

作用：每个买家找到自己的那行，觉得"这就是给我写的"。同时自然覆盖 home/mini/commercial/industrial 这些规模词。

### 模块⑤ 经济测算(B2B 转化核心)

```
💰 100 kg 芥末籽 → 能赚多少？

投入:100 kg 芥末籽
产出:33-38 L 毛油 + 57-68 kg 油饼
按印度当地冷榨芥末油价 ₹250-350/L:
  毛油价值 ≈ ₹8,250-13,300
  油饼(饲料)价值 ≈ ₹1,400-2,000
  合计 ≈ ₹9,650-15,300 / 100 kg

扣掉原料、电、人工，单日净利润估算 → 联系我们做定制测算
```

注意：**价格按目标市场当地货币**，不要只写美元。这是"我懂你的市场"的最强信号。

### 模块⑧ 信任证据

把"Proven in India"这种空话，改成具体可验证的：

```
📍 芥末机在印度
- 拉贾斯坦邦 / 西孟加拉邦 多家油坊在用
- 支持 Kachi Ghani 传统工艺(冷榨保留辛辣味)
- 可按印度电压 415V/50Hz 定制电机
- 提供 FOB 青岛报价 + 海运到加尔各答/蒙德拉港
```

**"电压定制"和"运到哪个港"** 这种细节，比一百句"值得信赖"更能建立信任——采购商一看就知道你做过这个市场。

### 模块⑨ Why Haonuo(空话→事实)

| 空话(现在) | 事实(改后) |
|-----------|-----------|
| Factory-direct pricing | "出厂价 = 同款外贸公司报价的 X%,因为我们就是工厂" |
| Designed for South Asia | "电机可按 415V/50Hz 定制，标配符合印度市场的配件" |
| Proven in India | "拉贾斯坦/西孟加拉有 N 家油坊在用，可视频验机" |
| Superior yield | "残油率 <5%,传统 ghani 榨剩 10-12%——每100kg 多出 5-7L 油" |

### 模块⑩ FAQ(异议导向，新增必答)

现有 FAQ 偏技术，补这5个采购必问：

1. **Does the machine work with my country's voltage?**(电压)
2. **How do you ship and how long to [port]?**(物流)
3. **What payment terms do you accept?**(付款)
4. **What if a part breaks — do you send spares?**(售后)
5. **Can I see a video of the machine pressing [seed]?**(验机)

---

## 五、AI GEO 专项优化

AI 引擎(ChatGPT/Perplexity/Gemini)引用内容的偏好：

| 原则 | 落地动作 |
|------|---------|
| 自包含答案块 | 模块② Quick Answer,一段话能独立成立 |
| 具体数字 | 出油率、日产量、残油率、温度、时间全给数字 |
| 结构化表格 | 分层表/经济测算表/yield 表(已多为表格) |
| 实体清晰 | "Haonuo"+"液压榨油机"+"型号"反复自然出现，建立实体关联 |
| 问答格式 | FAQ 用问句标题+直接答案(已有，需补异议题) |
| 数据一致 | 修 palm 页英法数据不一致——AI 抓到矛盾数据会降低可信度 |

---

## 六、执行优先级(积分有限，分批做)

### 第一批：修数据错误(必做，风险最高)
- palm 页英文 FAQ 的 "(cold press) (cold press)" 重复文字
- palm 页英文 vs 法文日产量数据不一致(600-1,200 vs 800-2,000)
- 全站抽查其他页面的跨语言数据一致性

### 第二批：加3个关键模块(先做 mustard + peanut + palm 三页打样)
- 模块② Quick Answer
- 模块⑤ 经济测算
- 模块⑧ 信任证据

### 第三批：Why Haonuo 重写 + FAQ 扩写
- 三页打样验证后，模板化铺到其余15页

### 不建议现在做
- 推倒重写全部18页(性价比低，现有骨架可用)
- 每页都全新创作(应该用"模板+变量"批量生成)

---

## 七、打样页面写法(以 mustard 为例的模块②⑤⑧)

见下方"示范写法"，可直接用。

### Quick Answer 块(mustard 示范)

> **Quick Answer**
> Yes — the Haonuo hydraulic oil press is built for mustard. Expect **30-38% yield (cold press)** or **33-41% (hot press)** from cleaned seeds, with **residual oil in cake under 5%**. One HN325 barrel takes **100 kg per batch (35-45 min hot press)**, so a single machine runs roughly **800-1,200 kg/day** — a double-barrel or HN365 reaches **1,500-2,500 kg/day**. For traditional **Kachi Ghani** cold-pressed mustard oil, skip steaming and press below 60°C.

### 经济测算块(mustard 示范)

> **What 100 kg of mustard seed is worth**
>
> | Output | Amount | Local value (India) |
> |---|---|---|
> | Crude mustard oil | 33-38 L | ₹8,250-13,300 (@₹250-350/L) |
> | Oil cake (animal feed) | 57-68 kg | ₹1,400-2,000 |
> | **Total per 100 kg** | | **₹9,650-15,300** |
>
> At 800-1,200 kg/day, one HN325 turns mustard seed into roughly **₹77,000-1,80,000 of product per day**. Tell us your local seed and oil prices, and we'll calculate your exact margin.

### 信任证据块(mustard 示范)

> **Built for the Indian mustard trade**
> - Motors wound for **415V / 50Hz, 3-phase** — standard Indian industrial supply
> - Handles **Kachi Ghani** cold-press tradition (no steaming, <60°C) for premium pungent oil
> - Shipped **FOB Qingdao**; we arrange sea freight to **Kolkata / Mundra / Nhava Sheva**
> - Wear parts (seals, filter cloths) ship with the machine + 1-year spares support
> - Video call a live pressing demo with your own seed before you order

---

## 八、为什么这样写有效(三个视角总结)

**采购商视角**：我3秒内知道这机器榨我的料、出多少油、值多少钱、我这规模该买哪款、这家工厂懂我的市场、我知道怎么联系——转化路径完整。

**SEO 视角**：关键词在 title/H1/H2/Quick Answer/正文自然分布，表格和分层覆盖长尾词(home/commercial/industrial/price),内容厚度够(每页800+词)。

**AI GEO 视角**:Quick Answer 自包含可引用、数据具体、表格结构化、FAQ 问答式、实体(品牌+产品+型号)清晰——AI 引擎有料可抓、敢引用。
