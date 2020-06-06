import { useContext } from 'react'

import HomeTabContext from '@/context/hometabContext'

import Close from '@icons/close'

const HeaderSettings = () => {
  const { setOpenSettings } = useContext(HomeTabContext)

  const handleClose = () => {
    setOpenSettings(false)
  }

  return (
    <header className='sticky top-0 left-0 flex items-center justify-between h-10 px-2 select-none rounded-t-xl bg-slate-500/20 backdrop-blur-sm'>
      <div className='hidden md:block' />
      <div className='ml-2 text-xl font-bold text-white md:ml-0'>Home Tab <small className='text-sm text-slate-400'>v1.0.10</small></div>
      <div>

        <button onClick={handleClose} className='flex items-center justify-center p-2 rounded-full group w-7 h-7 hover:bg-slate-800/80'>
          <Close />
        </button>

      </div>
    </header>
  )
}

export default HeaderSettings
