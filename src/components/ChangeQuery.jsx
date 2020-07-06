import { useState, useEffect, useContext } from 'react'

import HomeTabContext from '@/context/hometabContext'
import { setStorage } from '@/services/storage'
import { getQuery, getAPI } from '@/services/util'

import Container from '@/components/Settings/ContainerSetting'
import Title from '@/components/TitleSetting'
import Input from '@/components/Settings/InputSetting'

const ChangeQuery = () => {
  const { updateSettings, updateWallpaper } = useContext(HomeTabContext)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const query = getQuery()
    setQuery(query)
  }, [])

  useEffect(() => {
    if (updateSettings) handleSave()
  }, [updateSettings])

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSave = async () => {
    const API = getAPI(query)

    const data = await window.fetch(API.replace('{{api}}', import.meta.env.VITE_UNSPLASH_KEY))
    const newWallpaper = await data.json()
    if (newWallpaper.errors) return console.error('Error:', newWallpaper.errors)

    setStorage('wallpaper', newWallpaper)
    setStorage('time', Date.now())
    setStorage('query', query)
    updateWallpaper()
  }

  return (
    <Container>
      <Title>Tema del Fondo</Title>
      <Input value={query} onChange={handleChange} placeholder='Tema' />
    </Container>
  )
}

export default ChangeQuery
