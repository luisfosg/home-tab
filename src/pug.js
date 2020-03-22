import { compileFile } from 'pug'
import { join } from 'path'

const compile = (filepath) => compileFile(filepath)()

const compilePug = (filename, htmlFile) => {
  const filedir = htmlFile.replace(/(.*)[\\\/].*\.html$/, '$1') // eslint-disable-line
  const filepath = join(filedir, filename)

  return compile(filepath)
}

function pugsFiles (html, htmlFile) {
  return html.replace(/<pug.+?(src)="(.+?)".*?\/.*?>/gi, (_tag, _attr, filename) => {
    return compilePug(filename, htmlFile)
  })
}

const pugPlugin = () => {
  return {
    name: 'vite-plugin-pug',

    handleHotUpdate ({ file, server }) {
      const filename = file.replace(/^.*[\\\/]/, '') // eslint-disable-line

      if (filename.endsWith('.pug')) {
        server.config.logger.info(`${filename} Editado :D`)
        server.ws.send({
          type: 'full-reload'
        })
      }
    },
    transformIndexHtml: {
      enforce: 'pre',
      transform (html, { filename: htmlFile }) {
        return pugsFiles(html, htmlFile)
      }
    }
  }
}

export default pugPlugin
