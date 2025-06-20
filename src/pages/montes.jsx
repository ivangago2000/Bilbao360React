import React from "react";
import '../css/recursos.css';
import '../css/menu.css';
import '../css/montes.css';

import pagasarriImg from '../assets/img/montes/pagasarri.jpg';
import malmasinImg from '../assets/img/montes/malmasin.jpg';
import ganekogortaImg from '../assets/img/montes/ganekogorta.jpg';
import serantesImg from '../assets/img/montes/serantes.jpg';
import gorbeaImg from '../assets/img/montes/gorbea.jpg';
import anbotoImg from '../assets/img/montes/anboto.jpg';
import oizImg from '../assets/img/montes/oiz.jpg';
import colizaImg from '../assets/img/montes/coliza.jpg';
import mugarraImg from '../assets/img/montes/mugarra.jpg';

const montesData = [
  {
    nombre: "Pagasarri",
    altitud: "673m",
    img: pagasarriImg,
    desc: "El Pagasarri es una cima situada al sur de Bilbao. Forma parte del cinturón verde que rodea la ciudad y es una de las montañas más populares para el senderismo en la zona. Su cima es un pequeño lapiaz kárstico y desde ella se pueden disfrutar de vistas panorámicas de Bilbao y sus alrededores, y cuenta con un refugio tradicional y zonas de picnic. El Pagasarri es accesible a pie desde Bilbao, especialmente por rutas como la de Larraskitu o Bolintxu, y también desde Arrigorriaga por las canteras de Pastorekorta."
  },
  {
    nombre: "Malmasín",
    altitud: "360m",
    img: malmasinImg,
    desc: "El Malmasín, situado entre Arrigorriaga, Basauri y Bilbao, en su cima se conservan restos de un antiguo castro de la Edad del Hierro, considerado uno de los primeros asentamientos humanos de la zona de Bilbao, que servía como punto de observación y defensa sobre el estuario del Nervión. Además, el monte está atravesado por los túneles de Malmasín y rodeado por el río Nervión y la autovía A-8, lo que acentúa su singularidad paisajística."
  },
  {
    nombre: "Ganekogorta",
    altitud: "999 m",
    img: ganekogortaImg,
    desc: "El Ganekogorta es una montaña de 999 metros situada al sur de Bilbao, en el País Vasco, siendo la cima más alta del sistema montañoso de esa zona. Destaca por su importancia histórica como uno de los cinco montes bocineros de Vizcaya y por ser cuna del montañismo vasco. Su nombre en euskera significa \"cuadra del alto\" y es un destino popular para senderismo y montañismo debido a sus desafiantes rutas y vistas panorámicas de la región."
  },
  {
    nombre: "Serantes",
    altitud: "452m",
    img: serantesImg,
    desc: "El Monte Serantes, ubicado en Santurtzi, es una emblemática atalaya natural que domina la bocana de la ría de Bilbao y el puerto, ofreciendo panorámicas espectaculares de la bahía del Abra, la costa y el Gran Bilbao. Su posición estratégica ha motivado la construcción de importantes fortificaciones militares en el siglo XIX, como el Fuerte de Serantes y el Torreón de la cumbre, que formaron parte del sistema defensivo para proteger la ría de posibles invasiones."
  },
  {
    nombre: "Gorbea",
    altitud: "1.482m",
    img: gorbeaImg,
    desc: "El Monte Gorbea es la montaña más emblemática del País Vasco, situada en la frontera entre Álava y Vizcaya. Su cima, coronada por una gran cruz metálica, es un símbolo del montañismo vasco y un lugar tradicional de encuentro, especialmente en celebraciones como la Nochevieja. Forma parte del Parque Natural de Gorbea, un espacio protegido que destaca por sus bosques de hayas y robles, praderas y formaciones kársticas con numerosas cuevas."
  },
  {
    nombre: "Anboto",
    altitud: "1.331m",
    img: anbotoImg,
    desc: "El Anboto es una montaña emblemática del País Vasco, situada entre Vizcaya y Álava, conocida tanto por su imponente cresta calcárea como por su gran importancia en la mitología vasca. Es la morada principal de la diosa Mari, figura central del folclore vasco, y un símbolo cultural muy arraigado. Su entorno forma parte del Parque Natural de Urkiola, con rutas de ascenso que atraviesan paisajes alpinos y acantilados, ofreciendo un desafío para montañeros y amantes de la naturaleza."
  },
  {
    nombre: "Oiz",
    altitud: "1.026m",
    img: oizImg,
    desc: "El monte Oiz es conocido como “el mirador de Bizkaia” por sus impresionantes vistas panorámicas que abarcan desde la costa hasta los Pirineos. Destaca por su importancia histórica, ya que desde su cima se convocaban las Juntas Generales de Bizkaia mediante hogueras y cuernos, y también por su relevancia mitológica, siendo una de las moradas de la diosa Mari según la tradición vasca."
  },
  {
    nombre: "Coliza",
    altitud: "897m",
    img: colizaImg,
    desc: "El Coliza es un monte situado en la zona de Las Encartaciones, cerca de la localidad de Carranza. Se caracteriza por su perfil alargado y sus laderas cubiertas de pastizales y bosques, ofreciendo vistas panorámicas del valle de Carranza y de la sierra de Ordunte. En la cima se encuentra una ermita románica dedicada a San Sebastián y San Roque, que corona la cumbre y la convierte en un lugar emblemático de la zona."
  },
  {
    nombre: "Mugarra",
    altitud: "936m",
    img: mugarraImg,
    desc: "El Mugarra es una montaña situada en la Sierra Salvada, en la frontera entre Bizkaia y Álava. Es conocida por su imponente pared caliza, muy apreciada por los escaladores, y por ofrecer vistas espectaculares del valle de Arratia y la comarca de Las Encartaciones. Su entorno natural es rico en biodiversidad y forma parte de un espacio protegido, alberga la principal colonia de buitres leonados de Euskal Herria y es hábitat de otras especies protegidas."
  },
];

const Montes = () => {
  return (
    <main className="montes-container">
      {montesData.map((monte, index) => (
        <div className="monte-card" key={index}>
          <img src={monte.img} alt={monte.nombre} />
          <div className="monte-info">
            <h3>{monte.nombre}</h3>
            <p><strong>Altitud:</strong> {monte.altitud}</p>
            <p>{monte.desc}</p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Montes;
