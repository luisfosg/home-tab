import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import { createHtmlPlugin } from 'vite-plugin-html'

import { resolve as resolvePath } from 'path'

import manifest from './src/manifest.json'

const resolve = {
  alias: {
    '#': resolvePath(__dirname, './'),
    '@': resolvePath(__dirname, './src'),
    '@icons': resolvePath(__dirname, './src/components/Icons')
  }
}

const plugins = [
  react()
]

export default defineConfig(({ command, mode, ssrBuild }) => {
  console.log(command, mode, ssrBuild)

  if (mode === 'production') {
    plugins.push(
      crx({
        manifest
      }),
      createHtmlPlugin({
        minify: true
      })
    )
  }

  return {
    publicDir: 'assets',
    plugins,
    css: {
      postcss: './postcss.config.js'
    },
    resolve
  }
})
