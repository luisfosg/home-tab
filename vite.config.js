import { defineConfig } from 'vite'

import { minifyHtml } from 'vite-plugin-html'
import pugPlugin from 'vite-plugin-pug'

import { resolve } from 'path'

export default defineConfig({
  plugins: [
    minifyHtml(),
    pugPlugin()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
