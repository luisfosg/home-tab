import { $, addEvent } from '@/util/domElements'

const settings = $('#settings')

addEvent($('#settings-btn'), 'click', function () {
  settings.classList.add('visible')
  settings.classList.remove('invisible')
})
