const ContainerSetting = ({ children, center }) => {
  const containerStyle = `flex flex-col items-center justify-center w-full max-w-full p-5 border-b md:flex-row border-slate-400/20 ${
    center ? '' : 'lg:pr-[20%] md:pr-[30%]'
  }`

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
