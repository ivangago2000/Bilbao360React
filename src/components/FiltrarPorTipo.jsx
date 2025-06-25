import React from 'react';
import { filterLugarByTipo } from '../services/lugarFilters';

function FiltrarPorTipo({ lugares, tipo }) {
  const lugaresFiltrados = filterLugarByTipo(lugares, tipo);

  return (
    <div>
      <h2>Lugares de tipo: {tipo}</h2>
      <ul>
        {lugaresFiltrados.map((lugar, index) => (
          <li key={index}>{lugar.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default FiltrarPorTipo;
