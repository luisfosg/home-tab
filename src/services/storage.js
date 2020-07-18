import { searchEngine } from '@/config.json'

const STORAGE_VALUES = {
  QUERY: 'query',
  WALLPAPER: 'wallpaper',
  OWN_BG: 'ownBg',
  PIN: 'pin',
  TIME: 'time',

  DEFAULT_SEARCH_ENGINE: 'defaultSearchEngine',
  SEARCHS_ENGINE: 'searchsEngine'
}

const sendError = () => {
  console.error('Storage name not found')
}

export const setStorageSearch = (nameSelect, value) => {
  const [name, select] = nameSelect.split('.')

  for (const key in STORAGE_VALUES) {
    if (STORAGE_VALUES[key] === name) {
      const data = getStorage(name) || searchEngine
      data[select] = value

      setStorage(name, data)
      return
    }
  }
}

export const setStorage = (name, value) => {
  for (const key in STORAGE_VALUES) {
    if (STORAGE_VALUES[key] === name) {
      window.localStorage.setItem(name, JSON.stringify(value))
      return
    }
  }

  sendError()
}

export const getStorage = (name) => {
  for (const key in STORAGE_VALUES) {
    if (STORAGE_VALUES[key] === name) {
      return JSON.parse(window.localStorage.getItem(name)) || null
    }
  }

  sendError()
}

export const deleteStorageSearch = (nameSelect) => {
  const [name, select] = nameSelect.split('.')

  for (const key in STORAGE_VALUES) {
    if (STORAGE_VALUES[key] === name) {
      const data = getStorage(name) || searchEngine
      delete data[select]

      setStorage(name, data)
      return
    }
  }
}

export const deleteStorage = (name) => {
  for (const key in STORAGE_VALUES) {
    if (STORAGE_VALUES[key] === name) {
      window.localStorage.removeItem(name)
      return
    }
  }

  sendError()
}
