// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://ssp6904.github.io',
    output: 'static',
    compressHTML: false,
    trailingSlash: 'never',
    server: {
        host: true,
        port: 8000
    },
    devToolbar: {
        enabled: false
    },
    vite: {
        plugins: [tailwindcss()],
    },
    build: {
        format: 'file'
    }
});