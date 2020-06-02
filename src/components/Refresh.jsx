import useBackground from '@/hooks/useBackground'
import { deleteStorage } from '@/services/storage'

import ButtonMenu from '@/components/ButtonMenu'

import RefreshIcon from '@icons/Refresh'

const Refresh = () => {
  const { getNewWallpaper } = useBackground()

  const handleClick = () => {
    deleteStorage('time')
    getNewWallpaper()
  }

  return (
    <ButtonMenu handleClick={handleClick}>
      <RefreshIcon />
    </ButtonMenu>
  )
}

export default Refresh
