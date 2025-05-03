// File: components/SearchBar.jsx
import React from 'react'

const SearchBar = ({ value, onChange }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value); // Update the search term
  }

  return (
    <input
      type="text"
      placeholder="Search Pokémon by name..."
      value={value}
      onChange={handleInputChange}
      className="w-full py-2 px-4 mb-4 text-black bg-white dark:bg-gray-700 dark:text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
    />
  )
}

export default SearchBar
