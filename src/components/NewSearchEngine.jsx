import { useState, useEffect, useContext } from 'react'

import StateContext from '@/context/stateContext'
import { setStorageSearch } from '@/services/storage'

import Container from '@/components/Settings/ContainerSetting'
import Title from '@/components/Settings/TitleSetting'
import Input from '@/components/Settings/InputSetting'

const NewSearchEngine = () => {
  const [name, setName] = useState('')
  const [searchs, setSearchs] = useState([])
  const { settings, addSearch } = useContext(StateContext)

  useEffect(() => {
    settings.updateSetting({
      name: 'newSearchEngine',
      progress: true
    })
  }, [])

  useEffect(() => {
    if (settings.updateSettings) handleSave()
  }, [settings.updateSettings])

  const handleSave = () => {
    searchs.forEach(search => {
      setStorageSearch(`searchsEngine.${search[0]}`, search[1])
    })

    settings.updateSetting({
      name: 'newSearchEngine',
      success: true
    })
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name === '') return

    addSearch([name.trim(), 'Agrega {query} a tu nuevo motor de búsqueda :)'])
    setSearchs([
      ...searchs,
      [name.trim(), 'Agrega {query} a tu nuevo motor de búsqueda :)']
    ])
    setName('')
  }

  return (
    <Container center extraClass='pb-5 px-5'>
      <Title>Nuevo Motor de Búsqueda</Title>
      <form onSubmit={handleSubmit} className='w-full md:w-auto flex justify-center items-center mt-5'>
        <Input value={name} onChange={handleChange} placeholder='Titulo' />
        <button type='submit' className='p-2 px-4 ml-2 rounded-lg bg-slate-700 hover:bg-gray-600/80'>Agregar</button>
      </form>
    </Container>
  )
}

export default NewSearchEngine
