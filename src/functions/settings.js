import { $, addEvent } from '@/util/domElements'

addEvent($('#settings'), 'click', function () {
  window.alert('hi!')
})
