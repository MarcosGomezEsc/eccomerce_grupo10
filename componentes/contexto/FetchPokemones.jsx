import React, { useEffect, useState, createContext } from 'react';

// Reemplaza esta URL con tu enlace de API

const API_URL = "https://pokeapi.co/api/v2/pokemon/";

export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual

  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}?page=${currentPage}`);
        if (!response.ok) {
          throw new Error('Error al obtener datos');
        }
        const newData = await response.json();
        setData(newData);
        
         
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