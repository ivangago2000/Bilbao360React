import React from 'react';

function FiltrarPorTipo({ lugares, tipo }) {
  const lugaresFiltrados = lugares.filter(lugar => lugar.tipo === tipo);

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
