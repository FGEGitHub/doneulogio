import React from 'react';
import { Container, Typography, Grid, Box, CssBaseline, AppBar, Toolbar, Link } from '@mui/material';
import foto1 from '../../Assets/foto1.png';
import foto2 from '../../Assets/fondo2.png';
import logo from '../../Assets/logonav.png';
import './UrbanizacionAbierta.css';

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
          <Link variant="button" color="textPrimary" href="#" className="urbanizacion-navlink">
            Home
          </Link>
          <Link variant="button" color="textPrimary" href="#" className="urbanizacion-navlink">
            Urbanización Abierta
          </Link>
          <Link variant="button" color="textPrimary" href="#" className="urbanizacion-navlink">
            MasterPlan
          </Link>
          <Link variant="button" color="textPrimary" href="#" className="urbanizacion-navlink">
            Espacios públicos
          </Link>
          <Link variant="button" color="textPrimary" href="#" className="urbanizacion-navlink">
            Contacto
          </Link>
        </nav>
        <img src={foto1} alt="Urbanización Abierta" className="urbanizacion-header-image" />
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
        <Box className="urbanizacion-comparison-section">
          <Typography variant="h5" className="urbanizacion-comparison-title">
            ¿Urbanización Abierta o Barrio Cerrado?
          </Typography>
          <Grid container spacing={2} className="urbanizacion-comparison-grid">
            <Box className="urbanizacion-comparison-item">
              <Typography variant="h6">Urbanización Abierta</Typography>
              <Typography variant="body1">LIBERTAD</Typography>
              <Typography variant="body2">Calles y accesos integrados</Typography>
              <Typography variant="body2">Libertad de decisión</Typography>
              <Typography variant="body2">Áreas comunes accesibles</Typography>
              <Typography variant="body2">Interacción social y comunidad activa</Typography>
            </Box>
            <Box className="urbanizacion-comparison-item">
              <Typography variant="h6">Barrio Cerrado</Typography>
              <Typography variant="body1">EXCLUSIVIDAD</Typography>
              <Typography variant="body2">Cierre perimetral y acceso restringido</Typography>
              <Typography variant="body2">Propiedad privada de áreas comunes</Typography>
              <Typography variant="body2">Gastos de mantenimiento elevados</Typography>
              <Typography variant="body2">Regulaciones estrictas</Typography>
              <Typography variant="body2">Servicios exclusivos</Typography>
            </Box>
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
