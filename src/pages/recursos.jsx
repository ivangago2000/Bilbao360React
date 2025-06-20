import { useNavigate } from 'react-router-dom';
import '../css/recursos.css';
import '../css/menu.css';
import restauranteImg from '../assets/img/recursosContainer/restaurante.jpg';
import museoImg from '../assets/img/recursosContainer/museo.jpg';
import monumentosImg from '../assets/img/recursosContainer/monumentos.jpg';
import parqueImg from '../assets/img/recursosContainer/parque.jpg';
import ocioImg from '../assets/img/recursosContainer/ocio.jpg';
import rutasImg from '../assets/img/recursosContainer/rutas.jpg';
import montesImg from '../assets/img/recursosContainer/montes.jpg';
import playasImg from '../assets/img/recursosContainer/playas.jpg';
import fiestasImg from '../assets/img/recursosContainer/fiestas.jpg';

import Menu from '../components/menu';

function Recursos() {
  const navigate = useNavigate();
  return (
    <main className="recursos-container">
      <div className="recurso-card" style={{ backgroundImage: `url(${restauranteImg})` }} onClick={() => navigate('/restaurantes')} tabIndex={0} role="button">
        <span>Restaurantes</span>
      </div>
      <div className="recurso-card" style={{ backgroundImage: `url(${museoImg})` }} onClick={() => navigate('/museos')} tabIndex={0} role="button">
        <span>Museos</span>
      </div>
      <div className="recurso-card" style={{ backgroundImage: `url(${monumentosImg})` }} onClick={() => navigate('/monumentos')} tabIndex={0} role="button">
        <span>Monumentos</span>
      </div>
      <div className="recurso-card" style={{ backgroundImage: `url(${parqueImg})` }} onClick={() => navigate('/parques')} tabIndex={0} role="button">
        <span>Parques</span>
      </div>
      <div className="recurso-card" style={{ backgroundImage: `url(${ocioImg})` }} onClick={() => navigate('/ocio')} tabIndex={0} role="button">
        <span>Ocio</span>
      </div>
      <div className="recurso-card" style={{ backgroundImage: `url(${rutasImg})` }} onClick={() => navigate('/rutas')} tabIndex={0} role="button">
        <span>Rutas</span>
      </div>
      <div className="recurso-card" style={{ backgroundImage: `url(${montesImg})` }} onClick={() => navigate('/montes')} tabIndex={0} role="button">
        <span>Montes</span>
      </div>
      <div className="recurso-card" style={{ backgroundImage: `url(${playasImg})` }} onClick={() => navigate('/playas')} tabIndex={0} role="button">
        <span>Playas</span>
      </div>
      <div className="recurso-card" style={{ backgroundImage: `url(${fiestasImg})` }} onClick={() => navigate('/fiestas')} tabIndex={0} role="button">
        <span>Fiestas</span>
      </div>
    </main>
  );
}

export default Recursos;
