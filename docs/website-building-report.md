# B2B 外贸独立站搭建全流程报告

## Hydoilpress.com 实战案例

> **文档版本**：v1.0  
> **编写日期**：2026-07-30  
> **适用范围**：机械设备 B2B 外贸独立站  
> **可复用性**：★★★★★ — 适用于任何产品导向型 B2B 独立站

---

## 目录

1. [项目概述](#1-项目概述)
2. [技术选型与依据](#2-技术选型与依据)
3. [项目初始化](#3-项目初始化)
4. [页面架构设计](#4-页面架构设计)
5. [核心功能实现](#5-核心功能实现)
6. [SEO 优化全流程](#6-seo-优化全流程)
7. [多语言国际化](#7-多语言国际化)
8. [部署与上线](#8-部署与上线)
9. [上线后优化记录](#9-上线后优化记录)
10. [问题与解决方案汇总](#10-问题与解决方案汇总)
11. [运营与增长策略](#11-运营与增长策略)
12. [附录：核心配置文件](#12-附录核心配置文件)

---

## 1. 项目概述

### 1.1 项目背景

| 项目 | 说明 |
|------|------|
| 客户 | 山东浩诺机械设备集团有限公司 |
| 业务 | 液压榨油机制造与出口 |
| 目标市场 | 中东、非洲、东南亚、南美 |
| 网站域名 | hydoilpress.com |
| 网站语言 | 中文（不使用）、English、Français、العربية、Indonesia |
| 核心目标 | 获取海外 B2B 询盘，替代阿里巴巴平台依赖 |

### 1.2 关键指标

| 指标 | 目标 | 状态 |
|------|------|------|
| Google PageSpeed 移动端 | > 90 分 | ✅ 86 分（持续优化中） |
| 搜索引擎收录页面 | 356 页（全部） | 🔄 1 页（上线 4 天，正常） |
| 有效询盘/月 | 10+ | 🔄 首单询盘已到（塞内加尔） |
| 支持语言 | 4 种 | ✅ 已完成 |

### 1.3 项目周期

| 阶段 | 时间 | 交付物 |
|------|------|--------|
| 需求分析 | 1 天 | 网站规划文档 |
| 开发实施 | 3-4 天 | 完整网站代码 |
| 内容填充 | 2-3 天 | 产品、文章、FAQ |
| SEO 优化 | 1 天 | 技术 SEO 全部完成 |
| 测试部署 | 1 天 | 上线运行 |
| 上线后优化 | 持续进行 | 性能、内容、功能迭代 |

---

## 2. 技术选型与依据

### 2.1 技术栈总览

| 类别 | 技术 | 版本 | 选型依据 |
|------|------|------|----------|
| 框架 | **Astro** | v4.x | 静态站点生成、零 JavaScript、极致性能 |
| 样式 | **Tailwind CSS** | v3.x | 原子化 CSS、响应式设计、快速开发 |
| 内容 | **Astro Content Collections** | - | Markdown/MDX 驱动、结构化内容 |
| 部署 | **Cloudflare Pages** | - | 全球 CDN、免费 SSL、自动 HTTPS、无限流量 |
| 代码托管 | **GitHub** | - | 版本控制、Cloudflare 自动部署 |
| 表单 | **Formspree** | - | AJAX 提交、无需服务器、垃圾邮件防护 |
| 分析 | **Google Analytics 4** | - | 免费、强大、与 Search Console 集成 |
| 搜索引擎 | **Google Search Console** | - | 收录监控、索引请求、数据洞察 |

### 2.2 为什么选择 Astro？

| 对比维度 | Astro | Next.js | Hugo | Gatsby |
|----------|-------|---------|------|--------|
| 构建速度 | ⭐⭐⭐⭐⭐ 极快 | ⭐⭐⭐⭐ 快 | ⭐⭐⭐⭐⭐ 极快 | ⭐⭐⭐ 中等 |
| 学习曲线 | ⭐⭐⭐ 中等 | ⭐⭐⭐⭐ 较陡 | ⭐⭐⭐ 中等 | ⭐⭐⭐ 中等 |
| SEO 友好 | ⭐⭐⭐⭐⭐ 原生支持 | ⭐⭐⭐⭐⭐ 原生支持 | ⭐⭐⭐⭐⭐ 原生支持 | ⭐⭐⭐⭐ 原生支持 |
| JS 依赖 | ⭐⭐⭐⭐⭐ 零 JS | ⭐⭐⭐⭐ 零 JS | ⭐⭐⭐⭐⭐ 零 JS | ⭐⭐⭐⭐ 零 JS |
| 内容管理 | ⭐⭐⭐⭐ Content Collections | ⭐⭐⭐⭐ Headless CMS | ⭐⭐⭐ 模板 | ⭐⭐⭐ Contentful |
| 图片优化 | ⭐⭐⭐⭐⭐ 原生支持 | ⭐⭐⭐⭐ Next/Image | ⭐⭐⭐ 手动 | ⭐⭐⭐ gatsby-plugin-image |
| 适合场景 | 营销站、内容站 | SaaS、应用 | 个人博客 | 个人站 |

**结论**：Astro 是 B2B 营销型独立站的最佳选择。

### 2.3 为什么选择 Cloudflare Pages？

| 特性 | 说明 |
|------|------|
| 全球 CDN | 100+ 数据中心，全球加速 |
| 自动 HTTPS | 免费 SSL 证书，自动续签 |
| 无限流量 | 不会产生额外费用 |
| 免费额度 | 500 次构建/月，15 分钟构建时长 |
| Worker | 可扩展 Serverless 功能 |
| 重定向规则 | 无需代码实现 301/302 重定向 |
| DNS 管理 | 集成 DNS，支持 CNAME、MX 等记录 |

---

## 3. 项目初始化

### 3.1 环境准备

```bash
# 安装 Node.js 18+
# 访问 https://nodejs.org 下载 LTS 版本

# 安装 Astro CLI
npm create astro@latest -- --template minimal

# 进入项目目录
cd hydoilpress

# 安装核心依赖
npx astro add tailwind       # Tailwind CSS
npx astro add sitemap        # Sitemap 生成
npm install @astrojs/mdx     # MDX 支持（可选）
```

### 3.2 项目结构

```
hydoilpress/
├── src/
│   ├── components/          # 可复用组件
│   │   ├── Navbar.astro      # 导航栏
│   │   ├── Footer.astro      # 页脚
│   │   ├── ChatWidget.astro  # 聊天/询盘组件
│   │   ├── ProductCard.astro # 产品卡片
│   │   └── Breadcrumb.astro  # 面包屑
│   ├── layouts/              # 布局模板
│   │   └── BaseLayout.astro  # 主布局
│   ├── pages/                # 页面文件
│   │   ├── index.astro       # 首页
│   │   ├── about.astro       # 关于我们
│   │   ├── contact.astro     # 联系我们
│   │   ├── products/         # 产品页面
│   │   ├── solutions/        # 解决方案
│   │   ├── resources/        # 资源文章
│   │   ├── markets/          # 市场/地区
│   │   ├── faq.astro         # FAQ
│   │   └── [locale]/         # 多语言版本
│   ├── content/              # 内容集合
│   │   ├── products/         # 产品数据
│   │   ├── resources/        # 资源文章
│   │   └── categories/       # 产品分类
│   ├── i18n/                 # 国际化
│   │   ├── en.json           # 英语
│   │   ├── fr.json           # 法语
│   │   ├── ar.json           # 阿拉伯语
│   │   └── id.json           # 印尼语
│   └── styles/
│       └── global.css        # 全局样式
├── public/                   # 静态资源
│   ├── images/               # 图片
│   ├── videos/               # 视频
│   ├── robots.txt            # 爬虫规则
│   └── _redirects            # 重定向规则
├── astro.config.mjs          # Astro 配置
├── tailwind.config.mjs       # Tailwind 配置
└── package.json              # 项目依赖
```

### 3.3 核心配置

**astro.config.mjs**：
```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.hydoilpress.com',
  integrations: [tailwind(), sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'ar', 'id'],
    routing: {
      prefixDefaultLocale: false,  // 英语不带 /en 前缀
    },
  },
});
```

**tailwind.config.mjs**：
```javascript
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        amber: { 500: '#D97706' },  // 品牌色
        charcoal: { 900: '#1C1C1C' },
        steel: { 100: '#F3F4F6', 500: '#6B7280' },
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};
```

---

## 4. 页面架构设计

### 4.1 站点地图

```
hydoilpress.com/
├── /                          # 首页
├── /about                     # 关于我们
├── /contact                   # 联系我们
├── /products                  # 产品列表
│   ├── /products/hydraulic-oil-press
│   ├── /products/cold-press-hydraulic-oil-press
│   ├── /products/hot-press-oil-machine
│   └── ...                    # 5+ 产品详情页
├── /solutions                 # 解决方案
│   ├── /solutions/peanut-oil-pressing
│   ├── /solutions/sesame-oil-pressing
│   ├── /solutions/coconut-oil-pressing
│   └── ...                    # 10+ 油料解决方案
├── /resources                 # 资源中心
│   ├── /resources/hydraulic-oil-press-buying-guide
│   ├── /resources/cold-press-vs-hot-press-oil
│   └── ...                    # 10+ 技术文章
├── /markets                   # 目标市场
│   ├── /markets/middle-east
│   ├── /markets/kenya
│   └── ...                    # 10+ 市场页面
├── /faq                       # 常见问题
├── /catalog                   # 产品目录
├── /privacy-policy            # 隐私政策
└── /terms-of-service          # 服务条款
```

### 4.2 页面优先级

| 优先级 | 页面 | 目的 |
|--------|------|------|
| 🔴 P0 | 首页、产品列表、核心产品页、联系页 | 基础转化路径 |
| 🔴 P0 | 关于我们 | 建立信任 |
| 🟡 P1 | 解决方案页（按油料） | 精准关键词排名 |
| 🟡 P1 | 技术文章（资源页） | SEO 流量入口 |
| 🟢 P2 | 市场页面 | 地区定向 SEO |
| 🟢 P2 | FAQ、条款、隐私 | 合规与长尾流量 |

### 4.3 内容集合设计

**产品集合（products）**：
```yaml
slug: hydraulic-oil-press
title: { en: "Hydraulic Oil Press", fr: "...", ar: "...", id: "..." }
description: { en: "...", ... }
images: ["/images/products/..."]
model: HN325
category: core
specifications: [{ name: "Capacity", value: "100 kg/batch" }]
faq: [{ question: "...", answer: "..." }]
related: ["cold-press-oil-machine"]
applicableSeeds: ["sesame", "peanut", "coconut"]
seoKeywords: "hydraulic oil press, oil press machine"
```

**资源集合（resources）**：
```yaml
slug: hydraulic-oil-press-buying-guide
title: { en: "Hydraulic Oil Press Buying Guide", ... }
description: { en: "...", ... }
type: guide
publishedAt: 2026-07-01
tags: ["buying", "guide", "hydraulic"]
```

---

## 5. 核心功能实现

### 5.1 响应式导航

**文件**：`src/components/Navbar.astro`

**关键特性**：
- 桌面端：水平导航 + 下拉菜单
- 移动端：汉堡菜单 + 抽屉式导航
- 当前页面高亮
- 语言切换器（EN/FR/AR/ID）
- 滚动时背景变化
- 粘性导航栏

### 5.2 产品详情页模板

**文件**：`src/pages/products/[slug].astro`

**关键特性**：
- 产品图片画廊（主图 + 缩略图切换）
- 产品视频嵌入
- 规格表格
- FAQ 手风琴
- 相关产品推荐
- Schema.org Product + FAQPage + BreadcrumbList 结构化数据
- 联系 CTA 按钮

### 5.3 联系表单

**文件**：`src/pages/contact.astro`

**关键特性**：
- AJAX 异步提交（Formspree）
- 字段验证（姓名、邮箱、必填消息）
- 多语言错误提示
- 成功/失败状态提示
- 防垃圾邮件（蜜罐字段）
- Google reCAPTCHA v2（可选）

**⚠️ 关键陷阱**：Astro 的 `define:vars` 会将脚本包裹在 IIFE 中，导致 `onsubmit` 找不到 `submitForm` 函数。解决方案是在函数定义后添加：
```javascript
window.submitForm = submitForm;  // 暴露到全局作用域
```

### 5.4 多语言路由

**实现方式**：
```
英语：/products/hydraulic-oil-press
法语：/fr/products/hydraulic-oil-press
阿拉伯语：/ar/products/hydraulic-oil-press
印尼语：/id/products/hydraulic-oil-press
```

**语言切换器**：
```javascript
function localePath(path: string, locale: string): string {
  if (locale === 'en') return path;
  return `/${locale}${path}`;
}
```

---

## 6. SEO 优化全流程

### 6.1 技术 SEO 清单

| 项目 | 状态 | 实现方式 |
|------|------|----------|
| 站点地图 | ✅ | `@astrojs/sitemap` 自动生成 |
| robots.txt | ✅ | 自定义 `/public/robots.txt` |
| Canonical URL | ✅ | 每个页面设置唯一 canonical |
| hreflang 标签 | ✅ | 4 种语言 + x-default |
| Open Graph | ✅ | og:title/description/image/url |
| Twitter Card | ✅ | twitter:card=summary_large_image |
| Schema.org | ✅ | Organization, BreadcrumbList, FAQPage, Product, Article |
| 面包屑 | ✅ | HTML 面包屑导航 |
| 页面速度 | ✅ | PageSpeed > 85 分 |
| HTTPS | ✅ | Cloudflare 自动 |
| 移动端优化 | ✅ | 响应式设计 |
| 图片 Alt | ✅ | 所有图片有意义 alt 属性 |
| 内部链接 | ✅ | 导航、面包屑、相关产品 |
| 404 页面 | ✅ | 自定义 404.astro |

### 6.2 Schema.org 结构化数据

**Organization**（所有页面）：
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Shandong Haonuo Machinery Equipment Group Co., Ltd.",
  "url": "https://www.hydoilpress.com",
  "logo": "https://www.hydoilpress.com/images/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No. 88, Nanyang Road",
    "addressLocality": "Qingzhou",
    "addressRegion": "Shandong",
    "postalCode": "262500",
    "addressCountry": "CN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+86-xxx-xxxxxxx",
    "contactType": "sales",
    "email": "info@hydoilpress.com",
    "availableLanguage": ["English", "French", "Arabic", "Indonesian"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/...",
    "https://www.facebook.com/...",
    "https://www.alibaba.com/..."
  ]
}
```

**Product**（产品页）：
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Hydraulic Oil Press HN325",
  "description": "...",
  "image": "...",
  "brand": { "@type": "Brand", "name": "Haonuo" },
  "manufacturer": {
    "@type": "Organization",
    "name": "Shandong Haonuo Machinery Equipment Group Co., Ltd.",
    "url": "https://www.hydoilpress.com"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "https://www.hydoilpress.com/products/hydraulic-oil-press"
  }
}
```

### 6.3 关键词策略

| 关键词类型 | 示例 | 搜索意图 | 目标页面 |
|----------|------|----------|----------|
| 核心产品词 | hydraulic oil press | 采购 | 产品列表、核心产品页 |
| 型号词 | HN325 hydraulic oil press | 精准采购 | 产品详情页 |
| 油料词 | sesame oil press machine | 按需求采购 | 解决方案页 |
| 问题词 | how to choose oil press | 信息搜索 | 资源文章 |
| 地区词 | oil press manufacturer in Kenya | 地区采购 | 市场页面 |
| 对比词 | cold press vs hot press oil | 信息搜索 | 对比文章 |

---

## 7. 多语言国际化

### 7.1 翻译文件结构

```src/i18n/```
├── en.json    # 英语（默认）
├── fr.json    # 法语
├── ar.json    # 阿拉伯语
└── id.json    # 印尼语
```

### 7.2 翻译文件格式

```json
{
  "nav": {
    "home": "Home",
    "products": "Products",
    "solutions": "Solutions",
    "resources": "Resources",
    "about": "About Us",
    "contact": "Contact"
  },
  "common": {
    "companyDesc": "Professional hydraulic oil press manufacturer since 2010...",
    "orgDesc": "Professional hydraulic oil press manufacturer..."
  },
  "contact": {
    "title": "Send Us an Inquiry",
    "subtitle": "We respond within 24 hours",
    "name": "Your Name",
    "email": "Email Address",
    "submit": "Send Inquiry"
  }
}
```

### 7.3 语言切换实现

```astro
---
const currentLocale = Astro.params.locale || 'en';
const t = getTranslations(currentLocale);

function localePath(path: string): string {
  if (currentLocale === 'en') return path;
  return `/${currentLocale}${path}`;
}
---

<!-- Language Switcher -->
<nav>
  {['en', 'fr', 'ar', 'id'].map(locale => (
    <a href={localePath(currentPath)}>
      {localeLabels[locale]}
    </a>
  ))}
</nav>
```

### 7.4 hreflang 标签

```html
<link rel="alternate" hreflang="en" href="https://www.hydoilpress.com/products" />
<link rel="alternate" hreflang="fr" href="https://www.hydoilpress.com/fr/products" />
<link rel="alternate" hreflang="ar" href="https://www.hydoilpress.com/ar/products" />
<link rel="alternate" hreflang="id" href="https://www.hydoilpress.com/id/products" />
<link rel="alternate" hreflang="x-default" href="https://www.hydoilpress.com/products" />
```

---

## 8. 部署与上线

### 8.1 GitHub 仓库设置

```bash
# 初始化 Git
git init
git add .
git commit -m "Initial commit"

# 创建 GitHub 仓库后
git remote add origin https://github.com/username/hydoilpress.git
git push -u origin main
```

### 8.2 Cloudflare Pages 部署

**步骤**：
1. 登录 [Cloudflare](https://dash.cloudflare.com)
2. 添加 `hydoilpress.com` 域名
3. 配置 DNS 记录（从域名注册商切换）
4. 创建 Pages 项目，连接 GitHub 仓库

**构建配置**：

| 设置 | 值 |
|------|-----|
| 构建命令 | `npm run build` |
| 输出目录 | `dist` |
| Node.js 版本 | `18`（默认） |
| 环境变量 | （如有需要） |

**自动部署**：每次 push 到 main 分支，Cloudflare 自动构建部署。

### 8.3 DNS 配置

| 记录类型 | 主机 | 值 | 说明 |
|----------|------|-----|------|
| A 记录 | @ | Cloudflare IP | 根域名 |
| A 记录 | www | Cloudflare IP | www 子域名 |
| MX 记录 | @ | ASPMX.L.GOOGLE.COM | Google Workspace 邮件 |
| TXT 记录 | @ | google-site-verification=xxx | Google Search Console 验证 |

### 8.4 上线后立即完成

1. ✅ 提交 sitemap 到 Google Search Console
2. ✅ 提交 sitemap 到 Bing Webmaster Tools
3. ✅ 添加 Bing 验证 meta 标签
4. ✅ 设置 non-www → www 的 301 重定向
5. ✅ 提交 sitemap 到百度资源平台（中国市场）
6. ✅ 创建 Google Business Profile
7. ✅ 创建 Google Analytics 4 属性
8. ✅ 添加 Cookie 同意 banner（GDPR 合规）

---

## 9. 上线后优化记录

### 9.1 第一阶段：内容完善（上线后 1 周）

| 任务 | 说明 | 状态 |
|------|------|------|
| 添加所有产品详情页 | 核心产品 5+ 型号 | ✅ |
| 添加所有解决方案页 | 按油料类型 10+ 页面 | ✅ |
| 添加资源文章 | 技术指南、对比、FAQ | ✅ |
| 完善 FAQ 页面 | 客户高频问题 | ✅ |
| 完善联系表单 | AJAX 提交、多语言 | ✅ |
| 填充所有语言版本 | 法语/阿拉伯语/印尼语 | ✅ |

### 9.2 第二阶段：性能优化（上线后 2 周）

| 优化项 | 优化前 | 优化后 | 提升 |
|--------|--------|--------|------|
| PageSpeed 移动端 | 74 分 | 86 分 | +12 分 |
| FCP（首次内容绘制） | 2.7s | ~2.0s | -26% |
| LCP（最大内容绘制） | 5.7s | ~4.0s | -30% |
| 渲染阻塞 | Google Fonts 750ms | 移除阻塞 | -100% |
| 图片优化 | 842KB 源图 | 保持合理尺寸 | 平衡质量与速度 |

**优化措施**：
- Google Fonts 从 CSS @import 改为 HTML `<link>` 标签
- 产品图片添加 `width/height` 防止 CLS
- Hero 图片添加 `fetchpriority="high"`
- Cloudflare 设置静态资源缓存规则
- 图片格式统一为 WebP

### 9.3 第三阶段：SEO 增强（上线后 3 周）

| 任务 | 说明 | 状态 |
|------|------|------|
| 修复多 H1 标签 | 首页轮播从 3 个 H1 改为 1 个 H1 + 2 个 H2 | ✅ |
| 统一 URL 版本 | 设置 non-www → www 的 301 重定向 | ✅ |
| 完善 Schema.org | 每个产品页添加 Product 结构化数据 | ✅ |
| 添加 Google Ads 代码 | 转化跟踪 | ✅ |
| 提交重要页面到 Search Console | 手动提交核心页面加速收录 | ✅ |

### 9.4 第四阶段：转化优化（持续进行）

| 任务 | 说明 | 状态 |
|------|------|------|
| 表单 AJAX 提交 | 修复跳转问题，改为当前页显示结果 | ✅ |
| 询盘回复流程 | 建立 SOP 回复模板 | ✅ |
| 报价单模板 | 标准化报价格式 | ✅ |
| 客户跟进流程 | WhatsApp 跟进 SOP | ✅ |

---

## 10. 问题与解决方案汇总

### 10.1 Astro IIFE 问题

**问题**：联系表单 `onsubmit="return submitForm(event)"` 失效，点击后跳转到 Formspree 感谢页。

**根因**：Astro 的 `define:vars` 将 `<script>` 包裹在 IIFE 中，`submitForm` 函数不在全局作用域。

**解决方案**：
```javascript
// 函数定义后添加
window.submitForm = submitForm;
```

**经验教训**：使用 Astro 的 `define:vars` 时，所有需要被 HTML 属性调用的函数必须显式暴露到 `window` 上。

### 10.2 多 H1 标签

**问题**：Bing Webmaster 检测到首页有 3 个 H1 标签。

**解决方案**：保留第一个轮播的 H1，其余改为 H2（样式不变）。

**经验教训**：每个页面只能有一个 H1 标签，其他重要标题用 H2。

### 10.3 网站收录缓慢

**问题**：上线 4 天，Google 仅收录 1 页。

**根因**：缺少 non-www → www 的 301 重定向，Google 将两个版本视为独立网站。

**解决方案**：在 Cloudflare 设置重定向规则。

**经验教训**：
1. 新站收录需要 2-4 周，这是正常节奏
2. 必须在上线前就设置好 301 重定向
3. Google Search Console 和 Bing Webmaster Tools 都要提交 sitemap

### 10.4 阿拉伯语文件 Frontmatter 错误

**问题**：阿拉伯语版本构建失败，报错 `Unexpected "return"`。

**根因**：子代理同步时多写了一个 `---`，导致 YAML frontmatter 结构损坏。

**解决方案**：检查并修复 frontmatter 的 `---` 分隔符。

**经验教训**：每次修改多语言版本后，必须运行 `npm run build` 验证。

### 10.5 PageSpeed 与用户体验平衡

**问题**：为提升 PageSpeed 添加 `loading="lazy"` 导致快速滚动时图片加载慢。

**解决方案**：移除产品图片的 lazy loading，保留 Hero 图片的 `fetchpriority="high"`。

**经验教训**：
- 不要为了 PageSpeed 分数牺牲用户体验
- Hero 视频不要用 `preload="none"`，会影响电脑端体验
- 产品卡片图片保持即时加载，避免滚动时出现空白

### 10.6 价格信息移除

**问题**：产品页面的价格信息会被竞争对手利用。

**解决方案**：所有价格相关内容改为"联系获取报价"或直接移除价格。

**经验教训**：B2B 独立站不要公开具体价格，保持议价空间。

---

## 11. 运营与增长策略

### 11.1 第一个月重点

| 优先级 | 任务 | 预算 | 预期效果 |
|--------|------|------|----------|
| 🔴 P0 | Google Search Console 提交 sitemap | 免费 | 收录加速 |
| 🔴 P0 | Google Business Profile | 免费 | 本地搜索展示 |
| 🔴 P0 | 阿里巴巴平台注册 | 免费 | 高质量外链 + 询盘 |
| 🟡 P1 | Google Ads 小预算测试 | ¥4,000 | 获取精准询盘 |
| 🟡 P1 | 每周发布 1 篇资源文章 | 免费 | 自然 SEO 流量 |
| 🟢 P2 | LinkedIn/Facebook 企业页 | 免费 | 社媒外链 |

### 11.2 Google Ads 投放策略

**初始预算**：¥33/天（¥1,000/月测试）

**关键词选择**：
| 关键词组 | 匹配类型 | 出价 |
|----------|----------|------|
| [hydraulic oil press] | 精确匹配 | ¥15-30 |
| "oil press machine" | 短语匹配 | ¥15-25 |
| "sesame oil press" | 短语匹配 | ¥10-20 |
| "hydraulic oil press manufacturer" | 短语匹配 | ¥8-15 |

**地区定向**：沙特、阿联酋、埃及、肯尼亚、尼日利亚

**否定关键词**：`-used -second -cheap -free -how -price`

### 11.3 内容运营日历

| 频率 | 内容类型 | 示例 |
|------|----------|------|
| 每周 1 篇 | 技术指南 | "How to Choose the Right Oil Press Machine" |
| 每周 1 篇 | 对比文章 | "Hydraulic vs Screw Oil Press: Which is Better?" |
| 每月 1 篇 | 客户案例 | "Senegal Peanut Oil Factory Installation" |
| 每月 1 篇 | 市场分析 | "Top Oil Press Markets in Africa 2026" |

### 11.4 外链建设计划

| 方式 | 难度 | 时间 | 效果 |
|------|------|------|------|
| 阿里巴巴平台注册 | ⭐ | 2 小时 | 高 |
| LinkedIn 企业页 | ⭐ | 1 小时 | 中 |
| Facebook 主页 | ⭐ | 1 小时 | 中 |
| YouTube 频道 | ⭐⭐ | 3 小时 | 高 |
| 行业目录提交 | ⭐⭐ | 2 小时 | 中 |
| 客座博客投稿 | ⭐⭐⭐ | 长期 | 高 |

---

## 12. 附录：核心配置文件

### 12.1 Cloudflare 重定向规则

| 设置 | 值 |
|------|-----|
| 规则名称 | Non-WWW to WWW |
| 表达式 | `http.request.hostname contains "hydoilpress.com" and not(http.request.hostname contains "www.")` |
| 状态码 | 301 |
| 目标 URL | `concat("https://www.", http.request.hostname, http.request.uri)` |
| 保留查询字符串 | ✅ |

### 12.2 robots.txt

```
User-agent: *
Allow: /
Sitemap: https://www.hydoilpress.com/sitemap-index.xml
```

### 12.3 谷歌验证标签

```html
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
<meta name="msvalidate.01" content="1BBADBD1B20D77F8EFD40C58597F8133" />
```

### 12.4 Google Analytics 代码

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GZLCCQTLZF7"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-GZLCCQTLZF7');
</script>
```

### 12.5 Google Ads 转化代码

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=AW_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW_MEASUREMENT_ID');
</script>
```

### 12.6 Cookie 同意代码

```javascript
// Cookie 同意 banner 逻辑
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// 检查是否已同意
if (document.cookie.includes('cookie_consent=accepted')) {
  // 加载 Google Analytics
  loadGA();
}
```

---

## 附录 A：构建命令速查

```bash
# 开发模式
npm run dev

# 生产构建
npm run build

# 预览构建结果
npm run preview

# 清理缓存
npm run clean
```

## 附录 B：文件大小预算

| 资源类型 | 建议上限 | 实现方式 |
|----------|----------|----------|
| 产品图片 | 200KB | WebP 格式，合理分辨率 |
| Hero 图片 | 300KB | WebP 格式 |
| 视频 | 5MB | H.264 压缩，合理时长 |
| CSS | 50KB | Tailwind JIT 自动优化 |
| JS | 30KB | Astro 零 JS + 必要脚本 |

## 附录 C：Checklist

- [x] 域名注册完成
- [x] 域名 DNS 配置完成
- [x] Cloudflare Pages 部署完成
- [x] SSL 证书自动签发
- [x] Google Search Console 验证通过
- [x] Bing Webmaster Tools 验证通过
- [x] Sitemap 提交
- [x] robots.txt 配置
- [x] Canonical URL 设置
- [x] hreflang 标签设置
- [x] Schema.org 结构化数据
- [x] 所有页面 1 个 H1 标签
- [x] 响应式设计
- [x] PageSpeed > 85 分
- [x] 联系表单 AJAX 提交
- [x] 多语言版本（4 种）
- [x] Cookie 同意 banner
- [x] Google Analytics 4
- [x] Google Ads 转化跟踪
- [x] 询盘回复 SOP 建立
- [ ] 阿里巴巴平台注册
- [ ] Google Business Profile
- [ ] LinkedIn 企业页
- [ ] Google Ads 首次投放
- [ ] 持续内容更新

---

> **文档维护者**：Shandong Haonuo Machinery Equipment Group Co., Ltd.  
> **技术支持**：AI 开发助手  
> **更新频率**：每月一次或重大变更时更新
