import { useContext } from 'react'

import StateContext from '@/context/stateContext'

import ButtonMenu from '@/components/Settings/ButtonMenu'

import Settings from '@icons/Settings'

const OpenSettings = () => {
  const { setOpenSettings } = useContext(StateContext)

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
