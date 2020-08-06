import { searchEngine } from '@/config.json'

const STORAGE_VALUES = [
  'query', 'wallpaper', 'ownBg', 'pin',
  'time', 'defaultSearchEngine', 'searchsEngine'
]

const sendError = () => {
  console.error('Storage name not found')
}

export const deleteAllStorage = () => {
  window.localStorage.clear()
}

export const setStorage = (name, value) => {
  if (!STORAGE_VALUES.includes(name)) return sendError()

  window.localStorage.setItem(name, JSON.stringify(value))
}

export const getStorage = (name) => {
  if (!STORAGE_VALUES.includes(name)) return sendError()

  return JSON.parse(window.localStorage.getItem(name)) || null
}

export const setStorageSearch = (nameSelect, value) => {
  const [name, select] = nameSelect.split('.')
  if (!STORAGE_VALUES.includes(name)) return sendError()

  const data = getStorage(name) || searchEngine
  data[select] = value

  setStorage(name, data)
}

export const deleteStorageSearch = (nameSelect) => {
  const [name, select] = nameSelect.split('.')
  if (!STORAGE_VALUES.includes(name)) return sendError()

  const data = getStorage(name) || searchEngine
  delete data[select]

  setStorage(name, data)
}

export const deleteStorage = (name) => {
  if (!STORAGE_VALUES.includes(name)) return sendError()

  window.localStorage.removeItem(name)
}
