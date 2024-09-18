import React from 'react';
import { Container, Typography, Grid, Box, CssBaseline, AppBar, Toolbar, Link } from '@mui/material';
import foto1 from '../../Assets/urabierta.png';
import foto2 from '../../Assets/uapng.png';
import logo from '../../Assets/logonav2.png';
import './UrbanizacionAbierta.css';
import Parte4 from './parte4'
import Parte3 from './Parte3'
import { useNavigate } from "react-router-dom";
const UrbanizacionAbierta = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" className="urbanizacion-navbar">
        <Toolbar className="urbanizacion-toolbar">
          <img src={logo} alt="Logo" className="urbanizacion-logo" />
        </Toolbar>
      </AppBar>
   
      <nav className="urbanizacion-nav">
  <Link
    variant="button"
    color="primary" // Cambia el color del texto
    href="#"
    className="urbanizacion-navlink"
    style={{ color: "#326B6B", marginRight: "20px" }} // Cambia el color del texto y agrega separación
    onClick={() => navigate('/')}
  >
    Home
  </Link>
  <Link
    variant="button"
    color="primary"
    href="#"
    className="urbanizacion-navlink"
    style={{ color: "#326B6B", marginRight: "20px" }}
    onClick={() => navigate('/masterplan')}
  >
    Urbanización Abierta
  </Link>
  <Link
    variant="button"
    color="primary"
    href="#"
    className="urbanizacion-navlink"
    style={{ color: "#326B6B", marginRight: "20px" }}
    onClick={() => navigate('/masterplan')}
  >
    MasterPlan
  </Link>
  <Link
    variant="button"
    color="primary"
    href="#"
    className="urbanizacion-navlink"
    style={{ color: "#326B6B", marginRight: "20px" }}
    onClick={() => navigate('/espacios-publicos')}
  >
    Espacios públicos
  </Link>
  <Link
    variant="button"
    color="primary"
    href="#"
    className="urbanizacion-navlink"
    style={{ color: "#326B6B" }}
    onClick={() => navigate('/contacto')}
  >
    Contacto
  </Link>
</nav>

        <img src={foto1} alt="Urbanización Abierta" className="urbanizacion-header-image" />
        <Box className="urbanizacion-section">
  <Grid container spacing={4}>
    <Grid item xs={12} md={6}>
      <Typography
        variant="body1"
        paragraph
        sx={{
          fontFamily: 'Inter',
          fontSize: '23px',
          fontWeight: 400,
          lineHeight: '38.73px',
          textAlign: 'center', // Asegúrate que el texto esté centrado
          marginTop:'20%',
        }}
      >
        Al desarrollar un proyecto al estilo Urbanización Abierta se busca <strong>generar un modelo de “Ciudad dentro del verde”</strong>, logrando integrar el Barrio al entorno natural que lo rodea y conformando una comunidad activa.
      </Typography>
    </Grid>
    <Grid item xs={12} md={6}>
      <img
        src={foto2}
        alt="Urbanización Abierta"
        className="urbanizacion-content-image"
      />
    </Grid>
  </Grid>
</Box>
     
    
     
      <Parte4/>
      <Box className="urbanizacion-footer">
        <Typography variant="body1">&copy; Don Eulogio - Todos los derechos reservados</Typography>
      </Box>
    </React.Fragment>
  );
};

export default UrbanizacionAbierta;
