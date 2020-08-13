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
    if (callbackSettings.length === 0) return
    callbackSettings.sort((a, b) => b.priority - a.priority)

    callbackSettings.forEach(async callback => {
      await callback.run()
    })

    setCallbackSettings([])
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

  const handleSaveSetting = (callback, {
    name,
    priority = 0
  }) => {
    setCallbackSettings((last) => {
      return [...last, {
        name,
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
