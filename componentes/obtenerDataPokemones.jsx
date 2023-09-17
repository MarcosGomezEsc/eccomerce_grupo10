import { useState, useContext } from "react";
import { PokemonContext } from "../contexto/FetchPokemones";

function DataPokemo() {
  const { data, loading } = useContext(PokemonContext);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para almacenar el término de búsqueda
  console.log(data)

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
          {data.results.filter((item) =>
              item.name.toLowerCase().includes(searchTerm.toLowerCase())) // Filtrar los resultados en función del término de búsqueda
            .map((items, index) => (
              <li key={index}>{items.name}</li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default DataPokemo;
