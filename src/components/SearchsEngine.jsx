import { useState, useEffect, useContext } from 'react'

import StateContext from '@/context/stateContext'
import { getStorage, setStorage } from '@/services/storage'

import SearchEngine from '@/components/SearchEngine'
import Container from '@/components/Settings/ContainerSetting'
import Title from '@/components/Settings/TitleSetting'

import { searchEngine, defaultSearchEngine } from '@/config.json'

const SearchsEngine = () => {
  const [searchs, setSearchs] = useState([])
  const storageSearchEngine = getStorage('defaultSearchEngine') || defaultSearchEngine
  const [selected, setSelected] = useState(storageSearchEngine)

  const { settings } = useContext(StateContext)

  useEffect(() => {
    settings.updateSetting({
      name: 'searchEngine',
      progress: true
    })

    const savedSearchEngine = getStorage('searchsEngine')
    const useSearchEngine = savedSearchEngine || searchEngine

    setSearchs(Object.entries(useSearchEngine))
  }, [])

  useEffect(() => {
    if (settings.updateSettings) handleSave()
  }, [settings.updateSettings])

  const handleSave = () => {
    setStorage('defaultSearchEngine', selected)
    settings.updateSetting({
      name: 'searchEngine',
      success: true
    })
  }

  const handleChange = (e) => {
    const { value } = e.target
    setSelected(value)
  }

  return (
    <Container center border='none'>
      <Title>Motor de Búsqueda</Title>
      <div className='w-full'>
        {
          searchs.map((search, index) => {
            return (
              <SearchEngine
                key={index}
                name={search[0]}
                url={search[1]}
                select={selected}
                handleChange={handleChange}
              />
            )
          })
        }
      </div>
    </Container>
  )
}

export default SearchsEngine
