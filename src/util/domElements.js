export const $ = (element) => document.querySelector(element)
export const $$ = (elements) => document.querySelectorAll(elements)

export function addEvent (elmDom, evt, callback) {
  if (!elmDom) return

  if (elmDom.attachEvent) {
    return elmDom.attachEvent('on' + evt, callback)
  } else {
    return elmDom.addEventListener(evt, callback, false)
  }
}
