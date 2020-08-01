import { createContext, useState } from 'react'

import { getStorage } from '@/services/storage'
import useUpdate from '@/hooks/useAlert'

import { pin } from '@/config.json'

const Context = createContext({
  isPinned: false,
  setIsPinned: () => {},

  isOwnImg: false,
  setIsOwnImg: () => {},

  msgAlert: '',
  setMsgAlert: () => {}
})

export const HomeTabContextProvider = ({ children }) => {
  const { msgAlert, setMsgAlert } = useUpdate()

  const [isOwnImg, setIsOwnImg] = useState(() => {
    return !!getStorage('ownBg')
  })
  const [isPinned, setIsPinned] = useState(() => {
    return getStorage('pin') || pin
  })

  const VALUES = {
    isPinned,
    setIsPinned,

    isOwnImg,
    setIsOwnImg,

    msgAlert,
    setMsgAlert
  }

  return (
    <Context.Provider value={VALUES}>
      {children}
    </Context.Provider>
  )
}

export default Context
