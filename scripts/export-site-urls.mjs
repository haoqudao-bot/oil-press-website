// ─── 导出主站所有公开页面 URL → 看板项目的 site-urls.json ───
// 用法：node scripts/export-site-urls.mjs
// 运行完会把结果写到 ../seo-dashboard/data/site-urls.json
// 主站新增页面/博客/产品后再跑一次即可

import { readdirSync, writeFileSync, mkdirSync, statSync } from 'node:fs';
import { join, resolve, dirname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const SITE = 'https://www.hydoilpress.com';
const LOCALES = ['en', 'fr', 'ar', 'id'];

// 目标输出路径（seo-dashboard 项目下）
const OUTPUT_DIR = resolve(ROOT, '..', 'seo-dashboard', 'data');
const OUTPUT_FILE = join(OUTPUT_DIR, 'site-urls.json');

const pages = [];

function slugify(name) {
  return name.replace(/\.astro$/, '').replace(/\.md$/, '');
}

// Windows 路径分隔符统一转成 /
function toUrlPath(p) {
  return p.split(sep).join('/');
}

function addPage(path, type, title = '') {
  const url = SITE + path;
  const locale = path.startsWith('/fr/') ? 'fr'
             : path.startsWith('/ar/') ? 'ar'
             : path.startsWith('/id/') ? 'id'
             : 'en';
  pages.push({ url, path, type, locale, title });
}

// ─── 1. 扫描 src/content/ —— 产品、解决方案、资源（博客）、分类 ───
const contentMap = [
  { dir: 'src/content/products',   urlPrefix: '/products',   type: 'product' },
  { dir: 'src/content/solutions',   urlPrefix: '/solutions',   type: 'solution' },
  { dir: 'src/content/resources',   urlPrefix: '/resources',   type: 'resource' },
  { dir: 'src/content/categories', urlPrefix: '/categories', type: 'category' },
];

for (const { dir, urlPrefix, type } of contentMap) {
  const fullDir = join(ROOT, dir);
  let files;
  try {
    files = readdirSync(fullDir).filter(f => f.endsWith('.md'));
  } catch {
    continue;
  }
  for (const file of files) {
    const slug = slugify(file);
    addPage(`${urlPrefix}/${slug}/`, type, slug);
  }
}

// ─── 2. 扫描 src/pages/ —— 静态 .astro 页面 ───
const pagesDir = join(ROOT, 'src', 'pages');

function walkPages(dir, prefix = '') {
  let files;
  try {
    files = readdirSync(dir);
  } catch {
    return;
  }
  for (const file of files) {
    if (file === '.DS_Store') continue;
    const fullPath = join(dir, file);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      walkPages(fullPath, join(prefix, file));
    } else if (file.endsWith('.astro')) {
      const slug = slugify(file);
      if (slug === '404') continue;
      if (prefix.includes('ads')) continue;
      if (prefix.includes('[locale]')) continue;

      if (slug === 'index') {
        if (prefix === '') {
          addPage('/', 'page', 'home');
        } else {
          addPage(`/${toUrlPath(prefix)}/`, 'page', toUrlPath(prefix));
        }
      } else {
        if (prefix === '') {
          addPage(`/${slug}/`, 'page', slug);
        } else {
          addPage(`/${toUrlPath(prefix)}/${slug}/`, 'page', `${toUrlPath(prefix)}/${slug}`);
        }
      }
    }
  }
}
walkPages(pagesDir);

// ─── 3. 处理 [locale] 动态路由 —— 多语言版本 ───
const localeDir = join(pagesDir, '[locale]');
try {
  const localeDirFiles = readdirSync(localeDir);
  if (localeDirFiles.length > 0) {
    function walkLocale(dir, prefix = '') {
      const files = readdirSync(dir);
      for (const file of files) {
        if (file === '.DS_Store') continue;
        const fullPath = join(dir, file);
        const stat = statSync(fullPath);
        if (stat.isDirectory()) {
          walkLocale(fullPath, join(prefix, file));
        } else if (file.endsWith('.astro')) {
          const slug = slugify(file);
          if (slug === '404' || slug === 'index') continue;
          for (const locale of LOCALES) {
            const seg = prefix ? `${toUrlPath(prefix)}/${slug}` : slug;
            addPage(`/${locale}/${seg}/`, 'page', `${seg} (${locale})`);
          }
        }
      }
    }
    walkLocale(localeDir);
  }
} catch {
  // [locale] 目录不存在
}

// ─── 4. 核心市场（GSC 里有真实 URL，这里补个兜底） ───
const markets = ['nigeria', 'kenya', 'south-africa', 'ghana', 'india', 'malaysia', 'indonesia'];
for (const market of markets) {
  addPage(`/markets/${market}/`, 'market', `Market: ${market}`);
}

// ─── 去重 + 排序 ───
const seen = new Set();
const unique = pages.filter(p => {
  if (seen.has(p.url)) return false;
  seen.add(p.url);
  return true;
}).sort((a, b) => a.url.localeCompare(b.url));

// ─── 输出 ───
mkdirSync(OUTPUT_DIR, { recursive: true });
const output = {
  generatedAt: new Date().toISOString(),
  site: SITE,
  totalPages: unique.length,
  byType: unique.reduce((acc, p) => {
    acc[p.type] = (acc[p.type] || 0) + 1;
    return acc;
  }, {}),
  pages: unique,
};
writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2), 'utf8');
console.log(`✅ 导出完成：${unique.length} 个页面`);
console.log(`   产品 ${output.byType.product || 0} · 资源 ${output.byType.resource || 0} · 解决方案 ${output.byType.solution || 0}`);
console.log(`   市场 ${output.byType.market || 0} · 其他 ${output.byType.page || 0}`);
console.log(`   → ${OUTPUT_FILE}`);
