import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import icon from "astro-icon";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  integrations: [icon(), mdx(), tailwind({
    applyBaseStyles: false
  }), compress(), vue()]
});