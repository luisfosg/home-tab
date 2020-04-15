import { $, addEvent } from '@/util/domElements'
import { LOADING } from '@/util/elements'

import { getQuery, configQuery } from '@/functions/query'
import { showAlert } from '@/functions/alert'

const $settings = $('#settings')
export let isActiveSettings = false

/* Inputs */
const $inputQuery = $('#query-bg')

export const changeVisibility = () => {
  $settings.classList.toggle('visible')
  $settings.classList.toggle('invisible')

  isActiveSettings = !!$settings.classList.contains('visible')
  if (isActiveSettings) setInitialValues()
}

const setInitialValues = () => {
  const queryBg = getQuery()
  $inputQuery.value = queryBg
}

const setFinalValues = () => {}

const saveConfig = async () => {
  const $saveButton = $('#save_config')
  $saveButton.disabled = true
  $saveButton.innerHTML = LOADING

  setFinalValues()
  const isValid = await configQuery($inputQuery.value)

  $saveButton.disabled = false
  $saveButton.innerHTML = 'Guardar Cambios'

  if (!isValid) {
    return showAlert({
      error: true,
      title: 'Error al Guardar los Ajustes',
      msg: 'No se encontro ninguna coincidencia para el tema seleccionado'
    })
  }

  return showAlert({
    title: 'Ajustes Guardados Correctamente',
    msg: 'Los cambios serán aplicados automaticamente'
  })
}

addEvent($('#settings_btn'), 'click', changeVisibility)
addEvent($('#close_modal'), 'click', changeVisibility)
addEvent($('#save_config'), 'click', saveConfig)

addEvent(window, 'click', (e) => {
  if (e.target === $settings) changeVisibility()
})
