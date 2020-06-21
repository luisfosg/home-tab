const ContainerSetting = ({ children }) => {
  return (
    <div className='flex flex-col items-center justify-center w-full max-w-full p-5 border-b md:flex-row border-slate-400/20 lg:pr-[20%] md:pr-[30%]'>
      <div className='flex flex-col items-center w-full md:flex-row md:justify-end md:gap-8'>
        {children}
      </div>
    </div>
  )
}

export default ContainerSetting
