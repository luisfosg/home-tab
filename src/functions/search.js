import { $, $$, addEvent } from '@/util/domElements'
import { getStorage, setStorage } from '@/util/storage'
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

export const updateInputSearch = () => {
  const storageSearchEngine = getStorage('defaultSearchEngine')
  $input.placeholder = `Busca en ${capitalize(storageSearchEngine || defaultSearchEngine)} o escribe una URL`
}

const searchQuery = (e) => {
  e.preventDefault()
  const storageSearchEngine = getStorage('defaultSearchEngine')
  if (!storageSearchEngine) setStorage('defaultSearchEngine', defaultSearchEngine)

  const query = $input.value.trim()
  const [isURL, newURL] = urlify(query)

  const savedSearchEngine = getStorage('searchsEngine')
  const useSearchEngine = savedSearchEngine || searchEngine

  isURL
    ? window.location.href = newURL
    : window.location.href = useSearchEngine[storageSearchEngine || defaultSearchEngine].replace('{{query}}', query)

  e.target.reset()
}

export const loadSearchEngine = () => {
  const $searchsEngine = $('#search-engine-container')

  const savedSearchEngine = getStorage('searchsEngine')
  const storageSearchEngine = getStorage('defaultSearchEngine')
  const useSearchEngine = savedSearchEngine || searchEngine

  $searchsEngine.innerHTML = ''
  for (const [name, url] of Object.entries(useSearchEngine)) {
    const isChecked = (storageSearchEngine || defaultSearchEngine) === name
    $searchsEngine.innerHTML += `
      <label class="ml-2 mt-2 cursor-pointer">
        <input class="accent-slate-800 cursor-pointer" type="radio" value="${name}" name="search-engine" ${isChecked && 'checked'}>
        <span class="select-none">${capitalize(name)}</span>
        <input id="url-search-engine" name="${capitalize(name)}" class="px-4 py-2 ml-3 text-lg rounded shadow-sm outline-none appearance-none bg-slate-600/50 md:text-xl h-8 hover:bg-gray-600/80" placeholder="${capitalize(name)} - Search Engine" value="${url}">
      </label>
    `
  }

  setStorage('searchsEngine', useSearchEngine)
}

export const saveSearchEngine = (newSearchEngine) => {
  const savedSearchEngine = getStorage('searchsEngine')

  if (savedSearchEngine[newSearchEngine]) {
    setStorage('defaultSearchEngine', newSearchEngine)
    updateInputSearch()
  }

  const inputs = $$('#url-search-engine')
  const lastSearchEngine = getStorage('searchsEngine')

  inputs.forEach(input => {
    const newValue = input.value.startsWith('https://') || input.value.startsWith('http://') ? input.value : `https://${input.value}`
    if (newValue.includes(' ') || !newValue.includes('.')) return
    lastSearchEngine[input.name] = newValue
  })

  setStorage('searchsEngine', lastSearchEngine)
}

addEvent($('#search'), 'submit', searchQuery)
updateInputSearch()
