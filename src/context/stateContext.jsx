import { createContext, useState, useEffect, useContext } from 'react'

import HomeTabContext from '@/context/hometabContext'
import { getStorage, deleteStorageSearch } from '@/services/storage'

import useBackground from '@/hooks/useBackground'
import useSettings from '@/hooks/useSettings'
import useSearchs from '@/hooks/useSearchs'

const Context = createContext({
  searchs: [],
  configSearch: {},

  settings: {},
  openSettings: false,
  setOpenSettings: () => {},

  updateWallpaper: () => {}
})

export const StateContextProvider = ({ children }) => {
  const { setIsOwnImg } = useContext(HomeTabContext)

  const settings = useSettings()
  const { searchs, config, updateSearchs } = useSearchs()
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
      updateSearchs()
    }
  }, [openSettings])

  useEffect(() => {
    if (settings.updateSettings) {
      settings.handleSaveSetting(() => {
        config.deleteSearchs.forEach(search => deleteStorageSearch(`searchsEngine.${search}`))
      }, 3)
    }
  }, [settings.updateSettings])

  useEffect(() => {
    updateWallpaper()
    updateSearchs()
  }, [])

  const VALUES = {
    searchs,
    configSearch: config,

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
