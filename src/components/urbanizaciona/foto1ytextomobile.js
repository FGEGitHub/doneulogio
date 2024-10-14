import React from 'react';
import foto2 from '../../Assets/125 1.png';

const MobileComponent = () => {
  return (
    <div style={styles.container}>
      <p style={styles.description}>
        Al desarrollar un proyecto al estilo Urbanización Abierta se busca <strong>generar un modelo de “Ciudad dentro del verde”</strong>, logrando integrar el Barrio al entorno natural que lo rodea y conformando una comunidad activa.
      </p>
      <img src={foto2} alt="Urbanización Abierta" style={styles.image} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: '#ffffff',
  },
  description: {
    fontSize: '16px',
    lineHeight: '1.5',
    textAlign: 'justify', // Alineación justificada
    fontFamily: 'inter',
    marginBottom: '16px',
    '@media (max-width: 768px)': {
      fontSize: '14px',
    },
  },
  image: {
    width: '100%',
    maxWidth: '400px', // Ancho máximo para controlar el tamaño en pantallas más grandes
    borderRadius: '8px', // Bordes redondeados para un estilo más moderno
  },
};

export default MobileComponent;
