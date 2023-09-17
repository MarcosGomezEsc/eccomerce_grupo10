import { useState, useContext } from "react";
import { RickAndMortyContext } from "../contexto/FetchRandM";

function DataRickAndMorty() {
  const { data, loading } = useContext(RickAndMortyContext);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para almacenar el término de búsqueda

  const handleSearch = (event) => {
    setSearchTerm(event.target.value); // Actualizar el término de búsqueda cuando el usuario escriba en el campo de búsqueda
  };

  return (
    <div>
      <h1>Mi Componente</h1>
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
          {data.results
            .filter((item) =>
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) // Filtrar los resultados en función del término de búsqueda
            .map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default DataRickAndMorty;
