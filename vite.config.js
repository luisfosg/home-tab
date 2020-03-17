import { defineConfig } from 'vite'
import { minifyHtml } from 'vite-plugin-html'
import { chromeExtension } from 'vite-plugin-chrome-extension'

import { resolve as resolvePath } from 'path'

import pugPlugin from './src/feat/pug'

const samePlugins = [
  pugPlugin(),
  minifyHtml()
]

const resolve = {
  alias: {
    '#': resolvePath(__dirname, './'),
    '@': resolvePath(__dirname, './src')
  }
}

export default defineConfig(() => {
  if (process.env.VITE_EXTENSION) {
    return {
      plugins: [
        ...samePlugins,
        chromeExtension()
      ],
      build: {
        rollupOptions: {
          input: 'manifest.json'
        }
      },
      resolve
    }
  }

  return {
    plugins: [...samePlugins],
    resolve
  }
})
