import React from "react";
import "../css/recursos.css";
import "../css/menu.css";
import "../css/parques.css";

import casildaImg from "../assets/img/parques/casilda.jpg";
import artxandaImg from "../assets/img/parques/artxanda.jpg";
import etxebarriaImg from "../assets/img/parques/etxebarria.jpg";
import europaImg from "../assets/img/parques/europa.jpg";
import munoaImg from "../assets/img/parques/munoa.jpg";
import montefuerteImg from "../assets/img/parques/montefuerte.jpg";
import mendikosoloImg from "../assets/img/parques/mendikosolo.jpg";
import lamueraImg from "../assets/img/parques/lamuera.jpg";
import gorlizImg from "../assets/img/parques/gorliz.jpg";
import akarlandaImg from "../assets/img/parques/akarlanda.jpg";
import gerinkaImg from "../assets/img/parques/gernika.jpg";
import viveroImg from "../assets/img/parques/vivero.jpg";

const parques = [
  {
    nombre: "Parque de Doña Casilda",
    direccion: "Abando, 48009 Bilbao",
    descripcion: `El Parque de Doña Casilda Iturrizar, conocido como el pulmón verde de Bilbao, es un emblemático jardín de estilo inglés situado en el centro de la ciudad. Destaca por su amplia variedad de especies botánicas, un gran estanque habitado por aves —lo que le ha valido el apodo de “parque de los Patos”—, fuentes ornamentales, una pérgola para actividades culturales, esculturas y monumentos, así como el Museo de Bellas Artes en su interior. Es un espacio ideal para el paseo, el descanso y la conexión con la naturaleza.`,
    imagen: casildaImg,
    alt: "Doña Casilda"
  },
  {
    nombre: "Parque de Artxanda",
    direccion: "Enekuri Artxanda Errepidea, 70, 48015 Bilbao",
    descripcion: `El Parque del Mirador de Artxanda es un extenso pulmón verde situado en la cima del monte Artxanda. Es famoso por ofrecer las mejores vistas panorámicas de Bilbao. El parque cuenta con amplias zonas ajardinadas, senderos para caminar y áreas recreativas, lo que lo convierte en un lugar ideal para pasear, hacer deporte o relajarse en plena naturaleza. Además, alberga monumentos históricos, como restos de trincheras y la escultura “La Huella”, y se puede acceder fácilmente en funicular, coche, bicicleta o a pie.`,
    imagen: artxandaImg,
    alt: "Artxanda"
  },
  {
    nombre: "Parque Etxebarria",
    direccion: "Ibaiondo, 48005 Bilbao",
    descripcion: `El Parque Etxebarria es el espacio verde más grande de Bilbao, situado en el distrito de Begoña, junto al Casco Viejo. Ocupa casi 19 hectáreas en el solar de una antigua fundición de acero, de la que aún se conserva una chimenea como homenaje a su pasado industrial. El parque, ubicado en una ladera, ofrece excelentes vistas panorámicas del centro de la ciudad y de la ría, y es un lugar muy popular para pasear, hacer deporte, disfrutar de zonas infantiles y celebrar eventos como la Semana Grande de Bilbao.`,
    imagen: etxebarriaImg,
    alt: "Etxebarria"
  },
  {
    nombre: "Parque Europa",
    direccion: "Ondarroa Kalea, s/n, Otxarkoaga - Txurdinaga, 48004 Bilbao",
    descripcion: `El Parque Europa de Bilbao es un amplio espacio verde de diseño romántico, inaugurado en 1988 y ubicado entre los distritos de Begoña y Otxarkoaga-Txurdinaga. Ocupa más de 114.000 m² y fue creado para regenerar una zona degradada y unir varios barrios periféricos. Cuenta con paseos asfaltados, áreas verdes, estanques, un invernadero, frontón, gimnasio, zonas infantiles, polideportivo, áreas para patinaje y eventos culturales, convirtiéndolo en un punto estratégico para el ocio, el deporte y la convivencia comunitaria.`,
    imagen: europaImg,
    alt: "Europa"
  },
  {
    nombre: "Parque Munoa",
    direccion: "48903, Llano Kalea, 61, 48903 Barakaldo",
    descripcion: `El Parque Munoa es un extenso espacio ajardinado de más de 60,000 metros cuadrados que destaca por su riqueza botánica y su valor histórico. Alberga un palacio de estilo Segundo Imperio Francés, construido en el siglo XIX como residencia de verano de la familia Echevarria, y un jardín de estilo inglés con más de 600 árboles y 100 arbustos de diversas especies, incluyendo palmeras, secuoyas y robles americanos. El parque cuenta con un estanque central, esculturas, bancos decorados y senderos sinuosos que invitan al paseo y al disfrute de la naturaleza en un entorno tranquilo.`,
    imagen: munoaImg,
    alt: "Munoa"
  },
  {
    nombre: "Parque de Montefuerte",
    direccion: "Barrio Montefuerte s/n, 48480 Arrigorriaga",
    descripcion: `Montefuerte es un amplio parque periurbano situado en Arrigorriaga, en las laderas del monte Malmasín, que forma parte del Cinturón Verde del área metropolitana de Bilbao. Destaca por su entorno natural y sus numerosas instalaciones: senderos, merenderos accesibles, fuentes, aseos y parking. Es ideal para actividades al aire libre como paseos, running, barbacoas y juegos, y es muy frecuentado por familias y personas con mascotas. Además, alberga el primer Bike Park multidisciplinar de Euskadi, con más de 4 km de circuitos para diversas modalidades de ciclismo de montaña.`,
    imagen: montefuerteImg,
    alt: "Montefuerte"
  },
  {
    nombre: "Parque de Mendikosolo",
    direccion: "Parque Mendikosolo, 48480 Arrigorriaga",
    descripcion: `El Parque Mendikosolo, situado en Arrigorriaga, es un extenso espacio natural de 45 hectáreas conocido por su frondoso bosque de robles, arces y fresnos, así como por su hermoso lago central de 1,5 hectáreas. Es un lugar ideal para el ocio familiar, con áreas recreativas que incluyen columpios, zonas de juegos, barbacoas, merenderos y un restautante asador. Además de su riqueza natural y su fauna variada, el parque destaca por su pasado industrial, ya que en el siglo XX albergó una fábrica de dinamita, de la que aún quedan algunos restos visibles.`,
    imagen: mendikosoloImg,
    alt: "Mendikosolo"
  },
  {
    nombre: "Parque de La Muera",
    direccion: "48460 Orduña-Urduña",
    descripcion: `El Parque de La Muera en Orduña es un área recreativa situada en una soleada campiña, cerca de la desembocadura del valle de Arrastaria y junto al río Nervión. Dispone de zonas con mesas y barbacoas, parque de juegos infantiles, bancos, fuente, aseos y un edificio de servicios, además de poder acceder a las piscinas descubiertas en verano, lo que lo convierte en un lugar ideal para el ocio familiar y el descanso al aire libre. Además, el entorno destaca por sus paisajes naturales y su accesibilidad desde el casco urbano de Orduña, siendo un punto de paso en rutas peatonales y ciclistas de la zona.`,
    imagen: lamueraImg,
    alt: "La Muera"
  },
  {
    nombre: "Pinar de Gorliz",
    direccion: "Paseo Gorlizko Badia Ibiltokia, 2F, 48630 Gorliz",
    descripcion: `El Parque del Pinar de Gorliz es un extenso pinar cantábrico situado junto a la playa de Gorliz, considerado la segunda zona de esparcimiento más grande de Bizkaia. Es ideal para pasar el día en familia, ya que combina la cercanía al mar con la tranquilidad y sombra de los numerosos pinos. El área recreativa dispone de merenderos, parque infantil y zonas para pasear, lo que lo convierte en un lugar muy popular para el ocio al aire libre y las comidas campestres. Además, su ubicación permite disfrutar tanto de la naturaleza como de la playa y la brisa marina.`,
    imagen: gorlizImg,
    alt: "Pinar Gorliz"
  },
  {
    nombre: "Parque Akarlanda",
    direccion: "Akarlanda, 48980 Sestao",
    descripcion: `El Parque Akarlanda en Sestao es un área verde diseñada para el ocio familiar y la práctica deportiva, con amplias zonas ajardinadas, caminos para caminar y correr, áreas infantiles y espacios para eventos culturales. Además, destaca por su entorno natural, embellecido con árboles, praderas y pequeños estanques, que ofrecen un ambiente relajante a pesar de estar ubicado en una zona urbana e industrial. El parque también se utiliza para actividades educativas y de concienciación ambiental, acercando a la comunidad local a la naturaleza.`,
    imagen: akarlandaImg,
    alt: "Akarlanda"
  },
  {
    nombre: "Parque de los Pueblos de Europa",
    direccion: "Allende Salazar Kalea, 48300 Gernika-Lumo",
    descripcion: `El Parque de los Pueblos de Europa, inaugurado en 1991, es un espacio verde emblemático situado en el centro de Gernika-Lumo, junto a la Casa de Juntas. Destaca por combinar arte y naturaleza, albergando dos esculturas de renombre internacional: "Gure Aitaren Etxea" de Eduardo Chillida y "Large Figure in a Shelter" de Henry Moore. El parque está organizado en cuatro sectores diferenciados, con una variada representación de árboles y arbustos, incluyendo ecosistemas típicos de la Euskadi Atlántica como hayedos, robledales, encinares y vegetación de ribera. Además, cuenta con un estanque, zonas ajardinadas de estilo clásico y áreas de descanso.`,
    imagen: gerinkaImg,
    alt: "Pueblos de Europa"
  },
  {
    nombre: "El Vivero",
    direccion: "Crtra BI-3732, Vivero Errepidea, 2A, 48960 Galdakao",
    descripcion: `El Vivero de Artxanda, también conocido como Elorritxueta, es un área recreativa situada en pleno monte Artxanda, al norte de Bilbao, en la sierra de Ganguren. Es muy popular entre los habitantes de los municipios cercanos por su entorno natural y sus equipamientos para el ocio al aire libre, como merenderos, senderos señalizados, paneles informativos y mesas de orientación. El parque ofrece amplias vistas, zonas arboladas y es punto de partida habitual para rutas de senderismo hacia el monte Ganguren. Además, es accesible tanto en coche como en transporte público, y destaca por su ambiente tranquilo y su integración en el Cinturón Verde de Bilbao.`,
    imagen: viveroImg,
    alt: "Vivero"
  }
];

const Parques = () => {
  return (
    <main className="parques-container">
      {parques.map((parque, index) => (
        <div key={index} className="parque-card">
          <img src={parque.imagen} alt={parque.alt} />
          <div className="parque-info">
            <h3>{parque.nombre}</h3>
            <p><strong>Dirección:</strong> {parque.direccion}</p>
            <p>{parque.descripcion}</p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Parques;