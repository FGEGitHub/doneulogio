import React from 'react';
import flecha from '../../Assets/flecha.png';

const MobileCards = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Aspectos clave de una<br/> <strong>Urbanización abierta</strong></h2>
      <img src={flecha} alt="Flecha" style={styles.arrow} />
      <div style={styles.card}>
        <h3 style={styles.cardTitle}>Libertad de Decisiones</h3>
        <p style={styles.cardText}>
          Ante la inexistencia de consorcios de administración y de reglamentos internos de convivencia y construcción, cada propietario goza de total libertad en cuanto a las decisiones sobre su lote (respetando la legislación aplicable).
        </p>
      </div>
      <div style={styles.card}>
        <h3 style={styles.cardTitle}>Integración al Entorno</h3>
        <p style={styles.cardText}>
          En este tipo de proyectos tanto las calles y avenidas, como las áreas comunes y los espacios verdes están interconectados y accesibles a toda la comunidad.
        </p>
      </div>
      <div style={styles.card}>
        <h3 style={styles.cardTitle}>Interacción Social y Comunidad Activa</h3>
        <p style={styles.cardText}>
          En este tipo de proyectos tanto las calles y avenidas, como las áreas comunes y los espacios verdes están interconectados y accesibles a toda la comunidad.
        </p>
      </div>
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
    marginBottom: '16px',
  },
  arrow: {
    width: '24px',
    height: '24px',
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
