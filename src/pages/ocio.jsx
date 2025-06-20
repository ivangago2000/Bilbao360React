import React from "react";
import '../css/recursos.css';
import '../css/menu.css';
import '../css/ocio.css';

import maxCenterImg from "../assets/img/ocio/maxCenter.jpg";
import sanMamesImg from "../assets/img/ocio/sanMames.jpg";
import zubiarteImg from "../assets/img/ocio/zubiarte.jpg";
import azkunaImg from "../assets/img/ocio/azkuna.jpg";
import karpinImg from "../assets/img/ocio/karpin.jpg";
import basondoImg from "../assets/img/ocio/basondo.jpg";
import funPlayParkImg from "../assets/img/ocio/funPlayPark.jpg";
import parapenteImg from "../assets/img/ocio/parapente.jpg";
import ozoneImg from "../assets/img/ocio/ozone.jpg";
import ocioKartImg from "../assets/img/ocio/ocioKart.jpg";
import olentzeroImg from "../assets/img/ocio/olentzero.jpg";
import momaImg from "../assets/img/ocio/moma.jpg";

const ocioData = [
  {
    nombre: "Max Center",
    direccion: "Barrio Kareaga K., S/N, 48903 Barakaldo",
    descripcion: `Max Center es un centro comercial emblemático situado en Barakaldo,
    inaugurado en 1994 y reconocido por su icónica pirámide de cristal en
    la plaza central. Es uno de los mayores complejos de compras, ocio y
    restauración de Bizkaia, con más de 140 locales, 15 salas de cine,
    bolera, zona de restaurantes y un amplio parking gratuito para 4.250
    vehículos. El centro ha sido renovado recientemente para ofrecer
    espacios más modernos, luminosos y accesibles, incorporando innovaciones
    tecnológicas como pantallas digitales interactivas y visitas virtuales,
    y promoviendo eventos culturales y actividades para toda la familia.`,
    imagen: maxCenterImg,
    alt: "Max Center",
  },
  {
    nombre: "San Mamés",
    direccion: `P.º Rafael Moreno "Pitxitxi", s/n,
    Basurto-Zorroza, 48013 Bilbao`,
    descripcion: `El estadio San Mamés, conocido como "La Catedral", es uno de los
    espacios de ocio más emblemáticos de Bilbao. Además de ser la sede del
    Athletic Club y acoger partidos de fútbol con capacidad para más de
    53.000 espectadores, el estadio ofrece modernas instalaciones y
    servicios para el público, como visitas guiadas, museo del club, zonas
    VIP y espacios para eventos. Su diseño arquitectónico innovador, la
    cubierta retráctil, el sistema de iluminación LED y la excelente
    visibilidad desde cualquier asiento lo convierten en un referente
    internacional. También se utiliza como recinto para grandes conciertos
    y espectáculos.`,
    imagen: sanMamesImg,
    alt: "San Mamés",
  },
  {
    nombre: "Zubiarte",
    direccion: "Leizaola Lehendakariaren Kalea, 2, Abando, 48011 Bilbao",
    descripcion: `El Centro Comercial Zubiarte, situado en pleno centro de Bilbao junto a
    la ría y el puente de Deusto, destaca por su arquitectura moderna y
    luminosa, diseñada por Robert Stern. Cuenta con más de 70 tiendas de
    moda, tecnología, hogar y complementos, supermercado, 8 salas de cine,
    una variada oferta gastronómica y zonas de ocio para toda la familia.
    Su diseño innovador y su ubicación estratégica, cerca del Museo
    Guggenheim y el Palacio Euskalduna, lo convierten en un espacio de
    referencia para compras, entretenimiento y restauración en la ciudad.`,
    imagen: zubiarteImg,
    alt: "Zubiarte",
  },
  {
    nombre: "Centro Azkuna",
    direccion: "Arriquíbar Plaza, 4, Abando, 48010 Bilbao",
    descripcion: `El Centro Azkuna, antes conocido como Alhóndiga Bilbao, es un emblemático
    edificio modernista construido entre 1905 y 1909 por el arquitecto
    Ricardo Bastida como almacén de vino para la ciudad. Tras décadas de
    abandono, fue rehabilitado por el diseñador Philippe Starck y reabierto
    en 2010 como un innovador centro cultural y de ocio. Hoy alberga
    exposiciones, conciertos, talleres, cine, actividades deportivas,
    restaurantes y una piscina cubierta, destacando por sus 43 columnas
    únicas y su arquitectura vanguardista. Es un símbolo de la transformación
    y dinamismo de Bilbao, y un referente cultural y social para la ciudad.`,
    imagen: azkunaImg,
    alt: "Centro Azkuna",
  },
  {
    nombre: "Karpin Abentura",
    direccion: "Barrio de Biáñez, 37, 48891, Valle de Carranza",
    descripcion: `Karpin Aventura es un parque ecológico y centro de acogida de fauna
    silvestre situado en el barrio de Biañez, en el Valle de Carranza, al
    oeste de Bizkaia. Ocupa una finca de 20 hectáreas y alberga más de 55
    especies de animales, muchos de ellos rescatados del tráfico ilegal, la
    caza o el abandono, que no pueden ser devueltos a su hábitat natural. El
    parque está dividido en áreas temáticas como Animalia, el Jardín de las
    Bestias y el Valle de los Dinosaurios, donde además de animales
    actuales, se pueden ver reproducciones a tamaño real de dinosaurios.
    Su misión principal es la educación ambiental y la concienciación sobre
    el respeto a los animales y la naturaleza.`,
    imagen: karpinImg,
    alt: "Karpin Abentura",
  },
  {
    nombre: "Basondo",
    direccion: "Bº Basondo 8, 48315 Kortezubi",
    descripcion: `Basondo es un refugio de fauna silvestre situado en Kortezubi, en pleno
    corazón de la Reserva de la Biosfera de Urdaibai. Ocupa 60.000 metros
    cuadrados de prados y bosques donde acoge y cuida animales autóctonos
    que no pueden sobrevivir en libertad, como corzos, ciervos, jabalíes,
    lobos, bisontes y diversas aves rapaces. El objetivo de Basondo es la
    educación ambiental y la conservación, ofreciendo a los visitantes la
    oportunidad de observar a estos animales en semi-libertad y aprender
    sobre la importancia de proteger la fauna y el entorno natural.`,
    imagen: basondoImg,
    alt: "Basondo",
  },
  {
    nombre: "Fun Play Park",
    direccion: "Agirre Lehendakariaren Etorb, Urbi, 48970 Basauri",
    descripcion: `Fun Play Park Basauri es un centro de ocio familiar ubicado en Avenida
    Lehendakari Aguirre, 99, en Basauri, Bizkaia. Ofrece más de 2.400 m² de
    instalaciones con zonas diferenciadas para niños pequeños (hasta 8
    años) y para jóvenes y adultos, con áreas temáticas como trampolines,
    tirolina, muro de escalada, zona de baloncesto y más. Dispone también de
    una amplia zona de restauración con cinco salones privados ideales para
    celebrar cumpleaños y eventos familiares. El parque destaca por su
    compromiso con la seguridad, incluyendo el uso obligatorio de calcetines
    antideslizantes, y cuenta con aparcamiento propio y opciones cercanas
    para facilitar el acceso.`,
    imagen: funPlayParkImg,
    alt: "Fun Play Park",
  },
  {
    nombre: "Parapente Sopelana",
    direccion: "Solondota Kalea, 31, 48600 Sopela",
    descripcion: `El parapente en Sopelana es una actividad muy popular que permite volar
    sobre los espectaculares acantilados y playas como Barinatxe (“La
    Salvaje”), disfrutando de vistas únicas de la costa vizcaína. Los
    vuelos biplaza suelen durar entre 20 y 25 minutos y están disponibles
    para personas de todas las edades, desde los 7 hasta los 80 años, sin
    requerir experiencia ni condición física especial. La experiencia es
    tranquila y segura: tras unas breves instrucciones y una pequeña
    carrera para despegar, se vuela acompañado de un instructor y el
    aterrizaje es suave. Además, la actividad suele incluir reportaje
    fotográfico o vídeo del vuelo.`,
    imagen: parapenteImg,
    alt: "Parapente Sopelana",
  },
  {
    nombre: "OzoneBowling",
    direccion: "Av. Ballonti, 48920 Portugalete",
    descripcion: `Ozone Bowling Portugalete, ubicado en el Centro Comercial Ballonti, es un
    espacio de ocio familiar que ofrece 18 pistas de bolos homologadas,
    equipadas con bumpers para niños, además de mesas de billar, máquinas
    recreativas, zona de videojuegos y un parque de camas elásticas de
    350-400 m². El local cuenta con cafetería, menús para celebraciones,
    parking gratuito y está pensado para todo tipo de eventos: cumpleaños,
    reuniones de amigos, torneos y actividades familiares. Sus
    instalaciones son modernas y limpias, y es un lugar popular para pasar
    una tarde divertida y entretenida en Portugalete.`,
    imagen: ozoneImg,
    alt: "Ozone Bowling",
  },
  {
    nombre: "OcioKart",
    direccion: "Ondazarros Kalea, 3, 48840 Gueñes",
    descripcion: `Oziokart en Güeñes es un circuito de karting al aire libre con una pista
    de 900 metros de longitud y más de 8 metros de ancho, donde pueden
    correr más de 20 karts simultáneamente. Ofrece alquiler de karts para
    adultos y niños, incluyendo modelos biplaza, y organiza carreras para
    grupos, empresas y celebraciones. Además, dispone de tres campos de
    paintball, cafetería con terraza, amplios vestuarios y parking. Es un
    espacio pensado para el ocio y la diversión en torno al mundo del motor,
    apto tanto para principiantes como para pilotos experimentados.`,
    imagen: ocioKartImg,
    alt: "OcioKart",
  },
  {
    nombre: "Casa del Olentzero",
    direccion: "Landetxo Kalea, s/n, 48100 Mungia",
    descripcion: `La Casa de Olentzero, situada en el caserío Landetxo Goikoa en Mungia,
    es el caserío más antiguo de Bizkaia, datado en 1510, y forma parte del
    parque temático Izenaduba Basoa. Este espacio combina historia, cultura
    y ocio, permitiendo a los visitantes, especialmente a los niños,
    adentrarse en la mitología vasca y conocer de cerca a Olentzero, el
    legendario carbonero que anuncia la Navidad en Euskal Herria. Además de
    recorrer el caserío y descubrir cómo vivían los antepasados vascos, la
    visita incluye actividades didácticas, juegos, personajes mitológicos y
    un entorno mágico donde los más pequeños pueden entregar sus cartas a
    Olentzero y disfrutar de un mundo de leyendas y tradiciones vascas.`,
    imagen: olentzeroImg,
    alt: "Casa del Olentzero",
  },
  {
    nombre: "Discotecas",
    direccion: "Bilbao",
    descripcion: `Las discotecas en Bilbao ofrecen una variada vida nocturna con locales
    emblemáticos y modernos para todos los gustos. Destacan espacios como
    Muelle Bilbao, Kafe Antzokia, Moma, y Cotton Club. Otros referentes son
    Rock Star, especializado en éxitos comerciales y reggaetón; Back and
    Stage, con dos salas para música comercial y conciertos en directo; y
    Azkena, sala de conciertos y pub con ambiente singular. Además, la
    ciudad cuenta con discotecas temáticas, locales exclusivos como Budha y
    Fever, y espacios de referencia para el colectivo LGTB como El Balcón de
    la Lola. Las principales zonas de fiesta incluyen el Casco Viejo,
    Bilbao la Vieja, Indautxu y Mazarredo, donde se concentra gran parte del
    ocio nocturno bilbaíno.`,
    imagen: momaImg,
    alt: "Discotecas",
  },
];

const Ocio = () => {
  return (
    <main className="ocio-container">
      {ocioData.map((ocio, index) => (
        <div key={index} className="ocio-card">
          <img src={ocio.imagen} alt={ocio.alt} />
          <div className="ocio-info">
            <h3>{ocio.nombre}</h3>
            <p>
              <strong>Dirección:</strong> {ocio.direccion}
            </p>
            <p>{ocio.descripcion}</p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Ocio;

