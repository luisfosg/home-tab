import { useState, useEffect, useContext } from 'react'

import HomeTabContext from '@/context/hometabContext'
import { setStorage } from '@/services/storage'
import { getQuery, getAPI } from '@/services/util'

import Container from '@/components/Settings/ContainerSetting'
import Title from '@/components/Settings/TitleSetting'
import Input from '@/components/Settings/InputSetting'

const ChangeQuery = () => {
  const { setMsgAlert, settings } = useContext(HomeTabContext)
  const [query, setQuery] = useState('')

  useEffect(() => {
    settings.addSetting({
      name: 'query',
      progress: true
    })

    const query = getQuery()
    setQuery(query)
  }, [])

  useEffect(() => {
    if (settings.updateSettings) handleSave()
  }, [settings.updateSettings])

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSave = async () => {
    const oldQuery = getQuery()

    if (oldQuery !== query && query !== '') {
      const API = getAPI(query)

      const data = await window.fetch(API.replace('{{api}}', import.meta.env.VITE_UNSPLASH_KEY))
      const newWallpaper = await data.json()
      if (newWallpaper.errors) {
        settings.updateSetting({
          name: 'query',
          error: true
        })

        return setMsgAlert({
          title: 'Error',
          message: 'No se encontro ningún resultado del tema que buscas',
          type: 'error'
        })
      }

      setStorage('wallpaper', newWallpaper)
      setStorage('time', Date.now())
      setStorage('query', query)
    }

    settings.updateSetting({
      name: 'query',
      success: true
    })
  }

  return (
    <Container>
      <Title>Tema del Fondo</Title>
      <Input value={query} onChange={handleChange} placeholder='Tema' />
    </Container>
  )
}

export default ChangeQuery
