import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import webVitals from "@astrojs/web-vitals";

import db from "@astrojs/db";

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), webVitals(), db()],
  output: 'hybrid',
  adapter: cloudflare()
});
