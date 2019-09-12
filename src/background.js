import { $ } from './domElements'

const API = 'https://api.unsplash.com/photos/random/?client_id={{api}}&orientation=landscape&&query=cold'

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
  try {
    const data = await window.fetch(API.replace('{{api}}', import.meta.env.VITE_UNSPLASH_KEY))
    const res = await data.json()
    apliWallpaper(res)
  } catch (error) {
    console.log(error)
  }
}
