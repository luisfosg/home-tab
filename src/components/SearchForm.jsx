import SearchInput from '@/components/SearchInput'

import SearchIcon from '@icons/Search'

const SearchForm = () => {
  return (
    <form class='flex items-center justify-center w-screen'>
      <label class='relative w-5/6 h-16 md:w-1/2'>

        <span class='absolute top-[1.4rem] left-[0.6rem] cursor-text'>
          <SearchIcon />
        </span>

        <SearchInput />

      </label>
    </form>
  )
}

export default SearchForm
