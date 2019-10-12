import { defineConfig } from 'vite'

import { minifyHtml } from 'vite-plugin-html'

import { resolve } from 'path'

export default defineConfig({
  plugins: [
    minifyHtml()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
