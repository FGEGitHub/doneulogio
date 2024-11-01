import React from 'react';
import puente from '../../Assets/puente.svg';
import capilla from '../../Assets/capilla.svg';
import camping from '../../Assets/camping.svg';
import sancayetano from '../../Assets/sancayetano.svg';

const TurismoComponent = () => {
  const items = [
    { src: puente, label: 'Puente Pexoa' },
    { src: camping, label: 'Camping Puente Pexoa' },
    { src: capilla, label: 'Capilla San Cayetano' },
    { src: sancayetano, label: 'Parque Provincial San Cayetano' }
  ];

  return (
    <div style={styles.container}>
      {items.map((item, index) => (
        <div key={index} style={styles.itemContainer}>
          <img src={item.src} alt={item.label} style={styles.image} />
          <p style={styles.label}>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
    padding: '16px',
  },
  itemContainer: {
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    border: 'none',
  },
  label: {
    fontFamily: "'Inter', sans-serif",  // Aquí aplicamos la fuente Inter
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#326B6B',
    marginTop: '8px',
  },
};

export default TurismoComponent;
