/* eslint-disable no-var */
import { useState, useEffect } from 'react'

const useUpdateSettings = () => {
  const [updateSettings, setUpdateSettings] = useState(false)
  const [msgAlert, setMsg] = useState({
    title: '',
    message: '',
    type: ''
  })

  useEffect(() => {
    if (updateSettings) setUpdateSettings(false)
  }, [updateSettings])

  useEffect(() => {
    if (msgAlert) {
      var timeout = setTimeout(() => setMsg({
        title: '',
        message: '',
        type: ''
      }), 2000)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [msgAlert])

  const setMsgAlert = ({ title, message, type }) => {
    setMsg({
      title,
      message,
      type
    })
  }

  return {
    updateSettings,
    setUpdateSettings,
    msgAlert,
    setMsgAlert
  }
}

export default useUpdateSettings
