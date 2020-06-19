import { useState } from 'react'

import { getStorage } from '@/services/storage'
import { urlify } from '@/services/util'
import { defaultSearchEngine, searchEngine } from '@/config.json'

import SearchInput from '@/components/SearchInput'

import SearchIcon from '@icons/Search'

const SearchForm = () => {
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const usedSearchEngine = getStorage('defaultSearchEngine') || defaultSearchEngine
    const useSearchEngine = getStorage('searchsEngine') || searchEngine

    const query = search.trim()
    const [isURL, newURL] = urlify(query)

    const redirectTo = isURL
      ? newURL
      : useSearchEngine[usedSearchEngine].replace('{query}', query)

    window.location.href = redirectTo
    setSearch('')
  }

  return (
    <form onSubmit={handleSubmit} className='flex items-center justify-center w-screen'>
      <label className='relative w-5/6 h-16 md:w-1/2'>

        <span className='absolute top-[1.4rem] left-[0.6rem] cursor-text'>
          <SearchIcon />
        </span>

        <SearchInput value={search} setValue={setSearch} />

      </label>
    </form>
  )
}

export default SearchForm
