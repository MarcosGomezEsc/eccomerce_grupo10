import { useState, useContext } from "react";
import { PokemonContext } from "../contexto/FetchPokemones";

function DataPokemo() {
  const { data, loading } = useContext(PokemonContext);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para almacenar el término de búsqueda

  const handleSearch = (event) => {
    setSearchTerm(event.target.value); // Actualizar el término de búsqueda cuando el usuario escriba en el campo de búsqueda
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar personaje"
        value={searchTerm}
        onChange={handleSearch}
      />
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {data.length > 0 ? (
            data.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
              ).map((item, index) => (
                <article key={index}>
                <h1>{item.name}</h1>
                
                <div>
                  <img src={item.image} alt={item.name} />
                </div>
              </article>
            ))
            ) : (
              <p>No se encontraron resultados.</p>
              )}
        </ul>
      )}
    </div>
  );
}

export default DataPokemo;
