// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://kennethknudsen.github.io',
  base: '/highsoft-shop-prototype',
  integrations: [react()]
});
