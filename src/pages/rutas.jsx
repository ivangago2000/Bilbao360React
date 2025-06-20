import '../css/recursos.css';
import '../css/menu.css';
import '../css/rutas.css';

import gorlizImg from '../assets/img/rutas/gorliz.jpg';
import gaztelugatxeImg from '../assets/img/rutas/gaztelugatxe.jpg';
import delikaImg from '../assets/img/rutas/delika.jpg';
import pobenaImg from '../assets/img/rutas/pobeña.jpg';
import omaImg from '../assets/img/rutas/oma.jpg';
import arrazolaImg from '../assets/img/rutas/arrazola.jpg';
import arboledaImg from '../assets/img/rutas/arboleda.jpg';
import galeaImg from '../assets/img/rutas/galea.jpg';
import urdaibaiImg from '../assets/img/rutas/urdaibai.jpg';

const rutasData = [
  {
    img: gorlizImg,
    alt: "Faro de Gorliz",
    nombre: "Ruta del Faro de Gorliz",
    tiempo: "2h",
    descripcion: `La ruta al Faro de Gorliz es un recorrido circular de unos 6 km que parte cerca de la playa de Gorliz y asciende suavemente por una pista asfaltada o, alternativamente, por un sendero costero más exigente. El camino atraviesa pastizales, pasa junto a la Granja de la Diputación y el Centro de Recuperación de Fauna Silvestre, y ofrece la posibilidad de ver vacas, caballos y ciervos. 
El tramo final discurre por los acantilados del Cabo Billano, con espectaculares vistas sobre la bahía de Plentzia y la costa vizcaína. Al llegar al faro, se puede explorar su entorno, que incluye búnkeres y restos defensivos, así como disfrutar de un mirador natural sobre el Cantábrico. Es una ruta apta para familias, con atractivos naturales, históricos y panorámicos, ideal para combinar naturaleza y cultura en una jornada al aire libre.`
  },
  {
    img: gaztelugatxeImg,
    alt: "Gaztelugatxe",
    nombre: "Ruta de Gaztelugatxe",
    tiempo: "3h",
    descripcion: `La ruta desde Bakio a San Juan de Gaztelugatxe es un recorrido costero muy pintoresco que parte desde la playa de Bakio y sigue un sendero bien señalizado a lo largo de los acantilados, pasando por zonas de colinas y bosques con abundante flora y fauna. El trayecto incluye vistas panorámicas sobre el mar y la costa, y pasa junto al restaurante Eneperi y su mirador, desde donde se obtienen excelentes vistas del islote de Gaztelugatxe.
El camino termina en la famosa escalinata de 241 peldaños que conduce a la ermita de San Juan de Gaztelugatxe, un lugar de gran valor histórico y simbólico. La distancia varía entre 3 y 5 km según el punto de inicio y el recorrido exacto, y la duración habitual es de entre 1 y 2 horas solo ida, o hasta 4 horas ida y vuelta si se realiza la ruta completa con paradas. Es una ruta accesible y muy popular, ideal para disfrutar de la naturaleza y el paisaje del litoral vasco.`
  },
  {
    img: delikaImg,
    alt: "Delika",
    nombre: "Ruta del Salto del Nervión",
    tiempo: "4h (desde Orduña)",
    descripcion: `La ruta al Salto del Nervión desde Orduña por Delika sigue el interior del cañón de Delika hasta la base de la cascada, permitiendo disfrutar de una perspectiva única desde abajo. El recorrido parte de la localidad de Delika y discurre entre prados, bosques de hayas y robles, siguiendo el curso del río Nervión y cruzándolo en varias ocasiones. 
El sendero es de dificultad baja, aunque puede complicarse si el río lleva mucho caudal, ya que hay que vadearlo varias veces. El paisaje es espectacular, con paredes verticales de roca caliza y el impresionante circo rocoso donde cae el Salto del Nervión, rodeado de naturaleza en estado puro. 
El Salto del Nervión es la cascada más alta de España y de toda la Península Ibérica, con una caída de más de 220 metros. Es un fenómeno estacional, visible sobre todo en épocas de lluvias o deshielo, y su entorno natural destaca por sus acantilados, bosques y panorámicas impresionantes.`
  },
  {
    img: pobenaImg,
    alt: "Pobeña",
    nombre: "Ruta de Pobeña",
    tiempo: "2h",
    descripcion: `La ruta de Pobeña a Kobaron, conocida como la Vía Verde de Itsaslur, es un paseo costero muy popular y de gran belleza que transcurre sobre el antiguo trazado del ferrocarril minero. El recorrido, de unos 3,5 km por trayecto, comienza en el aparcamiento de Pobeña y asciende una escalinata de 120 peldaños, el único tramo con desnivel notable. El resto del camino es prácticamente llano y discurre paralelo a los acantilados del Cantábrico, ofreciendo vistas espectaculares del mar, la playa de La Arena y Punta Lucero.
A lo largo de la ruta se pueden ver restos del pasado industrial, como el cargadero de mineral, y paneles informativos sobre la fauna y flora local. Es un itinerario familiar, apto para todas las edades, ideal para disfrutar de la naturaleza y el paisaje costero.`
  },
  {
    img: omaImg,
    alt: "Oma",
    nombre: "Ruta del Bosque de Oma",
    tiempo: "2h",
    descripcion: `La ruta del Bosque de Oma es un recorrido que comienza en el aparcamiento de Basondo, muy cerca de las famosas Cuevas de Santimamiñe, en el municipio de Kortezubi, dentro de la Reserva de la Biosfera de Urdaibai. Es un sendero de dificultad baja, ideal para familias y amantes de la naturaleza y el arte, que combina un agradable paseo por bosques y praderas con una experiencia cultural única.
El principal atractivo de esta ruta es el propio Bosque de Oma, una obra artística creada por el pintor vasco Agustín Ibarrola. En este espacio natural, los árboles están pintados con figuras geométricas y colores vivos que, desde ciertos puntos de vista, se combinan para formar imágenes y escenas sorprendentes, integrando el arte con el entorno natural de manera armoniosa. A lo largo del camino, el sendero atraviesa zonas de robles, hayas y otros árboles autóctonos, así como praderas y pequeños arroyos, ofreciendo un paisaje variado y lleno de vida.`
  },
  {
    img: arrazolaImg,
    alt: "Arrazola",
    nombre: "Ruta de Arrazola",
    tiempo: "2h30",
    descripcion: `La ruta de Arrazola, conocida como la Vía Verde de Arrazola, es un recorrido lineal y accesible que discurre por el hermoso valle de Atxondo, en Bizkaia, siguiendo el antiguo trazado del tren minero. El sendero, de dificultad baja y suelo de grava compactada, es ideal para familias y personas de todas las edades, y está acondicionado con áreas de descanso, mesas de picnic y juegos infantiles.
El itinerario parte del pueblo de Apatamonasterio y avanza paralelo al río Arrazola, a los pies del imponente monte Anboto, máxima cumbre del Parque Natural de Urkiola y morada de la mítica Mari. El entorno rural y las vistas al macizo de Anboto hacen de esta ruta un paseo muy ameno, en el que se combinan naturaleza, historia minera y cultura vasca.
Al final del recorrido se encuentra la antigua zona minera de El Tope, donde aún se conservan algunos elementos históricos.`
  },
  {
    img: arboledaImg,
    alt: "Arboleda",
    nombre: "Ruta de La Arboleda",
    tiempo: "2h",
    descripcion: `La ruta de Peñas Negras en La Arboleda es un recorrido que parte desde el Centro de Interpretación de Peñas Negras, situado en el corazón de la histórica zona minera de Bizkaia. El itinerario transcurre por un entorno natural que ha sido recuperado tras décadas de intensa explotación minera, lo que le confiere un paisaje singular lleno de contrastes entre zonas de vegetación autóctona y vestigios industriales.
El sendero combina tramos de pistas anchas de tierra y grava con estrechos caminos, algunos de los cuales pueden estar embarrados en épocas de lluvia. 
A lo largo del recorrido, los visitantes atraviesan antiguos caminos mineros, zonas de pastizales, pequeños pinares y el impresionante "Laberinto de Peñas Negras", un conjunto de pasadizos y formaciones rocosas esculpidas tanto por la erosión natural como por la actividad minera.`
  },
  {
    img: galeaImg,
    alt: "Punta Galea",
    nombre: "Ruta de Punta Galea",
    tiempo: "2h30",
    descripcion: `La ruta de Punta Galea es un espectacular paseo costero situado en la costa de Getxo, a pocos kilómetros de Bilbao. El recorrido sigue los impresionantes acantilados que se extienden desde la zona de Aixerrota hasta Sopelana, ofreciendo vistas panorámicas sobre la bahía del Abra, el mar Cantábrico y, en días despejados, hasta Castro-Urdiales en Cantabria.
El itinerario, de unos 7 a 8 kilómetros según el tramo elegido, es mayoritariamente llano y transcurre por senderos peatonales y carriles bici (bidegorri), lo que lo hace apto para familias, ciclistas y personas con movilidad reducida. A lo largo del camino se encuentran puntos de interés como el Molino de Aixerrota, el Fuerte de La Galea y el Faro de Punta Galea, así como varios miradores y accesos a playas como Arrigunaga, Gorrondatxe y Azkorri.
Es una ruta perfecta para disfrutar de la naturaleza, el aire marino y la geología característica de los acantilados de flysch.`
  },
  {
    img: urdaibaiImg,
    alt: "Urdaibai",
    nombre: "Ruta de Urdaibai",
    tiempo: "3-4h",
    descripcion: `La ruta entre Gernika y Mundaka es un recorrido lineal de unos 15 km que atraviesa la Reserva de la Biosfera de Urdaibai, siguiendo el curso de la ría y pasando por marismas, humedales y pequeños pueblos con encanto. El camino comienza en el puente de Rentería en Gernika y avanza bordeando la ría del Oka, permitiendo disfrutar de un entorno natural de gran valor ecológico y paisajístico.
A lo largo del trayecto se atraviesan localidades como Murueta, Busturia y Sukarrieta, con posibilidad de hacer paradas en puntos de interés como Ekoetxea Urdaibai o la playa de San Antonio. El sendero es mayoritariamente llano, fácil y apto para todos los públicos, con tramos de pista, pasarelas de madera y caminos peatonales.
El recorrido finaliza en el pintoresco puerto de Mundaka, famoso por su ola izquierda y su ambiente marinero. Es perfecta para disfrutar de la naturaleza, la observación de aves y el paisaje singular de Urdaibai.`
  },
];

function Rutas() {
  return (
    <main className="rutas-container">
      {rutasData.map(({ img, alt, nombre, tiempo, descripcion }, index) => (
        <div key={index} className="ruta-card">
          <img src={img} alt={alt} />
          <div className="ruta-info">
            <h3>{nombre}</h3>
            <p><strong>Tiempo aprox.:</strong> {tiempo}</p>
            <p>{descripcion}</p>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Rutas;
