import React from "react";
import Menu from "../components/menu";
import "../css/recursos.css";
import "../css/menu.css";
import "../css/playas.css";

import muskizImg from "../assets/img/playas/muskiz.jpg";
import ereagaImg from "../assets/img/playas/ereaga.jpg";
import arrigunagaImg from "../assets/img/playas/arrigunaga.jpg";
import sopelanaImg from "../assets/img/playas/sopelana.jpg";
import gorlizImg from "../assets/img/playas/gorliz.jpg";
import bakioImg from "../assets/img/playas/bakio.jpg";
import mundakaImg from "../assets/img/playas/mundaka.jpg";
import sukarrietaImg from "../assets/img/playas/sukarrieta.jpg";
import laidaImg from "../assets/img/playas/laida.jpg";
import lagaImg from "../assets/img/playas/laga.jpg";
import lekeitioImg from "../assets/img/playas/lekeitio.jpg";
import ondarroaImg from "../assets/img/playas/ondarroa.jpg"; 

const playasData = [
  {
    img: muskizImg,
    alt: "La Arena",
    nombre: "Playa de La Arena",
    direccion: "48550 Muskiz",
    descripcion: `La Playa de La Arena, situada entre Muskiz y Zierbena en Bizkaia, es la segunda playa más extensa de la costa vizcaína, con casi un kilómetro de longitud (966 metros) y una anchura media de 84 metros.
    Es una playa semiurbana de arena fina y oscura, encajada entre punta El Castillo y punta Lastra, con un alto grado de afluencia de bañistas y muy bien comunicada.
    Destaca por ser un lugar privilegiado para la práctica de deportes acuáticos como el surf —considerada una de las mejores playas para este deporte en la cornisa cantábrica— y el piragüismo, gracias a sus olas y a la proximidad de la ría de Pobeña.`,
  },
  {
    img: ereagaImg,
    alt: "Ereaga",
    nombre: "Playa de Ereaga",
    direccion: "48992 Getxo",
    descripcion: `La Playa de Ereaga, ubicada en Getxo (Bizkaia), es una playa urbana de arena fina y dorada que mide aproximadamente 882 metros de longitud y 64 metros de anchura. Está situada en la parte externa del estuario del Nervión, entre el Puerto Deportivo de Getxo y el Puerto Viejo de Algorta, con orientación noroeste y protegida parcialmente por el contramuelle de Arriluze. Es una playa muy concurrida, especialmente en temporada alta, y cuenta con un oleaje moderado ideal para la práctica de bodyboard y surf, con olas de izquierdas cortas y tubulares.`,
  },
  {
    img: arrigunagaImg,
    alt: "Arrigunaga",
    nombre: "Playa de Arrigunaga",
    direccion: "48992 Getxo",
    descripcion: `La playa de Arrigunaga está situada en el barrio de Algorta. Se encuentra bajo los acantilados de La Galea, con vistas al Abra y al Molino de Aixerrota, lo que le proporciona un entorno natural espectacular y tranquilo.
    Es una playa de arena fina y grava, con oleaje tranquilo, ideal para familias y para quienes buscan un lugar íntimo y relajante. Cuenta con servicios como área infantil, aseos, duchas, fuentes, socorristas, zona de ejercicio y vóley-ball, además de accesibilidad para personas con movilidad reducida. También es popular entre los surfistas por sus olas, aunque algunas zonas requieren precaución por la presencia de rocas al bajar la marea.`,
  },
  {
    img: sopelanaImg,
    alt: "La Salvaje",
    nombre: "Playa La Salvaje",
    direccion: "48600 Sopelana",
    descripcion: `La Playa La Salvaje, también conocida como Barinatxe, es una gran playa no urbanizada situada entre los municipios de Sopelana y Getxo, con una longitud de 752 metros y una superficie que varía entre 198.009 m² en bajamar y 61.489 m² en pleamar. Está formada por arena fina y dorada y cuenta con un sistema dunar propio, rodeada de acantilados que la protegen.
    Es un lugar muy popular para la práctica del surf, con olas de gran calidad y varios picos, destacando la ola de La Triangular, ideal para longboard. Además, la playa es un espacio consolidado para el nudismo, especialmente en sus laterales.`,
  },
  {
    img: gorlizImg,
    alt: "Gorliz",
    nombre: "Playa de Gorliz",
    direccion: "48630 Gorliz",
    descripcion: `La Playa de Gorliz es una playa semiurbana de arena dorada situada en el municipio de Gorliz, con una longitud de 842 metros y una anchura media de 45 metros. Destaca por su forma de concha que la protege de corrientes marinas, lo que la convierte en una playa segura y muy popular entre familias, especialmente durante el verano. Cuenta con un paseo marítimo, servicios de vigilancia, duchas, aseos y accesos adaptados, además de estar rodeada de vegetación y un pinar cercano que ofrece un entorno natural agradable para el ocio y el descanso. Sus aguas tienen un oleaje moderado, ideal para el baño y actividades acuáticas suaves.`,
  },
  {
    img: bakioImg,
    alt: "Bakio",
    nombre: "Playa de Bakio",
    direccion: "48130 Bakio",
    descripcion: `La Playa de Bakio, es la playa más larga de la costa vizcaína, con una longitud de aproximadamente 982 metros. Es una playa abierta al mar que ofrece olas de calidad durante casi todo el año, lo que la convierte en un destino muy apreciado por surfistas de todos los niveles. Cuenta con tres zonas diferenciadas con picos de olas tanto de derechas como de izquierdas, ideales para la práctica del surf, piragüismo y voley playa. Dispone de un largo paseo marítimo desde donde se pueden disfrutar de extraordinarios paisajes costeros, así como de todos los servicios necesarios para los visitantes, incluyendo club local y escuelas de surf.`,
  },
  {
    img: mundakaImg,
    alt: "Laidatxu",
    nombre: "Playa de Laidatxu",
    direccion: "48360 Mundaka",
    descripcion: `La playa de Mundaka, conocida como Laidatxu, es una pequeña playa de arena fina y dorada situada en el municipio de Mundaka, en la Reserva de la Biosfera de Urdaibai. Es un lugar muy apreciado por familias debido a la calidad de sus aguas y sus servicios, que incluyen socorristas, duchas y accesos para personas con movilidad reducida.
    Mundaka es mundialmente famosa por su ola izquierda, considerada la mejor de Europa y una de las mejores del mundo para el surf. Esta ola, tubular y de gran longitud, puede alcanzar hasta 4 metros y es apta para surfistas experimentados.`,
  },
  {
    img: sukarrietaImg,
    alt: "Sukarrieta",
    nombre: "Playa de San Antonio",
    direccion: "48395 Sukarrieta",
    descripcion: `La playa de Sukarrieta, conocida principalmente como la playa de San Antonio, es una playa semiurbana de aproximadamente 190 metros de longitud y entre 40 y 100 metros de ancho según la marea. Está situada en la margen izquierda de la ría de Mundaka, protegida por la isla de Txatxarramendi, lo que le proporciona aguas tranquilas y un entorno natural muy agradable dentro de la Reserva de la Biosfera de Urdaibai.
    La playa cuenta con arena fina y dorada, un pequeño paseo marítimo, y dispone de servicios como duchas, aseos, socorristas en temporada, zona infantil y un área de merendero.`,
  },
  {
    img: laidaImg,
    alt: "Laida",
    nombre: "Playa de Laida",
    direccion: "48048 Ibarrangelu",
    descripcion: `La playa de Laida, ubicada en el municipio vizcaíno de Ibarrangelu dentro de la Reserva de la Biosfera de Urdaibai, es la playa más grande de la ría de Mundaka, con casi un kilómetro de arena fina y dorada. Destaca por sus aguas poco profundas, lo que la hace ideal para el baño infantil y familiar. La playa ofrece una amplia variedad de actividades deportivas como surf, windsurf, piragüismo y vela.
    En la mitad del arenal se forma una duna que ofrece vistas panorámicas de la desembocadura de la ría y la isla de Izaro.`,
  },
  {
    img: lagaImg,
    alt: "Laga",
    nombre: "Playa de Laga",
    direccion: "48048 Ibarrangelu",
    descripcion: `La playa de Laga, situada en el municipio de Ibarrangelu, es una playa de arena fina y dorada, con una longitud aproximada de 800 metros y un ancho que puede alcanzar hasta 400 metros en bajamar. Es una playa semiurbana con un entorno natural muy atractivo, ideal para familias debido a la poca profundidad de sus aguas y su oleaje moderado.
    La playa suele tener alta ocupación en verano y es un lugar muy valorado tanto para el ocio como para la práctica deportiva en un entorno protegido y certificado por su calidad ambiental.
    Cuenta con buenas infraestructuras, como duchas, aseos, socorristas, zona infantil, aparcamiento y establecimientos de comida y bebida.`,
  },
  {
    img: lekeitioImg,
    alt: "Isuntza",
    nombre: "Playa de Isuntza",
    direccion: "48280 Lekeitio",
    descripcion: `La playa principal de Lekeitio es la playa de Isuntza, una playa urbana de arena fina y dorada que mide aproximadamente 250 metros de longitud y 35 metros de ancho. Está situada junto al puerto y el casco antiguo de la localidad, con un paseo marítimo que conecta con un parque infantil, bares, restaurantes y hoteles en sus alrededores. Isuntza es ideal para familias por sus aguas tranquilas y su fácil acceso.
    Entre sus servicios destacan socorristas, duchas, aseos, vestuarios, aparcamiento y alquiler de piraguas. Además, desde la playa se puede acceder a la isla de San Nicolás caminando por un malecón durante la bajamar, lo que añade un atractivo especial.`,
  },
  {
    img: ondarroaImg,
    alt: "Arrigorri",
    nombre: "Playa Arrigorri",
    direccion: "48700 Ondarroa",
    descripcion: `La playa de Ondarroa, conocida como playa de Arrigorri, es una playa semiurbana situada junto al malecón que delimita el puerto de este municipio vizcaíno. Tiene una longitud aproximada de 180 metros y un ancho que varía entre 60 metros en pleamar y 120 metros en bajamar, con arena fina.
Su ubicación en la zona urbana facilita el acceso a numerosos bares, zonas de ocio y un agradable paseo marítimo, lo que la convierte en un lugar ideal para combinar el disfrute de la playa con la visita al pueblo pesquero. En temporada alta suele estar bastante concurrida, y ofrece un ambiente animado y familiar, con servicios básicos para los visitantes.`
  },
];

function Playas() {
  return (
    <main className="playas-container">
      {playasData.map(
        ({ img, alt, nombre, direccion, descripcion }, index) => (
          <div key={index} className="playa-card">
            <img src={img} alt={alt} />
            <div className="playa-info">
              <h3>{nombre}</h3>
              <p>
                <strong>Dirección:</strong> {direccion}
              </p>
              <p>{descripcion}</p>
            </div>
          </div>
        )
      )}
    </main>
  );
}

export default Playas;


