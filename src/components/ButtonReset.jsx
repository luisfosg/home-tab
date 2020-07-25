import { useState } from 'react'

import Container from '@/components/Settings/ContainerSetting'
import Title from '@/components/Settings/TitleSetting'

const ButtonReset = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  const selectClass = !clicked ? 'bg-slate-700 hover:bg-gray-600/80' : 'bg-slate-800 hover:bg-gray-700/80'

  return (
    <Container center>
      <Title>Restablecer la Configuración</Title>
      <button
        onClick={handleClick}
        className={`${selectClass} mt-5 p-2 px-4 ml-2 rounded-lg disabled:pointer-events-none`}
      >
        {clicked ? 'Guarda los cambios para confirmar' : 'Cambiar a valores predeterminados'}
      </button>
    </Container>
  )
}

export default ButtonReset
