import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { resolve as resolvePath } from 'path'

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
    react()
  ],
  css: {
    postcss: './postcss.config.js'
  },
  resolve
})
