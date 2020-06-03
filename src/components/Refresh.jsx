import { useContext } from 'react'

import { deleteStorage } from '@/services/storage'
import HomeTabContext from '@/context/hometabContext'

import ButtonMenu from '@/components/ButtonMenu'

import RefreshIcon from '@icons/Refresh'

const Refresh = () => {
  const { isPinned, getNewWallpaper } = useContext(HomeTabContext)

  const handleClick = () => {
    deleteStorage('time')
    getNewWallpaper()
  }

  if (isPinned) return null

  return (
    <ButtonMenu handleClick={handleClick}>
      <RefreshIcon />
    </ButtonMenu>
  )
}

export default Refresh
