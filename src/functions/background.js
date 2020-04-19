import { $ } from '@/util/domElements'
import { setStorage, getStorage } from '@/util/storage'

import { getQuery } from '@/functions/query'
import { refreshPins } from '@/functions/pin'

import { APIBG, maxTime, defaultBg } from '@/config.json'
import img from '#/assets/default.jpg'

export const getAPI = (newQuery) => {
  const query = getQuery()

  return APIBG.replace('{query}', newQuery || query)
}

const apliWallpaper = async ({ res, img }) => {
  const $wallpaper = $('#wallpaper')

  if (img) {
    $wallpaper.style = `background: url('${img}') center center no-repeat;background-size: cover;`
    return
  }

  const {
    urls: { regular }
  } = res

  $wallpaper.style = `
    background: url('${regular.replace('1080', '1440')}') center center no-repeat;
    background-size: cover;
  `
}

const verifyBg = () => {
  const bg = getStorage('ownBg')
  if (bg) return apliWallpaper({ img: bg })

  const wallpaper = getStorage('wallpaper')
  const pin = getStorage('pin')
  const time = getStorage('time')

  const hasWallpaper = wallpaper && !wallpaper.errors
  const isPin = hasWallpaper && pin
  if (isPin) return apliWallpaper({ res: wallpaper })

  const pasTime = Date.now() - time
  const isValidBg = hasWallpaper && pasTime < maxTime
  if (isValidBg) return apliWallpaper({ res: wallpaper })

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
  apliWallpaper({ res: newWallpaper })
}

export const ownWallpaper = () => {
  const $ownBg = $('#own-bg')
  if ($ownBg.files.length > 0) {
    const blobURL = $ownBg.files[0]

    const reader = new window.FileReader()

    reader.onload = (function (_theFile) {
      return function (e) {
        setStorage('ownBg', e.target.result)
        apliWallpaper({ img: e.target.result })
        refreshPins()
      }
    })(blobURL)

    reader.readAsDataURL(blobURL)
  }
}
