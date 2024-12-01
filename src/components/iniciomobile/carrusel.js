import React, { useState, useEffect } from 'react';
import Libertad from '../../Assets/libertad.png';
import Comunidad from '../../Assets/comunidadm.png';
import Naturalieza from '../../Assets/naturalezam.png';
import Inversion from '../../Assets/inversionm.png';
import Bienestar from '../../Assets/bienestarm.png';

const CarouselMobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Libertad, Comunidad, Naturalieza, Inversion, Bienestar];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia de imagen cada 3 segundos
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div style={styles.carouselContainer}>
      <div
        style={{
          ...styles.imageWrapper,
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} style={styles.imageContainer}>
            {image.endsWith('.mp4') ? (
              <video
                src={image}
                autoPlay
                loop
                muted
                style={styles.carouselImage}
              />
            ) : (
              <img src={image} alt={`Slide ${index + 1}`} style={styles.carouselImage} />
            )}
          </div>
        ))}
      </div>
      <div style={styles.indicatorsContainer}>
        {images.map((_, index) => (
          <div
            key={index}
            style={{
              ...styles.indicator,
              backgroundColor: index === currentIndex ? '#25D366' : '#ccc',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  carouselContainer: {
    position: 'relative',
    overflow: 'hidden',
    width: '95.5vw',
    height: '100vw',
  },
  imageWrapper: {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
  },
  imageContainer: {
    minWidth: '100vw',
    height: '100vw',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  indicatorsContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
  },
  indicator: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    transition: 'background-color 0.3s ease',
  },
};

export default CarouselMobile;
