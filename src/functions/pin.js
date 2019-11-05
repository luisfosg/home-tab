import { $, addEvent } from '@/util/domElements'
import { getStorage, setStorage } from '@/util'

addEvent($('#pinBg'), 'click', function () {
  const pin = getStorage('pin')
  setStorage('pin', pin ? !pin : true)
})
