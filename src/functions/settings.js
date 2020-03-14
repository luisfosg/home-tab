import { $, addEvent } from '@/util/domElements'

import { getQuery } from '@/functions/query'

const settings = $('#settings')
export let isActiveSettings = false

/* Inputs */
const inputQuery = $('#query-bg')

const changeVisibility = () => {
  settings.classList.toggle('visible')
  settings.classList.toggle('invisible')

  isActiveSettings = !!settings.classList.contains('visible')
  if (isActiveSettings) setValues()
}

const setValues = () => {
  const queryBg = getQuery()
  inputQuery.value = queryBg
}

addEvent($('#settings-btn'), 'click', changeVisibility)
addEvent($('#close_modal'), 'click', changeVisibility)

addEvent(window, 'click', (e) => {
  if (e.target === settings) changeVisibility()
})
