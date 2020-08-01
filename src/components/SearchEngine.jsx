import { useState, useEffect, useContext } from 'react'

import StateContext from '@/context/stateContext'
import { setStorageSearch } from '@/services/storage'
import { capitalize } from '@/services/util'

import Input from '@/components/Settings/InputSetting'
import Close from '@/components/Icons/Close'

const SearchEngine = ({ name, url, select, handleChange }) => {
  const { settings, removeSearch } = useContext(StateContext)
  const [urlInput, setUrl] = useState(url)

  const isChecked = name === select

  useEffect(() => {
    settings.updateSetting({
      name: `input-${name}`,
      progress: true
    })
  }, [])

  useEffect(() => {
    if (settings.updateSettings) handleSave()
  }, [settings.updateSettings])

  const handleSave = () => {
    if (url !== urlInput) setStorageSearch(`searchsEngine.${name}`, urlInput)
    settings.updateSetting({
      name: `input-${name}`,
      success: true
    })
  }

  const handleDelete = () => {
    settings.updateSetting({
      name: `input-${name}`,
      success: true
    })
    removeSearch(name)
  }

  const handleChangeInput = (e) => { setUrl(e.target.value) }

  return (
    <div className='mt-5 grid grid-cols-3 gap-2 bg-slate-900/50 p-2 rounded-md'>
      <div className='col-span-2 flex items-center justify-start'>
        <input id={name} className='accent-slate-400 caret-slate-800 h-4 w-4 cursor-pointer' type='radio' value={name} onChange={handleChange} name='search-engine' checked={isChecked} />
        <label htmlFor={name} className='ml-1 cursor-pointer select-none'>{capitalize(name)}</label>
      </div>

      <div className='flex items-center justify-end'>
        <button onClick={handleDelete} className='p-2 flex items-center justify-center w-7 h-7 rounded-lg bg-red-500/50 hover:bg-red-600'>
          <Close />
        </button>
      </div>

      <div className='col-span-full flex items-center justify-center'>
        <Input type='short' value={urlInput} onChange={handleChangeInput} placeholder={`${capitalize(name)} - Search Engine`} />
      </div>
    </div>
  )
}

export default SearchEngine
