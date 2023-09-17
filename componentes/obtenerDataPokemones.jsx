import { useState, useContext } from "react";
import { PokemonContext } from "../contexto/FetchPokemones";
import PokemonCards from "./PokemonCards";
import '../cssComponentes/PokeCards.css'



function DataPokemo() {
  const { data, loading } = useContext(PokemonContext);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para almacenar el término de búsqueda

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
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
        <section>
          {data.length > 0 ? (
  data
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
