import { useState } from 'react'

import { setStorageSearch } from '@/services/storage'

import Container from '@/components/Settings/ContainerSetting'
import Title from '@/components/Settings/TitleSetting'
import Input from '@/components/Settings/InputSetting'

const NewSearchEngine = () => {
  const [name, setName] = useState('')

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name === '') return

    setStorageSearch(
      `searchsEngine.${name.trim()}`,
      'Agrega {query} a tu nuevo motor de búsqueda :)'
    )

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
