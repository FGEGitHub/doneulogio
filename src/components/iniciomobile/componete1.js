import React, { useState, useEffect } from 'react';
// Importa tus imágenes y video aquí
import Image2 from '../../Assets/libertad.png';
import Imagemapa from '../../Assets/imagenmappa.png';
import Dibujoarboles from '../../Assets/dibujoarboles.png';
import Doslogos from '../../Assets/doslogos.png';
import VideoDron from '../../Assets/videodron.mp4';

import Componete1 from './componente2';
import Componente2 from './componente3';
import Footer from '../footermobile';

const CiudadVerde = () => {
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Lista de todas las imágenes a cargar
    const images = [Image2, Imagemapa, Dibujoarboles, Doslogos];
    let loadedImagesCount = 0;
    let timeoutId;

    // Función para manejar la carga de cada imagen
    const handleImageLoad = () => {
      loadedImagesCount += 1;
      if (loadedImagesCount === images.length) {
        setAllImagesLoaded(true);
      }
    };

    // Pre-carga de las imágenes
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // En caso de error también avanzar
    });

    // Verificar el estado del video directamente
    const videoElement = document.createElement('video');
    videoElement.src = VideoDron;
    videoElement.oncanplaythrough = () => {
      setVideoLoaded(true);
    };
    videoElement.onerror = () => {
      setVideoLoaded(true); // Si falla la carga, igual lo marcamos como cargado para evitar un bucle
    };

    // Timeout para evitar que se quede cargando indefinidamente
    timeoutId = setTimeout(() => {
      setAllImagesLoaded(true);
      setVideoLoaded(true);
    }, 10000); // 10 segundos

    return () => clearTimeout(timeoutId);
  }, []);

  // Verifica si tanto las imágenes como el video están cargados
  const contentLoaded = allImagesLoaded && videoLoaded;

  if (!contentLoaded) {
    // Muestra un mensaje de carga mientras se cargan las imágenes y el video
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <div style={styles.videoContainer}>
        <video
          src={VideoDron}
          autoPlay
          loop
          muted
          crossOrigin="anonymous"
          style={styles.video}
        />
        <span style={styles.imageText}>Tu Futuro en <br />Don Eulogio</span>
      </div>
      <Componete1 />
      <img
        src={Image2}
        alt="libertad"
        style={styles.imagelibertad}
        crossOrigin="anonymous"
      />
      <Componente2 />
      <img
        src={Imagemapa}
        alt="Urbanización Abierta"
        style={styles.image}
        crossOrigin="anonymous"
      />
      <img
        src={Dibujoarboles}
        alt="Urbanización Abierta"
        style={styles.image}
        crossOrigin="anonymous"
      />
      <img
        src={Doslogos}
        alt="Urbanización Abierta"
        style={styles.image2}
        crossOrigin="anonymous"
      />
      <Footer />
    </div>
  );
};

const styles = {
  videoContainer: {
    position: 'relative',
    display: 'inline-block',
    overflow: 'hidden',
    width: '100%',
    height: 'auto',
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Mantener la relación de aspecto y cubrir el área
  },
  image2: {
    width: '80%',
    height: 'auto',
    marginLeft: '10%',
    marginTop: '15%',
    marginRight: '5%',
    marginBottom: '25%',
    display: 'block',
  },
  image: {
    width: '108%',
    height: 'auto',
    marginLeft: '-3%',
    display: 'block',
 background: '#113F24',

  },
  imagelibertad: {
    width: '108%',
    height: '25vh', // Ajustar la altura al 25% del viewport
    marginLeft: '-3%',
    display: 'block',
    objectFit: 'cover', // Mantener la relación de aspecto y cubrir el área
    objectPosition: 'center',  // Ajustar la altura para el recorte vertical
  },
  imageText: {
    position: 'absolute',
    top: '70%',
    left: '10%',
    transform: 'translate(0, -50%)',
    color: 'white',
    fontSize: '35px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    pointerEvents: 'none',
  },
};

export default CiudadVerde;
