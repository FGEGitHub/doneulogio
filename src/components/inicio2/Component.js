import React from 'react';
import { Container, Typography, Grid, Box, CssBaseline, AppBar, Toolbar, Link } from '@mui/material';
import foto1 from '../../Assets/urabierta.png';
import video from '../../Assets/videodron.mp4';
import logo from '../../Assets/logonav2.png';
import '../urbanizaciona/UrbanizacionAbierta.css';
import Circulos from './circulos';
import Carrusel from './carrusel';
import Puntosdeint from './puntosdeinteres';
import Mapacomp from './mapacomponente';

const UrbanizacionAbierta = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" className="urbanizacion-navbar">
        <Toolbar className="urbanizacion-toolbar">
        <br/>
          <img src={logo} alt="Logo" className="urbanizacion-logo" />
          <br/>   <br/>
        </Toolbar>
      </AppBar>
      <Container>

        <nav className="urbanizacion-nav" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
  <Link
    variant="button"
    color="primary"
    href="#"
    style={{ color: "#326B6B", fontSize: "28px" }} // Tamaño de texto
  >
    Home
  </Link>
  <Link
    variant="button"
    color="primary"
    href="#"
    style={{ color: "#326B6B", fontSize: "28px" }} // Tamaño de texto
  >
    Urbanización Abierta
  </Link>
  <Link
    variant="button"
    color="primary"
    href="#"
    style={{ color: "#326B6B", fontSize: "28px" }} // Tamaño de texto
          >
        
            MasterPlan
          </Link>
          <Link
    variant="button"
    color="primary"
    href="#"
    style={{ color: "#326B6B", fontSize: "28px" }} // Tamaño de texto
          >
            Espacios públicos
          </Link>
          <Link
    variant="button"
    color="primary"
    href="#"
    style={{ color: "#326B6B", fontSize: "28px" }} // Tamaño de texto
          >
            Contacto
          </Link>
  {/* Añade los demás Links similares */}
</nav>

        {/* Video Section */}
        <Box sx={{ position: 'relative', width: '100%', height: 'auto', overflow: 'hidden' }}>
          <video src={video} autoPlay loop muted style={{ width: '100%', height: 'auto' }} />
          <Typography
            variant="h3"
            component="div"
            sx={{
              position: 'absolute',
              top: '50%',  // Asegúrate que el texto esté centrado verticalmente
              left: '50%', // Centrando el texto horizontalmente
              transform: 'translate(-50%, -50%)', // Ajusta para centrar completamente
              color: 'white',
              fontWeight: 'bold',
              fontSize: '96px', // Tamaño similar al de Figma
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            Tu futuro<br/>en Don Eulogio
          </Typography>
        </Box>
        <Circulos />
        <br /> <br />

        <Carrusel />
        <Puntosdeint />
        <Mapacomp />
      </Container>

      <Box className="urbanizacion-footer">
        <Typography variant="body1">&copy; Don Eulogio - Todos los derechos reservados</Typography>
      </Box>
    </React.Fragment>
  );
};

export default UrbanizacionAbierta;
