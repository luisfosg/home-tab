import { $ } from '@/util/domElements'
import { changeVisibility } from '@/functions/settings'
import { waitFor } from '@/util'

export const showAlert = async ({ error = false, title, msg }) => {
  const $alert = $("div[role='alert']")

  const $title = $('#alert_title')
  const $msg = $('#alert_msg')

  if (error) {
    $alert.classList.add('bg-red-400')
    $alert.classList.add('border-red-500')
    $alert.classList.remove('bg-slate-500')
    $alert.classList.remove('border-slate-600')
  } else {
    $alert.classList.add('bg-slate-500')
    $alert.classList.add('border-slate-600')
    $alert.classList.remove('bg-red-400')
    $alert.classList.remove('border-red-500')
  }

  $title.innerText = title
  $msg.innerText = msg

  $alert.classList.remove('hidden')
  await waitFor(2000)
  $alert.classList.add('hidden')
  await waitFor(200)
  if (!error) changeVisibility()
}
