import { useContext } from 'react'

import StateContext from '@/context/stateContext'

import Menu from '@/components/Menu'
import SearchForm from '@/components/SearchForm'
import Settings from '@/components/Settings'

const View = () => {
  const { openSettings } = useContext(StateContext)

  return (
    <div className='flex flex-col items-center justify-center w-full h-full bg-gray-800/80'>
      <Menu />

      <SearchForm />
      {openSettings && <Settings />}
    </div>
  )
}

export default View
