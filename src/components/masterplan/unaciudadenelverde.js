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
        <div style={styles.imageRow}>
          <div style={styles.imageWrapper}>
            <img src={Image1} alt="Lotes" style={styles.image} />
            <p style={styles.imageText}>+500 Lotes</p>
          </div>
          <div style={styles.imageWrapper}>
            <img src={Image2} alt="Superficie promedio" style={styles.image} />
            <p style={styles.imageText}>750m² superficie promedio</p>
          </div>
        </div>
        <div style={styles.imageRow}>
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
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#fff', // Fondo blanco
    color: '#000', // Texto negro
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
    width: '90vw',  // 90% del ancho de la pantalla
    height: '90vh', // 90% del alto de la pantalla
    margin: 'auto',
    boxSizing: 'border-box',
  },
  textSection: {
    flex: 1,
    marginRight: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Centrar el contenido verticalmente
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.6',
  },
  imagesSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 0.5,
  },
  imageRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  imageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%', // Ajustar para que ocupen el espacio completo
  },
  image: {
    width: '120px', // Cuadrado más grande
    height: '120px', // Cuadrado más grande
    marginBottom: '10px',
    objectFit: 'cover', // Mantener las proporciones
  },
  imageText: {
    fontSize: '16px',
    textAlign: 'center',
  },
};

export default CiudadVerde;
