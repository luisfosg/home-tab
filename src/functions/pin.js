import { isVisiblePinRefresh } from '@/functions/refresh'

import { $, addEvent } from '@/util/domElements'
import { PIN_ACTIVE, PIN_DEACTIVE } from '@/util/elements'
import { getStorage, setStorage } from '@/util/storage'

const $pinIcon = $('#pin_bg')
export let ownPin = false

export const refreshPins = () => {
  const pin = getStorage('pin')
  const isOwnBg = getStorage('ownBg')
  isOwnBg ? ownPin = true : ownPin = false

  if (ownPin) {
    $pinIcon.classList.add('hidden')
    isVisiblePinRefresh(false)
  } else {
    $pinIcon.classList.remove('hidden')
    pin
      ? $pinIcon.innerHTML = PIN_ACTIVE
      : $pinIcon.innerHTML = PIN_DEACTIVE

    isVisiblePinRefresh(!pin)
  }
}

addEvent($pinIcon, 'click', function () {
  const pin = getStorage('pin')
  const newPin = pin ? !pin : true

  setStorage('pin', newPin)
  refreshPins(newPin)
})
