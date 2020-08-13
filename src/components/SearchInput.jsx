import { getStorage } from '@/services/storage'
import { capitalize } from '@/services/util'

import { defaultSearchEngine } from '@/config.json'

const SearchInput = ({ value, setValue }) => {
  const storageSearchEngine = getStorage('defaultSearchEngine') || defaultSearchEngine

  return (
    <input value={value} onChange={e => setValue(e.target.value)} className='w-full h-full px-10 py-2 text-xl rounded shadow-lg appearance-none select-none bg-slate-900/50 md:text-2xl hover:bg-gray-800/80' autoFocus placeholder={`Busca en ${capitalize(storageSearchEngine)} o escribe una URL`} type='text' />
  )
}

export default SearchInput
