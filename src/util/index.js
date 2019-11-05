export const setStorage = (name, value) => {
  window.localStorage.setItem(name, JSON.stringify(value))
}

export const getStorage = (name) => {
  const value = window.localStorage.getItem(name)

  try {
    return value ? JSON.parse(value) : null
  } catch (error) {
    return null
  }
}
