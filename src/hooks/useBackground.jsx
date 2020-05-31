/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import { useState } from 'react'

import { setStorage, getStorage } from '@/services/storage'
import { APIBG, maxTime, defaultBg, defaultQuery } from '@/config.json'

const useBackground = () => {
  const [wallpaper, setBackground] = useState('../../assets/default.jpg')

  const getQuery = () => {
    const queryStorage = getStorage('query')
    if (!queryStorage) setStorage('query', defaultQuery)

    return queryStorage || defaultQuery
  }

  const apliWallpaper = async ({ res, img }) => {
    const $wallpaper = document.getElementById('wallpaper')

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

  const getAPI_wallpaper = (newQuery) => {
    const query = getQuery()

    return APIBG.replace('{query}', newQuery || query)
  }

  const verifyBg = () => {
    const bg = getStorage('ownBg')
    if (bg) return apliWallpaper({ img: bg })

    const wallpaperBG = getStorage('wallpaper')
    const pin = getStorage('pin')
    const time = getStorage('time')

    const hasWallpaper = wallpaperBG && !wallpaperBG.errors
    const isPin = hasWallpaper && pin
    if (isPin) return apliWallpaper({ res: wallpaperBG })

    const pasTime = Date.now() - time
    const isValidBg = hasWallpaper && pasTime < maxTime
    if (isValidBg) return apliWallpaper({ res: wallpaperBG })

    return true
  }

  const getNewWallpaper = async () => {
    const existBg = verifyBg()
    if (typeof existBg === 'object') return

    let newWallpaper

    try {
      const API = getAPI_wallpaper()

      const data = await window.fetch(API.replace('{{api}}', import.meta.env.VITE_UNSPLASH_KEY))
      newWallpaper = await data.json()

      if (newWallpaper.errors) throw new Error(newWallpaper.errors)
    } catch (error) {
      console.log(error)

      defaultBg.urls.regular = wallpaper
      newWallpaper = defaultBg
    }

    setStorage('wallpaper', newWallpaper)
    setStorage('time', Date.now())
    apliWallpaper({ res: newWallpaper })
  }

  return {
    getNewWallpaper
  }
}

export default useBackground
