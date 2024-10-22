import React from 'react';
import { Container, Typography, Box, CssBaseline, AppBar, Toolbar, Link } from '@mui/material';
import foto1 from '../../Assets/contactanos.png';
import foto2 from '../../Assets/mapacontactanos.png';
import DYC from '../../Assets/dyc.svg';
import Formulario from './formulario';
import logo from '../../Assets/logo.png';
import '../urbanizaciona/UrbanizacionAbierta.css';
import { useNavigate } from "react-router-dom";

const UrbanizacionAbierta = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <CssBaseline />
      <Toolbar className="urbanizacion-toolbar">
          <img src={logo} alt="Logo" className="urbanizacion-logo" />
        </Toolbar>

      <Container>
      <nav className="urbanizacion-nav">
  <div
    variant="button"
    color="primary"
    href="#"
    className="urbanizacion-navlink"
    style={{ 
      color: "#246F74", 
      marginRight: "25px", 
      fontSize: "24px", 
      fontFamily: "Inter", 
      fontWeight: 400,
      cursor: "pointer"  // Cambia el cursor al pasar el mouse
    }}
    onClick={() => navigate('/')}
  >
    Home
  </div>
  <div
    variant="button"
    color="primary"
    href="#"
    className="urbanizacion-navlink"
    style={{ 
      color: "#246F74", 
      marginRight: "25px", 
      fontSize: "24px", 
      fontFamily: "Inter", 
      fontWeight: 400,
      cursor: "pointer"  // Cambia el cursor al pasar el mouse
    }}
    onClick={() => navigate('/urbanizacion-abierta')}
  >
    Urbanización Abierta
  </div>
  <div
    variant="button"
    color="primary"
    href="#"
    className="urbanizacion-navlink"
    style={{ 
      color: "#246F74", 
      marginRight: "25px", 
      fontSize: "24px", 
      fontFamily: "Inter", 
      fontWeight: 400,
      cursor: "pointer"  // Cambia el cursor al pasar el mouse
    }}
    onClick={() => navigate('/masterplan')}
  >
    MasterPlan
  </div>
  <div
    variant="button"
    color="primary"
    href="#"
    className="urbanizacion-navlink"
    style={{ 
      color: "#246F74", 
      marginRight: "25px", 
      fontSize: "24px", 
      fontFamily: "Inter", 
      fontWeight: 400,
      cursor: "pointer"  // Cambia el cursor al pasar el mouse
    }}
    onClick={() => navigate('/espacios-publicos')}
  >
    Espacios públicos
  </div>
  <div
    variant="button"
    color="primary"
    href="#"
    className="urbanizacion-navlink"
    style={{ 
      color: "#246F74", 
      marginRight: "25px", 
      fontSize: "24px", 
      fontFamily: "Inter", 
      fontWeight: 400,
      cursor: "pointer"  // Cambia el cursor al pasar el mouse
    }}
    onClick={() => navigate('/contacto')}
  >
    Contacto
  </div>
</nav>

<div style={styles.imageContainer}>
      <img 
        src={foto1} 
        alt="Urbanización Abierta" 
        style={styles.image1} 
      />
      <span style={styles.imageText}>  Contactanos</span>
    </div>
        <br /><br />

        <Formulario />

      </Container>
      <br/>    <br/>    <br/>
      <img 
        src={DYC} 
        alt="Urbanización Abierta" 
        style={styles.imagealt} 
      />
      <img 
        src={foto2} 
        alt="Urbanización Abierta" 
        style={styles.image} 
      />
      <Box className="urbanizacion-footer">
        <Typography variant="body1">&copy; Don Eulogio - Todos los derechos reservados</Typography>
      </Box>
    </React.Fragment>
  );
};

const styles = {
  imageContainer: {
    position: 'relative',
    display: 'inline-block', // Ajusta el tamaño al de la imagen
  },
  image: {////imagen del mapa
    marginTop:'5%',
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  image1: {
    ///imagen de arriba
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  imagealt: {///imagen de los logos
    marginTop:'5%',
    marginButton:'10%',
    width: '30%',
    height: 'auto',
    display: 'block',
    margin: '0 auto', /* Centraliza horizontalmente */
  },
  imageText: {
    position: 'absolute',
    top: '50%',
    left: '10%', // Mueve el texto más a la izquierda
    transform: 'translate(0, -50%)', // Mueve solo verticalmente para que no se afecte la posición horizontal
    color: 'white', // El color del texto
    fontSize: '60px', // Texto más grande
    fontWeight: 'bold', // Hacer el texto en negrita
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Sombra para que se lea mejor
    pointerEvents: 'none', // Para que el texto no interfiera con la imagen en términos de interacción
  },
};
export default UrbanizacionAbierta;
