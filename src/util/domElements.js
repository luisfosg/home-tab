export const $ = (element) => document.querySelector(element)
export const $$ = (elements) => document.querySelectorAll(elements)

export function addEvent (element, evnt, funct) {
  if (element.attachEvent) { return element.attachEvent('on' + evnt, funct) } else { return element.addEventListener(evnt, funct, false) }
}
