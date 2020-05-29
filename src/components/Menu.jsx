import ButtonMenu from '@/components/ButtonMenu'

import Refresh from '@icons/Refresh'
import Pin from '@icons/Pin'
import Settings from '@icons/Settings'

const Menu = () => {
  return (
    <header class='absolute top-0 flex items-center justify-end w-full h-auto'>
      <section class='flex items-center justify-end w-auto h-full gap-1 mt-3 mr-3'>

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
