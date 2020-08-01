import { useContext } from 'react'

import { deleteStorage } from '@/services/storage'
import HomeTabContext from '@/context/hometabContext'
import StateContext from '@/context/stateContext'

import ButtonMenu from '@/components/Settings/ButtonMenu'

import RefreshIcon from '@icons/Refresh'

const Refresh = () => {
  const { isPinned, isOwnImg } = useContext(HomeTabContext)
  const { updateWallpaper } = useContext(StateContext)

  const handleClick = () => {
    deleteStorage('time')
    updateWallpaper()
  }

  if (isPinned) return null
  if (isOwnImg) return null

  return (
    <ButtonMenu handleClick={handleClick}>
      <RefreshIcon />
    </ButtonMenu>
  )
}

export default Refresh
