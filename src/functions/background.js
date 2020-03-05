import { $ } from '@/util/domElements'
import { setStorage, getStorage } from '@/util/storage'

import { APIBG, defaultQuery, maxTime, defaultBg } from '@/config.json'
import img from '#/assets/default.jpg'

const getAPI = () => {
  const queryStorage = getStorage('query')
  const query = queryStorage || defaultQuery

  return APIBG.replace('{query}', query)
}

const apliWallpaper = async (res) => {
  const {
    urls: { regular }
  } = res

  const wallpaper = $('#wallpaper')

  wallpaper.style = `
    background: url('${regular.replace('1080', '1440')}') center center no-repeat;
    background-size: cover;
  `
}

const verifyBg = () => {
  const wallpaper = getStorage('wallpaper')
  const pin = getStorage('pin')
  const time = getStorage('time')

  const hasWallpaper = wallpaper && !wallpaper.errors
  const isPin = hasWallpaper && pin
  if (isPin) return apliWallpaper(wallpaper)

  const pasTime = Date.now() - time
  const isValidBg = hasWallpaper && pasTime < maxTime
  if (isValidBg) return apliWallpaper(wallpaper)

  return true
}

export const getWallpaper = async () => {
  const existBg = verifyBg()
  if (typeof existBg === 'object') return

  let newWallpaper

  try {
    const API = getAPI()

    const data = await window.fetch(API.replace('{{api}}', import.meta.env.VITE_UNSPLASH_KEY))
    newWallpaper = await data.json()

    if (newWallpaper.errors) throw new Error(newWallpaper.errors)
  } catch (error) {
    console.log(error)

    defaultBg.urls.regular = img
    newWallpaper = defaultBg
  }

  setStorage('wallpaper', newWallpaper)
  setStorage('time', Date.now())
  apliWallpaper(newWallpaper)
}
