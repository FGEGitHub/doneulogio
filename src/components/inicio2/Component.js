import React from 'react';
import { Container, Typography, Grid, Box, CssBaseline, AppBar, Toolbar, Link } from '@mui/material';
import foto1 from '../../Assets/urabierta.png';
import video from '../../Assets/videodron.mp4';
import logo from '../../Assets/logonav2.png';
import '../urbanizaciona/UrbanizacionAbierta.css';
import Circulos from './circulos';
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
<<<<<<< HEAD
      </AppBar>
      <Container>

        <nav className="urbanizacion-nav" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
  <Link
    variant="button"
    color="primary"
    href="#"
    style={{ color: "#326B6B", fontSize: "28px" }} // Tamaño de texto
=======
         
      <nav className="urbanizacion-nav">
  <Link
    variant="button"
    color="primary" // Cambia el color del texto
    href="#"
    className="urbanizacion-navlink"
    style={{ color: "#326B6B", marginRight: "20px" }} // Cambia el color del texto y agrega separación
    onClick={() => navigate('/')}
>>>>>>> 5cafb7e88f4a3f02b8f499c47d0d38a2644b824d
  >
    Home
  </Link>
  <Link
    variant="button"
    color="primary"
    href="#"
<<<<<<< HEAD
    style={{ color: "#326B6B", fontSize: "28px" }} // Tamaño de texto
=======
    className="urbanizacion-navlink"
    style={{ color: "#326B6B", marginRight: "20px" }}
    onClick={() => navigate('/urbanizacion-abierta')}
>>>>>>> 5cafb7e88f4a3f02b8f499c47d0d38a2644b824d
  >
    Urbanización Abierta
  </Link>
  <Link
    variant="button"
    color="primary"
    href="#"
<<<<<<< HEAD
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
=======
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

>>>>>>> 5cafb7e88f4a3f02b8f499c47d0d38a2644b824d

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
     

      <Box className="urbanizacion-footer">
        <Typography variant="body1">&copy; Don Eulogio - Todos los derechos reservados</Typography>
      </Box>
    </React.Fragment>
  );
};

export default UrbanizacionAbierta;
