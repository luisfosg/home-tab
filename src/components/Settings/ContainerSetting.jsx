const BORDER = {
  botton: 'border-b',
  top: 'border-t',
  left: 'border-l',
  right: 'border-r',
  none: 'border-none'
}

const ContainerSetting = ({ children, center, border = 'botton', extraClass = 'p-5' }) => {
  const borderClass = BORDER[border] || BORDER.botton
  const centerClass = center ? '' : 'lg:pr-[20%] md:pr-[30%]'

  const containerStyle = `flex flex-col items-center justify-center w-full max-w-full md:flex-row border-slate-400/10 ${borderClass} ${centerClass} ${extraClass}`.trim()

  const contentClass = `flex flex-col items-center w-full ${
    center ? 'md:justify-center' : 'md:flex-row md:justify-end md:gap-8'
  }`

  return (
    <div className={containerStyle}>
      <div className={contentClass}>
        {children}
      </div>
    </div>
  )
}

export default ContainerSetting
