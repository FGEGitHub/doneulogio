import React from 'react';
import bosqueImage from '../../Assets/bosques.png';
import pinarImage from '../../Assets/pinar.png';

const Sectores = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Nuestros sectores</h2>
      <div style={styles.buttonContainer}>
        <div style={{ ...styles.button, backgroundImage: `url(${bosqueImage})` }}>
        
        </div>
        <div style={{ ...styles.button, backgroundImage: `url(${pinarImage})` }}>
         
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  title: {
    fontSize: '18px',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
  },
  button: {
    width: '200px',
    height: '60px',
    borderRadius: '30px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)',
  },
};

export default Sectores;
