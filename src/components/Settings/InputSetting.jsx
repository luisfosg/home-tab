const TYPES = {
  text: 'px-4 py-2 w-full md:w-52 text-lg rounded shadow-sm outline-none appearance-none bg-slate-600/50 md:text-xl h-11 hover:bg-gray-600/80 placeholder:text-slate-400/40',
  file: 'text-lg max-w-full cursor-pointer md:w-52 md:text-xl h-11 file:mr-4 file:py-2 file:px-2 file:rounded-lg file:border-0 file:text-lg file:font-semibold file:bg-slate-400/20 file:text-white hover:file:bg-gray-600/80 file:cursor-pointer hover:text-slate-400'
}

const InputSetting = ({
  type = 'text',
  value = '',
  onChange = () => {},
  ...props
}) => {
  const inputClass = TYPES[type] || TYPES.text

  return (
    <input value={value} onChange={onChange} type={type} className={inputClass} {...props} />
  )
}

export default InputSetting
