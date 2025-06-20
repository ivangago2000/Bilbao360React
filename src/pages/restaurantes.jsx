import '../css/recursos.css';
import '../css/menu.css';
import '../css/restaurantes.css';

import neruaImg from '../assets/img/restaurantes/nerua.jpg';
import cannonImg from '../assets/img/restaurantes/cannon.jpg';
import etxebarriImg from '../assets/img/restaurantes/etxebarri.jpg';
import azurmendiImg from '../assets/img/restaurantes/azurmendi.jpg';
import garenaImg from '../assets/img/restaurantes/garena.jpg';
import etxanobeImg from '../assets/img/restaurantes/etxanobe.jpg';
import henaoImg from '../assets/img/restaurantes/henao.jpg';
import porrueImg from '../assets/img/restaurantes/porrue.jpg';
import tamarisesImg from '../assets/img/restaurantes/tamarises.jpg';

const restaurantesData = [
  {
    img: neruaImg,
    alt: "Nerua",
    nombre: "Restaurante Nerua",
    direccion: "Abandoibarra Etorb., 2, Abando, 48001 Bilbao",
    descripcion: "Restaurante exclusivo en el Museo Guggenheim, que sirve un menú de alta cocina con ingredientes de temporada maridado con vinos.",
  },
  {
    img: cannonImg,
    alt: "Cannon",
    nombre: "Restaurante Cannon Etxea",
    direccion: "Barrio Mañu Alto de Sollube, 48370 Bermeo",
    descripcion: "Jardín y zona infantil en restaurante especializado en pescado y carne a la parrilla con salón con ventanales.",
  },
  {
    img: etxebarriImg,
    alt: "Etxebarri",
    nombre: "Asador Etxebarri",
    direccion: "San Juan Plaza, 1, 48291 Axpe",
    descripcion: "Exclusivo restaurante de cocina vasca en un pueblo que sirve carne y pescado a la brasa y ofrece un menú degustación.",
  },
  {
    img: azurmendiImg,
    alt: "Azurmendi",
    nombre: "Restaurante Azurmendi",
    direccion: "Barrio Leguina, s/n, 48195 Larrabetzu",
    descripcion: "Cocina moderna con una presentación artística en un lustroso restaurante sostenible situado en la ladera de una colina.",
  },
  {
    img: garenaImg,
    alt: "Garena",
    nombre: "Restaurante Garena",
    direccion: "Bº Iturriotz, 11, 48141 Lamindao",
    descripcion: "Buen producto, brasas, caldos y guisos para transformar nuestra tradición gastronómica en platos innovadores, llenos de frescura e identidad.",
  },
  {
    img: etxanobeImg,
    alt: "Etxanobe",
    nombre: "Restaurante Etxanobe",
    direccion: "Avenida Abandoibarra, 4, 48011 Bilbao",
    descripcion: "Restaurante de cocina creativa con vistas a la ría y una carta de autor reconocida internacionalmente.",
  },
  {
    img: henaoImg,
    alt: "Henao",
    nombre: "Restaurante Henao",
    direccion: "Calle Henao, 17, 48009 Bilbao",
    descripcion: "Cocina vasca moderna en un ambiente elegante y contemporáneo en el centro de Bilbao.",
  },
  {
    img: porrueImg,
    alt: "Porrue",
    nombre: "Restaurante Porrue",
    direccion: "Alameda Recalde, 4, 48009 Bilbao",
    descripcion: "Restaurante especializado en parrilla y producto local, con una cuidada selección de vinos.",
  },
  {
    img: tamarisesImg,
    alt: "Tamarises",
    nombre: "Restaurante Tamarises",
    direccion: "Muelle Ereaga, 4, 48992 Getxo",
    descripcion: "Restaurante con vistas al mar, especializado en arroces y pescados frescos de la costa vasca.",
  },
];

function Restaurantes() {
  return (
    <main className="restaurantes-container">
      {restaurantesData.map(({ img, alt, nombre, direccion, descripcion }, i) => (
        <div key={i} className="restaurante-card">
          <img src={img} alt={alt} />
          <div className="restaurante-info">
            <h3>{nombre}</h3>
            <p><strong>Dirección:</strong> {direccion}</p>
            <p>{descripcion}</p>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Restaurantes;
