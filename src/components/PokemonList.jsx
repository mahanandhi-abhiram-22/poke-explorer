import React from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = ({ list }) => (
  <div className="pokemon-grid">
    {list.map((pokemon, index) => (
      // Ensure a unique key, using pokemon.id or fallback to index if necessary
      <PokemonCard key={pokemon.id || index} pokemon={pokemon} />
    ))}
  </div>
)

export default PokemonList
