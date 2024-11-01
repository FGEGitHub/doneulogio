import React from 'react';
import Slider from 'react-slick';
import carrusel1 from '../../Assets/carruselprincipio.svg';
import carrusel2 from '../../Assets/carrusel2.svg';
import carrusel3 from '../../Assets/carrusel1.svg';
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
    dotsClass: "slick-dots custom-dots",  // Clase personalizada para los dots
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
      listStyleType: 'none',  // Elimina el estilo de lista de los dots
      padding: '0',
      margin: '0',
    },
    dot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: 'gray',
      margin: '0 5px',
      transition: 'background-color 0.3s ease',  // Transición suave para los dots
    },
    activeDot: {
      backgroundColor: 'white',
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.titulo}>Bosque Nativo</h2>
      <p style={styles.descripcion}>
        En Don Eulogio existe una Reserva Natural, la cual abarca un aproximado de 7.200 m² de bosques nativos con senderos naturales, 
        siendo un espacio ideal para experimentar la naturaleza y compartir momentos junto a familia y amigos.
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
