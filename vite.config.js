import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'

import { resolve as resolvePath } from 'path'

import manifest from './src/manifest.json'

const resolve = {
  alias: {
    '#': resolvePath(__dirname, './'),
    '@': resolvePath(__dirname, './src'),
    '@icons': resolvePath(__dirname, './src/components/Icons')
  }
}

export default defineConfig({
  publicDir: 'assets',
  plugins: [
    react(),
    crx({
      manifest
    })
  ],
  css: {
    postcss: './postcss.config.js'
  },
  resolve
})
