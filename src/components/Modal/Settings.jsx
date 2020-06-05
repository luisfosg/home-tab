import Header from '@/components/Modal/Header'

const Settings = () => {
  return (
    <div className='absolute top-0 left-0 flex items-center justify-center w-screen h-screen bg-slate-900/40 backdrop-blur-sm'>

      <div className='relative bg-slate-800/80 w-11/12 lg:w-auto min-w-[50%] h-[80%] rounded-xl transition-all'>
        <Header />

        <div className='flex flex-col items-center justify-center w-full h-4/5'>
          <strong>En Desarrollo: Nueva Versión con ReactJS</strong>
        </div>

      </div>

    </div>
  )
}

export default Settings
