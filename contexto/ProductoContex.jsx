// Importar las dependencias necesarias
import { createContext, useEffect, useState } from "react";
import { getAllEpisodes } from "../servicio/productsService.jsx"; // Corregir la importación
import { initialProduct } from "../servicio/initialProduct.jsx"; // Corregir la importación

// Crear el contexto de productos
export const RickAndMortyContext = createContext([initialProduct]);

export function RickAndMortyProvider({ children }) {
  // Variables de estado para los juegos, la carga y el error
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para obtener los datos de los productos
  const fetchData = async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getAllEpisodes(); // Corregir el nombre de la función
      setProducts(data);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Efecto para inicializar el contexto
  useEffect(() => {
    fetchData();
  }, []);

  // Devolver el proveedor de contexto
  const contextValues = { products, isLoading, error };

  return (
    <RickAndMortyContext.Provider value={contextValues}> {/* Corregir el nombre del contexto */}
      {children}
    </RickAndMortyContext.Provider>
  );
}


// Función para usar el contexto en componentes
// export function useDataContext() {
//   return ProductsContext;
// }