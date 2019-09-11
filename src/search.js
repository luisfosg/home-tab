import { $ } from './domElements'

const form = $('#search')
const input = $('#search-input')

function urlify (text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g

  if (text.trim().includes(' ')) return false
  return urlRegex.test(text)
}

const searchQuery = (e) => {
  e.preventDefault()
  const query = input.value.trim()
  const isURL = urlify(query)

  isURL
    ? window.location.href = query
    : window.location.href = `https://www.google.com/search?q=${query}`

  e.target.reset()
}

form.addEventListener('submit', searchQuery)
