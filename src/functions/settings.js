import { $, addEvent } from '@/util/domElements'
import { getStorage, deleteStorage } from '@/util/storage'
import { LOADING } from '@/util/elements'

import { ownWallpaper, getWallpaper } from '@/functions/background'
import { refreshPins } from '@/functions/pin'
import { getQuery, configQuery } from '@/functions/query'
import { showAlert } from '@/functions/alert'

const $settings = $('#settings')
export let isActiveSettings = false

/* Inputs */
const $inputQuery = $('#query-bg')
const $ownBg = $('#own-bg')

export const changeVisibility = () => {
  $settings.classList.toggle('visible')
  $settings.classList.toggle('invisible')

  isActiveSettings = !!$settings.classList.contains('visible')
  if (isActiveSettings) setInitialValues()
}

const setInitialValues = () => {
  const ownBg = getStorage('ownBg')
  const $textOwnBg = $('#text-own-bg')
  const $themeBgConfig = $('#theme-bg-config')

  ownBg ? $textOwnBg.textContent = 'Ya tienes tu propia Imagen: ' : $textOwnBg.textContent = 'Subir mi propia imagen: '
  ownBg ? $ownBg.classList.add('hidden') : $ownBg.classList.remove('hidden')
  ownBg ? $themeBgConfig.classList.add('hidden') : $themeBgConfig.classList.remove('hidden')

  const $deleteOwnBg = $('#delete-own-bg')
  if (ownBg) {
    $deleteOwnBg.classList.remove('hidden')

    addEvent($deleteOwnBg, 'click', () => {
      deleteStorage('ownBg')
      setInitialValues()
      refreshPins()
      getWallpaper()
      refreshPins()
    })
  } else {
    const queryBg = getQuery()
    $inputQuery.value = queryBg
    $ownBg.value = ''

    $deleteOwnBg.classList.add('hidden')
    refreshPins()
  }
}

const setFinalValues = () => {}

const saveConfig = async () => {
  const $saveButton = $('#save_config')
  $saveButton.disabled = true
  $saveButton.innerHTML = LOADING

  setFinalValues()
  ownWallpaper()
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
