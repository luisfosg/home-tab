import { useContext } from 'react'

import HomeTabContext from '@/context/hometabContext'

import Menu from '@/components/Menu'
import SearchForm from '@/components/SearchForm'
import Settings from '@/components/Settings'

const View = () => {
  const { openSettings } = useContext(HomeTabContext)

  return (
    <div className='flex flex-col items-center justify-center w-full h-full bg-gray-800/80'>
      <Menu />

      <SearchForm />
      {openSettings && <Settings />}
    </div>
  )
}

export default View
