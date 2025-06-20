import { Link } from 'react-router-dom';
import '../css/menu.css';
import logo from '../assets/img/logo/logo.png';
import React from 'react';

function Menu() {
  // Estado para controlar el menú hamburguesa
  const [open, setOpen] = React.useState(false);

  // Cierra el menú al navegar
  React.useEffect(() => {
    const closeMenu = () => setOpen(false);
    window.addEventListener('popstate', closeMenu);
    return () => window.removeEventListener('popstate', closeMenu);
  }, []);

  return (
    <div className="menu">
      <img src={logo} alt="Logo" className="logo" />
      <nav>
        <div className={`menu-links${open ? ' active' : ''}`} id="menuLinks">
          <Link to="/" onClick={() => setOpen(false)}>INICIO</Link>
          <Link to="/recursos" onClick={() => setOpen(false)}>RECURSOS</Link>
          <Link to="/mapa" onClick={() => setOpen(false)}>MAPA</Link>
          <Link to="/formulario" onClick={() => setOpen(false)}>FORMULARIO</Link>
        </div>
      </nav>
      <button
        className="menu-toggle"
        id="menuToggle"
        aria-label="Abrir menú"
        onClick={() => setOpen(o => !o)}
      >
        ☰
      </button>
    </div>
  );
}

export default Menu;

