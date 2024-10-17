import React from 'react';
// Importa las imágenes de las flechas e iconos
import Flecha1 from '../../Assets/iz.png';
import Flecha2 from '../../Assets/der.png';
import icono1 from '../../Assets/uno.png';
import icono2 from '../../Assets/dos.png';
import icono3 from '../../Assets/tres.png';
import icono4 from '../../Assets/cuatro.png';
import icono5 from '../../Assets/cinco.png';
import icono6 from '../../Assets/seis.png';
import icono7 from '../../Assets/siete.png';
import pinares from '../../Assets/Pinares.svg';
import bosques from '../../Assets/Bosques.svg';


import '../mapas/config.css'
const Sectores = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Nuestros sectores </h2>
      
      <div style={styles.arrowsRow}>
        {/* Flechas lado a lado */}
        <img src={Flecha1} alt="Flecha 1" style={styles.arrow} />
        <img src={Flecha2} alt="Flecha 2" style={styles.arrow} />
      </div>
      <div style={styles.sectorContainer}>
        {/* Tarjeta Bosques */}
        <div style={styles.card}>
          <div style={styles.statusComplete}>Obra Terminada</div><br/><br/>
          <img src={bosques} alt="Bosques" style={{ marginTop: '-10px' }} />

          <ul style={styles.list}>
            <li style={styles.listItem}>
              <img src={icono1} alt="Icono 1" style={styles.icon} /> <b>50</b> Lotes Residenciales
            </li>
            <li style={styles.listItem}>
              <img src={icono2} alt="Icono 2" style={styles.icon} /> Parque del Origen
            </li>
            <li style={styles.listItem}>
              <img src={icono3} alt="Icono 3" style={styles.icon} /> Escrituración y Entrega de Posesión Inmediata
            </li>
            <li style={styles.listItem}>
              <img src={icono4} alt="Icono 4" style={styles.icon} /> Bosque Nativo
            </li>
          </ul>
        </div>

        {/* Tarjeta Pinares */}
        <div style={styles.card}>
  <div style={styles.statusInProgress}>Obra en curso</div>
  {/* Aquí se inserta el SVG con las medidas específicas */}<br/><br/>
  <img src={pinares} alt="Pinares" style={{ marginTop: '-10px' }} />
  <ul style={styles.list}>
    <li style={styles.listItem}>
      <img src={icono5} alt="Icono 5" style={styles.icon} /> <b>93</b> Lotes Residenciales
    </li>
    <li style={styles.listItem}>
      <img src={icono6} alt="Icono 6" style={styles.icon} /> Área Comercial
    </li>
    <li style={styles.listItem}>
      <img src={icono7} alt="Icono 7" style={styles.icon} /> Plaza Deportiva
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
    fontSize: '46px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#fff',
  },
  arrowsRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '60vh', // Espacio entre las flechas
    marginBottom: '20px', // Espacio debajo de las flechas
    marginTop: '-3%', // Espacio debajo de las flechas
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
    width: '350px',
    height: '380px', // Aumentar la altura de las tarjetas
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'relative', // Necesario para posicionar los carteles
  },
  statusComplete: {
    backgroundColor: '#8AB933', // Verde para "Obra Terminada"
    color: '#fff',
    borderRadius: '0 20px 20px 0', // Redondear más pronunciado en la esquina derecha
    padding: '5px 10px',
    position: 'absolute',
    top: '0',
    left: '0',
  },
  statusInProgress: {
    backgroundColor: '#DAC714', // Amarillo para "Obra en curso"
    color: '#fff',
    borderRadius: '0 20px 20px 0', // Redondear más pronunciado en la esquina derecha
    padding: '5px 10px',
    position: 'absolute',
    top: '0',
    left: '0',
  },
  cardTitleImage: {
    width: '185px',   // Ancho especificado
    height: '73px',   // Alto especificado
    marginBottom: '15px',
    position: 'absolute',
    top: '2386.17px', // Posición Top especificada
    left: '763.09px', // Posición Left especificada
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
    fontFamily: "inter", // Aplica la fuente
  },
  icon: {
    marginRight: '10px',
    width: '24px', // Ajuste del tamaño de los iconos
    height: '24px',
  }
}
export default Sectores;