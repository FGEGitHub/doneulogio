import React from 'react';
import { Container, Typography, Box, CssBaseline, AppBar, Toolbar, Link } from '@mui/material';
import foto1 from '../../Assets/urabierta.png';
import Formulario from './formulario';
import logo from '../../Assets/logonav2.png';
import '../urbanizaciona/UrbanizacionAbierta.css';

const UrbanizacionAbierta = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" className="urbanizacion-navbar">
        <Toolbar
          className="urbanizacion-toolbar"
          sx={{ paddingTop: 2, paddingBottom: 4 }} // Aumenta el espacio arriba y abajo
        >
          <img src={logo} alt="Logo" className="urbanizacion-logo" style={{ height: '40px' }} />
        </Toolbar>
      </AppBar>
      <br/>      <br/>

      <Container>
        <nav className="urbanizacion-nav">
          <Link
            variant="button"
            color="primary"
            href="#"
            className="urbanizacion-navlink"
            style={{ color: "#326B6B", marginRight: "20px" }}
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
        <br /><br />

        <Formulario />

      </Container>

      <Box className="urbanizacion-footer">
        <Typography variant="body1">&copy; Don Eulogio - Todos los derechos reservados</Typography>
      </Box>
    </React.Fragment>
  );
};

export default UrbanizacionAbierta;
