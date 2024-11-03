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
import pinares from '../../Assets/tarjetapinares.svg';
import bosques from '../../Assets/tarjetabosques.svg';

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
        {/* Imagen Bosques */}
        <div style={styles.imageContainer}>
        
          <img src={bosques} alt="Bosques" style={styles.sectorImage} />
        </div>

        {/* Imagen Pinares */}
        <div style={styles.imageContainer}>
       
          <img src={pinares} alt="Pinares" style={styles.sectorImage} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginTop:'20%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#226d6f', // Color de fondo general
    padding: '40px',
    fontFamily: 'inter',
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
  imageContainer: {
    position: 'relative',
  },
  statusComplete: {
    backgroundColor: '#8AB933', // Verde para "Obra Terminada"
    color: '#fff',
    borderRadius: '0 20px 20px 0',
    padding: '5px 15px',
    position: 'absolute',
    top: '0',
    left: '0',
  },
  statusInProgress: {
    backgroundColor: '#DAC714', // Amarillo para "Obra en curso"
    color: '#fff',
    borderRadius: '0 20px 20px 0',
    padding: '5px 10px',
    position: 'absolute',
    top: '0',
    left: '0',
  },
  sectorImage: {
    width: '100%',
   
    objectFit: 'cover',
    borderRadius: '8px',
  },
};

export default Sectores;
