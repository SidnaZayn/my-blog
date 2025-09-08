import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import icon from "astro-icon";
import vue from "@astrojs/vue";
import netlify from "@astrojs/netlify";

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  server:{port:3000, host:true},
  compressHTML: true,
  output: 'server',
  adapter: netlify(),
  integrations: [icon(), tailwind({
    applyBaseStyles: false
  }), compress(), vue(), mdx()]
});