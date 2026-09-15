import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.hydoilpress.com',
  devToolbar: {
    enabled: false,
  },
  integrations: [
    tailwind(),
    sitemap({
      // 广告落地页（noindex）和 404 页面不进 sitemap
      filter: (page) => !/\/(ads|404)(\/|$)/.test(page),
    }),
  ],
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
