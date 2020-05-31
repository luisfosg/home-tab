export const waitFor = ms => new Promise(
  resolve => setTimeout(resolve, ms)
)

export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
