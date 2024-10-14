import React from 'react';

const Ubicacion = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>¿Dónde estamos?</h2>
      <p style={styles.text}>
        Don Eulogio se ubica en el camino de acceso principal al Pueblo de San Cayetano (Ruta Prov. N° 08)
      </p>
      <p style={styles.text}>
        Está situado a 1,5 Km. de la Ruta Nac. N° 12 y a 12 Km. de la Rotonda de la Virgen
      </p>
      <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" style={styles.link}>
        Hace click para verlo en Google Maps
      </a>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    maxWidth: '300px',
    margin: '0 auto',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: '15px',
    fontFamily: 'inter',

  },
  text: {
    fontSize: '18px',
    textAlign: 'left',

    color: '#333',
    lineHeight: '1.5',
    marginBottom: '10px',
    fontFamily: 'inter',
  },
  link: {
    fontSize: '16px',
    color: '#1E88E5',
    textDecoration: 'none',
  },
};

export default Ubicacion;
