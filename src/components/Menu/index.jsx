import Refresh from '@icons/Refresh'
import Pin from '@icons/Pin'
import Settings from '@icons/Settings'

const Menu = () => {
  return (
    <header class='absolute top-0 flex items-center justify-end w-full h-auto'>
      <section class='flex items-center justify-end w-auto h-full gap-1 mt-3 mr-3'>

        <button class='p-2 rounded-full cursor-pointer focus:shadow-sm group hover:bg-slate-900/20 focus:shadow-gray-500/20'>
          <Refresh />
        </button>

        <button class='p-2 rounded-full cursor-pointer focus:shadow-sm group hover:bg-slate-900/20 focus:shadow-gray-500/20'>
          <Pin />
        </button>

        <button class='p-2 rounded-full cursor-pointer focus:shadow-sm group hover:bg-slate-900/20 focus:shadow-gray-500/20'>
          <Settings />
        </button>

      </section>
    </header>
  )
}

export default Menu
