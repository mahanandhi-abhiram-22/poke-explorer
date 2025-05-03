import React from 'react'

const types = [
  'All', 'normal', 'fire', 'water', 'grass', 'electric', 'ice', 'fighting',
  'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost',
  'dragon', 'dark', 'steel', 'fairy'
]

const FilterDropdown = ({ value, onChange }) => (
  <select 
    value={value} 
    onChange={e => onChange(e.target.value)} 
    className="w-full py-2 px-4 mb-4 text-black bg-white dark:bg-gray-700 dark:text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
  >
    {types.map(type => (
      <option key={type} value={type} className="capitalize">{type}</option>
    ))}
  </select>
)

export default FilterDropdown
