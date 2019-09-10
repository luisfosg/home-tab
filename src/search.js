import { $ } from './domElements'

const form = $('#search')
const input = $('#search-input')

const searchQuery = (e) => {
  e.preventDefault()
  window.location.href = `https://www.google.com/search?q=${input.value.trim()}`
  e.target.reset()
}

form.addEventListener('submit', searchQuery)
