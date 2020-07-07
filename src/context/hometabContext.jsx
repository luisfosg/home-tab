import { createContext, useState, useEffect } from 'react'

import { getStorage } from '@/services/storage'

import useBackground from '@/hooks/useBackground'
import useUpdate from '@/hooks/useUpdate'

const Context = createContext({
  isPinned: false,
  setIsPinned: () => {},

  openSettings: false,
  setOpenSettings: () => {},
  updateSettings: false,
  setUpdateSettings: () => {},

  msgAlert: '',
  setMsgAlert: () => {},

  updateWallpaper: () => {}
})

export const HomeTabContextProvider = ({ children }) => {
  const { updateSettings, setUpdateSettings, msgAlert, setMsgAlert } = useUpdate()
  const [openSettings, setOpenSettings] = useState(false)
  const { updateWallpaper } = useBackground()

  const [isPinned, setIsPinned] = useState(() => {
    return getStorage('pin') || false
  })

  useEffect(() => {
    updateWallpaper()
  }, [])

  const VALUES = {
    isPinned,
    setIsPinned,

    openSettings,
    setOpenSettings,
    updateSettings,
    setUpdateSettings,

    msgAlert,
    setMsgAlert,

    updateWallpaper
  }

  return (
    <Context.Provider value={VALUES}>
      {children}
    </Context.Provider>
  )
}

export default Context
