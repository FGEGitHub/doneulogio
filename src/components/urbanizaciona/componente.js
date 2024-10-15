import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Box, CssBaseline, Toolbar } from '@mui/material';
import foto1 from '../../Assets/urabierta.png';
import foto2 from '../../Assets/uapng.png';
import logo from '../../Assets/logo.png';
import './UrbanizacionAbierta.css';
import Parte4 from './parte4';
import Footer from '../footer';
import { useNavigate } from 'react-router-dom';

const UrbanizacionAbierta = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Pre-cargar imágenes
    const images = [foto1, foto2, logo];
    let loadedImages = 0;

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedImages += 1;
        if (loadedImages === images.length) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedImages += 1;
        if (loadedImages === images.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  if (!imagesLoaded) {
    // Muestra un mensaje de carga o un spinner mientras se cargan las imágenes
    return <div>Cargando...</div>;
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Toolbar className="urbanizacion-toolbar">
        <img src={logo} alt="Logo" className="urbanizacion-logo" />
      </Toolbar>
      <nav className="urbanizacion-nav">
        <div
          className="urbanizacion-navlink"
          style={{
            color: '#246F74',
            marginRight: '25px',
            fontSize: '24px',
            fontFamily: 'Inter',
            fontWeight: 400,
            cursor: 'pointer'
          }}
          onClick={() => navigate('/')}
        >
          Home
        </div>
        <div
          className="urbanizacion-navlink"
          style={{
            color: '#246F74',
            marginRight: '25px',
            fontSize: '24px',
            fontFamily: 'Inter',
            fontWeight: 400,
            cursor: 'pointer'
          }}
          onClick={() => navigate('/urbanizacion-abierta')}
        >
          Urbanización Abierta
        </div>
        <div
          className="urbanizacion-navlink"
          style={{
            color: '#246F74',
            marginRight: '25px',
            fontSize: '24px',
            fontFamily: 'Inter',
            fontWeight: 400,
            cursor: 'pointer'
          }}
          onClick={() => navigate('/masterplan')}
        >
          MasterPlan
        </div>
        <div
          className="urbanizacion-navlink"
          style={{
            color: '#246F74',
            marginRight: '25px',
            fontSize: '24px',
            fontFamily: 'Inter',
            fontWeight: 400,
            cursor: 'pointer'
          }}
          onClick={() => navigate('/espacios-publicos')}
        >
          Espacios públicos
        </div>
        <div
          className="urbanizacion-navlink"
          style={{
            color: '#246F74',
            marginRight: '25px',
            fontSize: '24px',
            fontFamily: 'Inter',
            fontWeight: 400,
            cursor: 'pointer'
          }}
          onClick={() => navigate('/contacto')}
        >
          Contacto
        </div>
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
                textAlign: 'center',
                marginTop: '20%',
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
      <Parte4 />
      <Footer />
      <Box className="urbanizacion-footer">
        <Typography variant="body1">&copy; Don Eulogio - Todos los derechos reservados</Typography>
      </Box>
    </React.Fragment>
  );
};

export default UrbanizacionAbierta;
