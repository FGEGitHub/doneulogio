import React from 'react';
import { Container, Typography, Grid, Box, CssBaseline, AppBar, Toolbar, Link } from '@mui/material';

import video from '../../Assets/videodron.mp4';
import logo from '../../Assets/logonav2.png';
import '../urbanizaciona/UrbanizacionAbierta.css';
import Circulos from './nuestrossectores';
import Carrusel from './carrusel';
import Puntosdeint from '../espaciospublicos/puntosdeinteres';
import Mapacomp from './mapacomponente';
import { useNavigate } from "react-router-dom";
const UrbanizacionAbierta = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <CssBaseline />
      <Toolbar className="urbanizacion-toolbar">
          <img src={logo} alt="Logo" className="urbanizacion-logo" />
        </Toolbar>
   
   
      
        <nav className="urbanizacion-nav">
  <div
    variant="button"
    color="primary"
    href="#"
    className="urbanizacion-navlink"
    style={{ 
      color: "#246F74", 
      marginRight: "25px", 
      fontSize: "28px", 
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

        {/* Video Section */}
        <Box sx={{ position: 'relative', width: '100%', height: '700px', overflow: 'hidden' }}>
  <video 
    src={video} 
    autoPlay 
    loop 
    muted 
    style={{ 
      width: '100%', 
      height: '100%', 
      objectFit: 'cover'  // Para que se recorten los costados y mantenga la proporción
    }} 
  />
  <Typography
    variant="h3"
    component="div"
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '96px',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    }}
  >
    Tu futuro<br/>en Don Eulogio
  </Typography>
</Box>

        <Circulos />
        <br /> <br />

        <Carrusel />
  
  
        <Mapacomp />
     

      <Box className="urbanizacion-footer">
        <Typography variant="body1">&copy; Don Eulogio - Todos los derechos reservados</Typography>
      </Box>
    </React.Fragment>
  );
};

export default UrbanizacionAbierta;
