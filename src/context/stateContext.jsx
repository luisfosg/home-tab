import { createContext, useState, useEffect, useContext } from 'react'

import HomeTabContext from '@/context/hometabContext'
import { getStorage } from '@/services/storage'

import useBackground from '@/hooks/useBackground'
import useSettings from '@/hooks/useSettings'

const Context = createContext({
  settings: {},
  openSettings: false,
  setOpenSettings: () => {},

  updateWallpaper: () => {}
})

export const StateContextProvider = ({ children }) => {
  const { setIsOwnImg } = useContext(HomeTabContext)
  const settings = useSettings()
  const { updateWallpaper } = useBackground()
  const [openSettings, setOpenSettings] = useState(false)

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
    settings,
    openSettings,
    setOpenSettings,
    updateWallpaper
  }

  return (
    <Context.Provider value={VALUES}>
      {children}
    </Context.Provider>
  )
}

export default Context
