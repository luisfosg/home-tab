import ButtonMenu from '@/components/ButtonMenu'

import Refresh from '@/components/Refresh'
import Pin from '@/components/Pin'

import Settings from '@icons/Settings'

const Menu = () => {
  return (
    <header className='absolute top-0 flex items-center justify-end w-full h-auto'>
      <section className='flex items-center justify-end w-auto h-full gap-1 mt-3 mr-3'>

        <Refresh />
        <Pin />

        <ButtonMenu>
          <Settings />
        </ButtonMenu>

      </section>
    </header>
  )
}

export default Menu
