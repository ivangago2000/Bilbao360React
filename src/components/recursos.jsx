import React from 'react';

export default function Recursos({ recursos }) {
  // recursos es un array con los datos que renderizan las tarjetas

  return (
    <div className="recursos-container">
      {recursos.map((recurso, idx) => (
        <div
          key={idx}
          className="recurso-card"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            if (recurso.url) {
              window.location.href = recurso.url;
            }
          }}
        >
          {/* Aquí muestras el contenido de la tarjeta */}
          <a href={recurso.url} onClick={e => e.preventDefault()}>
            {/* Evitamos que el clic en el enlace navegue directamente, porque navegamos con el div */}
            {recurso.titulo}
          </a>
          {/* Otros contenidos del recurso */}
        </div>
      ))}
    </div>
  );
}
