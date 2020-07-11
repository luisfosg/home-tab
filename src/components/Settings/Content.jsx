import ChangeQuery from '@/components/ChangeQuery'
import ChooseImage from '@/components/ChooseImage'

const ContentModal = () => {
  return (
    <div className='absolute flex flex-col w-full px-5 overflow-x-hidden overflow-y-auto text-lg content-settings scrollbar-color'>

      <ChangeQuery />
      <ChooseImage />

    </div>
  )
}

export default ContentModal
