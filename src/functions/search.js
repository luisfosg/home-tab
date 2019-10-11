import { $, addEvent } from '@/util/domElements'

const input = $('#search-input')

function urlify (text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g

  if (text.includes(' ')) return [false, text]
  if (urlRegex.test(text)) return [true, text]

  return text.includes('.')
    ? [true, `https://${text}`]
    : [false, text]
}

const searchQuery = (e) => {
  e.preventDefault()

  const query = input.value.trim()
  const [isURL, newURL] = urlify(query)

  isURL
    ? window.location.href = newURL
    : window.location.href = `https://www.google.com/search?q=${query}`

  e.target.reset()
}

addEvent($('#search'), 'submit', searchQuery)
