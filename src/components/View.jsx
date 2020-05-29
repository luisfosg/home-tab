import Menu from '@/components/Menu'
import SearchForm from '@/components/SearchForm'

const View = () => {
  return (
    <div class='flex flex-col items-center justify-center w-full h-full bg-gray-800/80'>
      <Menu />

      <SearchForm />
    </div>
  )
}

export default View
