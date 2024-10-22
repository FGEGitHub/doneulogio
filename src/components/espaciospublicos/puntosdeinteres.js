import React from 'react';
import foto11 from '../../Assets/puente.svg'; 
import foto2 from '../../Assets/camping.svg';
import foto3 from '../../Assets/capilla.svg';
import foto4 from '../../Assets/sancayetano.svg';

const InterestPoints = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Puntos de interés de la zona</h2>
      <div style={styles.grid}>
        <div style={styles.item}>
          <img src={foto11} alt="Puente Pexoa" style={styles.image} />
          <p style={styles.caption}>Puente Pexoa</p>
        </div>
        <div style={styles.item}>
          <img src={foto2} alt="Camping Puente Pexoa" style={styles.image} />
          <p style={styles.caption}>Camping Puente Pexoa</p>
        </div>
        <div style={styles.item}>
          <img src={foto3} alt="Capilla San Cayetano" style={styles.image} />
          <p style={styles.caption}>Capilla San Cayetano</p>
        </div>
        <div style={styles.item}>
          <img src={foto4} alt="Parque Provincial San Cayetano" style={styles.image} />
          <p style={styles.caption}>Parque Provincial San Cayetano</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '10px',
    marginLeft:'-5%'
  },
  title: {
    fontSize: '28px', // Aumentamos el tamaño del título
    fontWeight: 'bold',
    marginBottom: '32px',
    fontFamily: 'inter',
    color:'#1A393C'
  },
  grid: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  item: {
    width: '300px', // Hacemos el contenedor más grande para imágenes más grandes
    margin: '5px', // Reducimos el margen para que las imágenes estén más juntas
  },
  image: {
    width: '135%',  // La imagen ocupará el 100% del ancho del contenedor
    height: 'auto', // Se mantiene el aspecto original de la imagen
   
  },
  caption: {
    marginTop: '12px', // Ajuste en el espaciado del texto debajo de la imagen
    fontSize: '26px', // Tamaño de fuente mayor para el pie de imagen
    fontWeight: 'bold',
    color: '#4CAF50',
    fontFamily: 'inter',
  },
};

export default InterestPoints;
