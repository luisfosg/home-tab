export const $ = (element) => document.querySelector(element)
export const $$ = (elements) => document.querySelectorAll(elements)

export function addEvent ($elmDom, evt, callback) {
  if (!$elmDom) return

  if ($elmDom.attachEvent) {
    return $elmDom.attachEvent('on' + evt, callback)
  } else {
    return $elmDom.addEventListener(evt, callback, false)
  }
}

export function addEvents ($elmsDom, evt, callback) {
  if (!$elmsDom) return

  for (const i in Object.entries($elmsDom)) {
    addEvent($elmsDom[i], evt, callback)
  }
}
