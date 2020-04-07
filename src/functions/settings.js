import { $, addEvent } from '@/util/domElements'
import { setStorage } from '@/util/storage'
import { waitFor } from '@/util'

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

const saveConfig = async () => {
  setStorage('query', inputQuery.value)
  const alert = $('#alert')

  alert.classList.remove('hidden')
  await waitFor(1100)
  alert.classList.add('hidden')
  await waitFor(200)
  changeVisibility()
}

addEvent($('#settings_btn'), 'click', changeVisibility)
addEvent($('#close_modal'), 'click', changeVisibility)
addEvent($('#save_config'), 'click', saveConfig)

addEvent(window, 'click', (e) => {
  if (e.target === settings) changeVisibility()
})
