import React from "react";
import '../css/recursos.css';
import '../css/menu.css';
import '../css/museos.css';

import guggenheimImg from '../assets/img/museos/guggenheim.jpg';
import bellasartesImg from '../assets/img/museos/bellasartes.jpg';
import museovascoImg from '../assets/img/museos/museovasco.jpg';
import pescadorImg from '../assets/img/museos/pescador.jpg';
import maritimoImg from '../assets/img/museos/maritimo.jpg';
import pazImg from '../assets/img/museos/paz.jpg';
import minaImg from '../assets/img/museos/mina.jpg';
import txakoliImg from '../assets/img/museos/txakoli.jpg';
import sacroImg from '../assets/img/museos/sacro.jpg';

const museosData = [
  {
    nombre: "Museo Guggenheim",
    direccion: "Abandoibarra Etorb., 2, Abando, 48009 Bilbao",
    img: guggenheimImg,
    alt: "Guggenheim",
    descripcion: `El Museo Guggenheim Bilbao es un museo de arte contemporáneo, inaugurado en 1997 y diseñado por el arquitecto Frank Gehry. 
Su edificio es reconocido internacionalmente por su innovadora arquitectura de formas curvilíneas y materiales. El museo alberga una destacada colección de arte moderno y contemporáneo, combinando exposiciones permanentes y temporales de gran calidad, y se ha convertido en un símbolo de Bilbao y en motor de su revitalización urbana y cultural.`
  },
  {
    nombre: "Museo de las Bellas Artes",
    direccion: "Museo Plaza, 2, Abando, 48009 Bilbao",
    img: bellasartesImg,
    alt: "Bellas Artes",
    descripcion: `El Museo de Bellas Artes de Bilbao, fundado en 1908 e inaugurado en 1914, es una de las instituciones culturales más importantes de la ciudad y de España. Su colección supera las 10.000 piezas, incluyendo pinturas, esculturas, obras sobre papel y artes aplicadas, abarcando desde el siglo XIII hasta la actualidad. 
El museo destaca por su amplitud cronológica y la diversidad de manifestaciones artísticas, con especial relevancia para la pintura española y la presencia de artistas vascos.`
  },
  {
    nombre: "Museo Vasco",
    direccion: "Unamuno Miguel Plaza, 4, Ibaiondo, 48006 Bilbao",
    img: museovascoImg,
    alt: "Museo Vasco",
    descripcion: `El Museo Vasco de Bilbao, inaugurado en 1921, está situado en pleno Casco Viejo. Su colección abarca la arqueología y la etnografía del pueblo vasco, mostrando la evolución histórica y cultural de la sociedad vasca a través de piezas y objetos que van desde la prehistoria hasta la vida tradicional, incluyendo salas dedicadas al mar y la pesca, la cultura pastoril, la industria y los oficios artesanales.`
  },
  {
    nombre: "Museo del Pescador",
    direccion: "Torrontero enparantza, 48370 Bermeo",
    img: pescadorImg,
    alt: "Museo del Pescador",
    descripcion: `Este es uno de los pocos museos en todo el mundo dedicado exclusivamente a mostrar el ámbito, vida y trabajo de los pescadores vascos, describiendo su vida y costumbres, sus organizaciones gremiales, las embarcaciones y las técnicas que han empleado a través del tiempo para la pesca y la comercialización del pescado.`
  },
  {
    nombre: "Museo Marítimo",
    direccion: "Ramón de la Sota Kaia, 1, Abando, 48013 Bilbao",
    img: maritimoImg,
    alt: "Museo Marítimo",
    descripcion: `El Museo Marítimo de Bilbao, conocido como Itsasmuseum Bilbao, está situado en la zona de los antiguos astilleros Euskalduna, junto a la ría de Bilbao. Su objetivo es difundir el patrimonio marítimo vinculado a la ría y la ciudad, mostrando la importancia del mar en la historia, la economía y la vida de Bilbao y Bizkaia.`
  },
  {
    nombre: "Museo de la Paz",
    direccion: "Foru Plaza, 1, 48300 Gernika-Lumo, Bizkaia",
    img: pazImg,
    alt: "Museo de la Paz",
    descripcion: `El Museo de la Paz es un museo temático dedicado a la cultura de la paz y los derechos humanos, inspirado en el trágico bombardeo de Gernika de 1937 durante la Guerra Civil española. Su exposición aborda tanto la historia de la ciudad y el bombardeo, como la reflexión sobre la paz y la reconciliación, combinando testimonios de supervivientes, materiales históricos y recursos interactivos.`
  },
  {
    nombre: "Museo de la Minería",
    direccion: "Bº Campodiego, S/N. 48500 Gallarta (Abanto-Zierbena)",
    img: minaImg,
    alt: "Museo de la Minería",
    descripcion: `El Museo de la Minería del País Vasco, está dedicado a la preservación y difusión de la historia minera de Bizkaia, especialmente la extracción de hierro que transformó la región. 
Alberga una amplia colección de herramientas, maquinaria, documentos, fotografías y objetos cotidianos relacionados con la vida minera. Destaca su proximidad a la mina Concha II y la recreación de espacios como una cantina de la época.`
  },
  {
    nombre: "Museo del Txakoli",
    direccion: "Basigoko Bide Nagusia, 3, 48130 Bakio",
    img: txakoliImg,
    alt: "Museo del Txakolí",
    descripcion: `El Museo del Txakoli, Txakolingunea, es un centro dedicado a la historia, la cultura y la elaboración del txakoli. A través de audiovisuales y recursos interactivos, el museo permite conocer el proceso de producción, la evolución de las bodegas y la importancia de la tradición vitivinícola local. Además, ofrece visitas guiadas, exposiciones temporales y catas de txakoli, mostrando tanto la variedad blanca como otras menos conocidas, como el txakoli rosado y tinto.`
  },
  {
    nombre: "Museo del Arte Sacro",
    direccion: "Encarnacion Plaza, 9B, Ibaiondo, 48006 Bilbao",
    img: sacroImg,
    alt: "Museo del Arte Sacro",
    descripcion: `El Museo de Arte Sacro fue fundado en 1961. Su objetivo es conservar, restaurar, estudiar y divulgar el patrimonio religioso de la Diócesis de Bilbao.
Posee una exposición permanente de más de 500 piezas, aunque cuenta con un extenso y creciente “fondo de armario” con obras de arte procedentes de los templos de Bizkaia y donaciones privadas. Además desde el Museo se cuida de todas las obras de arte dispersas por la geografía vizcaína.`
  },
];

function Museos() {
  return (
    <main className="museos-container">
      {museosData.map((museo, index) => (
        <div className="museo-card" key={index}>
          <img src={museo.img} alt={museo.alt} />
          <div className="museo-info">
            <h3>{museo.nombre}</h3>
            <p><strong>Dirección:</strong> {museo.direccion}</p>
            <p>{museo.descripcion}</p>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Museos;