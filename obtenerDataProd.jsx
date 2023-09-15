import React from 'react';
import { useDataContext } from '../cars.jsx'

function MiComponente() {
  const { data, loading } = useDataContext();

  if (loading) {
    return <div>Cargando datos...</div>;
  }

  return (
    <div>
      <h1>Mis Datos</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default MiComponente;