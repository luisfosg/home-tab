const ButtonMenu = ({ children, handleClick = () => {} }) => {
  return (
    <button onClick={handleClick} className='p-2 rounded-full cursor-pointer focus:shadow-sm group hover:bg-slate-900/20 focus:shadow-gray-500/20'>
      {children}
    </button>
  )
}

export default ButtonMenu
