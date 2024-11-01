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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    color: '#000',
    //border: '1px solid #e0e0e0',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
    width: '90%',
    maxWidth: '1200px',
    margin: '20px auto',
    boxSizing: 'border-box',
    // Estilos para pantallas pequeñas
    '@media (max-width: 768px)': {
      width: '100%',
      padding: '10px',
    },
  },
  textSection: {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // Estilos para pantallas pequeñas
    '@media (max-width: 768px)': {
      marginBottom: '10px',
    },
  },
  title: {
    color:'black',
   // fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center', // Centramos el título
    // Estilos para pantallas pequeñas
    '@media (max-width: 768px)': {
      color:'black',
      fontSize: '24px', // Reducimos el tamaño de la fuente
      fontFamily: 'inter',
    },
  },
  description: {
    fontSize: '16px',
    lineHeight: '1.0',
    textAlign: 'left', // Justificado a la izquierda
    // Estilos para pantallas pequeñas
    '@media (max-width: 768px)': {
      fontSize: '16px',
      fontFamily: 'inter',
    },
  },
  imagesSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
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
    width: '85px',
    height: '85px',
    marginBottom: '10px',
    objectFit: 'cover',
    // Estilos para pantallas pequeñas
    '@media (max-width: 768px)': {
      width: '90px',
      height: '90px',
    },
  },
  imageText: {
    fontSize: '15px',
    textAlign: 'center',
    // Estilos para pantallas pequeñas
    '@media (max-width: 768px)': {
      fontSize: '20px',
    },
  },
};

export default CiudadVerde;
