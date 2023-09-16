import { useContext } from "react";
import { RickAndMortyContext } from "../contexto/ProductoContex"; // Asegúrate de proporcionar la ruta correcta

function RickAndMortyComponent() {
  // Usar el contexto
  const { products, isLoading, error } = useContext(RickAndMortyContext);

  // Ahora puedes acceder a 'products', 'isLoading', y 'error' aquí
  // Utiliza estos valores en tu componente según sea necesario
    console.log(products.results)
  return (
    <div>
      {isLoading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <h2>Lista de Productos</h2>
          <ul>
            {products.results.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default RickAndMortyComponent;
