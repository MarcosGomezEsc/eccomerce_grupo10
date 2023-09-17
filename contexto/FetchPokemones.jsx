import React, { useEffect, useState, createContext } from 'react';

// Reemplaza esta URL con tu enlace de API para obtener detalles de Pokémon
const API_URL = "https://pokeapi.co/api/v2/pokemon/";

export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}?offset=${(currentPage - 1) * 20}&limit=20`);
        if (!response.ok) {
          throw new Error('Error al obtener datos');
        }
        const newData = await response.json();
        
        // Mapear los resultados para obtener detalles adicionales, incluida la URL de la imagen
        const pokemonDataPromises = newData.results.map(async (pokemon) => {
          const pokemonResponse = await fetch(pokemon.url);
          if (!pokemonResponse.ok) {
            throw new Error(`Error al obtener detalles de ${pokemon.name}`);
          }
          const pokemonDetails = await pokemonResponse.json();
          return {
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            image: pokemonDetails.sprites.front_default, // URL de la imagen del Pokémon
          };
        });

        // Esperar a que se completen todas las solicitudes para obtener detalles
        const pokemonDetailsData = await Promise.all(pokemonDataPromises);

        setData(pokemonDetailsData);
      } catch (error) {
        console.error('Error con Fetch:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage]);

  const contextValue = { data, loading, setCurrentPage }; // Agregar setCurrentPage al contexto

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
}
