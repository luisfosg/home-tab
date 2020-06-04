import { useState } from 'react'

import { getStorage, setStorage } from '@/services/storage'
import { urlify } from '@/services/util'
import { defaultSearchEngine, searchEngine } from '@/config.json'

import SearchInput from '@/components/SearchInput'

import SearchIcon from '@icons/Search'

const SearchForm = () => {
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const storageSearchEngine = getStorage('defaultSearchEngine')
    if (!storageSearchEngine) setStorage('defaultSearchEngine', defaultSearchEngine)

    const query = search.trim()
    const [isURL, newURL] = urlify(query)

    const savedSearchEngine = getStorage('searchsEngine')
    const useSearchEngine = savedSearchEngine || searchEngine

    isURL
      ? window.location.href = newURL
      : window.location.href = useSearchEngine[storageSearchEngine || defaultSearchEngine].replace('{{query}}', query)

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
