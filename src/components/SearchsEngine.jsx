import { useState, useEffect, useContext } from 'react'

import StateContext from '@/context/stateContext'
import { getStorage, setStorage } from '@/services/storage'

import SearchEngine from '@/components/SearchEngine'
import Container from '@/components/Settings/ContainerSetting'
import Title from '@/components/Settings/TitleSetting'

import { defaultSearchEngine } from '@/config.json'

const SearchsEngine = () => {
  const storageSearchEngine = getStorage('defaultSearchEngine') || defaultSearchEngine
  const [selected, setSelected] = useState(storageSearchEngine)

  const { searchs, settings } = useContext(StateContext)

  useEffect(() => {
    settings.updateSetting({
      name: 'searchEngine',
      progress: true
    })
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

  if (searchs.length === 0) {
    return (
      <Container center border='none'>
        <Title>Motor de Búsqueda</Title>
        <div className='w-full'>
          <p className='mt-5 text-center text-gray-400/80'>No hay motores de búsqueda, agrega uno.</p>
        </div>
      </Container>
    )
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
