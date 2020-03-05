import { $, addEvent } from '@/util/domElements'

const settings = $('#settings')

const changeVisibility = () => {
  settings.classList.toggle('visible')
  settings.classList.toggle('invisible')
}

addEvent($('#settings-btn'), 'click', changeVisibility)
addEvent($('#close_modal'), 'click', changeVisibility)

addEvent(window, 'click', (e) => {
  if (e.target === settings) changeVisibility()
})
