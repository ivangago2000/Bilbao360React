import { useEffect, useRef, useState } from 'react';
import '../css/mapa.css';
import 'leaflet/dist/leaflet.css';
import fondoMapa from '../assets/img/fondoMapa.jpg';

// Usa aquí tu array completo de lugares
const lugares = [
  { nombre: "Museo Guggenheim", tipo: "museos", lat: 43.2686, lng: -2.9333 },
  { nombre: "Museo de Bellas Artes", tipo: "museos", lat: 43.26597389, lng: -2.93785000 },
  { nombre: "Museo Vasco", tipo: "museos", lat: 43.258160, lng: -2.921580 },
  { nombre: "Museo del Pescador", tipo: "museos", lat: 43.4204, lng: -2.7211 },
  { nombre: "Museo Marítimo", tipo: "museos", lat: 43.2663, lng: -2.9462 },
  { nombre: "Museo de la Paz", tipo: "museos", lat: 43.3151, lng: -2.6784 },
  { nombre: "Museo de la Minería", tipo: "museos", lat: 43.3040, lng: -3.1060 },
  { nombre: "Museo del Txakoli", tipo: "museos", lat: 43.4289, lng: -2.8075 },
  { nombre: "Museo de Arte Sacro", tipo: "museos", lat: 43.253563, lng: -2.92083},

  { nombre: "Restaurante Nerua", tipo: "restaurantes", lat: 43.2680, lng: -2.9342 },
  { nombre: "Restaurante Cannon Etxea", tipo: "restaurantes", lat: 43.3939, lng: -2.7704 },
  { nombre: "Asador Etxebarri", tipo: "restaurantes", lat: 43.1159, lng: -2.5984 },
  { nombre: "Restaurante Azurmendi", tipo: "restaurantes", lat: 43.2604, lng: -2.8154 },
  { nombre: "Restaurante Garena", tipo: "restaurantes", lat: 43.1293, lng: -2.7659 }, 
  { nombre: "Restaurante Porrue", tipo: "restaurantes", lat: 43.2674, lng: -2.9333 }, 
  { nombre: "Restaurante Tamarises", tipo: "restaurantes", lat: 43.3433, lng: -3.0117 },
  { nombre: "Restaurante La Viña de Henao", tipo: "restaurantes", lat: 43.2621, lng: -2.9398 },
  { nombre: "La Despensa de Etxanobe", tipo: "restaurantes", lat: 43.2641, lng: -2.9342},

  { nombre: "Basílica de Begoña", tipo: "monumentos", lat: 43.258686, lng: -2.913847 },
  { nombre: "Teatro Arriaga", tipo: "monumentos", lat: 43.259548, lng: -2.924741 },
  { nombre: "Las Cruces de Urkiola", tipo: "monumentos", lat: 43.104094, lng: -2.644245 },
  { nombre: "Puppy", tipo: "monumentos", lat: 43.267617, lng: -2.934681 },
  { nombre: "Puente de Vizcaya", tipo: "monumentos", lat: 43.3231, lng: -3.0169 },
  { nombre: "San Juan de Gaztelugatxe", tipo: "monumentos", lat: 43.4470, lng: -2.7850 },
  { nombre: "Virgen de la Antigua de Orduña", tipo: "monumentos", lat: 42.9817, lng: -3.0372 },
  { nombre: "Puente Viejo de Balmaseda", tipo: "monumentos", lat: 43.1928342, lng: -3.1954329 },
  { nombre: "Castillo de Butrón", tipo: "monumentos", lat: 43.3717, lng: -2.9146 },
  { nombre: "Cueva de Santimamiñe", tipo: "monumentos", lat: 43.3456, lng: -2.6368 },
  { nombre: "Castillo de Arteaga", tipo: "monumentos", lat: 43.3521, lng: -2.65399 },
  { nombre: "Santa Katalina Itsasargia", tipo: "monumentos", lat: 43.3767, lng: -2.5100 },

  { nombre: "Parque de Doña Casilda", tipo: "parques", lat: 43.2642, lng: -2.9457 },
  { nombre: "Parque de Artxanda", tipo: "parques", lat: 43.274517, lng: -2.921643 },
  { nombre: "Parque Etxebarria", tipo: "parques", lat: 43.262524, lng: -2.918693 },
  { nombre: "Parque Europa", tipo: "parques", lat: 43.25382, lng: -2.90479 },
  { nombre: "Parque Munoa", tipo: "parques", lat: 43.2964, lng: -3.0116 },
  { nombre: "Parque de Montefuerte", tipo: "parques", lat: 43.2385, lng: -2.9143 },
  { nombre: "Parque de Mendikosolo", tipo: "parques", lat: 43.21075, lng: -2.89796 },
  { nombre: "Parque de La Muera", tipo: "parques", lat: 43.00993, lng: -3.00581 },
  { nombre: "Pinar de Gorliz", tipo: "parques", lat: 43.41828333, lng: -2.93748333 },
  { nombre: "Parque Akarlanda", tipo: "parques", lat: 43.32561, lng: -2.9409 },
  { nombre: "Parque de los Pueblos de Europa", tipo: "parques", lat: 43.31358, lng: -2.68083 },

  { nombre: "Playa de La Arena", tipo: "playas", lat: 43.3477, lng: -3.1183 },
  { nombre: "Playa de Ereaga", tipo: "playas", lat: 43.344622, lng: -3.012481 },
  { nombre: "Playa de Arrigunaga", tipo: "playas", lat: 43.3561, lng: -3.0194 },
  { nombre: "Playa de La Salvaje", tipo: "playas", lat: 43.3824, lng: -3.0061 },
  { nombre: "Playa de Plentzia / Gorliz", tipo: "playas", lat: 43.413611, lng: -2.945833 },
  { nombre: "Playa de Bakio", tipo: "playas", lat: 43.4302, lng: -2.8046 },
  { nombre: "Playa de Mundaka", tipo: "playas", lat: 43.4047, lng: -2.6993 },
  { nombre: "Playa de San Antonio", tipo: "playas", lat: 43.3863, lng: -2.69014 },
  { nombre: "Playa de Laida", tipo: "playas", lat: 43.407100, lng: -2.678200 },
  { nombre: "Playa de Laga", tipo: "playas", lat: 43.409200, lng: -2.656599 },
  { nombre: "Playa de Isuntza", tipo: "playas", lat: 43.36288, lng: -2.50068 },
  { nombre: "Playa de Arrigorri", tipo: "playas", lat: 43.3231, lng: -2.4191 },

  { nombre: "Pagasarri", tipo: "montes", lat: 43.218611, lng: -2.943056 },
  { nombre: "Malmasín", tipo: "montes", lat: 43.228333, lng: -2.901389 },
  { nombre: "Ganekogorta", tipo: "montes", lat: 43.203335, lng: -2.978056 },
  { nombre: "Serantes", tipo: "montes", lat: 43.335, lng: -3.061 },
  { nombre: "Gorbea", tipo: "montes", lat: 43.035010, lng: -2.779883 },
  { nombre: "Anboto", tipo: "montes", lat: 43.08908, lng: -2.59536 },
  { nombre: "Oiz", tipo: "montes", lat: 43.22867, lng: -2.59004 },
  { nombre: "Coliza", tipo: "montes", lat: 43.20074, lng: -3.25407 },
  { nombre: "Mugarra", tipo: "montes", lat: 43.15254, lng: -2.67950 }
];

function Mapa() {
  const [filtros, setFiltros] = useState({
    restaurantes: true,
    museos: false,
    parques: false,
    monumentos: false,
    playas: false,
    montes: false,
  });

  const mapRef = useRef(null);
  const markersRef = useRef([]);

  // Manejar cambios en los checkboxes
  const handleCheckbox = (e) => {
    setFiltros({
      ...filtros,
      [e.target.id]: e.target.checked,
    });
  };

  // Limpiar marcadores del mapa
  const limpiarMarcadores = () => {
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];
  };

  // Añadir marcadores según los filtros
  const mostrarMarcadores = (L) => {
    limpiarMarcadores();
    Object.keys(filtros).forEach(tipo => {
      if (filtros[tipo]) {
        lugares.filter(lugar => lugar.tipo === tipo).forEach(lugar => {
          const marker = L.marker([lugar.lat, lugar.lng])
            .addTo(mapRef.current)
            .bindPopup(`<strong>${lugar.nombre}</strong>`);
          markersRef.current.push(marker);
        });
      }
    });
  };

  // Inicializar el mapa solo una vez
  useEffect(() => {
    let L;
    import('leaflet').then(Leaflet => {
      L = Leaflet;
      if (!mapRef.current) {
        mapRef.current = L.map('map', {
          center: [43.2630, -2.9350],
          zoom: 13,
        });
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(mapRef.current);
      }
    });

    // Limpiar mapa al desmontar
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Al pulsar el botón, mostrar los marcadores de los filtros seleccionados
  const handleBuscar = () => {
    import('leaflet').then(L => {
      if (mapRef.current) {
        mostrarMarcadores(L);
      }
    });
  };

  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        backgroundImage: `url(${fondoMapa})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }} aria-hidden="true"></div>
      <main className="contenedor">
        <section className="formulario">
          <h3>¿Qué te interesa buscar?</h3>
          <div className="checkboxes">
            <label><input type="checkbox" id="restaurantes" checked={filtros.restaurantes} onChange={handleCheckbox}/> Restaurantes</label>
            <label><input type="checkbox" id="museos" checked={filtros.museos} onChange={handleCheckbox}/> Museos</label>
            <label><input type="checkbox" id="parques" checked={filtros.parques} onChange={handleCheckbox}/> Parques</label>
            <label><input type="checkbox" id="monumentos" checked={filtros.monumentos} onChange={handleCheckbox}/> Monumentos</label>
            <label><input type="checkbox" id="playas" checked={filtros.playas} onChange={handleCheckbox}/> Playas</label>
            <label><input type="checkbox" id="montes" checked={filtros.montes} onChange={handleCheckbox}/> Montes</label>
          </div>
          <button id="generar" onClick={handleBuscar} style={{marginTop: '10px'}}>Buscar</button>
        </section>
        <div id="map" style={{ height: '500px', width: '100%', marginTop: '20px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}></div>
      </main>
    </>
  );
}

export default Mapa;
