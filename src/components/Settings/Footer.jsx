const FooterModal = () => {
  return (
    <footer className='absolute bottom-0 left-0 flex items-center justify-between w-full h-16 px-2 select-none rounded-b-xl bg-slate-600/50 backdrop-blur-sm'>
      <div className='pl-2 text-base font-bold text-zinc-50/30 hover:text-zinc-50/50'>
        <a target='_blank' href='https://github.com/LuisFOsG' rel='noreferrer'>LuisFOsG</a>
      </div>
      <div>

        <button className='flex items-center justify-center px-3 py-2 text-lg font-semibold rounded-lg bg-slate-600 hover:bg-slate-800 disabled:hover:bg-slate-600'>Guardar Cambios</button>

      </div>
    </footer>

  )
}

export default FooterModal