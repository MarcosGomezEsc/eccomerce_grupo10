import React, { useContext } from 'react';
import { PokemonContext } from '../contexto/FetchPokemones'; 


function PagesPokemones() {
    const { setCurrentPage } = useContext(PokemonContext);

    const MasPersonajes = () => {
      setCurrentPage((prevPage) => prevPage + 1); // Aumenta la página actual
    }; 
    const MenosPersonajes = () => {
      setCurrentPage((prevPage) => prevPage - 1); // Aumenta la página actual
    };
  
    return (
      <>
      <button onClick={MenosPersonajes}>
        Cargar menos personajes
      </button>
      
      <button onClick={MasPersonajes}>
        Cargar más personajes </button>   
      </>
    );
  
}

export default PagesPokemones;
