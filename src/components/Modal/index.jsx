import Header from '@/components/Modal/Header'
import Content from '@/components/Modal/Content'
import Footer from '@/components/Modal/Footer'

const Settings = () => {
  return (
    <div className='absolute top-0 left-0 flex items-center justify-center w-screen h-screen bg-slate-900/40 backdrop-blur-sm'>

      <div className='relative bg-slate-800/80 w-11/12 lg:w-auto min-w-[50%] h-[80%] rounded-xl transition-all'>
        <Header />
        <Content />
        <Footer />
      </div>

    </div>
  )
}

export default Settings
