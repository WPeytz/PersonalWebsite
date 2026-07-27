import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.williampeytz.com',
  redirects: {
    '/resume': '/about#cv',
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    sitemap({
      customPages: ['https://www.williampeytz.com/agentarena/'],
    }),
  ],
});
