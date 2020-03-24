import { defineConfig } from 'vite'
import { minifyHtml } from 'vite-plugin-html'
import copy from 'rollup-plugin-copy'

import { resolve as resolvePath } from 'path'

import pugPlugin from './src/pug'

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

const css = {
  postcss: './postcss.config.js'
}

export default defineConfig(() => {
  if (process.env.VITE_EXTENSION) {
    return {
      plugins: [
        ...samePlugins,
        copy({
          hook: 'writeBundle',
          targets: [
            { src: ['./manifest.json', './src/extension'], dest: './dist' }
          ]
        })
      ],
      resolve,
      css
    }
  }

  return {
    plugins: [...samePlugins],
    resolve,
    css
  }
})
