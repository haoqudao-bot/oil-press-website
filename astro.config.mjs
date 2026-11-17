import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { execSync } from 'node:child_process';

// ─── sitemap lastmod: 从 git log 取每个文件最后 commit 日期 ───
// Cloudflare Pages 需要在 Dashboard 设 CF_PAGES_GIT_DEPTH=0 才能拿到完整历史
const GIT_ROOT = process.cwd();

// 一次算好所有 src/ 下 md/astro 文件 → 最后 commit 日期的映射
const fileDateMap = (() => {
  const map = new Map();
  try {
    const output = execSync('git ls-files src/', { encoding: 'utf8', timeout: 10000 });
    const files = output.split('\n').filter(f =>
      f.trim() && (f.endsWith('.md') || f.endsWith('.astro'))
    );
    for (const file of files) {
      try {
        const date = execSync(
          `git log -1 --format=%ai -- "${file}"`,
          { encoding: 'utf8', timeout: 3000 }
        ).trim();
        if (date) map.set(file, date.slice(0, 10));
      } catch { /* 文件没 commit 过，跳过 */ }
    }
    console.log(`[sitemap-lastmod] ${map.size} files mapped from git log`);
  } catch (err) {
    console.warn('[sitemap-lastmod] git ls-files failed, no lastmod will be set:', err.message);
  }
  return map;
})();

// 把 sitemap 的 URL 反推到可能的 git 文件路径（按优先级）
function urlToRelFileCandidates(itemUrl) {
  const pathname = new URL(itemUrl).pathname; // '/products/cold-press-hydraulic-oil-press/'
  let cleanPath = pathname.replace(/\/$/, '');
  const noLocale = cleanPath.replace(/^\/(fr|ar|id)/, '');

  // content collections: /products/xxx → src/content/products/xxx.md
  const contentMap = {
    '/products': 'src/content/products',
    '/solutions': 'src/content/solutions',
    '/resources': 'src/content/resources',
    '/categories': 'src/content/categories',
  };
  for (const [urlPrefix, contentDir] of Object.entries(contentMap)) {
    if (noLocale.startsWith(urlPrefix + '/')) {
      const slug = noLocale.slice(urlPrefix.length + 1);
      return [`${contentDir}/${slug}.md`];
    }
  }

  // 静态 .astro 页面候选列表
  const candidates = [];
  if (noLocale === '') {
    candidates.push('src/pages/index.astro');
  } else {
    candidates.push(`src/pages${noLocale}.astro`);
    candidates.push(`src/pages${noLocale}/index.astro`);
  }
  // [locale] 动态路由的静态页版本
  if (cleanPath !== noLocale) {
    candidates.push(`src/pages${cleanPath}.astro`);
    candidates.push(`src/pages${cleanPath}/index.astro`);
    candidates.push(`src/pages/[locale]${noLocale}.astro`);
    candidates.push(`src/pages/[locale]${noLocale}/index.astro`);
  }
  return candidates;
}

export default defineConfig({
  site: 'https://www.hydoilpress.com',
  trailingSlash: 'always',
  devToolbar: {
    enabled: false,
  },
  integrations: [
    tailwind(),
    sitemap({
      // 广告落地页、404 和法律页（privacy-policy / terms-of-service / cookie-policy 均设 noindex, nofollow）不进 sitemap
      filter: (page) => !/\/(ads|404|privacy-policy|terms-of-service|cookie-policy)(\/|$)/.test(page),
      // lastmod: 优先用 git log 算的真实文件更新日期，找不到就不写（让 Google 自己判断）
      serialize(item) {
        const candidates = urlToRelFileCandidates(item.url);
        for (const candidate of candidates) {
          if (fileDateMap.has(candidate)) {
            return { ...item, lastmod: fileDateMap.get(candidate) };
          }
        }
        return item;
      },
      // 输出 xhtml:link hreflang 标注，提升多语言页面索引率
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          fr: 'fr',
          ar: 'ar',
          id: 'id',
        },
      },
    }),
  ],
  markdown: {
    rehypePlugins: [
      // 给所有 markdown 渲染出的 <img> 注入懒加载（修复 solutions 正文图无 lazy 的遗漏）
      () => (tree) => {
        const visit = (node) => {
          if (node.tagName === 'img') {
            node.properties.loading = node.properties.loading || 'lazy';
            node.properties.decoding = 'async';
          }
          (node.children || []).forEach(visit);
        };
        visit(tree);
      },
    ],
  },
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
