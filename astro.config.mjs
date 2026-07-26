import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.hydoilpress.com',
  devToolbar: {
    enabled: false,
  },
  integrations: [tailwind(), sitemap()],
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
