import { useState, useEffect } from 'react'

const useSettings = () => {
  const [settings, setSettings] = useState([])
  const [updateSettings, setUpdateSettings] = useState(false)

  useEffect(() => {
    if (!updateSettings) return

    const isNotLoading = settings.filter(setting => setting.success || setting.error)
    if (isNotLoading.length === settings.length) setUpdateSettings(false)
  }, [settings])

  const clearSettings = () => {
    setSettings([])
  }

  const addSetting = (setting) => {
    setSettings([...settings, setting])
  }

  const updateSetting = (setting) => {
    const newSettings = settings.map(s => {
      if (s.name === setting.name) {
        return setting
      }
      return s
    })

    setSettings(newSettings)
  }

  return {
    settings,

    updateSettings,
    setUpdateSettings,

    addSetting,
    updateSetting,
    clearSettings
  }
}

export default useSettings
