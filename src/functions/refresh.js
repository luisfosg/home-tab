import { getWallpaper } from '@/functions/background'

import { $, addEvent } from '@/util/domElements'
import { deleteStorage } from '@/util/storage'

const $btnRefresh = $('#refresh')

export const isVisiblePinRefresh = (isActive) => {
  $btnRefresh.style.display = isActive ? 'block' : 'none'
}

addEvent($btnRefresh, 'click', () => {
  deleteStorage('time')
  getWallpaper()
})
