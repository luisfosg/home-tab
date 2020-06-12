import { useState, useEffect } from 'react'

import { setStorage, getStorage } from '@/services/storage'
import { APIBG, maxTime, defaultBg, defaultQuery } from '@/config.json'

const useBackground = () => {
  const [bg, setBg] = useState({ res: defaultBg })

  useEffect(() => {
    const $wallpaper = document.getElementById('wallpaper')
    const URL = bg.img || bg.res.urls.regular.replace('1080', '1440')

    $wallpaper.style = `
      background: url('${URL}') center center no-repeat;
      background-size: cover;
    `
  }, [bg])

  const getQuery = () => {
    const queryStorage = getStorage('query')
    if (!queryStorage) setStorage('query', defaultQuery)

    return queryStorage || defaultQuery
  }

  const getAPI = (newQuery) => {
    const query = getQuery()

    return APIBG.replace('{query}', newQuery || query)
  }

  const verifyBg = () => {
    const ownBG = getStorage('ownBg')
    if (ownBG) return setBg({ img: ownBG })

    const wallpaperBG = getStorage('wallpaper')
    const pin = getStorage('pin')
    const time = getStorage('time')

    const hasWallpaper = wallpaperBG && !wallpaperBG.errors
    const isPin = hasWallpaper && pin
    if (isPin) return setBg({ res: wallpaperBG })

    const pasTime = Date.now() - time
    const isValidBg = hasWallpaper && pasTime < maxTime
    if (isValidBg) return setBg({ res: wallpaperBG })

    return true
  }

  const updateWallpaper = async () => {
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
      newWallpaper = defaultBg
    }

    setStorage('wallpaper', newWallpaper)
    setStorage('time', Date.now())
    setBg({ res: newWallpaper })
  }

  return {
    updateWallpaper
  }
}

export default useBackground
