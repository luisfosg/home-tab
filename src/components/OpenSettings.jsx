import { useContext } from 'react'

import HomeTabContext from '@/context/hometabContext'

import ButtonMenu from '@/components/ButtonMenu'

import Settings from '@icons/Settings'

const OpenSettings = () => {
  const { setOpenSettings } = useContext(HomeTabContext)

  const handleClick = () => {
    setOpenSettings(true)
  }

  return (
    <ButtonMenu handleClick={handleClick}>
      <Settings />
    </ButtonMenu>
  )
}

export default OpenSettings
