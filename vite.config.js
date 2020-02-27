import { defineConfig } from 'vite'
import { minifyHtml } from 'vite-plugin-html'

import { resolve } from 'path'

export default defineConfig(() => {
  if (process.env.VITE_EXTENSION) {
    return {
      plugins: [
        minifyHtml()
      ],
      resolve: {
        alias: {
          '@': resolve(__dirname, './src')
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
        '@': resolve(__dirname, './src')
      }
    }
  }
})
