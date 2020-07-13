import { useState, useEffect, useContext } from 'react'

import HomeTabContext from '@/context/hometabContext'
import { setStorage, deleteStorage } from '@/services/storage'

import Container from '@/components/Settings/ContainerSetting'
import Title from '@/components/Settings/TitleSetting'
import Input from '@/components/Settings/InputSetting'

const ChooseImage = () => {
  const { isOwnImg, setIsOwnImg, settings, updateWallpaper } = useContext(HomeTabContext)
  const [blobURL, setFile] = useState(null)
  const [value, setValue] = useState('')
  const [deleteBg, setDeleteBg] = useState(false)

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
    if (deleteBg) deleteStorage('ownBg')

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
        settings.updateSetting({
          name: 'image',
          success: true
        })
        updateWallpaper()
      }
    })(blobURL)

    reader.readAsDataURL(blobURL)
  }

  const handleDelete = () => {
    setIsOwnImg(false)
    setDeleteBg(true)
  }

  if (isOwnImg) {
    return (
      <Container>
        <Title>Imagen Seleccionada</Title>
        <button onClick={handleDelete} className='mt-4 p-2 px-4 ml-2 md:mt-0 rounded-lg bg-red-500/50 hover:bg-red-600'>Eliminar</button>
      </Container>
    )
  }

  return (
    <Container>
      <Title>Subir Imagen</Title>
      <Input type='file' accept='image/*' value={value} onChange={handleChange} placeholder='Seleccione una Imagen' />
    </Container>
  )
}

export default ChooseImage
