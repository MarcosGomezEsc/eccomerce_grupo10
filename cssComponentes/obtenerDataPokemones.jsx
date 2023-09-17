import { useState, useContext } from "react";
import { PokemonContext } from "../contexto/FetchPokemones";
import PokemonCards from "./PokemonCards";
import '../cssComponentes/PokeCards.css'



function DataPokemo() {
  const { data, loading } = useContext(PokemonContext);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para almacenar el término de búsqueda
  const [lista, setlista] = useState("name"); // Estado para el tipo de orden (por nombre o por ID)

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (event) => {
    setlista(event.target.value); // Actualizar el tipo de orden cuando el usuario elija una opción de orden
  };

  // Función para ordenar los datos
  const sortedData = [...data].sort((a, b) => {
    if (lista === "name") {
      return a.name.localeCompare(b.name);
    } else if (lista === "id") {
      return a.id - b.id;
    }
    return 0;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar personaje"
        value={searchTerm}
        onChange={handleSearch}
      />
      
      <div>
        <select className="select" value={lista} onChange={handleSort}>
          <option value="name">Ordenar por nombre</option>
          <option value="id">Ordenar Precio</option>
        </select>
      </div>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <section>
          {data.length > 0 ? (
        data && sortedData
          .filter((item) => {
            const searchTermLower = searchTerm.toLowerCase();

          return (
            item.name.toLowerCase().includes(searchTermLower) ||
            (item.id*265).toString().includes(searchTermLower)
          );
        })

    .map((item, index) => (
      <article key={index}>
        <PokemonCards item={item}></PokemonCards>
      </article>
    ))
) : (
  <p>No se encontraron resultados.</p>
)}
        </section>
      )}
    </div>
  );
}

export default DataPokemo;
