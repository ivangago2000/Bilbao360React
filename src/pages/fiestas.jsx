import React from "react";
import '../css/recursos.css';
import '../css/menu.css';
import '../css/fiestas.css';

import asteNagusiaImg from '../assets/img/fiestas/astenagusia.jpg';
import santaguedaImg from '../assets/img/fiestas/santagueda.jpg';
import carnavalesImg from '../assets/img/fiestas/carnavales.jpg';
import sanjuanImg from '../assets/img/fiestas/sanjuan.jpg';
import santurtziImg from '../assets/img/fiestas/santurtzi.jpg';
import antzarImg from '../assets/img/fiestas/antzar.jpg';
import basauriImg from '../assets/img/fiestas/basauri.jpg';
import santotomasImg from '../assets/img/fiestas/santotomas.jpg';
import olentzeroImg from '../assets/img/fiestas/olentzero.jpg';

const fiestas = [
  {
    nombre: "Semana Grande / Aste Nagusia",
    img: asteNagusiaImg,
    alt: "Semana Grande",
    desc: `La Semana Grande de Bilbao, o Aste Nagusia, es la principal fiesta de la ciudad y se celebra durante nueve días a partir del sábado siguiente al 15 de agosto, coincidiendo con la festividad de la Virgen de Begoña. La fiesta arranca con el tradicional "chupinazo" y la lectura del pregón, seguidos de la aparición de Marijaia, la protagonista y símbolo de las fiestas, que da inicio a las celebraciones.
Durante estos días, Bilbao se llena de música, baile y alegría. El programa incluye más de 100 actividades musicales gratuitas en diferentes escenarios, como conciertos al aire libre, bilbainadas (canciones populares), verbenas, teatro callejero, desfiles de gigantes y cabezudos, fuegos artificiales, competiciones de deporte rural, actividades infantiles y una amplia oferta gastronómica. La fiesta termina con la quema de Marijaia, marcando el final de la Semana Grande.`
  },
  {
    nombre: "Santa Agueda",
    img: santaguedaImg,
    alt: "Santa Agueda",
    desc: `La festividad de Santa Águeda en Bizkaia es una de las tradiciones más arraigadas y características de la provincia, celebrada especialmente la víspera del 4 de febrero. Grupos de vecinos, a menudo vestidos con trajes tradicionales, recorren las calles y caseríos formando coros y cuadrillas que cantan coplas en honor a la santa, acompañando sus voces con el golpe rítmico de bastones de madera llamados "makilas".
Estos cánticos tienen un trasfondo tanto religioso como pagano: Santa Águeda, patrona de las mujeres y la fertilidad, es invocada para la protección contra enfermedades, malos espíritus y para asegurar buenas cosechas y prosperidad. El golpear el suelo con las makilas simboliza el despertar de la tierra tras el invierno, un gesto de fertilidad y renovación heredado de antiguas creencias vascas.`
  },
  {
    nombre: "Carnavales",
    img: carnavalesImg,
    alt: "Carnavales",
    desc: `Los carnavales de Bilbao, conocidos como Aratusteak en euskera, son una celebración tradicional y festiva que arranca con el peculiar juicio a los personajes Farolín y Zarambolas, elegidos entre los bilbaínos más ilustres y representativos de la ciudad. Estos personajes simbolizan arquetipos locales: Farolín encarna la ambición y el espíritu emprendedor, mientras que Zarambolas representa la alegría y el disfrute de la vida.
Durante la semana de carnaval, la ciudad se llena de desfiles, concursos de disfraces, conciertos, juegos y talleres infantiles, pasacalles y bailes, mostrando el lado más divertido y participativo de Bilbao. La fiesta culmina con la simbólica quema de la sardina, que marca el final de los carnavales.
Otros Carnavales populares en Bizkaia son los de el Carnaval de Markina con el hartza oso y la danza del Zahagi, el Carnaval de Mundaka con atorrak y lamias, y Sestao celebra también con desfile de disfraces.`
  },
  {
    nombre: "Hogueras de San Juan",
    img: sanjuanImg,
    alt: "San Juan",
    desc: `Las hogueras de San Juan en Bizkaia son una celebración tradicional la noche del 23 de junio, considerada la más corta del año, en la que se encienden grandes fuegos para purificar, quemar lo negativo y dar la bienvenida al verano, acompañada de saltos sobre las llamas, rituales, música y ambiente festivo para todas las edades.
Las hogueras más populares se celebran en Bilbao —especialmente en el parque de Etxebarria, donde se organizan actividades y la fiesta principal—, y en otros barrios como Deusto, San Ignacio, Otxarkoaga, Olabeaga, Masustegi e Irala. 
También destacan las celebraciones en la campa de Eneperi, entre Bakio y Bermeo, por sus vistas espectaculares y ambiente mágico. Otros municipios como Leioa, Getxo, Plentzia y Sopelana también organizan hogueras populares.`
  },
  {
    nombre: "Fiestas de Santurtzi",
    img: santurtziImg,
    alt: "Fiestas de Santurtzi",
    desc: `Las fiestas de Santurtzi son populares y variadas, destacando especialmente las de la Virgen del Carmen, celebradas durante diez días a mediados de julio. Estas fiestas comienzan con la Gran Sardinada y el recibimiento de la Mentxu, la mascota oficial, y culminan con la tradicional procesión marítima, una de las más antiguas de Euskadi, donde la imagen de la Virgen es llevada en barco desde el puerto hasta la bahía del Abra acompañada de autoridades, arrantzales y vecinos.
Durante las fiestas hay actividades para todos los públicos: conciertos, competiciones deportivas, pasacalles, teatro, concursos gastronómicos, fuegos artificiales y actividades infantiles. Las cuadrillas participan activamente en pruebas deportivas y eventos como la famosa “bajada mojada” y la regata de balandros.`
  },
  {
    nombre: "Antzar Eguna",
    img: antzarImg,
    alt: "Lekeitio",
    desc: `Las fiestas de los antzarrak, conocidas como Antzar Eguna (Día de los Gansos), son el evento más emblemático de Lekeitio y se celebran el 5 de septiembre, en el marco de las fiestas de San Antolín, que tienen lugar del 1 al 8 de septiembre.
El acto central consiste en colgar un ganso artificial de una soga tensada sobre la ría del puerto. Los participantes, subidos en pequeñas embarcaciones, intentan agarrar al ganso mientras otros tiran de la soga para subirlo y bajarlo, haciendo que el animal resbale y la prueba sea muy difícil.
El objetivo es arrancar la cabeza del ganso artificial, una tradición que antes se realizaba con animales vivos pero que desde 2022 solo se celebra con gansos artificiales, por motivos de bienestar animal.`
  },
  {
    nombre: "Fiestas de Basauri",
    img: basauriImg,
    alt: "Basauri",
    desc: `Las fiestas de San Fausto en Basauri se celebran durante la semana del 13 de octubre, llenando las calles de música, teatro, danza, conciertos, verbenas, pasacalles y tamborradas. 
Destacan los trajes tradicionales, la bajada de cuadrillas, la ofrenda floral y la entrega del Premio Eskarabilera, además de concursos gastronómicos, juegos infantiles, deportes rurales y el ambiente festivo protagonizado por las cuadrillas, que bajan acompañadas de música y color. 
El último día, la imagen de la Eskarabilera, símbolo festivo del pueblo, es engalanada con globos por la cuadrilla encargada y lanzada al cielo para que “desaparezca” entre las nubes. El pueblo la despide con emoción, ya que suele viajar lejos y a veces se pierde, aunque en ocasiones es encontrada por personas de otros lugares que la devuelven. Dentro de la cabeza se coloca un sobre con información sobre la tradición y los contactos para avisar si alguien la encuentra.`
  },
  {
    nombre: "Santo Tomás",
    img: santotomasImg,
    alt: "Santo Tomás",
    desc: `La Feria de Santo Tomás es una de las tradiciones más queridas y arraigadas de Bilbao, que se celebra cada 21 de diciembre, coincidiendo con la festividad de Santo Tomás Apóstol. Desde primeras horas de la mañana, el centro de la ciudad, especialmente la zona de El Arenal y la Plaza Nueva, se transforma en un gran mercado rural, donde los baserritarras (agricultores y ganaderos) de Bizkaia y alrededores instalan sus puestos para vender productos locales y artesanales.
El ambiente es único y muy especial: el aire se llena de aromas a talo recién hecho, chorizo, queso de Idiazabal, miel, castañas asadas, rosquillas, frutas y verduras de temporada. El plato estrella es el talo con txistorra, una torta de maíz caliente rellena de chorizo, que se acompaña tradicionalmente con sidra o txakoli. Además, los visitantes pueden disfrutar de otros productos típicos como licores, embutidos y dulces caseros.`
  },
  {
    nombre: "Desfile del Olentzero",
    img: olentzeroImg,
    alt: "Olentzero",
    desc: `El desfile de Olentzero en Bilbao es un espectáculo multitudinario, lleno de color, luz y alegría, que se celebra cada 23 de diciembre por la tarde. Olentzero y Mari Domingi, acompañados de personajes de la mitología vasca como los Galtzagorris, Basajaun y Lamia, saludan desde el balcón del Hotel Carlton en la Plaza Moyúa y desfilan en carrozas o a lomos de figuras como el Pottoka y la Oca, recorriendo la Gran Vía y otras calles céntricas hasta llegar al Teatro Arriaga, donde culmina la kalejira con música y saludos desde el balcón del teatro.
En Bizkaia, además de Bilbao, muchos pueblos y barrios organizan sus propios desfiles de Olentzero, adaptando la tradición a sus propias costumbres, con recorridos, música, gastronomía y la participación de los personajes mitológicos locales, creando un ambiente navideño y familiar por toda la provincia.`
  },
];

const Fiestas = () => {
  return (
    <main className="fiestas-container">
      {fiestas.map((fiesta, index) => (
        <div className="fiestas-card" key={index}>
          <img src={fiesta.img} alt={fiesta.alt} />
          <div className="fiestas-info">
            <h3>{fiesta.nombre}</h3>
            <p>{fiesta.desc}</p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Fiestas;
