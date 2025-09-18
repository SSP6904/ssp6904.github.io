// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const port = 8000
const domain = import.meta.env.PROD ? 'https://ssp6904.github.io' : `http://localhost:${port}`

// https://astro.build/config
export default defineConfig({
    site: domain,
    output: 'static',
    compressHTML: false,
    trailingSlash: 'never',
    server: {
        host: true,
        port: port
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
