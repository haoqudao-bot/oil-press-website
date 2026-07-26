---
name: "b2b-website-builder"
description: "Builds complete multi-language B2B company websites using Astro + Tailwind CSS. Invoke when user wants to create a new B2B website with products, solutions, resources, and multi-language support."
---

# B2B Website Builder Skill

## Overview

This skill automates the creation of professional B2B company websites based on the proven development process used for the Haonuo Machinery hydraulic oil press website. It covers the entire development lifecycle from requirements analysis to deployment, with standardized templates, code examples, and quality assurance checks.

## Information Input Specification

### Required Inputs

```yaml
company:
  name: "Company Name"
  legalName: "Full Legal Company Name"
  tagline: "Short brand slogan"
  description: "Company description (1-2 paragraphs)"
  foundingYear: "2010"
  employeeCount: 200
  address:
    locality: "City"
    region: "Province/State"
    country: "Country"
  contact:
    phone: "+86-xxx-xxxxxxx"
    email: "contact@company.com"
    whatsapp: "+86-xxx-xxxxxxx"
    wechat: "wechat_id"
  website: "https://www.company.com"

products:
  - name:
      en: "Product Name"
      fr: "Nom du produit"
      ar: "اسم المنتج"
      id: "Nama Produk"
    model: "Model Number"
    category: "category-slug"
    description:
      en: "Product description"
      fr: "Description du produit"
      ar: "وصف المنتج"
      id: "Deskripsi produk"
    images: ["/images/products/product1.jpg"]
    specifications:
      - name: "Parameter Name"
        value: "Value"
    specificationsFr: []
    specificationsAr: []
    specificationsId: []
    featured: true
    related: ["other-product-slug"]
    applicableSeeds: ["seed1", "seed2"]
    applicableSeedsFr: []
    applicableSeedsAr: []
    applicableSeedsId: []
    faq: []
    videoUrl: ""
    seoKeywords: ["keyword1", "keyword2"]

categories:
  - name:
      en: "Category Name"
      fr: "Nom de catégorie"
      ar: "اسم الفئة"
      id: "Nama Kategori"
    slug: "category-slug"
    icon: "icon-name"
    description:
      en: "Category description"
      fr: "Description de catégorie"
      ar: "وصف الفئة"
      id: "Deskripsi kategori"
    order: 1

solutions:
  - title:
      en: "Solution Title"
      fr: "Titre de solution"
      ar: "عنوان الحل"
      id: "Judul Solusi"
    seedName: "seed-name"
    icon: "icon-name"
    description:
      en: "Solution description"
      fr: "Description de solution"
      ar: "وصف الحل"
      id: "Deskripsi solusi"
    recommendedProducts: ["product-slug"]
    processSteps: []
    faq: []
    seoKeywords: []
    order: 1

resources:
  - title:
      en: "Article Title"
      fr: "Titre d'article"
      ar: "عنوان المقالة"
      id: "Judul Artikel"
    type: "guide"
    description:
      en: "Article description"
      fr: "Description d'article"
      ar: "وصف المقالة"
      id: "Deskripsi artikel"
    publishedAt: "2026-01-01"
    seoKeywords: []

brand:
  colors:
    primary: "#E8A838"
    secondary: "#1B3A5C"
    accent: "#f59e0b"
    background: "#F4F5F7"
    text: "#1f2937"
    textSecondary: "#4b5563"
    border: "#e5e7eb"
    success: "#10b981"
    warning: "#f59e0b"
    error: "#ef4444"
  fonts:
    heading: "Bebas Neue"
    body: "Inter"
  logo: "/images/logo.png"
  favicon: "/favicon.svg"

languages:
  - code: "en"
    name: "English"
    nameNative: "English"
    rtl: false
    locale: "en-US"
  - code: "fr"
    name: "French"
    nameNative: "Français"
    rtl: false
    locale: "fr-FR"
  - code: "ar"
    name: "Arabic"
    nameNative: "العربية"
    rtl: true
    locale: "ar-SA"
  - code: "id"
    name: "Indonesian"
    nameNative: "Bahasa Indonesia"
    rtl: false
    locale: "id-ID"

features:
  chatWidget: true
  cookieConsent: true
  sitemap: true
  seo: true
  printCatalog: true
  productComparison: true
  roiCalculator: true
  breadcrumb: true
  newsletter: false

social:
  linkedin: "https://linkedin.com/company/name"
  facebook: "https://facebook.com/name"
  youtube: "https://youtube.com/channel/name"
  twitter: "https://twitter.com/name"

analytics:
  googleAnalytics: "G-XXXXXXXXXX"
  googleSearchConsole: true
```

## Standard Development Steps

### Phase 1: Requirements Analysis

**Step 1.1: Define Project Scope**
- Identify target audience (B2B buyers, regions, languages)
- List core products and categories
- Define required pages (Home, Products, Solutions, Resources, About, Contact, Catalog)
- Identify compliance requirements (GDPR, SEO, legal disclaimers, accessibility)
- Document success metrics (page views, conversion rate, bounce rate)

**Step 1.2: Content Inventory**
- Create content matrix for all pages and languages
- Identify data sources (product specs, images, company info)
- Plan content organization (Content Collections structure)
- Define content ownership and approval workflow

**Step 1.3: Stakeholder Alignment**
- Document brand guidelines and tone of voice
- Confirm design preferences (colors, fonts, layout style)
- Define technical constraints (hosting, budget, timeline)

### Phase 2: Architecture Design

**Step 2.1: Technical Architecture**
- Framework: Astro 5.x (static site generation)
- UI Framework: React 18 (for interactive components)
- Styling: Tailwind CSS 3.x + CSS Variables
- Multi-language: Astro i18n + JSON translation files
- Deployment: Vercel / Netlify / Cloudflare Pages
- Analytics: Google Analytics 4
- SEO: Schema.org, sitemap.xml, canonical URLs

**Step 2.2: Project Structure**
```
src/
├── components/        # Reusable components
│   ├── Navbar.astro
│   ├── Footer.astro
│   ├── Breadcrumb.astro
│   ├── ChatWidget.tsx
│   ├── CookieConsentBanner.astro
│   └── ProductCard.astro
├── content/           # Content Collections
│   ├── products/      # Product markdown files
│   ├── categories/    # Category definitions
│   ├── solutions/     # Solution pages
│   ├── resources/     # Articles/guides
│   └── config.ts      # Schema definitions
├── data/              # Static data files
│   └── modelToSlug.ts # Product model to slug mapping
├── layouts/           # Page layouts
│   ├── BaseLayout.astro
│   └── ProductLayout.astro
├── pages/             # Page routes
│   ├── [locale]/      # Multi-language routes
│   ├── products/      # Product pages
│   ├── solutions/     # Solution pages
│   ├── resources/     # Resource pages
│   ├── markets/       # Market-specific pages
│   ├── catalog.astro  # Print catalog
│   └── index.astro    # Homepage
├── i18n/              # Translation files
│   ├── en.json
│   ├── fr.json
│   ├── ar.json
│   ├── id.json
│   └── index.ts
├── styles/            # Global styles
│   └── global.css
└── utils/             # Utility functions
    └── seo.ts         # SEO helper functions
```

**Step 2.3: Routing Strategy**
- Default locale at root (`/`)
- Other locales at `/fr/`, `/ar/`, `/id/`
- Dynamic routes: `/products/[slug]`, `/solutions/[slug]`, `/resources/[slug]`
- Market-specific pages: `/markets/[market]`
- Static pages: `/about`, `/contact`, `/catalog`, `/roi-calculator`

**Step 2.4: Data Models**

**Product Schema** (content/products/*.md):
```yaml
---
title:
  en: "Standard Hydraulic Oil Press"
  fr: "Presse à huile hydraulique standard"
  ar: "مكبس زيت هيدروليكي قياسي"
  id: "Mesin Press Minyak Hidrolik Standar"
description:
  en: "Professional hydraulic oil press for various oil seeds"
  fr: "Presse à huile hydraulique professionnelle pour diverses graines"
  ar: "مكبس زيت هيدروليكي احترافي لمختلف أنواع البذور"
  id: "Mesin press minyak hidrolik profesional untuk berbagai biji-bijian"
category: "hydraulic-oil-press"
model: "HN325"
images:
  - "/images/products/standard-hydraulic-oil-press.webp"
specifications:
  - name: "Capacity"
    value: "100 kg/batch"
  - name: "Power"
    value: "5.5 kW"
  - name: "Dimensions"
    value: "1500 x 800 x 1800 mm"
specificationsFr: []
specificationsAr: []
specificationsId: []
featured: true
related: ["high-pressure-hydraulic-oil-press"]
applicableSeeds: ["sesame", "peanut", "coconut"]
applicableSeedsFr: []
applicableSeedsAr: []
applicableSeedsId: []
faq:
  - question: "What is the production time per batch?"
    answer: "Approximately 35-45 minutes per batch"
faqFr: []
faqAr: []
faqId: []
videoUrl: ""
seoKeywords: ["hydraulic oil press", "oil press machine"]
updatedAt: 2026-07-01
---
```

**Category Schema** (content/categories/*.md):
```yaml
---
name:
  en: "Hydraulic Oil Presses"
  fr: "Presses à huile hydrauliques"
  ar: "مكابس الزيت الهيدروليكي"
  id: "Mesin Press Minyak Hidrolik"
icon: "oil-press"
description:
  en: "Professional hydraulic oil press machines"
  fr: "Machines de presse à huile hydraulique professionnelles"
  ar: "مكابس زيت هيدروليكي احترافية"
  id: "Mesin press minyak hidrolik profesional"
order: 1
---
```

**Solution Schema** (content/solutions/*.md):
```yaml
---
title:
  en: "Peanut Oil Pressing Solution"
  fr: "Solution de pressage d'huile d'arachide"
  ar: "حل ضغط زيت الفول السوداني"
  id: "Solusi Press Minyak Kacang Tanah"
seedName: "peanut"
icon: "peanut"
description:
  en: "Complete peanut oil production solution"
  fr: "Solution complète de production d'huile d'arachide"
  ar: "حل إنتاج زيت الفول السوداني الكامل"
  id: "Solusi produksi minyak kacang tanah lengkap"
recommendedProducts: ["standard-hydraulic-oil-press"]
processSteps:
  - step: "Step 1"
    description: "Seed cleaning and preparation"
processStepsFr: []
processStepsAr: []
processStepsId: []
faq: []
seoKeywords: ["peanut oil press", "groundnut oil"]
order: 1
---
```

### Phase 3: Technical Setup

**Step 3.1: Initialize Project**
```bash
npm create astro@latest . -- --template basics
npm install @astrojs/react @astrojs/tailwind @astrojs/sitemap
npm install react react-dom lucide-react
npm install sharp typescript -D
```

**Step 3.2: Configure Astro** (`astro.config.mjs`):
```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.company.com',
  integrations: [react(), tailwind(), sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'ar', 'id'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});
```

**Step 3.3: Configure Tailwind CSS** (`tailwind.config.js`):
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#E8A838',
          secondary: '#1B3A5C',
          accent: '#f59e0b',
        },
        steel: {
          50: '#f4f5f7',
          100: '#e5e7eb',
          200: '#d1d5db',
          600: '#4b5563',
          700: '#374151',
        },
        charcoal: {
          900: '#1f2937',
        },
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

**Step 3.4: Configure Content Collections** (`src/content/config.ts`):
```typescript
import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.object({
      en: z.string(),
      fr: z.string(),
      ar: z.string(),
      id: z.string(),
    }),
    description: z.object({
      en: z.string(),
      fr: z.string(),
      ar: z.string(),
      id: z.string(),
    }).optional(),
    category: z.string(),
    model: z.string(),
    images: z.array(z.string()),
    specifications: z.array(z.object({ name: z.string(), value: z.string() })),
    specificationsFr: z.array(z.object({ name: z.string(), value: z.string() })).default([]),
    specificationsAr: z.array(z.object({ name: z.string(), value: z.string() })).default([]),
    specificationsId: z.array(z.object({ name: z.string(), value: z.string() })).default([]),
    featured: z.boolean().default(false),
    related: z.array(z.string()).default([]),
    applicableSeeds: z.array(z.string()).default([]),
    applicableSeedsFr: z.array(z.string()).default([]),
    applicableSeedsAr: z.array(z.string()).default([]),
    applicableSeedsId: z.array(z.string()).default([]),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    faqFr: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    faqAr: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    faqId: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    videoUrl: z.string().default(''),
    seoKeywords: z.array(z.string()).default([]),
    updatedAt: z.date().default(() => new Date()),
  }),
});

const categories = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.object({ en: z.string(), fr: z.string(), ar: z.string(), id: z.string() }),
    icon: z.string(),
    description: z.object({ en: z.string(), fr: z.string(), ar: z.string(), id: z.string() }),
    order: z.number().default(99),
  }),
});

const solutions = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.object({ en: z.string(), fr: z.string(), ar: z.string(), id: z.string() }),
    seedName: z.string(),
    icon: z.string(),
    description: z.object({ en: z.string(), fr: z.string(), ar: z.string(), id: z.string() }),
    recommendedProducts: z.array(z.string()).default([]),
    processSteps: z.array(z.object({ step: z.string(), description: z.string() })).default([]),
    processStepsFr: z.array(z.object({ step: z.string(), description: z.string() })).default([]),
    processStepsAr: z.array(z.object({ step: z.string(), description: z.string() })).default([]),
    processStepsId: z.array(z.object({ step: z.string(), description: z.string() })).default([]),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    faqFr: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    faqAr: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    faqId: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    seoKeywords: z.array(z.string()).default([]),
    order: z.number().default(99),
  }),
});

const resources = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.object({ en: z.string(), fr: z.string(), ar: z.string(), id: z.string() }),
    type: z.enum(['comparison', 'guide', 'blog', 'news']).default('guide'),
    description: z.object({ en: z.string(), fr: z.string(), ar: z.string(), id: z.string() }),
    publishedAt: z.date().default(() => new Date()),
    seoKeywords: z.array(z.string()).default([]),
  }),
});

export const collections = { products, categories, solutions, resources };
```

**Step 3.5: Configure i18n** (`src/i18n/index.ts`):
```typescript
import en from './en.json';
import fr from './fr.json';
import ar from './ar.json';
import id from './id.json';

const translations = { en, fr, ar, id } as const;

export type Locale = keyof typeof translations;
export const defaultLocale: Locale = 'en';
export const locales: Locale[] = ['en', 'fr', 'ar', 'id'];

export function getTranslations(locale: Locale) {
  return translations[locale] || translations[defaultLocale];
}

export function isRtl(locale: Locale): boolean {
  return locale === 'ar';
}

export function getLocaleLabel(locale: Locale): string {
  const labels: Record<Locale, string> = {
    en: 'English',
    fr: 'Français',
    ar: 'العربية',
    id: 'Bahasa Indonesia',
  };
  return labels[locale];
}
```

### Phase 4: Page Development

**Step 4.1: Create Base Layout** (`src/layouts/BaseLayout.astro`)
```astro
---
import { type Locale, getTranslations, isRtl } from '../i18n';
import Navbar from '../components/Navbar.astro';
import Footer from '../components/Footer.astro';
import ChatWidget from '../components/ChatWidget.tsx';
import CookieConsentBanner from '../components/CookieConsentBanner.astro';
import '../styles/global.css';

interface Props {
  title?: string;
  description?: string;
  keywords?: string[];
  jsonLd?: object;
  locale?: string;
  ogImage?: string;
}

const { title, description, keywords, jsonLd, locale = 'en', ogImage } = Astro.props;
const currentLocale = locale as Locale;
const t = getTranslations(currentLocale);
const rtl = isRtl(currentLocale);

const brandSuffix = ' | Company Name';
const maxTitleLen = 60;
let pageTitle = title
  ? `${title.length > maxTitleLen - brandSuffix.length 
      ? title.substring(0, maxTitleLen - brandSuffix.length - 1) + '…' 
      : title}${brandSuffix}`
  : (t as any).common?.defaultTitle || 'Company Name - Industry Leader';

const defaultDesc = (t as any).common?.defaultDesc || 'Professional manufacturer since 2010';
const maxDescLen = 160;
let pageDesc = description
  ? (description.length > maxDescLen ? description.substring(0, maxDescLen - 1) + '…' : description)
  : defaultDesc;

const pageKeywords = keywords || ['product', 'industry', 'manufacturer'];
const canonicalUrl = `https://www.company.com${Astro.url.pathname}`;
const pageOgImage = ogImage || 'https://www.company.com/images/og-default.webp';
---

<!DOCTYPE html>
<html lang={currentLocale} dir={rtl ? 'rtl' : 'ltr'}>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />
  <meta name="description" content={pageDesc} />
  <meta name="keywords" content={pageKeywords.join(', ')} />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDesc} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content={pageOgImage} />
  <meta property="og:url" content={canonicalUrl} />
  <link rel="canonical" href={canonicalUrl} />
  <title>{pageTitle}</title>
  {jsonLd && <script type="application/ld+json" set:html={JSON.stringify(jsonLd)} />}
</head>
<body class="min-h-screen flex flex-col font-body">
  <Navbar locale={currentLocale} />
  <main class="flex-1">
    <slot />
  </main>
  <Footer locale={currentLocale} />
  <ChatWidget client:load locale={currentLocale} />
  <CookieConsentBanner locale={currentLocale} />
</body>
</html>
```

**Step 4.2: Develop Homepage** (`src/pages/index.astro`)
- Hero section with CTA button and background image
- Core company advantages (4-6 items with icons)
- Product category navigation with icons
- Featured products grid (4-6 items)
- Solutions by production scale (small, commercial, industrial)
- Market highlights or testimonials
- CTA section for inquiries

**Step 4.3: Develop Product Pages**
- **Product List** (`src/pages/products/index.astro`): Category filtering, grid layout, search
- **Product Detail** (`src/pages/products/[slug].astro`):
  - Image gallery with multiple images
  - Technical specifications table
  - Applicable materials/seeds tags
  - FAQ accordion section
  - Related products carousel
  - Inquiry CTA button
  - Product schema markup

**Step 4.4: Develop Solution Pages**
- **Solution Hub** (`src/pages/solutions/index.astro`): Browse by type/scale
- **Solution Detail** (`src/pages/solutions/[slug].astro`):
  - Solution overview
  - Step-by-step process guide
  - Recommended products
  - FAQ section

**Step 4.5: Develop Resource Pages**
- **Resource List** (`src/pages/resources/index.astro`): Filter by type, pagination
- **Resource Detail** (`src/pages/resources/[slug].astro`):
  - Article content with proper formatting
  - HowTo schema markup for guides
  - Related resources

**Step 4.6: Develop About Page** (`src/pages/about.astro`)
- Company overview with key metrics
- Factory photos gallery
- Services section
- Team or history timeline
- Certifications and achievements

**Step 4.7: Develop Contact Page** (`src/pages/contact.astro`)
- Inquiry form (name, email, country, company, message)
- Contact information (phone, email, WhatsApp)
- Office map or address
- Chat widget integration

**Step 4.8: Develop Catalog Page** (`src/pages/catalog.astro`)
- Product list organized by category
- Print-optimized layout
- @media print styles
- Print button

### Phase 5: Multi-language Implementation

**Step 5.1: Translation File Structure** (`src/i18n/en.json`):
```json
{
  "nav": {
    "home": "Home",
    "products": "Products",
    "solutions": "Solutions",
    "resources": "Resources",
    "about": "About",
    "contact": "Contact",
    "catalog": "Catalog"
  },
  "footer": {
    "companyName": "Company Name",
    "companyDesc": "Professional manufacturer",
    "quickLinks": "Quick Links",
    "contact": "Contact"
  },
  "common": {
    "defaultTitle": "Company Name - Industry Leader",
    "defaultDesc": "Professional manufacturer since 2010",
    "cta": "Get a Quote",
    "learnMore": "Learn More",
    "contactUs": "Contact Us"
  }
}
```

**Step 5.2: Implement Language Switching**
- Language selector in Navbar component
- URL-based routing with locale prefix
- hreflang tags in BaseLayout for SEO
- RTL layout support with CSS direction property

**Step 5.3: Localization Best Practices**
- Use `t()` function for all user-visible text
- Store translations in JSON files per language
- Handle RTL layout with CSS `[dir="rtl"]` selectors
- Use locale-specific date formatting
- Maintain consistent key structure across languages

### Phase 6: Feature Implementation

**Step 6.1: SEO Optimization**
- **Meta Tags**: Title (< 60 chars), Description (< 160 chars)
- **Schema.org**: Organization, Product, HowTo, Article markup
- **Sitemap**: Auto-generated via @astrojs/sitemap
- **Canonical URLs**: Prevent duplicate content
- **hreflang Tags**: Language/region targeting
- **Image Optimization**: WebP format, alt text, responsive sizes

**Step 6.2: Interactive Components**
- **Chat Widget**: WhatsApp/WeChat floating button
- **Cookie Consent**: GDPR-compliant banner
- **Scroll Reveal**: IntersectionObserver animations
- **Product Comparison**: Side-by-side comparison tool
- **ROI Calculator**: Investment return calculator with disclaimers

**Step 6.3: Print Catalog**
- Dedicated catalog page with all products
- @media print styles in global.css
- .no-print class for UI elements
- Optimized font sizes and margins
- Page numbering and headers

**Step 6.4: Analytics and Tracking**
- Google Analytics 4 integration
- Google Search Console verification
- Event tracking for form submissions
- Page view tracking across languages

### Phase 7: Testing and Optimization

**Step 7.1: Functional Testing**
- Navigation across all pages
- Language switching functionality
- Form submission and validation
- Responsive design (desktop, tablet, mobile)
- RTL layout for Arabic
- Browser compatibility (Chrome, Firefox, Safari, Edge)

**Step 7.2: Content Validation**
- All text elements translated
- No hard-coded English in non-English pages
- Consistent terminology across languages
- Valid Markdown formatting
- No absolute/extreme claims (best, unmatched, world-class)

**Step 7.3: Performance Optimization**
- Image optimization (WebP format, sharp for resizing)
- Lazy loading for images and components
- Font optimization (preload, font-display: swap)
- CSS/JS minification via Vite
- Critical CSS inlining

**Step 7.4: SEO Audit**
- Page titles and meta descriptions length
- hreflang tags validation
- Schema markup validation (Google Rich Results Test)
- Broken link checking
- Mobile-friendliness test

**Step 7.5: Build Verification**
```bash
npm run build
```
- Ensure all pages build successfully
- Check for console errors
- Validate sitemap generation
- Test deployed site

## Quality Control Standards

### Code Quality
- Astro `<style>` tags default to scoped; use `is:global` for global styles
- TypeScript for type safety in utility functions
- Consistent naming conventions (kebab-case for files, camelCase for variables)
- No hard-coded text in components
- ESLint/Prettier for code formatting

### Content Quality
- All user-visible text must be translated using `t()` function
- No absolute/extreme claims (best, unmatched, world-class)
- No unsubstantiated certifications or testimonials
- Legal disclaimers for ROI calculations and pricing
- Consistent terminology across all languages

### Performance
- Lighthouse score > 90
- Page load time < 2s (mobile)
- Image optimization applied to all images
- Critical CSS inlined above the fold

### SEO Compliance
- Proper meta tags on all pages
- Schema.org markup present
- sitemap.xml generated with correct URLs
- hreflang tags for all language versions

### Accessibility
- Contrast ratio >= 4.5:1 for text
- Semantic HTML elements (header, nav, main, footer)
- Alt text for all images
- Focus management for keyboard navigation
- ARIA attributes where needed

### Security
- No API keys or secrets in client-side code
- Form validation to prevent injection attacks
- HTTPS for all pages
- XSS protection via Astro's template escaping

## Customization Options

### Basic Customization
- Brand colors (primary, secondary, accent)
- Font selection (heading, body)
- Logo and favicon
- Contact information
- Social media links
- Analytics configuration

### Advanced Customization
- Additional languages (add to i18n config)
- Custom page templates
- Product comparison tool
- ROI calculator with custom formulas
- Interactive product configurator
- Blog/news section with content management
- Video gallery
- Customer portal or login system

### Layout Customization
- Hero section style (carousel, single image, video)
- Product card layout (grid, list, masonry)
- Navigation style (fixed, floating, mega-menu)
- Footer layout (simple, multi-column)
- Color theme (light, dark, custom)

## Deployment Checklist

- [ ] Build succeeds without errors (`npm run build`)
- [ ] All pages render correctly
- [ ] Language switching works across all pages
- [ ] SEO meta tags are correct on all pages
- [ ] Schema markup is valid (test with Google Rich Results)
- [ ] sitemap.xml is generated with correct URLs
- [ ] Images are optimized (WebP format)
- [ ] Forms are functional and submit correctly
- [ ] Responsive design tested on mobile/tablet/desktop
- [ ] Browser compatibility verified
- [ ] Analytics tracking is working
- [ ] Cookie consent banner displays correctly
- [ ] Chat widget is functional
- [ ] Print catalog works correctly
- [ ] SSL certificate is installed
- [ ] Domain is properly configured
- [ ] 404 page exists and is user-friendly

## Development Tools and Utilities

### Data Validation Scripts
- `scripts/check-i18n-keys.js`: Validate translation file key consistency
- `scripts/check-product-content.js`: Check product data completeness
- `scripts/check-market-content.js`: Validate market page content

### Content Generation Scripts
- `scripts/translate.js`: Auto-translate content using AI
- `scripts/convert-docx.mjs`: Convert DOCX documents to Markdown
- `scripts/extract-images.mjs`: Extract images from documents

### SEO Tools
- Google Search Console
- Google Analytics 4
- Lighthouse
- Schema.org Validator

## Maintenance and Updates

### Content Updates
- Add new products in `src/content/products/`
- Add new solutions in `src/content/solutions/`
- Update translations in `src/i18n/*.json`

### Code Updates
- Update Astro and dependencies regularly
- Monitor for security vulnerabilities
- Test updates in development environment first

### Performance Monitoring
- Regular Lighthouse audits
- Monitor Core Web Vitals
- Optimize images and assets

## Lessons Learned

### Architecture
- Astro `<style>` tags are scoped by default; use `is:global` for global styles
- Dev server long-running sessions cause cache issues; restart when needed
- Use native Koa middleware instead of koa-connect wrapper

### Multi-language
- Translation files must have consistent key counts across all languages
- Arabic content needs proper RTL handling with CSS
- Date formatting must be locale-aware
- Product links must use slug mapping, not model numbers

### Content
- Excessive content similarity across pages risks Google penalties
- Focus on customer outcomes, not just company strengths
- Tables improve readability for technical data
- Flowcharts improve process documentation

### Legal
- Remove unsubstantiated claims and certifications
- Use "Contact for pricing" instead of specific prices
- Include proper disclaimers for ROI calculations
- GDPR-compliant cookie consent is required for EU users

### Print Styles
- Use global `.no-print` class strategy in global.css
- Avoid `page-break-before: always` for categories
- Reduce padding/margin for print optimization
- Test across multiple browsers and printers

### Performance
- Astro's SSG provides excellent performance out of the box
- Image optimization is critical for mobile performance
- Font preloading improves perceived performance
- Lazy loading for offscreen content

## Usage Example

**User Input:**
"I need to create a website for my company ABC Machinery that sells industrial pumps. We need English and Spanish versions. Include product catalog, solutions section, and contact form."

**Skill Execution:**
1. Extract company info, products, categories from user input
2. Initialize Astro project with i18n config (en, es)
3. Create base layout with SEO and schema markup
4. Develop all required pages (Home, Products, Solutions, Resources, About, Contact, Catalog)
5. Implement Spanish translations
6. Add contact form and chat widget
7. Test and optimize (Lighthouse, SEO audit)
8. Provide build output and deployment instructions

**Expected Output:**
- Complete Astro project with all pages
- Multi-language support (English, Spanish)
- SEO-optimized pages with schema markup
- Functional contact form and chat widget
- Print catalog page
- Build verification report

## Troubleshooting Guide

### Common Issues

**1. Astro build fails with content collection errors**
- Check `src/content/config.ts` for schema validation errors
- Ensure all Markdown files have valid frontmatter
- Run `npm run astro check` for type checking

**2. Language switching not working**
- Verify i18n configuration in `astro.config.mjs`
- Check `src/i18n/index.ts` for correct locale imports
- Ensure translation files exist for all configured languages

**3. Print preview showing UI elements**
- Add `.no-print` class to UI components
- Use global CSS in `src/styles/global.css` for @media print
- Avoid scoped styles for print media queries

**4. RTL layout issues**
- Add `[dir="rtl"]` CSS selectors for Arabic-specific styles
- Flip flexbox directions for RTL
- Adjust text alignment and padding

**5. SEO meta tags not updating**
- Check BaseLayout.astro for title/description logic
- Verify page props are passed correctly
- Clear browser cache to see updates

**6. Image optimization not working**
- Install sharp dependency (`npm install sharp -D`)
- Use WebP format for images
- Add width/height attributes to img tags

## Resources

### Documentation
- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Schema.org Documentation](https://schema.org/docs/)
- [Google Search Central](https://developers.google.com/search)

### Tools
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [WebP Converter](https://developers.google.com/speed/webp/)

### Community
- [Astro Discord](https://astro.build/chat)
- [Tailwind CSS Discord](https://tailwindcss.com/discord)
