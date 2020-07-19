import Container from '@/components/Settings/ContainerSetting'
import Title from '@/components/Settings/TitleSetting'
import Input from '@/components/Settings/InputSetting'

const NewSearchEngine = () => {
  return (
    <Container center extraClass='pb-5 px-5'>
      <Title>Nuevo Motor de Búsqueda</Title>
      <div className='w-full md:w-auto flex justify-center items-center mt-5'>
        <Input placeholder='Titulo' />
        <button className='p-2 px-4 ml-2 rounded-lg bg-slate-700 hover:bg-gray-600/80'>Agregar</button>
      </div>
    </Container>
  )
}

export default NewSearchEngine
