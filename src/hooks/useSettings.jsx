import { useState, useEffect } from 'react'

const useSettings = () => {
  const [settings, setSettings] = useState({})
  const [updateSettings, setUpdateSettings] = useState(false)
  const [callbackSettings, setCallbackSettings] = useState([])

  useEffect(() => {
    if (!updateSettings || Object.values(settings).length === 0) return

    const isNotLoading = Object.values(settings).every(setting => !setting.progress)
    if (isNotLoading) setUpdateSettings(false)
  }, [settings])

  useEffect(() => {
    if (Object.keys(settings).length <= callbackSettings.length) {
      callbackSettings.sort((a, b) => b.priority - a.priority)
      callbackSettings.forEach(async callback => {
        await callback.run()
      })
    }
  }, [callbackSettings])

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

  const handleSaveSetting = (callback, priority = 0) => {
    setCallbackSettings((last) => {
      return [...last, {
        priority,
        run: callback
      }]
    })
  }

  return {
    settings,
    handleSaveSetting,

    updateSettings,
    setUpdateSettings,

    updateSetting,
    clearSettings
  }
}

export default useSettings
