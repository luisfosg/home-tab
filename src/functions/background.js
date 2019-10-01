import { $ } from '@/util/domElements'
import { saveLocalStorage, getLocalStorage } from '@/util'

import { queryBg, maxTime } from '@/config.json'

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
  const hasWallpaper = getLocalStorage('wallpaper')
  const time = getLocalStorage('time')

  const pasTime = Date.now() - time
  if (hasWallpaper && pasTime < maxTime) return apliWallpaper(hasWallpaper)

  try {
    const data = await window.fetch(API.replace('{{api}}', import.meta.env.VITE_UNSPLASH_KEY))
    const res = await data.json()

    saveLocalStorage('wallpaper', res)
    saveLocalStorage('time', Date.now())
    apliWallpaper(res)
  } catch (error) {
    console.log(error)
  }
}
