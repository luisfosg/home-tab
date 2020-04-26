import { $, addEvent } from '@/util/domElements'
import { capitalize } from '@/util'

import { defaultSearchEngine, searchEngine } from '@/config.json'

const $input = $('#search_input')

function urlify (text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g

  if (text.includes(' ')) return [false, text]
  if (urlRegex.test(text)) return [true, text]

  return text.includes('.')
    ? [true, `https://${text}`]
    : [false, text]
}

const searchQuery = (e) => {
  e.preventDefault()

  const query = $input.value.trim()
  const [isURL, newURL] = urlify(query)

  isURL
    ? window.location.href = newURL
    : window.location.href = searchEngine[defaultSearchEngine].replace('{{query}}', query)

  e.target.reset()
}

addEvent($('#search'), 'submit', searchQuery)
$input.placeholder = `Busca en ${capitalize(defaultSearchEngine)} o escribe una URL`
