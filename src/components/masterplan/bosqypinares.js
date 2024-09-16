import React from 'react';
// Importa las imágenes de las flechas
import Flecha1 from '../../Assets/iz.png';
import Flecha2 from '../../Assets/der.png';

const Sectores = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Nuestros sectores</h2>
      <div style={styles.arrowsRow}>
        {/* Flechas lado a lado */}
        <img src={Flecha1} alt="Flecha 1" style={styles.arrow} />
        <img src={Flecha2} alt="Flecha 2" style={styles.arrow} />
      </div>
      <div style={styles.sectorContainer}>
        {/* Tarjeta Bosques */}
        <div style={styles.card}>
          <div style={styles.statusComplete}>Obra Terminada</div>
          <h3 style={styles.cardTitle}>Bosques</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <span style={styles.icon}>🏡</span> 50 Lotes Residenciales
            </li>
            <li style={styles.listItem}>
              <span style={styles.icon}>🌲</span> Parque del Origen
            </li>
            <li style={styles.listItem}>
              <span style={styles.icon}>📝</span> Escrituración y Entrega de Posesión Inmediata
            </li>
            <li style={styles.listItem}>
              <span style={styles.icon}>🌳</span> Bosque Nativo
            </li>
          </ul>
        </div>

        {/* Tarjeta Pinares */}
        <div style={styles.card}>
          <div style={styles.statusInProgress}>Obra en curso</div>
          <h3 style={styles.cardTitle}>Pinares</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <span style={styles.icon}>🏡</span> 93 Lotes Residenciales
            </li>
            <li style={styles.listItem}>
              <span style={styles.icon}>🏪</span> Area Comercial
            </li>
            <li style={styles.listItem}>
              <span style={styles.icon}>🏟</span> Plaza Deportiva
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#226d6f', // Color de fondo general
      padding: '40px',
      fontFamily: 'Arial, sans-serif',
      color: '#fff',
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    arrowsRow: {
      display: 'flex',
      justifyContent: 'center',
      gap: '50px', // Espacio entre las flechas de 50px (5 cm)
      marginBottom: '20px', // Espacio debajo de las flechas
    },
    arrow: {
      width: '50px',
      height: 'auto',
    },
    sectorContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '40px',
    },
    card: {
      backgroundColor: '#fff',
      color: '#000',
      borderRadius: '8px',
      padding: '20px',
      width: '300px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    statusComplete: {
      backgroundColor: '#91d18b', // Verde para "Obra Terminada"
      color: '#fff',
      borderRadius: '20px',
      padding: '5px 10px',
      display: 'inline-block',
      marginBottom: '15px',
    },
    statusInProgress: {
      backgroundColor: '#ffd166', // Amarillo para "Obra en curso"
      color: '#fff',
      borderRadius: '20px',
      padding: '5px 10px',
      display: 'inline-block',
      marginBottom: '15px',
    },
    cardTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#226d6f', // Color verde del título
      marginBottom: '15px',
    },
    list: {
      listStyleType: 'none',
      padding: 0,
    },
    listItem: {
      fontSize: '16px',
      marginBottom: '10px',
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      marginRight: '10px',
      fontSize: '18px',
    },
    // Agregando la fuente Christian Sunday
    christianSunday: {
      fontFamily: 'Christian Sunday, Arial, sans-serif',
    },
  };

export default Sectores;
