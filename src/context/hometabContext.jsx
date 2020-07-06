import { createContext, useState, useEffect } from 'react'

import { getStorage } from '@/services/storage'

import useBackground from '@/hooks/useBackground'

const Context = createContext({
  isPinned: false,
  setIsPinned: () => {},

  openSettings: false,
  setOpenSettings: () => {},
  updateSettings: false,
  setUpdateSettings: () => {},

  updateWallpaper: () => {}
})

export const HomeTabContextProvider = ({ children }) => {
  const [updateSettings, setUpdateSettings] = useState(false)
  const [openSettings, setOpenSettings] = useState(false)
  const { updateWallpaper } = useBackground()

  const [isPinned, setIsPinned] = useState(() => {
    return getStorage('pin') || false
  })

  useEffect(() => {
    updateWallpaper()
    if (updateSettings) setUpdateSettings(false)
  }, [updateSettings])

  const VALUES = {
    isPinned,
    setIsPinned,
    openSettings,
    setOpenSettings,
    updateSettings,
    setUpdateSettings,
    updateWallpaper
  }

  return (
    <Context.Provider value={VALUES}>
      {children}
    </Context.Provider>
  )
}

export default Context
