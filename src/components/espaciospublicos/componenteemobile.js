import React, { useState, useEffect } from 'react';
// Importa tus imágenes aquí
import Image1 from '../../Assets/esppublicmobile.png';
import Carrusel1 from './imagenconcarruselmobile1'
import Carrusel2 from './imagenconcarruselmobile2'
import Cuatroimagenes  from './4imagenesmobile'
import Footer from '../footermobile';

const CiudadVerde = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Pre-carga de la imagen
    const img = new Image();
    img.src = Image1;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(true); // En caso de error, también avanzar
  }, []);

  if (!imageLoaded) {
    // Muestra un mensaje de carga o un spinner mientras se carga la imagen
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <div style={styles.imageContainer}>
        <img
          src={Image1}
          alt="Urbanización Abierta"
          style={styles.image}
        />
        <span style={styles.imageText}>
          Construimos espacios para crecer juntos
        </span>
      </div>
      <Carrusel1/>
      <Carrusel2/>
      <br/>  <br/>  <br/>
      <Cuatroimagenes/>
      <Footer />
    </div>
  );
};

const styles = {
  imageContainer: {
    position: 'relative',
    display: 'inline-block', // Ajusta el tamaño al de la imagen
  },
  image: {
    width: '108%',
    height: 'auto',
    marginLeft: '-3%',
    display: 'block',
  },
  imageText: {
    position: 'absolute',
    top: '70%',
    left: '10%', // Mueve el texto más a la izquierda
    transform: 'translate(0, -50%)', // Mueve solo verticalmente para que no se afecte la posición horizontal
    color: 'white', // El color del texto
    fontSize: '35px', // Texto más grande
    fontWeight: 'bold', // Hacer el texto en negrita
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Sombra para que se lea mejor
    pointerEvents: 'none', // Para que el texto no interfiera con la imagen en términos de interacción
  },
  svgText: {
    fill: '#fff', // Relleno blanco para el texto
    stroke: '#fff', // Contorno blanco para el texto
    fontSize: '90px',
    fontFamily: "'Christian Sunday', sans-serif", // Aplica la fuente
    textAnchor: 'middle',
  },
};

export default CiudadVerde;
