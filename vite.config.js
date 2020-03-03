import { defineConfig } from 'vite'
import { minifyHtml } from 'vite-plugin-html'
import { chromeExtension } from 'vite-plugin-chrome-extension'

import { resolve } from 'path'

export default defineConfig(() => {
  if (process.env.VITE_EXTENSION) {
    return {
      plugins: [
        minifyHtml(),
        chromeExtension()
      ],
      resolve: {
        alias: {
          '@': resolve(__dirname, './src')
        }
      },
      build: {
        rollupOptions: {
          input: 'manifest.json'
        }
      }
    }
  }

  return {
    plugins: [
      minifyHtml()
    ],
    resolve: {
      alias: {
        '#': resolve(__dirname, './'),
        '@': resolve(__dirname, './src')
      }
    }
  }
})
