export const waitFor = ms => new Promise(
  resolve => setTimeout(resolve, ms)
)

export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

export const urlify = (text) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g

  if (text.includes(' ')) return [false, text]
  if (urlRegex.test(text)) return [true, text]

  return text.includes('.')
    ? [true, `https://${text}`]
    : [false, text]
}
