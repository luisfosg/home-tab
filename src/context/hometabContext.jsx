import { createContext, useState, useEffect } from 'react'

import { getStorage } from '@/services/storage'

import useBackground from '@/hooks/useBackground'

const Context = createContext({
  isPinned: false,
  setIsPinned: () => {},
  openSettings: false,
  setOpenSettings: () => {},
  updateWallpaper: () => {}
})

export const HomeTabContextProvider = ({ children }) => {
  const { updateWallpaper } = useBackground()
  const [openSettings, setOpenSettings] = useState(false)

  const [isPinned, setIsPinned] = useState(() => {
    return getStorage('pin') || false
  })

  useEffect(() => {
    updateWallpaper()
  }, [])

  return (
    <Context.Provider value={{ isPinned, setIsPinned, openSettings, setOpenSettings, updateWallpaper }}>
      {children}
    </Context.Provider>
  )
}

export default Context
