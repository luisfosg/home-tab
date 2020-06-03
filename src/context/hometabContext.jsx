import { createContext, useState } from 'react'

import { getStorage } from '@/services/storage'

import useBackground from '@/hooks/useBackground'

const Context = createContext({
  isPinned: false,
  setIsPinned: () => {},
  getNewWallpaper: () => {}
})

export const HomeTabContextProvider = ({ children }) => {
  const { getNewWallpaper } = useBackground()

  const [isPinned, setIsPinned] = useState(() => {
    return getStorage('pin') || false
  })

  return (
    <Context.Provider value={{ isPinned, setIsPinned, getNewWallpaper }}>
      {children}
    </Context.Provider>
  )
}

export default Context
