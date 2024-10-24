import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import webVitals from "@astrojs/web-vitals";

import db from "@astrojs/db";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), webVitals(), db()],
  output: 'hybrid',
  adapter: node({
    mode: "standalone"
  })
});
