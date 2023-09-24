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
    const [carrito, setCarrito] = useState({}); // Inicialmente el carrito está vacío
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
        const productoId = selectedProduct.id;
        const cantidadExistente = carrito[productoId] || 0; // Obtenemos la cantidad existente en el carrito
        const nuevaCantidad = cantidadExistente + 1;
  
        // Actualizamos el carrito con la nueva cantidad
        setCarrito({
          ...carrito,
          [productoId]: nuevaCantidad,
        });
  
        closePopup();
        
        // Calculamos el precio total
        const nuevoPrecioTotal = Object.keys(carrito).reduce((total, productId) => {
          const producto = data.find((item) => item.id === parseInt(productId));
          if (producto) {
            return total + producto.id * 265 * carrito[productId];
          }
          return total;
        }, 0);
        setPrecioTotal(nuevoPrecioTotal);
      }
    };
    
    const ResetBtn=()=>{
      setPrecioTotal("");
      setCarrito("")
    }

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
            <p>Pokemon: {selectedProduct.name}</p>
            <p>Precio: {parseInt(selectedProduct.id, 10) * 265}</p>
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
      <h3>Pokemon <span>____</span> Cantidad <span>___</span> Precio</h3>
    <ul>
          {Object.keys(carrito).map((productId, index) => {
            const producto = data.find((item) => item.id === parseInt(productId));
            if (producto) {
              return (
                <li key={index}>
                  {producto.name}<span>__</span>{carrito[productId]}<span>__</span>${(producto.id * 265 * carrito[productId])}
                </li>
              );
            }
            return null;
          })}
        </ul>
    <p className="Total">Total: ${precioTotal}</p>
    <button className="btn_eliminar" onClick={ResetBtn}>Eliminar Pedido</button>
  </div>
    </div>
  );
}

export default DataPokemo;

