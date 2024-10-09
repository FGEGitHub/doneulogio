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
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '20px',
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
    width: 'calc(80% - 40px)',
    margin: '0 auto',
    boxSizing: 'border-box',
  },
  textSection: {
    flex: '1',
    marginRight: '30px',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'left',
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.9',
    textAlign: 'left',
  },
  imagesSection: {
    flex: '1',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // Ajuste de 2 columnas
    gap: '20px',
  },
  imageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '120px', // Tamaño específico para las imágenes
    height: '120px',
    marginBottom: '10px',
    objectFit: 'contain', // Evita que las imágenes se corten
  },
  imageText: {
    fontSize: '16px',
    textAlign: 'center',
  },
};

export default CiudadVerde;
