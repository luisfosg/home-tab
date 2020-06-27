import { useContext } from 'react'

import { deleteStorage } from '@/services/storage'
import HomeTabContext from '@/context/hometabContext'

import ButtonMenu from '@/components/Settings/ButtonMenu'

import RefreshIcon from '@icons/Refresh'

const Refresh = () => {
  const { isPinned, updateWallpaper } = useContext(HomeTabContext)

  const handleClick = () => {
    deleteStorage('time')
    updateWallpaper()
  }

  if (isPinned) return null

  return (
    <ButtonMenu handleClick={handleClick}>
      <RefreshIcon />
    </ButtonMenu>
  )
}

export default Refresh
