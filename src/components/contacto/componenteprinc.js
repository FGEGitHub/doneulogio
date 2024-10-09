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
