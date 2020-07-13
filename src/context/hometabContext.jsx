import { createContext, useState, useEffect } from 'react'

import { getStorage } from '@/services/storage'

import useBackground from '@/hooks/useBackground'
import useUpdate from '@/hooks/useAlert'
import useSettings from '@/hooks/useSettings'

import { pin } from '@/config.json'

const Context = createContext({
  isPinned: false,
  setIsPinned: () => {},

  isOwnImg: false,
  setIsOwnImg: () => {},

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
  const { updateWallpaper } = useBackground()

  const [openSettings, setOpenSettings] = useState(false)

  const [isOwnImg, setIsOwnImg] = useState(() => {
    return !!getStorage('ownBg')
  })
  const [isPinned, setIsPinned] = useState(() => {
    return getStorage('pin') || pin
  })

  useEffect(() => {
    if (Object.values(settings.settings).length === 0) return

    const isSuccess = Object.values(settings.settings).every(setting => setting.success)
    if (!isSuccess) return

    updateWallpaper()
    setOpenSettings(false)
  }, [settings.settings])

  useEffect(() => {
    if (!openSettings) {
      settings.clearSettings()
      setIsOwnImg(!!getStorage('ownBg'))
    }
  }, [openSettings])

  useEffect(() => {
    updateWallpaper()
  }, [])

  const VALUES = {
    isPinned,
    setIsPinned,

    isOwnImg,
    setIsOwnImg,

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
