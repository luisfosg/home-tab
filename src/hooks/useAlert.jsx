import { useState, useEffect } from 'react'

const useAlert = () => {
  const [msgAlert, setMsg] = useState({
    title: '',
    message: '',
    type: ''
  })

  useEffect(() => {
    let timeout

    if (msgAlert) {
      timeout = setTimeout(() => setMsg({
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
    msgAlert,
    setMsgAlert
  }
}

export default useAlert
