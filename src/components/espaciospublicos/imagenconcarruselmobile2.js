import React from 'react';
import Slider from 'react-slick';
import carrusel1 from '../../Assets/carrusel2.png';
import carrusel2 from '../../Assets/carrusel2.png';
import carrusel3 from '../../Assets/carrusel2.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const MobileCarrusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    dotsClass: "slick-dots slick-thumb custom-dots",  // Clase personalizada para los dots
  };

  const styles = {
    container: {
      width: '100%',
      maxWidth: '430px',
      margin: '0 auto',
      textAlign: 'center',
    },
    titulo: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px',
        marginLeft: '10px',
        fontFamily: 'Inter',
        textAlign: 'left',
      },
      descripcion: {
        fontSize: '16px',
        marginBottom: '20px',
        padding: '0 10px',
        fontFamily: 'Inter',
        textAlign: 'left',
      },
    imagenCarrusel: {
      width: '100%',
      height: 'auto',
      borderRadius: '10px',
      position: 'relative',
    },
    customDots: {
      position: 'absolute',
      bottom: '15px',  // Posiciona los dots dentro de la imagen
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px 0',
    },
    dot: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: 'gray',
      margin: '0 5px',
      cursor: 'pointer',
    },
    activeDot: {
      backgroundColor: 'white',
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.titulo}>Parque del Origen</h2>
      <p style={styles.descripcion}>
      Primer espacio público del proyecto, donde todo se originó. Ubicado a la entrada del bosque nativo del sector Bosques, cuenta con espacios para sentarse a compartir y disfrutar de un entorno sereno y natural. Ideal para quienes buscan un momento de desconexión.
      </p>
      
      <Slider {...settings}>
        <div>
          <img src={carrusel1} alt="Carrusel 1" style={styles.imagenCarrusel} />
        </div>
        <div>
          <img src={carrusel2} alt="Carrusel 2" style={styles.imagenCarrusel} />
        </div>
        <div>
          <img src={carrusel3} alt="Carrusel 3" style={styles.imagenCarrusel} />
        </div>
      </Slider>
    </div>
  );
}

export default MobileCarrusel;
