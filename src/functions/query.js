import { setStorage, getStorage } from '@/util/storage'

import { getAPI } from '@/functions/background'

import { defaultQuery } from '@/config.json'

export const getQuery = () => {
  const queryStorage = getStorage('query')

  if (!queryStorage) setStorage('query', defaultQuery)

  return queryStorage || defaultQuery
}

export const configQuery = async (newValue) => {
  const query = getQuery()

  if (query !== newValue) {
    const API = getAPI(newValue)

    const data = await window.fetch(API.replace('{{api}}', import.meta.env.VITE_UNSPLASH_KEY))
    const newWallpaper = await data.json()
    if (newWallpaper.errors) return false

    setStorage('wallpaper', newWallpaper)
    setStorage('time', Date.now())
    setStorage('query', newValue)
  }

  return true
}
