import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const lugares = [
  { nombre: 'Museo Guggenheim', tipo: 'museos', lat: 43.2686, lng: -2.9333 },
  { nombre: 'Restaurante Nerua', tipo: 'restaurantes', lat: 43.2680, lng: -2.9342 },
  { nombre: 'Parque de Doña Casilda', tipo: 'parques', lat: 43.2642, lng: -2.9457 },
  // ... más lugares
];

export default function Itinerario() {
  const [preferencias, setPreferencias] = useState({
    restaurantes: false,
    museos: false,
    parques: false,
    monumentos: false,
    playas: false,
    montes: false,
  });

  const mapaRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    if (!mapaRef.current) {
      mapaRef.current = L.map('mapa').setView([43.2630, -2.93499], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapaRef.current);
    }

    return () => {
      if (mapaRef.current) {
        mapaRef.current.remove();
      }
    };
  }, []);

  function handleCheckboxChange(e) {
    const { name, checked } = e.target;
    setPreferencias(prev => ({ ...prev, [name]: checked }));
  }

  function limpiarMapa() {
    markersRef.current.forEach(marker => mapaRef.current.removeLayer(marker));
    markersRef.current = [];
  }

  function optimizarItinerario(lugares) {
    return lugares.sort((a, b) => a.lat - b.lat);
  }

  function generarItinerario() {
    const lugaresSeleccionados = lugares.filter(lugar => preferencias[lugar.tipo]);

    if (lugaresSeleccionados.length === 0) {
      alert('Selecciona al menos una preferencia.');
      return;
    }

    limpiarMapa();

    const itinerario = optimizarItinerario(lugaresSeleccionados);

    itinerario.forEach((lugar, index) => {
      const marker = L.marker([lugar.lat, lugar.lng])
        .addTo(mapaRef.current)
        .bindPopup(`<strong>${index + 1}. ${lugar.nombre}</strong>`);
      markersRef.current.push(marker);
    });
  }

  return (
    <div>
      <h2>Selecciona tus preferencias</h2>
      <form>
        {Object.keys(preferencias).map(tipo => (
          <label key={tipo} style={{ marginRight: 10 }}>
            <input
              type="checkbox"
              name={tipo}
              checked={preferencias[tipo]}
              onChange={handleCheckboxChange}
            />
            {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
          </label>
        ))}
      </form>

      <button type="button" onClick={generarItinerario} style={{ marginTop: '10px' }}>
        Generar Itinerario
      </button>

      <div id="mapa" style={{ height: '400px', marginTop: '20px' }}></div>
    </div>
  );
}

// Exporto la función para testing
export function limpiarMapa(markersRef, mapaRef) {
  markersRef.current.forEach(marker => mapaRef.current.removeLayer(marker));
  markersRef.current = [];
}

// Exportar la función optimizarItinerario para pruebas
export function optimizarItinerario(lugares) {
  return lugares.sort((a, b) => a.lat - b.lat);
}
