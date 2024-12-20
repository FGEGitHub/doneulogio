/* import React, { useState, useEffect } from 'react'; // Agregamos useEffect
import { Box, Typography, IconButton, Grid ,CssBaseline,Toolbar} from '@mui/material';
import logo from '../../Assets/logo_svg.svg';
import Video from '../../Assets/video.mp4';
//import Comercializa from "../../Assets/Group1364.svg";
import rectangulo from "../../Assets/rectanguloverde.png"
import Footer from "../../Assets/footer.svg";
import map from "../../Assets/mapa_svg.svg";
import bosques from "../../Assets/bosques.png";
import pinares from "../../Assets/pinar.png"
import { useNavigate } from "react-router-dom";

// Importa las imágenes del carrusel
import img1 from '../../Assets/libertad.png';
import img2 from '../../Assets/Comunidad.png';
import img3 from '../../Assets/Naturaleza.png';
import img4 from '../../Assets/Inversion.png';
import img5 from '../../Assets/Bienestar.png';

export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();
  // Array con las imágenes del carrusel
  const carouselImages = [img1, img2, img3, img4, img5];

  // Manejadores de eventos mejorados

  // Efecto para el autoplay
  useEffect(() => {
    let interval;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
      }, 3000); // Cambia cada 3 segundos
    }

    // Limpieza del intervalo cuando el componente se desmonta o cambia isAutoPlaying
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, carouselImages.length]);

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
    

      <CssBaseline />
      <Toolbar className="urbanizacion-toolbar">
          <img src={logo} alt="Logo" className="urbanizacion-logo" />
        </Toolbar>
   
   
      
        <nav className="urbanizacion-nav">
  <div
    variant="button"
    color="primary"
    href="#"
    className="urbanizacion-navlink"
    style={{ 
      color: "#246F74", 
      marginRight: "25px", 
      fontSize: "28px", 
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


   
      <Box sx={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden' }}>
        <video
          src={Video}
          autoPlay
          loop
          muted
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <Typography
          variant="h3"
          component="div"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontWeight: 'bold',
            fontSize: { xs: '48px', sm: '64px', md: '96px' },
            textAlign: 'center',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          Tu futuro<br />en Don Eulogio
        </Typography>
      </Box>

   
      <Box sx={{ textAlign: 'center', mt: '50px', mb: '30px' }}>
        <Typography
          sx={{
            color: '#000000',
            fontFamily: '"Inter-SemiBold", Helvetica',
            fontSize: '40.1px',
            fontWeight: 600,
          }}
        >
          Nuestros Sectores
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '30px', mb: '60px' }}>
        <Box
          component="img"
          src={pinares}
          alt="Pinares"
          sx={{
            width: '247px',
            height: '104px',
            borderRadius: '52.21px',
          }}
        />

        <Box
          component="img"
          src={bosques}
          alt="Bosques"
          sx={{
            width: '247px',
            height: '104px',
            borderRadius: '52.21px',
          }}
        />
      </Box>

<Box sx={{ position: 'relative', height: '400px', width: '100%', overflow: 'hidden' }}>
  <Box
    component="img"
    src={carouselImages[currentSlide]}
    alt={`Slide ${currentSlide + 1}`}
    sx={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'opacity 0.5s ease-in-out',
    }}
  />

  <Box
    sx={{
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 1,
    }}
  >
    {carouselImages.map((_, index) => (
      <Box
        key={index}
        sx={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: index === currentSlide ? 'white' : 'rgba(255, 255, 255, 0.5)',
          transition: 'background-color 0.3s',
        }}
      />
    ))}
  </Box>
</Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '40px',
        }}
      >
     
      </Box>
  
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '40px', marginTop: '60px' }}>
  <Box sx={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
    <Box>
      <Typography
        sx={{
          color: 'rgba(28, 106, 59, 1)',
          fontFamily: 'Inter',
          fontSize: '24.16px',
          fontWeight: 800,
          lineHeight: '29.24px',
          textAlign: 'left',
          width: '215px',
          height: '29px',
          position: 'relative',
          left: '103.92px',
        }}
      >
        ¿Dónde estamos?
      </Typography>
      <Typography
        sx={{
          color: 'rgba(55, 55, 55, 1)',
          fontFamily: 'Inter',
          fontSize: '19.33px',
          fontWeight: 500,
          lineHeight: '23.39px',
          textAlign: 'left',
          width: '301.01px',
          height: '96.44px',
          position: 'relative',
          left: '103.92px',
          mt: 2,
        }}
      >
        Don Eulogio se ubica en el camino de acceso principal al Pueblo de San Cayetano (Ruta Prov. Nº 08)
      </Typography>
      <Typography
        sx={{
          color: 'rgba(55, 55, 55, 1)',
          fontFamily: 'Inter',
          fontSize: '19.33px',
          fontWeight: 500,
          lineHeight: '23.39px',
          textAlign: 'left',
          width: '301.01px',
          height: '96.44px',
          position: 'relative',
          left: '103.92px',
          mt: 2,
        }}
      >
        Esta situado a 1,5 Km. de la Ruta Nac. Nº 12 y a 12 Km. de la Rotonda de la Virgen
      </Typography>
      <Typography
        sx={{
          color: "rgba(97, 169, 221, 1)",
          fontFamily: 'Inter',
          fontSize: '19.33px',
          fontWeight: 500,
          lineHeight: '23.39px',
          textAlign: 'left',
          width: '301.01px',
          height: '96.44px',
          position: 'relative',
          left: '103.92px',
          mt: 2,
        }}
      >
        Hace click para verlo en Google Maps
      </Typography>
    </Box>
    <Box
      component="img"
      src={map}
      alt="Mapa Don Eulogio"
      sx={{
        width: '650px',
        height: '553.38px',
        objectFit: 'cover',
        position: 'relative',
        left: '603.92px',
      }}
    />
  </Box>

  <Box
    component="img"
    src={rectangulo}
    alt="Rectángulo Verde"
    sx={{
      width: '100%',
      height: 'auto',
      marginTop: '0',
      position: 'relative',
      display: 'block', // Agrega esto para asegurarnos de que el SVG se renderice correctamente

      
    }}
  />
</Box>

<Grid container justifyContent="center" alignItems="center" sx={{ mt: 5 }}>
  <Grid item xs={12} sm={6} md={4}>

  </Grid>
</Grid>

<Box
  component="img"
  src={Footer}
  alt="Footer"
  sx={{
    width: '100%',
    height: 'auto',
    mt: 5,
  }}
/>
    </Box>
  );
}; */