const InputSetting = ({ placeholder = '' }) => {
  return (
    <input type='text' className='px-4 py-2 w-full md:w-52 text-lg rounded shadow-sm outline-none appearance-none bg-slate-600/50 md:text-xl h-11 hover:bg-gray-600/80 placeholder:text-slate-400/40' placeholder={placeholder} />
  )
}

export default InputSetting
