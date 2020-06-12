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

export const deleteStorage = (name) => {
  for (const key in STORAGE_VALUES) {
    if (STORAGE_VALUES[key] === name) {
      window.localStorage.removeItem(name)
      return
    }
  }

  sendError()
}
