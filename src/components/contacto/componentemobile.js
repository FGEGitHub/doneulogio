import React, { useState, useEffect } from 'react';
// Importa imagenes
import Image1 from '../../Assets/contactanosmobile.png';
import Gpscontacto from '../../Assets/gpscontacto.png';



import Formulario from './formulariomobile';
import Footer from '../footermobile';
import Doslogos from '../../Assets/doslogos.png';
import PhoneIcon from '../../Assets/what.png'; // Ícono de teléfono
import EmailIcon from '../../Assets/mail.png'; // Ícono de email

const CiudadVerde = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Pre-carga de la imagen
    const img = new Image();
    img.src = Image1;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(true); // En caso de error, también avanzar
  }, []);

  if (!imageLoaded) {
    // Muestra un mensaje de carga o un spinner mientras se carga la imagen
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <div style={styles.imageContainer}>
        <img
          src={Image1}
          alt="Urbanización Abierta"
          style={styles.image}
        />
        <span style={styles.imageText}>
          ¡Contactanos!
        </span>
      </div>
      <Formulario />
      

      
      <img
        src={Doslogos}
        alt="Urbanización Abierta"
        style={styles.image2}
      />
            {/* Sección de contacto */}
            <div style={styles.contactSection}>
        <div style={styles.contactItem}>
          <img src={PhoneIcon} alt="Teléfono" style={styles.contactIcon} />
          <span style={styles.contactText}>3794008721</span>
        </div>
        <div style={styles.contactItem}>
          <img src={EmailIcon} alt="Email" style={styles.contactIcon} />
          <span style={styles.contactText}>doneulogio.ua@gmail.com</span>
        </div>
      </div>
        <img
          src={Gpscontacto}
          alt="Urbanización Abierta"
          style={styles.image}
        />
      <Footer />
    </div>
  );
};

const styles = {
  imageContainer: {
    position: 'relative',
    display: 'inline-block',
  },
  image2: {
    width: '80%',
    height: 'auto',
    marginLeft: '10%',
    marginTop: '15%',
    marginBottom: '25%',
    display: 'block',
  },
  image: {
    width: '105%',
    height: 'auto',
    marginLeft: '-3%',
    display: 'block',
  },
  imageText: {
    position: 'absolute',
    top: '70%',
    left: '10%',
    transform: 'translate(0, -50%)',
    color: 'white',
    fontSize: '35px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    pointerEvents: 'none',
  },
  contactSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    gap: '16px',
    marginTop: '10px',
    marginBottom: '24px',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'left',
    gap: '8px',
  },
  contactIcon: {
    width: '28px',
    height: '28px',
       alignItems:"left",
       marginLeft:'18%',
       marginTop:'-1.5%',
  },
  contactText: {
    fontSize: '16px',
    marginLeft:'1%',
    color: '#333',
    alignItems:"left"
  },
};

export default CiudadVerde;
