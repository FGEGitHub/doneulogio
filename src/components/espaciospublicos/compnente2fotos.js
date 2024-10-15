import React from 'react';
import { Box, Grid, Typography, Container, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel

import image1a from '../../Assets/carrusel1.svg'; // Imagen 1 del carrusel
import image1b from '../../Assets/carrusel2.svg'; // Imagen 2 del carrusel
import image1c from '../../Assets/carrusel1.svg'; // Imagen 3 del carrusel

import image2a from '../../Assets/carrusel2.svg'; // Imagen 1 del segundo carrusel
import image2b from '../../Assets/carrusel1.svg'; // Imagen 2 del segundo carrusel
import image2c from '../../Assets/carrusel2.svg'; // Imagen 3 del segundo carrusel

// Aumentamos la altura general de las tarjetas (más grandes)
const StyledCard = styled(Card)({
  display: 'flex',
  boxShadow: 'none',
  border: '1px solid lightgrey',
  height: '400px', // Ajuste de altura para hacer la tarjeta más grande
});

// Control de tamaño del contenedor de texto
const CardText = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '16px',
  width: '50%', // Controla el ancho del contenedor de texto
  height: '100%', // Hacemos que el texto ocupe toda la altura de la tarjeta
});

const StyledTypography = styled(Typography)({
  fontFamily: 'Montserrat, sans-serif',
  color: '#000',
  marginBottom: '10px',
});

// Ajustamos el carrusel al nuevo tamaño
const CarouselContainer = styled(Box)({
  width: '50%', // Ajusta el ancho del carrusel aquí
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%', // El carrusel también debe ocupar toda la altura de la tarjeta
});

const PublicSpaces = () => {
  return (
    <Container>
      <Grid container spacing={4}>
        {/* Primer bloque: Carrusel y texto */}
        <Grid item xs={12} md={12}>
          <StyledCard>
            <CarouselContainer>
              <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                autoPlay={true}
                interval={3000}
              >
                {/* Ajuste de tamaño para hacer las imágenes cuadradas */}
                <div>
                  <img src={image1a} alt="Imagen 1a" style={{ height: '300px', width: '300px', objectFit: 'cover' }} /> {/* Ajusta el tamaño aquí */}
                </div>
                <div>
                  <img src={image1b} alt="Imagen 1b" style={{ height: '300px', width: '300px', objectFit: 'cover' }} /> {/* Ajusta el tamaño aquí */}
                </div>
                <div>
                  <img src={image1c} alt="Imagen 1c" style={{ height: '300px', width: '300px', objectFit: 'cover' }} /> {/* Ajusta el tamaño aquí */}
                </div>
              </Carousel>
            </CarouselContainer>
            <CardText>
              <StyledTypography variant="h5">Parque del Origen</StyledTypography>
              <Typography variant="body1">
                Es un desarrollo residencial compuesto por 93 lotes rodeados de naturaleza. El sector cuenta con dos manzanas destinadas a lotes comerciales, ofreciendo una oportunidad perfecta para negocios prósperos en un entorno en crecimiento.
              </Typography>
            </CardText>
          </StyledCard>
        </Grid>

        {/* Segundo bloque: Texto y luego carrusel */}
        <Grid item xs={12} md={12}>
          <StyledCard>
            <CardText>
              <StyledTypography variant="h5">Bosque Nativo</StyledTypography>
              <Typography variant="body1">
                Es un desarrollo que se destaca por su conexión directa con la naturaleza. Con 50 lotes que varían en superficie y cantidad de arbolado, este sector ofrece una diversidad de opciones para adaptarse a las preferencias de cada cliente.
              </Typography>
            </CardText>
            <CarouselContainer>
              <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                autoPlay={true}
                interval={3000}
              >
                {/* Ajuste de tamaño para hacer las imágenes cuadradas */}
                <div>
                  <img src={image2a} alt="Imagen 2a" style={{ height: '300px', width: '300px', objectFit: 'cover' }} /> {/* Ajusta el tamaño aquí */}
                </div>
                <div>
                  <img src={image2b} alt="Imagen 2b" style={{ height: '300px', width: '300px', objectFit: 'cover' }} /> {/* Ajusta el tamaño aquí */}
                </div>
                <div>
                  <img src={image2c} alt="Imagen 2c" style={{ height: '300px', width: '300px', objectFit: 'cover' }} /> {/* Ajusta el tamaño aquí */}
                </div>
              </Carousel>
            </CarouselContainer>
          </StyledCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PublicSpaces;
