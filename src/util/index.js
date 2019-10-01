export const saveLocalStorage = (name, value) => {
  window.localStorage.setItem(name, JSON.stringify(value))
}

export const getLocalStorage = (name) => {
  const value = window.localStorage.getItem(name)
  return value ? JSON.parse(value) : null
}
