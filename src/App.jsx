import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import FilterDropdown from './components/FilterDropdown'
import PokemonList from './components/PokemonList'
import './App.css'

const App = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('All')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150')
        const promises = res.data.results.map(async (pokemon) => {
          const detail = await axios.get(pokemon.url)
          return {
            id: detail.data.id,
            name: detail.data.name,
            sprite: detail.data.sprites.front_default,
            types: detail.data.types.map(t => t.type.name)
          }
        })
        const results = await Promise.all(promises)
        setPokemonList(results)
        setFilteredList(results)
        setLoading(false)
      } catch (err) {
        setError(true)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    let filtered = pokemonList
    if (searchTerm) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }
    if (selectedType !== 'All') {
      filtered = filtered.filter(p => p.types.includes(selectedType))
    }
    setFilteredList(filtered)
  }, [searchTerm, selectedType, pokemonList])

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev)
    if (!isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className="container bg-white dark:bg-gray-900 dark:text-white">
      <Header />
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <FilterDropdown value={selectedType} onChange={setSelectedType} />
      <button onClick={toggleDarkMode} className="mb-4 p-2 rounded-md bg-gray-300 dark:bg-gray-700">
        Toggle Dark Mode
      </button>
      {loading && <p>Loading Pokémon...</p>}
      {error && <p>Failed to load data.</p>}
      {!loading && !filteredList.length && <p>No results found.</p>}
      {!loading && <PokemonList list={filteredList} />}
    </div>
  )
}

export default App
