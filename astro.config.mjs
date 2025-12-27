// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';

import react from '@astrojs/react';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [mdx(), sitemap(), vue(), react()],
    vite: {
        resolve: {
            alias: [
                { find: /^#src\/(.*)/, replacement: `${fileURLToPath(new URL('./src', import.meta.url))}/$1` },
                { find: '#src', replacement: fileURLToPath(new URL('./src', import.meta.url)) }
            ]
        }
    }
});