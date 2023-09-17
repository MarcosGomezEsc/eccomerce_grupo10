import React, { useContext } from 'react';
import { PokemonContext } from '../contexto/FetchPokemones'; 


function PagesPokemones() {
    const { setCurrentPage } = useContext(PokemonContext);

    const handleLoadMore = () => {
      setCurrentPage((prevPage) => prevPage + 1); // Aumenta la página actual
    };
  
    return (
      <button onClick={handleLoadMore}>
        Cargar más personajes
      </button>
    );
  
}

export default PagesPokemones;
