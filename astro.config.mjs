// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), keystatic()],
  output: 'server',
  adapter: netlify({
    edgeMiddleware: false,
    devFeatures: {
      edgeFunctions: false,
      imageCDN: false,
      blobs: false,
    },
  }),
  vite: {
    plugins: [tailwindcss()]
  }
});