import React from 'react'
import './SearchItem.css'

const SearchItem = () => {
  return (
    <form className='searchForm' onSubmit={(e)=> e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input
        id='search' 
        type="text"
        role='searchbox'
        placeholder='Search Items' 
        />
    </form>
  )
}

export default SearchItem