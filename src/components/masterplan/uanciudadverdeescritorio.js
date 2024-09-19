import React from 'react';
// Importa tus imágenes aquí
import Image1 from '../../Assets/imguna.png';
import Image2 from '../../Assets/im2.png';
import Image3 from '../../Assets/im3.png';
import Image4 from '../../Assets/im4.png';

const CiudadVerde = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textSection}>
        <h2 style={styles.title}>Una Ciudad en el Verde</h2>
        <p style={styles.description}>
          Don Eulogio se extiende a lo largo de <strong>80 hectáreas</strong>, desarrollándose de manera progresiva y sectorizada por <strong>etapas</strong>. Cada sector lleva el nombre de un árbol nativo de la región, reforzando su conexión con la naturaleza. Con más de <strong>500 lotes</strong> de una superficie promedio de <strong>750 m²</strong>, el proyecto incluye áreas de lotes comerciales, espacios comunes y amplias áreas verdes, ofreciendo un entorno equilibrado y armonioso para sus residentes.
        </p>
      </div>
      <div style={styles.imagesSection}>
        <div style={styles.imageWrapper}>
          <img src={Image1} alt="Lotes" style={styles.image} />
          <p style={styles.imageText}>+500 Lotes</p>
        </div>
        <div style={styles.imageWrapper}>
          <img src={Image2} alt="Superficie promedio" style={styles.image} />
          <p style={styles.imageText}>750m² superficie promedio</p>
        </div>
        <div style={styles.imageWrapper}>
          <img src={Image3} alt="Espacios comunes" style={styles.image} />
          <p style={styles.imageText}>Espacios comunes</p>
        </div>
        <div style={styles.imageWrapper}>
          <img src={Image4} alt="Áreas verdes" style={styles.image} />
          <p style={styles.imageText}>Áreas Verdes</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex', // Usamos flexbox para alinear texto e imágenes en línea
    justifyContent: 'space-between', // Distribuye el espacio entre el texto y las imágenes
    alignItems: 'flex-start', // Alinea los elementos al principio del eje vertical
    padding: '20px',
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
    width: 'calc(80% - 40px)', // Ajusta el ancho para dejar margen a los lados
    margin: '0 auto', // Centra el componente
    boxSizing: 'border-box',
    // Estilos para pantallas pequeñas
    '@media (max-width: 768px)': {
      flexDirection: 'column', // Cambia a una columna en pantallas pequeñas
      width: 'calc(100% - 20px)', // Ajusta el ancho para pantallas pequeñas
      padding: '10px',
    },
  },
  textSection: {
    flex: '1', // Ocupa un 50% del espacio disponible
    marginRight: '30px', // Espacio entre el texto y las imágenes
    // Estilos para pantallas pequeñas
    '@media (max-width: 768px)': {
      marginRight: '0',
      marginBottom: '20px', // Espacio entre texto e imágenes en pantalla pequeña
    },
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'left', // Alineamos el título a la izquierda
    // Estilos para pantallas pequeñas
    '@media (max-width: 768px)': {
      fontSize: '24px',
    },
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.9',
    textAlign: 'left', // Alineamos el texto a la izquierda
    // Estilos para pantallas pequeñas
    '@media (max-width: 768px)': {
      fontSize: '16px',
    },
  },
  imagesSection: {
    flex: '1', // Las imágenes también ocupan el 50% del espacio disponible
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // Distribuye las imágenes en una cuadrícula de 2 columnas
    gap: '5px',
    // Estilos para pantallas pequeñas
    '@media (max-width: 568px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '5px',
    },
  },
  imageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '120px',
    height: '120px',
    marginBottom: '10px',
    objectFit: 'cover',
    // Estilos para pantallas pequeñas
    '@media (max-width: 768px)': {
      width: '100px',
      height: '100px',
    },
  },
  imageText: {
    fontSize: '16px',
    textAlign: 'center',
    // Estilos para pantallas pequeñas
    '@media (max-width: 768px)': {
      fontSize: '14px',
    },
  },
};

export default CiudadVerde;
