import { useState, useEffect, useContext } from 'react'

import HomeTabContext from '@/context/hometabContext'
import { setStorage } from '@/services/storage'

import Container from '@/components/Settings/ContainerSetting'
import Title from '@/components/Settings/TitleSetting'
import Input from '@/components/Settings/InputSetting'

const ChooseImage = () => {
  const { settings, updateWallpaper } = useContext(HomeTabContext)
  const [blobURL, setFile] = useState(null)
  const [value, setValue] = useState('')

  useEffect(() => {
    settings.updateSetting({
      name: 'image',
      progress: true
    })
  }, [])

  useEffect(() => {
    if (settings.updateSettings) handleSave()
  }, [settings.updateSettings])

  const handleChange = (e) => {
    setFile(e.target.files[0])
    setValue(e.target.value)
  }

  const handleSave = async () => {
    if (!blobURL) {
      return settings.updateSetting({
        name: 'image',
        success: true
      })
    }

    const reader = new window.FileReader()

    reader.onload = (function (_theFile) {
      return function (e) {
        setStorage('ownBg', e.target.result)
        updateWallpaper()
      }
    })(blobURL)

    reader.readAsDataURL(blobURL)

    settings.updateSetting({
      name: 'image',
      success: true
    })
  }

  return (
    <Container>
      <Title>Subir Imagen</Title>
      <Input type='file' accept='image/*' value={value} onChange={handleChange} placeholder='Seleccione una Imagen' />
    </Container>
  )
}

export default ChooseImage
