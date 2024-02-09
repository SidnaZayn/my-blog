import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import icon from "astro-icon";
import vue from "@astrojs/vue";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  server:{port:3000, host:true},
  compressHTML: true,
  output: 'server',
  adapter: netlify(),
  integrations: [icon(), mdx(), tailwind({
    applyBaseStyles: false
  }), compress(), vue()]
});