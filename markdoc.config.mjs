// markdoc.config.mjs
import { defineMarkdocConfig, nodes } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
  nodes: {
    link: {
      ...nodes.link,
      render: component('./src/components/MarkdocLink.astro'),
    },
  },
});
