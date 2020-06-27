import { useState, useEffect } from 'react'

import AlertIcon from '@icons/Alert'

const Alert = ({ title, message, time }) => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (time) {
      const timer = setTimeout(() => {
        setShow(false)
      }, time)
      return () => clearTimeout(timer)
    }
  }, [time])

  if (!show) return null
  return (
    <div className='absolute z-10 w-full px-4 py-3 text-gray-900 border-t-4 rounded-b top-10 bg-slate-500 border-slate-600' role='alert'>
      <div className='flex items-center justify-center'>
        <div className='py-1'>
          <AlertIcon />
        </div>
        <div>

          <p className='font-bold'>{title}</p>
          <p className='text-sm'>{message}</p>

        </div>
      </div>
    </div>
  )
}

export default Alert
