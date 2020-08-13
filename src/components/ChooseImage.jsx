import { useState, useEffect, useContext } from 'react'

import HomeTabContext from '@/context/hometabContext'
import StateContext from '@/context/stateContext'
import { setStorage, deleteStorage } from '@/services/storage'

import Container from '@/components/Settings/ContainerSetting'
import Title from '@/components/Settings/TitleSetting'
import Input from '@/components/Settings/InputSetting'

const ChooseImage = () => {
  const { isOwnImg, setIsOwnImg } = useContext(HomeTabContext)
  const { settings, updateWallpaper } = useContext(StateContext)

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
    if (settings.updateSettings) {
      settings.handleSaveSetting(handleSave, {
        name: 'image',
        priority: 2
      })
    }
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

    return await new Promise((resolve, reject) => {
      const reader = new window.FileReader()

      reader.onload = (function (_theFile) {
        return function (e) {
          setStorage('ownBg', e.target.result)
          settings.updateSetting({
            name: 'image',
            success: true
          })
          updateWallpaper()
          setFile(null)

          resolve(e.target.result)
        }
      })(blobURL)

      reader.onerror = function (e) { reject(e) }
      reader.readAsDataURL(blobURL)
    })
  }

  const handleDelete = () => {
    setIsOwnImg(false)
    setDeleteBg(true)
  }

  if (isOwnImg) {
    return (
      <Container center>
        <Title>Imagen Seleccionada</Title>
        <button onClick={handleDelete} className='mt-4 p-2 px-4 ml-2 rounded-lg bg-red-500/50 hover:bg-red-600'>Eliminar</button>
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
