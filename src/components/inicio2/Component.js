import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Box, CssBaseline, Toolbar, CircularProgress } from '@mui/material';
import { useNavigate } from "react-router-dom";

import video from '../../Assets/videodron.mp4';
import logo from '../../Assets/logo.png';
import imagenverde from '../../Assets/imagenverde.svg';
import doslogos from'../../Assets/doslogos.png';
import '../urbanizaciona/UrbanizacionAbierta.css';
import Circulos from './nuestrossectores';
import Carrusel from './carrusel';
import Footer from '../footer';
import Mapacomp from './mapacomponente';
import Whatsapcomponente from './compoenetewasap';

const UrbanizacionAbierta = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simula un tiempo de carga de 2 segundos
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      {loading ? (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
          <img src={logo} alt="Logo" style={{ width: '200px', marginBottom: '20px' }} />
          <CircularProgress color="success" />
        </Box>
      ) : (
        <>
          <Toolbar className="urbanizacion-toolbar">
            <img src={logo} alt="Logo" className="urbanizacion-logo" />
          </Toolbar>
          
          <nav className="urbanizacion-nav">
            <div className="urbanizacion-navlink" style={navLinkStyle} onClick={() => navigate('/')}>Home</div>
            <div className="urbanizacion-navlink" style={navLinkStyle} onClick={() => navigate('/urbanizacion-abierta')}>Urbanización Abierta</div>
            <div className="urbanizacion-navlink" style={navLinkStyle} onClick={() => navigate('/masterplan')}>MasterPlan</div>
            <div className="urbanizacion-navlink" style={navLinkStyle} onClick={() => navigate('/espacios-publicos')}>Espacios públicos</div>
            <div className="urbanizacion-navlink" style={navLinkStyle} onClick={() => navigate('/contacto')}>Contacto</div>
          </nav>

          {/* Video Section */}
          <Box sx={{ position: 'relative', width: '100%', height: '450px', overflow: 'hidden' }}>
            <video src={video} autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <Typography variant="h3" component="div" sx={videoTextStyle}>
              Tu futuro<br/>en Don Eulogio
            </Typography>
          </Box>

          <Circulos />
          <br /> <br />
          <Carrusel />
          <Mapacomp />
          <br /><br /><br /><br />
          <img src={imagenverde} alt="Logo" className="urbanizacion-header-image" />
          <br /><br /><br /><br />
          <img src={doslogos} alt="Logo" style={styles.imagealt} />
          <br /><br />
          <Footer />
          <Box className="urbanizacion-footer">
            <Typography variant="body1">&copy; Don Eulogio - Todos los derechos reservados</Typography>
          </Box>
          <Whatsapcomponente />
        </>
      )}
    </React.Fragment>
  );
};

const styles = {
  imagealt: {
    marginTop: '5%',
    width: '30%',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  }
};

const navLinkStyle = {
  color: "#246F74",
  marginRight: "25px",
  fontSize: "24px",
  fontFamily: "Inter",
  fontWeight: 400,
  cursor: "pointer"
};

const videoTextStyle = {
  position: 'absolute',
  top: '50%',
  left: '20%',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '56px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  fontFamily: 'Inter',
};

export default UrbanizacionAbierta;
