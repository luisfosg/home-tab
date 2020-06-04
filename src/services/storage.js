const STORAGE_VALUES = {
  QUERY: 'query',
  WALPAPER: 'walpaper',
  OWN_BG: 'ownBg',
  PIN: 'pin',
  TIME: 'time',

  DEFAULT_SEARCH_ENGINE: 'defaultSearchEngine',
  SEARCHS_ENGINE: 'searchsEngine'
}

export const setStorage = (name, value) => {
  for (const key in STORAGE_VALUES) {
    if (STORAGE_VALUES[key] === name) {
      window.localStorage.setItem(name, JSON.stringify(value))
    }
  }
}

export const getStorage = (name) => {
  const value = window.localStorage.getItem(name)

  try {
    return value ? JSON.parse(value) : null
  } catch (error) {
    return null
  }
}

export const deleteStorage = (name) => {
  window.localStorage.removeItem(name)
}
