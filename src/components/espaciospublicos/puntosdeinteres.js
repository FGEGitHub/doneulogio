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
    marginLeft: '-2%', // Ajuste para mover un poco hacia la izquierda
  },
  title: {
    fontSize: '32px', // Aumentamos el tamaño del título
    fontWeight: 'bold',
    marginBottom: '32px',
    fontFamily: 'inter',
    color: '#1A393C',
  },
  grid: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '10px', // Mínima separación entre las imágenes
  },
  item: {
    width: '22vw', // Aumentamos el ancho relativo al viewport para que ocupen más espacio
    margin: '5px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '100%', // La imagen ocupará el ancho completo del contenedor
    height: 'auto',
  },
  caption: {
    marginTop: '16px', // Ajuste en el espaciado del texto debajo de la imagen
    fontSize: '28px', // Aumentamos el tamaño de fuente
    fontWeight: 'bold',
    color: '#4CAF50',
    fontFamily: 'inter',
    textAlign: 'center',
  },
};

export default InterestPoints;
