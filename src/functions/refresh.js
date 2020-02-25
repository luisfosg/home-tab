import { $, addEvent } from '@/util/domElements'

const btnRefresh = $('#refresh')

export const isVisible = (isActive) => {
  btnRefresh.style.display = isActive ? 'block' : 'none'
}

addEvent(btnRefresh, 'click', () => {
  window.alert('Muy Pronto!')
})
