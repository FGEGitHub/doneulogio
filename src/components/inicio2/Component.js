import React from 'react';
import { Container, Typography, Grid, Box, CssBaseline, AppBar, Toolbar, Link } from '@mui/material';
import foto1 from '../../Assets/urabierta.png';
import foto2 from '../../Assets/fondo2.png';
import logo from '../../Assets/logonav.png';
import '../urbanizaciona/UrbanizacionAbierta.css';
import Circulos from './circulos'
import Carrusel from './carrusel'
import Puntosdeint from './puntosdeinteres'

const UrbanizacionAbierta = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" className="urbanizacion-navbar">
        <Toolbar className="urbanizacion-toolbar">
          <img src={logo} alt="Logo" className="urbanizacion-logo" />
        </Toolbar>
      </AppBar>
      <Container>
      <nav className="urbanizacion-nav">
  <Link
    variant="button"
    color="primary" // Cambia el color del texto
    href="#"
    className="urbanizacion-navlink"
    style={{ color: "#326B6B", marginRight: "20px" }} // Cambia el color del texto y agrega separación
  >
    Home
  </Link>
  <Link
    variant="button"
    color="primary"
    href="#"
    className="urbanizacion-navlink"
    style={{ color: "#326B6B", marginRight: "20px" }}
  >
    Urbanización Abierta
  </Link>
  <Link
    variant="button"
    color="primary"
    href="#"
    className="urbanizacion-navlink"
    style={{ color: "#326B6B", marginRight: "20px" }}
  >
    MasterPlan
  </Link>
  <Link
    variant="button"
    color="primary"
    href="#"
    className="urbanizacion-navlink"
    style={{ color: "#326B6B", marginRight: "20px" }}
  >
    Espacios públicos
  </Link>
  <Link
    variant="button"
    color="primary"
    href="#"
    className="urbanizacion-navlink"
    style={{ color: "#326B6B" }}
  >
    Contacto
  </Link>
</nav>

        <img src={foto1} alt="Urbanización Abierta" className="urbanizacion-header-image" />
        <Circulos/>
        <Carrusel/>
        <Puntosdeint/>
        <Box className="urbanizacion-section">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" paragraph>
                Una urbanización abierta es un tipo de desarrollo urbano donde las áreas comunes y los espacios verdes son accesibles para todos los residentes. A diferencia de las urbanizaciones cerradas, que suelen tener áreas restringidas y calles privadas, una urbanización abierta integra las áreas públicas en el ámbito vecinal, promoviendo así la interacción social y la cohesión de la comunidad.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src={foto2} alt="Urbanización Abierta" className="urbanizacion-content-image" />
            </Grid>
          </Grid>
        </Box>
     
      </Container>
     
  
      <Box className="urbanizacion-footer">
        <Typography variant="body1">&copy; Don Eulogio - Todos los derechos reservados</Typography>
      </Box>
    </React.Fragment>
  );
};

export default UrbanizacionAbierta;
