
import React, { createContext, useContext, useEffect, useState } from 'react';

// Creamos un contexto
const DataContext = createContext();

// Función asincrónica para cargar los datos desde un archivo JSON
async function fetchData() {
  try {
    const response = await fetch('../../ApiAutos.json'); // Reemplaza '/data.json' con la ruta correcta a tu archivo JSON
    if (!response.ok) {
      throw new Error('No se pudo cargar el archivo JSON');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error al cargar los datos: ${error.message}`);
  }
}

// Proveedor del contexto que utiliza la función asincrónica
export function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
}

// Función para usar el contexto en componentes
export function useDataContext() {
  return useContext(DataContext);
}
