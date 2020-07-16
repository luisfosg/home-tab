import { useState, useEffect } from 'react'

import { getStorage } from '@/services/storage'
import { capitalize } from '@/services/util'

import Container from '@/components/Settings/ContainerSetting'
import Title from '@/components/Settings/TitleSetting'
import Input from '@/components/Settings/InputSetting'

/* import Close from '@/components/Icons/Close' */

import { searchEngine, defaultSearchEngine } from '@/config.json'

const SearchEngine = ({ name, url, select }) => {
  const isChecked = name === (select || defaultSearchEngine)

  return (
    <div className='mt-5 grid grid-cols-3 gap-2 bg-slate-900/50 p-2 rounded-md'>
      <div className='col-span-2 flex items-center justify-start'>
        <input id={name} className='accent-slate-400 caret-slate-800 h-4 w-4 cursor-pointer' type='radio' value={name} name='search-engine' defaultChecked={isChecked} />
        <label htmlFor={name} className='ml-1 cursor-pointer select-none'>{capitalize(name)}</label>
      </div>

      {/* <div className='flex items-center justify-end'>
        <button className='p-2 flex items-center justify-center w-7 h-7 rounded-lg bg-red-500/50 hover:bg-red-600'>
          <Close />
        </button>
      </div> */}

      <div className='col-span-full flex items-center justify-center'>
        <Input type='short' value={url} placeholder={`${capitalize(name)} - Search Engine`} />
      </div>
    </div>
  )
}

const SearchsEngine = () => {
  const [searchs, setSearchs] = useState([])
  const storageSearchEngine = getStorage('defaultSearchEngine')

  useEffect(() => {
    const savedSearchEngine = getStorage('searchsEngine')
    const useSearchEngine = savedSearchEngine || searchEngine

    setSearchs(Object.entries(useSearchEngine))
  }, [])

  return (
    <Container center>
      <Title>Motor de Búsqueda</Title>
      <div className='w-full'>
        {
          searchs.map((search, index) => {
            return (
              <SearchEngine key={index} name={search[0]} url={search[1]} select={storageSearchEngine} />
            )
          })
        }
      </div>
    </Container>
  )
}

export default SearchsEngine
