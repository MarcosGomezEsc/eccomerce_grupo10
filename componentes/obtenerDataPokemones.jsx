import { useState, useContext, useCallback } from "react";
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
    setlista(event.target.value); // Actualizo el tipo de orden cuando el usuario elija una opción de orden
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
    //boton comprar

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [carrito, setCarrito] = useState([]); // Inicialmente el carrito está vacío
    const [precioTotal, setPrecioTotal] = useState(0);


    const openPopup = useCallback((product) => {
      setSelectedProduct(product);
      setIsPopupOpen(true);
    }, [setSelectedProduct, setIsPopupOpen]);
    
      
    const closePopup = useCallback(() => {
        setIsPopupOpen(false);
    }, []);

    const addToCart = () => {
      if (selectedProduct) {
        const productoAgregado = {
          name: selectedProduct.name,
          id: selectedProduct.id,
        };
    
        // Agrego el nuevo producto al carrito
        setCarrito((prevCarrito) => [...prevCarrito, productoAgregado]);
        closePopup();
    
        // Calculo el precio total sumando los ids(x265 para el precio) en el carrito actualizado
        const nuevoPrecioTotal = carrito.reduce((total, producto) => total + (producto.id*265), (selectedProduct.id*265));
        setPrecioTotal(nuevoPrecioTotal);
      }
    };
    

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

        
        {isPopupOpen &&  sortedData &&  (
          <div className="popup">
            <img src={sortedData.image} alt={sortedData.name} />
            <p>Precio {parseInt(selectedProduct.id, 10) * 265}</p>
        <p>¿Desea comprar este producto?</p>
        <button onClick={() => closePopup()}>Cancelar</button>
        <button onClick={() => addToCart()}>Confirmar</button>
          </div>
        )}


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
        <button onClick={() => openPopup(item)}>Comprar</button>
      </article>
    ))
    ) : (
      <p>No se encontraron resultados.</p>
      )}
        </section>
      )}
      
      <div className="carrito">
    <h2>Carrito de Compras</h2>
    <ul>
      {carrito.map((producto, index) => (
        <li key={index}>
          {producto.name}_____________${(producto.id)*265}
        </li>
      ))}
    </ul>
    <p>Total: {precioTotal}</p>
  </div>
    </div>
  );
}

export default DataPokemo;

