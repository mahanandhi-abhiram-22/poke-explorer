import React from 'react'

const PokemonCard = ({ pokemon }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
    <img src={pokemon.sprite} alt={pokemon.name} className="w-24 h-24 mx-auto" />
    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{pokemon.name}</h3>
    <p className="text-gray-500 dark:text-gray-300">#{pokemon.id.toString().padStart(3, '0')}</p>
    <div className="mt-2">
      {pokemon.types.map(type => (
        <span key={type} className={`inline-block bg-gray-200 dark:bg-gray-600 py-1 px-2 mr-1 rounded-md text-xs capitalize`}>{type}</span>
      ))}
    </div>
  </div>
)

export default PokemonCard
