import AlertIcon from '@icons/Alert'

const STYLES = {
  default: 'bg-slate-500/90 border-slate-600',
  success: 'bg-green-500/90 border-green-600',
  error: 'bg-red-500/90 border-red-600'
}

const Alert = ({ title, message, type }) => {
  const style = STYLES[type] || STYLES.default

  const DIV_STYLE = `absolute z-10 w-full px-4 py-3 text-gray-900 border-t-4 rounded-b top-10 backdrop-blur-md ${style}`

  return (
    <div className={DIV_STYLE} role='alert'>
      <div className='flex items-center justify-center'>
        <div className='py-1'>
          <AlertIcon />
        </div>
        <div>

          <p className='font-bold'>{title}</p>
          <p className='text-sm'>{message}</p>

        </div>
      </div>
    </div>
  )
}

export default Alert
