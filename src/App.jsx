import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import "./css/index.css";
import "./css/menu.css";

import Navbar from "./components/menu";
import Recursos from "./pages/recursos";
import Restaurantes from "./pages/restaurantes";
import Playas from "./pages/playas";
import Parques from "./pages/parques";
import Ocio from "./pages/ocio";
import Museos from "./pages/museos";
import Monumentos from "./pages/monumentos";
import Rutas from "./pages/rutas";
import Mapa from "./pages/mapa";
import Formulario from "./pages/formulario";
import Fiestas from "./pages/fiestas";
import Montes from "./pages/montes";

const Home = () => {
  return (
    <div className="contenido">
      <div className="texto-central">
        <h1>BIENVENIDO A BILBAO360</h1>
        <p>Explora Bilbao y su entorno como nunca antes.</p>
        <p>
          Te ofrecemos una mirada completa -360 grados- a lo mejor del País Vasco.
          <br />
          Descubre sus rincones más auténticos, sus paisajes entre montañas y mar,
          su cultura vibrante, y sus sabores únicos.
        </p>
        <p>
          Con mapas interactivos, información y guías locales, planificar tu viaje
          es más fácil, inspirador y cercano.
        </p>
        <p>
          Desde el Guggenheim hasta San Juan de Gaztelugatxe, desde rutas rurales
          hasta escapadas a la costa, Bilbao 360 es tu punto de partida.
        </p>
      </div>
    </div>
  );
};

// Componente para controlar el Navbar según la ruta
function AppWrapper() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/formulario";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-H2PN2WG2GF";
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-H2PN2WG2GF");
  }, []);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recursos" element={<Recursos />} />
        <Route path="/restaurantes" element={<Restaurantes />} />
        <Route path="/playas" element={<Playas />} />
        <Route path="/parques" element={<Parques />} />
        <Route path="/ocio" element={<Ocio />} />
        <Route path="/museos" element={<Museos />} />
        <Route path="/monumentos" element={<Monumentos />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/fiestas" element={<Fiestas />} />
        <Route path="/montes" element={<Montes />} />
        <Route path="/rutas" element={<Rutas />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;








