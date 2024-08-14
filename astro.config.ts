import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import keystaticAstro from '@keystatic/astro';
import tailwindcss from '@tailwindcss/vite';
import AutoImport from 'astro-auto-import';
import expressiveCode from 'astro-expressive-code';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import AutoImports from 'unplugin-auto-import/astro';
import Icons from 'unplugin-icons/vite';
import { sidebarData } from './src/data/sidebar-data';
import { remarkReadingTime } from './src/utils/readTime';
import cloudflare from "@astrojs/cloudflare";
import node from "@astrojs/node";
import markdoc from "@astrojs/markdoc";


// https://astro.build/config
export default defineConfig({
  site: 'http://devopsick.com/',
  output: 'hybrid',
  vite: {
    build: {
      cssMinify: 'lightningcss'
    },
    plugins: [tailwindcss(), Icons({
      compiler: 'astro'
    })]
  },
  prefetch: {
    prefetchAll: true
  },
  integrations: [starlight({
    title: 'My Docs',
    customCss: ['./src/styles/tailwind.css', './src/styles/headings.css'],
    sidebar: sidebarData,
    social: {
      github: 'https://github.com/Frikadellios'
    },
    components: {}
  }), AutoImports({
    defaultExportByFilename: false,
    include: [/\.[tj]sx?$/ // .ts, .tsx, .js, .jsx
    ],
    packagePresets: ['detect-browser-es'],
    imports: ['react', 'react-router'],
    dirs: ['./src/utils/*.ts', './src/hooks'],
    dts: './src/auto-imports.d.ts'
  }), keystaticAstro(), react(), sitemap(), AutoImport({
    imports: [{
      '@astrojs/starlight/components': ['Card', 'CardGrid']
    }]
  }), robotsTxt({
    sitemap: 'https://www.devopsick.com/sitemap-0.xml',
    host: 'devopsick.com'
  }), partytown({
    config: {
      forward: ['dataLayer.push'],
      debug: false
    }
  }), expressiveCode(), mdx(), markdoc()],
  markdown: {
    rehypePlugins: [rehypeHeadingIds, [rehypeAutolinkHeadings, {
      behavior: 'wrap'
    }], [rehypeExternalLinks, {
      content: {
        type: 'text',
        value: ' 🔗'
      },
      target: '_blank',
      rel: ['nofollow', 'noreferrer']
    }]],
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true
    },
    gfm: true
  },
  adapter: cloudflare()
});