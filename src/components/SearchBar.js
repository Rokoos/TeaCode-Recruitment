import React  from 'react'

const SearchBar = ({handleSearch, keyword}) => {
  return (
    <input 
        type="search" 
        placeholder="Filter" 
        value={keyword}
        onChange={handleSearch}
        className="form-control mb-4 p-2"
        />
  )
}

export default SearchBar
