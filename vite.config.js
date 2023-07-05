// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
// import Markdown from 'vite-plugin-md'
// import code from '@yankeeinlondon/code-builder'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: './docs',
    publicDir: './public',
  },
  plugins: [
    vue({ 
      template: { transformAssetUrls },
      include: [/\.vue$/, /\.md$/,/\.html$/],
    }),
    // Markdown(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
  ],
  rules:{},
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
      '.md',
    ],
  },
  server: {
    port: 3000,
  },
})
