import {BiSearch} from 'react-icons/bi'
function SearchBar() {
  return (
    <div className="flex flex-row justify-start bg-gray-200 rounded-2xl mx-3 pl-3 sticky top-0 items-center">
        <BiSearch className="text-xl"/>
        <input
            type="text"
            placeholder="Search Twitter"
            className="input input-ghost w-full text-md focus:bg-gray-200 focus:outline-none h-8"
          />
    </div>
  )
}

export default SearchBar