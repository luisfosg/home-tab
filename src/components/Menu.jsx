import ButtonMenu from '@/components/ButtonMenu'

import Refresh from '@icons/Refresh'
import Pin from '@/components/Icons/PinDeactive'
import Settings from '@icons/Settings'

const Menu = () => {
  return (
    <header className='absolute top-0 flex items-center justify-end w-full h-auto'>
      <section className='flex items-center justify-end w-auto h-full gap-1 mt-3 mr-3'>

        <ButtonMenu>
          <Refresh />
        </ButtonMenu>

        <ButtonMenu>
          <Pin />
        </ButtonMenu>

        <ButtonMenu>
          <Settings />
        </ButtonMenu>

      </section>
    </header>
  )
}

export default Menu
