import { useState, useEffect } from 'react'

import { getStorage } from '@/services/storage'
import { capitalize } from '@/services/util'

import Container from '@/components/Settings/ContainerSetting'
import Title from '@/components/Settings/TitleSetting'
import Input from '@/components/Settings/InputSetting'

import Close from '@/components/Icons/Close'

import { searchEngine, defaultSearchEngine } from '@/config.json'

const SearchEngine = ({ name, url, select }) => {
  const isChecked = name === (select || defaultSearchEngine)

  return (
    <tr>
      <td>
        <input id={name} className='accent-slate-800 cursor-pointer' type='radio' value={name} name='search-engine' defaultChecked={isChecked} />
        <label htmlFor={name} className='cursor-pointer select-none'>{capitalize(name)}</label>
      </td>

      <td>
        <Input type='short' value={url} placeholder={`${capitalize(name)} - Search Engine`} />
      </td>

      <td>
        <Close />
      </td>
    </tr>
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
      <table>
        <tbody>
          {
            searchs.map((search, index) => {
              return (
                <SearchEngine key={index} name={search[0]} url={search[1]} select={storageSearchEngine} />
              )
            })
          }
        </tbody>
      </table>
    </Container>
  )
}

export default SearchsEngine
