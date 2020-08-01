import { useState, useEffect, useContext } from 'react'

import HomeTabContext from '@/context/hometabContext'
import StateContext from '@/context/stateContext'
import { setStorage } from '@/services/storage'
import { getQuery, getAPI } from '@/services/util'

import Container from '@/components/Settings/ContainerSetting'
import Title from '@/components/Settings/TitleSetting'
import Input from '@/components/Settings/InputSetting'

const ChangeQuery = () => {
  const { isOwnImg, setMsgAlert } = useContext(HomeTabContext)
  const { settings } = useContext(StateContext)

  const [query, setQuery] = useState('')

  useEffect(() => {
    settings.updateSetting({
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

  if (isOwnImg) return null

  return (
    <Container>
      <Title>Tema del Fondo</Title>
      <Input value={query} onChange={handleChange} placeholder='Tema' />
    </Container>
  )
}

export default ChangeQuery
