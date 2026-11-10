import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

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
      // 补充 lastmod（取构建日期），便于搜索引擎评估内容新鲜度
      serialize(item) {
        return { ...item, lastmod: new Date().toISOString().slice(0, 10) };
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
