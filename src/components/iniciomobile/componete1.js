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

  useEffect(() => {
    // Lista de todas las imágenes a cargar
    const images = [Image2, Imagemapa, Dibujoarboles, Doslogos];
    let loadedImagesCount = 0;

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
  }, []);

  if (!allImagesLoaded) {
    // Muestra un mensaje de carga o un spinner mientras se cargan las imágenes
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
          style={styles.video}
        />
        <span style={styles.imageText}>Tu Futuro en <br />Don Eulogio</span>
      </div>
      <Componete1 />
      <img
        src={Image2}
        alt="Urbanización Abierta"
        style={styles.image}
      />
      <Componente2 />
      <img
        src={Imagemapa}
        alt="Urbanización Abierta"
        style={styles.image}
      />
      <img
        src={Dibujoarboles}
        alt="Urbanización Abierta"
        style={styles.image}
      />
      <img
        src={Doslogos}
        alt="Urbanización Abierta"
        style={styles.image2}
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
