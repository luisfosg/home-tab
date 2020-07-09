import { createContext, useState, useEffect } from 'react'

import { getStorage } from '@/services/storage'

import useBackground from '@/hooks/useBackground'
import useUpdate from '@/hooks/useAlert'
import useSettings from '@/hooks/useSettings'

import { pin } from '@/config.json'

const Context = createContext({
  isPinned: false,
  setIsPinned: () => {},

  settings: {},
  openSettings: false,
  setOpenSettings: () => {},

  msgAlert: '',
  setMsgAlert: () => {},

  updateWallpaper: () => {}
})

export const HomeTabContextProvider = ({ children }) => {
  const settings = useSettings()
  const { msgAlert, setMsgAlert } = useUpdate()

  const [openSettings, setOpenSettings] = useState(false)
  const { updateWallpaper } = useBackground()

  const [isPinned, setIsPinned] = useState(() => {
    return getStorage('pin') || pin
  })

  useEffect(() => {
    const isNotLoading = settings.settings.filter(setting => setting.success)
    if (isNotLoading.length === 0) return

    if (isNotLoading.length === settings.settings.length) {
      updateWallpaper()
      setOpenSettings(false)
    }
  }, [settings])

  useEffect(() => {
    if (!openSettings) settings.clearSettings()
  }, [openSettings])

  useEffect(() => {
    updateWallpaper()
  }, [])

  const VALUES = {
    isPinned,
    setIsPinned,

    settings,
    openSettings,
    setOpenSettings,

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
