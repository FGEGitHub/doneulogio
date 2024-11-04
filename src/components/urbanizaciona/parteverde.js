import React from 'react';
import flecha from '../../Assets/flecha.png';
import tarjetas from '../../Assets/ua3tarjetas.svg';
const MobileCards = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Aspectos clave de una<br/> <strong>Urbanización abierta</strong></h2>
      <img src={flecha} alt="Flecha" style={styles.arrow} />
      <img src={tarjetas} alt="Flecha" style={styles.tarjetas} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: '#326B6B', // Color de fondo similar al mostrado
  },
  title: {
    fontSize: '18px',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: '10px',
  },
  arrow: {
    width: '24px',
    height: '24px',
    marginBottom: '10px',
  },
  tarjetas: {
    width: '80%',
    height: '80%',
    marginBottom: '16px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    marginBottom: '16px',
    width: '65%', // Ajuste para dejar un 10% de espacio a cada lado
    maxWidth: '400px',
    minHeight: '180px', // Ajuste para aumentar la altura de las tarjetas
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: 'inter',

  },
  cardTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#326B6B',
    marginBottom: '8px',
  },
  cardText: {
    fontSize: '14px',
    lineHeight: '1.5',
    color: '#666666',
    textAlign: 'justify',
    fontFamily: 'inter',

  },
};

export default MobileCards;
