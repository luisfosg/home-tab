import { useState } from 'react'

import { getStorage } from '@/services/storage'
import { searchEngine } from '@/config.json'

const useSearchs = () => {
  const [searchs, setSearchs] = useState([])
  const [deleteSearchs, setDeleteSearchs] = useState([])

  const updateSearchs = () => {
    const savedSearchEngine = getStorage('searchsEngine') || searchEngine
    setSearchs(() => Object.entries(savedSearchEngine))
  }

  const addSearch = (search) => {
    const newSearchs = [...searchs, search]
    setSearchs(newSearchs)
  }

  const removeSearch = (name) => {
    const newSearchs = searchs.filter(search => search[0] !== name)
    setSearchs(newSearchs)
    setDeleteSearchs([...deleteSearchs, name])
  }

  return {
    searchs,

    config: {
      deleteSearchs,
      addSearch,
      removeSearch
    },
    updateSearchs
  }
}

export default useSearchs
