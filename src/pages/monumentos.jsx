// Monumentos.jsx
import React from 'react';
import '../css/recursos.css';
import '../css/menu.css';
import '../css/monumentos.css';
import antiguaImg from '../assets/img/monumentos/antigua.jpg';
import arriagaImg from '../assets/img/monumentos/arriaga.jpg';
import arteagaImg from '../assets/img/monumentos/arteaga.jpg';
import balmasedaImg from '../assets/img/monumentos/balmaseda.jpg';
import begonaImg from '../assets/img/monumentos/begoña.jpg';
import butronImg from '../assets/img/monumentos/butron.jpg';
import gaztelugatxeImg from '../assets/img/monumentos/gaztelugatxe.jpg';
import katalinaImg from '../assets/img/monumentos/katalina.jpg';
import puenteImg from '../assets/img/monumentos/puente.jpg';
import puppyImg from '../assets/img/monumentos/puppy.jpg';
import santimamineImg from '../assets/img/monumentos/santimamiñe.jpg';
import urkiolaImg from '../assets/img/monumentos/urkiola.jpg';

const monumentosData = [
  {
    nombre: 'Basílica de Begoña',
    direccion: 'Begoñako Andra Maria Kalea, 38, 48006 Bilbao',
    descripcion: 'Conocida como "La Amatxu de Begoña", esta basílica es un importante centro de peregrinación mariana en el País Vasco. Construida entre los siglos XVI y XX, combina elementos del gótico tardío con añadidos barrocos y neoclásicos.\nSu fachada principal y su campanario son muy reconocibles, y desde su ubicación en alto se obtienen vistas privilegiadas de la ciudad.',
    imagen: begonaImg,
    alt: 'Basílica de Begoña'
  },
  {
    nombre: 'Teatro Arriaga',
    direccion: 'Arriaga Plaza, 1, Ibaiondo, 48005 Bilbao',
    descripcion: 'El Teatro Arriaga, situado en Bilbao junto al río Nervión, es un emblemático teatro inaugurado en 1890 y diseñado en estilo neobarroco inspirado en la Ópera de París. Lleva el nombre del compositor bilbaíno Juan Crisóstomo Arriaga, conocido como el "Mozart español". Es un centro cultural clave que ofrece una variada programación de teatro, música, danza y ópera, y ha sido restaurado tras incendios e inundaciones a lo largo de su historia.',
    imagen: arriagaImg,
    alt: 'Teatro Arriaga'
  },
  {
    nombre: 'Las Cruces de Urkiola',
    direccion: 'Urkiola Auzoa, 3, 48211 Urkiola',
    descripcion: 'Las Cruces de Urkiola son un mirador ubicado cerca del Santuario de Urkiola, en el Parque Natural de Urkiola (Bizkaia). Desde allí se puede disfrutar de impresionantes vistas panorámicas de las montañas y bosques de la zona. Es el punto final de un sencillo Vía Crucis que atraviesa un hermoso hayedo, ideal para una excursión familiar.',
    imagen: urkiolaImg,
    alt: 'Cruces de Urkiola'
  },
  {
    nombre: 'Puppy',
    direccion: 'Mazarredo Zumarkalea, 66, Abando, 48009 Bilbao',
    descripcion: 'Puppy es una monumental escultura floral del artista estadounidense Jeff Koons, ubicada frente al Museo Guggenheim de Bilbao desde su inauguración en 1997. Representa a un cachorro de la raza West Highland White Terrier y se ha convertido en uno de los símbolos más reconocidos de la ciudad.',
    imagen: puppyImg,
    alt: 'Puppy'
  },
  {
    nombre: 'Puente de Vizcaya',
    direccion: 'Puente de Vizcaya Zubia, 48930 Getxo',
    descripcion: 'El Puente de Vizcaya, también conocido como Puente Colgante, es un puente transbordador situado entre las localidades de Portugalete y Getxo. Inaugurado en 1893, es el puente transbordador más antiguo del mundo y fue declarado Patrimonio de la Humanidad por la UNESCO.',
    imagen: puenteImg,
    alt: 'Puente Colgante'
  },
  {
    nombre: 'San Juan de Gaztelugatxe',
    direccion: 'San Juan de Gaztelugatxe, 48370 Bermeo',
    descripcion: 'San Juan de Gaztelugatxe es una pequeña isla rocosa en la costa de Bizkaia, unida al continente por un puente de piedra. Destaca por su ermita dedicada a San Juan Bautista y sus espectaculares vistas al mar Cantábrico. Es un lugar muy visitado por su belleza natural y por ser escenario de la serie Juego de Tronos.',
    imagen: gaztelugatxeImg,
    alt: 'Gaztelugatxe'
  },
  {
    nombre: 'Virgen de la Antigua',
    direccion: 'Monte Txarlazo, Orduña',
    descripcion: 'La Virgen de la Antigua de Orduña es una imagen religiosa venerada en la zona, asociada al histórico Monumento a la Virgen de la Antigua situado en la cima del monte Txarlazo, en la frontera entre Bizkaia y Burgos. Este monumento, construido en 1904, es una estructura emblemática que simboliza la protección y devoción hacia la Virgen María, y es un punto de referencia espiritual y turístico para la región.',
    imagen: antiguaImg,
    alt: 'Virgen de la Antigua'
  },
  {
    nombre: 'Puente de la Muza',
    direccion: 'El Cristo Kalea, 48800 Balmaseda',
    descripcion: 'El Puente de la Muza, también conocido como Puente Viejo de Balmaseda, es uno de los monumentos más emblemáticos de la villa de Balmaseda. Construido en la Edad Media, sobre el río Cadagua, conecta los barrios de El Cristo y San Lorenzo, siendo un paso obligado en el antiguo Camino de Castilla.',
    imagen: balmasedaImg,
    alt: 'Puente de la Muza'
  },
  {
    nombre: 'Castillo de Butrón',
    direccion: 'Butroi Auzoa, 12, 48110 Gatika',
    descripcion: 'El Castillo de Butrón es una fortaleza neogótica. Su origen se remonta al siglo XIV, cuando era una casa-torre perteneciente al linaje de los Butrón. Tras quedar en desuso en el siglo XVI, fue reconstruido en 1878 por el arquitecto Francisco de Cubas, quien le otorgó su aspecto actual inspirado en los castillos bávaros del siglo XIX.',
    imagen: butronImg,
    alt: 'Castillo de Butrón'
  },
  {
    nombre: 'Cueva de Santimamiñe',
    direccion: 'Basondo Auzoa, s/n, 48315 Kortezubi',
    descripcion: 'La Cueva de Santimamiñe es un destacado yacimiento arqueológico. Declarada Patrimonio de la Humanidad por la UNESCO en 2008, alberga pinturas rupestres del Paleolítico Superior, específicamente del periodo Magdaleniense (aproximadamente entre 13.000 y 9.000 años a.C.). Estas representaciones incluyen bisontes, caballos, cabras, ciervos y osos, todas ejecutadas con pigmento negro, presumiblemente carbón vegetal.',
    imagen: santimamineImg,
    alt: 'Cueva de Santimamiñe'
  },
  {
    nombre: 'Castillo de Arteaga',
    direccion: 'Gaztelubide Kalea, 7, 48314 Zelaieta',
    descripcion: 'El Castillo de Arteaga, también conocido como el Castillo de la Emperatriz Eugenia de Montijo, es una imponente fortaleza neogótica situada en Gautegiz Arteaga, dentro de la Reserva de la Biosfera de Urdaibai. Fue reconstruido en 1856 por encargo de Eugenia de Montijo, esposa de Napoleón III, tras el nombramiento de su hijo Eugenio Bonaparte como vizcaíno de origen por las Juntas Generales de Bizkaia.',
    imagen: arteagaImg,
    alt: 'Castillo de Arteaga'
  },
  {
    nombre: 'Faro de Santa Catalina',
    direccion: 'Avenida Santa Katalina, 65, 48280 Lekeitio',
    descripcion: 'El Faro de Santa Catalina, ubicado en Lekeitio, Bizkaia, es el primer y único faro visitable de Euskadi. Inaugurado en 1862, se sitúa en el cabo Antzoriz, a 46 metros sobre el nivel del mar, y tiene una altura de 13 metros. Este faro ha sido transformado en un Centro de Interpretación de la Navegación, donde los visitantes pueden conocer los fundamentos básicos de la navegación, desde señales hasta técnicas de orientación y avistamiento de ballenas.',
    imagen: katalinaImg,
    alt: 'Faro de Santa Catalina'
  }
];

const MonumentoCard = ({ monumento }) => (
  <div className="monumento-card">
    <img src={monumento.imagen} alt={monumento.alt} />
    <div className="monumento-info">
      <h3>{monumento.nombre}</h3>
      <p><strong>Dirección:</strong> {monumento.direccion}</p>
      <p>{monumento.descripcion}</p>
    </div>
  </div>
);

const Monumentos = () => {
  return (
    <main className="monumentos-container">
      {monumentosData.map((monumento, index) => (
        <MonumentoCard key={index} monumento={monumento} />
      ))}
    </main>
  );
};

export default Monumentos;

