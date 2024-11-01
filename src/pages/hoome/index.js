import React, { useState, useEffect } from 'react'; // Agregamos useEffect
import { Box, Typography, IconButton, Grid } from '@mui/material';
import logo from '../../Assets/logo_svg.svg';
import Video from '../../Assets/video.mp4';
import Comercializa from "../../Assets/Group1364.svg";
import rectangulo from "../../Assets/rectangolo_verde.svg";
import Footer from "../../Assets/footer.svg";
import map from "../../Assets/mapa_svg.svg";
import bosques from "../../Assets/Group 97.svg";
import pinares from "../../Assets/Group 98.svg"

// Importa las imágenes del carrusel
import img1 from '../../Assets/libertad.svg';
import img2 from '../../Assets/comunidad.svg';
import img3 from '../../Assets/naturaleza.svg';
import img4 from '../../Assets/inversion.svg';
import img5 from '../../Assets/bienestar.svg';

export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
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
      {/* Navbar */}
      <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 0',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
  }}
>
  <img src={logo} alt="Logo" style={{ height: '89.81px',
  width: "142.79px",
  marginBottom: '20px',
  display: 'block' }} />

        <Box sx={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
    <Typography
      variant="body1"
      sx={{
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '18.69px', // Nuevo tamaño de fuente
        fontFamily: 'Inter', // Nueva familia de fuente
        fontWeight: 400, // Nuevo peso de fuente
        lineHeight: '22.62px', // Nueva altura de línea
        color: 'rgba(36, 111, 116, 1)', 

       
      }}
    >
      Home
    </Typography>
    <Typography
      variant="body1"
      sx={{
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '18.69px',
        fontFamily: 'Inter',
        fontWeight: 400,
        lineHeight: '22.62px',
        color: 'rgba(36, 111, 116, 1)', 
      }}
    >
      Urbanización Abierta
    </Typography>
    <Typography
      variant="body1"
      sx={{
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '18.69px',
        fontFamily: 'Inter',
        fontWeight: 400,
        lineHeight: '22.62px',
        color: 'rgba(36, 111, 116, 1)', 
      }}
    >
      MasterPlan
    </Typography>
    <Typography
      variant="body1"
      sx={{
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '18.69px',
        fontFamily: 'Inter',
        fontWeight: 400,
        lineHeight: '22.62px',
        color: 'rgba(36, 111, 116, 1)', 
      }}
    >
      Espacios públicos
    </Typography>
    <Typography
      variant="body1"
      sx={{
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '18.69px',
        fontFamily: 'Inter',
        fontWeight: 400,
        lineHeight: '22.62px',
        color: 'rgba(36, 111, 116, 1)', 
      }}
    >
      Contacto
    </Typography>
  </Box>
</Box>

      {/* Video Background */}
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

      {/* Sección "Nuestros Sectores" */}
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

      {/* Sección de Imágenes con SVG predefinidos */}
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

{/* Carousel Section */}
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

  {/* Indicadores de diapositivas */}
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

      {/* Rest of the components... */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '40px',
        }}
      >
     
      </Box>
  
  {/* componente de mapa y donde estamos */}
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
    <Box
      component="img"
      src={Comercializa}
      alt="Comercializa"
      sx={{
        width: '488.77px',
        height: '106.44px',
      }}
    />
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
};