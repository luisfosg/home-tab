import { $ } from '@/util/domElements'
import { setStorage, getStorage } from '@/util'

import { queryBg, maxTime, defaultBg } from '@/config.json'

const API = `https://api.unsplash.com/photos/random/?client_id={{api}}&orientation=landscape&&query=${queryBg}`

const apliWallpaper = async (res) => {
  const {
    /* user: {
      links: { html: link_profile },
      first_name,
      location
    }, */
    urls: { regular }
  } = res

  const wallpaper = $('#wallpaper')

  wallpaper.style = `
    background: url('${regular.replace('1080', '1440')}') center center no-repeat;
    background-size: cover;
  `
}

export const getWallpaper = async () => {
  const hasWallpaper = getStorage('wallpaper')
  const time = getStorage('time')

  const pasTime = Date.now() - time
  const isValidBg = (hasWallpaper && !hasWallpaper.errors) && pasTime < maxTime
  if (isValidBg) return apliWallpaper(hasWallpaper)

  let res

  try {
    const data = await window.fetch(API.replace('{{api}}', import.meta.env.VITE_UNSPLASH_KEY))
    res = await data.json()

    if (res.errors) throw new Error(res.errors)
  } catch (error) {
    console.log(error)
    res = defaultBg
  }

  setStorage('wallpaper', res)
  setStorage('time', Date.now())
  apliWallpaper(res)
}
