import { useState, useEffect } from 'react'

const useSettings = () => {
  const [settings, setSettings] = useState({})
  const [updateSettings, setUpdateSettings] = useState(false)

  useEffect(() => {
    if (!updateSettings || Object.values(settings).length === 0) return

    const isNotLoading = Object.values(settings).every(setting => !setting.progress)
    if (isNotLoading) setUpdateSettings(false)
  }, [settings])

  const clearSettings = () => {
    setSettings({})
  }

  const updateSetting = (setting) => {
    setSettings((last) => {
      return {
        ...last,
        [setting.name]: setting
      }
    })
  }

  return {
    settings,

    updateSettings,
    setUpdateSettings,

    updateSetting,
    clearSettings
  }
}

export default useSettings
