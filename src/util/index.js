export const setStorage = (name, value) => {
  window.localStorage.setItem(name, JSON.stringify(value))
}

export const getStorage = (name) => {
  const value = window.localStorage.getItem(name)
  return value ? JSON.parse(value) : null
}
