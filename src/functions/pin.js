import { $, addEvent } from '@/util/domElements'
import { PIN_ACTIVE, PIN_DEACTIVE } from '@/util/elements'
import { getStorage, setStorage } from '@/util'

const pinIcon = $('#pinBg')

const updatePin = (pin) => {
  pin
    ? pinIcon.innerHTML = PIN_ACTIVE
    : pinIcon.innerHTML = PIN_DEACTIVE
}

addEvent(pinIcon, 'click', function () {
  const pin = getStorage('pin')
  const newPin = pin ? !pin : true

  setStorage('pin', newPin)
  updatePin(newPin)
})

export const onLoadPin = () => {
  const pin = getStorage('pin')
  updatePin(pin)
}