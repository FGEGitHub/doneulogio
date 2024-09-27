import React from 'react';
import { Container, Typography, Box, CssBaseline, AppBar, Toolbar, Link } from '@mui/material';
import foto1 from '../../Assets/urabierta.png';
import Formulario from './formulario';
import logo from '../../Assets/logonav2.png';
import '../urbanizaciona/UrbanizacionAbierta.css';
import { useNavigate } from "react-router-dom";

const UrbanizacionAbierta = () => {
  const navigate = useNavigate();

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
  <div
    variant="button"
    color="primary" // Cambia el color del texto
    href="#"
    className="urbanizacion-navlink"
    style={{ color: "#246F74", marginRight: "25px",fontSize: "28px", fontFamily: "Inter", fontWeight: 400 }} // Cambia el color del texto y agrega separación
    onClick={() => navigate('/')}
  >
    Home
  </div>
  <div
    variant="button"
    color="primary"
    href="#"
    className="urbanizacion-navlink"
    style={{ color: "#246F74", marginRight: "25px",fontSize: "28px" }}
    onClick={() => navigate('/urbanizacion-abierta')}
  >
    Urbanización Abierta
  </div>
  <div
    variant="button"
    color="primary"
    href="#"
    className="urbanizacion-navlink"
    style={{ color: "#246F74", marginRight: "25px",fontSize: "28px" }}
    onClick={() => navigate('/masterplan')}
  >
    MasterPlan
  </div>
  <div
    variant="button"
    color="primary"
    href="#"
    className="urbanizacion-navlink"
    style={{ color: "#246F74", marginRight: "25px",fontSize: "28px" }}
    onClick={() => navigate('/espacios-publicos')}
  >
    Espacios públicos
  </div>
  <div
    variant="button"
    color="primary"
    href="#"
    className="urbanizacion-navlink"
    style={{ color: "#246F74", marginRight: "25px",fontSize: "28px"  }}
    onClick={() => navigate('/contacto')}
  >
    Contacto
  </div>
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
