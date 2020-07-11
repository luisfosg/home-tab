import { useState } from 'react'

/* import HomeTabContext from '@/context/hometabContext' */

import Container from '@/components/Settings/ContainerSetting'
import Title from '@/components/Settings/TitleSetting'
import Input from '@/components/Settings/InputSetting'

const ChooseImage = () => {
  /* const { } = useContext(HomeTabContext) */

  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <Container>
      <Title>Subir Imagen</Title>
      <Input type='file' accept='image/*' value={value} onChange={handleChange} placeholder='Seleccione una Imagen' />
    </Container>
  )
}

export default ChooseImage
