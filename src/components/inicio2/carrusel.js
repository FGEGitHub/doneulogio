import React, { useState, useEffect } from 'react';
import foto1 from '../../Assets/urabierta.png';
import foto2 from '../../Assets/masterp.png';
import foto3 from '../../Assets/urabierta.png';

const Carousel = ({ images, links }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div style={styles.carouselContainer}>
      <div style={styles.imageWrapper}>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              ...styles.imageContainer,
              transform: `translateX(${(index - currentIndex) * 100}%)`,
              transition: 'transform 1s ease-in-out',
            }}
          >
            <a href={links[index]} style={styles.imageLink}>
              <img src={image} alt={`Carousel ${index + 1}`} style={styles.image} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  carouselContainer: {
    position: 'relative',
    width: '100%',
    height: 'auto',
    overflow: 'hidden',
  },
  imageWrapper: {
    display: 'flex',
    width: '100%',
    height: 'auto',
  },
  imageContainer: {
    minWidth: '100%',
    height: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLink: {
    display: 'block',
    width: '100%',
    height: '100%',
    textDecoration: 'none',
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
};

// Uso del componente
const App = () => {
  const images = [foto1, foto2, foto3];
  const links = [
    'https://www.enlace1.com',  // Reemplaza con las URLs correspondientes
    'https://www.enlace2.com',  // Reemplaza con las URLs correspondientes
    'https://www.enlace3.com',  // Reemplaza con las URLs correspondientes
  ];

  return (
    <div>
      <Carousel images={images} links={links} />
    </div>
  );
};

export default App;
