import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import webVitals from "@astrojs/web-vitals";

import db from "@astrojs/db";

import cloudflare from '@astrojs/cloudflare';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://brandovidal.dev',
  integrations: [tailwind(), webVitals(), db(), sitemap()],
  output: 'hybrid',
  adapter: cloudflare()
});
