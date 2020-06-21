import Container from '@/components/ContainerSetting'
import Title from '@/components/TitleSetting'
import Input from '@/components/InputSetting'

const ContentModal = () => {
  return (
    <div className='absolute flex flex-col w-full px-5 overflow-x-hidden overflow-y-auto text-lg content-settings scrollbar-color'>

      <Container>
        <Title>Tema del Fondo</Title>
        <Input />
      </Container>

      <div className='flex flex-col items-center justify-center w-full h-full'>
        <strong className='text-center'>En Desarrollo: Nueva Versión con ReactJS</strong>
      </div>
    </div>
  )
}

export default ContentModal
