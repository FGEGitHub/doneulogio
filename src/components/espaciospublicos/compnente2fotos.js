import React from 'react';
import { Box, Grid, Typography, Container, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel

import image1a from '../../Assets/carruselprincipio.svg'; // Imagen 1 del carrusel
import image1b from '../../Assets/carrusel2.svg'; // Imagen 2 del carrusel
import image1c from '../../Assets/carrusel1.svg'; // Imagen 3 del carrusel

import image2a from '../../Assets/carruselprincipio2.svg'; // Imagen 1 del segundo carrusel
import image2b from '../../Assets/carrusel1.svg'; // Imagen 2 del segundo carrusel
import image2c from '../../Assets/carrusel2.svg'; // Imagen 3 del segundo carrusel

// Modificamos el componente para eliminar bordes y fondo, y aumentar tamaño
const StyledContainer = styled(Box)({
  display: 'flex',
  height: '600px', // Aumenta el tamaño del contenedor
});

// Control de tamaño del contenedor de texto
const CardText = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '16px',
  width: '60%', // Aumenta el ancho del contenedor de texto
  height: '100%', // Hacemos que el texto ocupe toda la altura del contenedor
  marginLeft: '20px', // Aumenta el margen izquierdo para separar el texto del carrusel
});

const StyledTypography = styled(Typography)({
  fontFamily: 'inter',
  color: '#000',
  marginBottom: '10px',
});

// Ajustamos el carrusel al nuevo tamaño
const CarouselContainer = styled(Box)({
  width: '600px', // Aumenta el ancho del carrusel
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%', // El carrusel también debe ocupar toda la altura del contenedor
  marginRight: '20px', // Aumenta el margen derecho para separar el carrusel del texto
});

const PublicSpaces = () => {
  return (
    <Container>
      <Grid container spacing={4}>
        {/* Primer bloque: Carrusel y texto */}
        <Grid item xs={12} md={12}>
          <StyledContainer>
            <CarouselContainer>
              <Carousel
                showArrows={false} // Oculta las flechas del carrusel
                infiniteLoop={true}
                showThumbs={false}
                autoPlay={true}
                interval={3000}
                transitionTime={500}
                centerMode={true}
                centerSlidePercentage={100} // Muestra una imagen a la vez completamente centrada
                showStatus={false} // Oculta el texto "1 of 3"
              >
                <div>
                  <img src={image1a} alt="Imagen 1a" style={{ height: '400px', width: '400px', objectFit: 'cover' }} />
                </div>
                <div>
                  <img src={image1a} alt="Imagen 1b" style={{ height: '400px', width: '400px', objectFit: 'cover' }} />
                </div>
                <div>
                  <img src={image1a} alt="Imagen 1c" style={{ height: '400px', width: '400px', objectFit: 'cover' }} />
                </div>
              </Carousel>
            </CarouselContainer>
            <CardText>
              <StyledTypography
                variant="h5"
                style={{
                  textAlign: 'left', // Alineación del texto a la izquierda
                  fontSize: '32px',  // Ajusta el tamaño de la fuente
                  fontFamily: 'inter', // Cambia el tipo de letra
                }}
              >
                <strong>Parque del Origen</strong>
              </StyledTypography>
              <Typography
                variant="body1"
                style={{
                  textAlign: 'justify', // Justifica el texto
                  fontSize: '24px', // Ajusta el tamaño de la fuente para el cuerpo del texto
                  fontFamily: 'inter', // Cambia el tipo de letra si lo deseas
                }}
              >
                Primer espacio público del proyecto, donde todo se originó. Ubicado a la entrada del bosque nativo del sector Bosques, cuenta con espacios para sentarse a compartir y disfrutar de un entorno sereno y natural. Ideal para quienes buscan un momento de desconexión.
              </Typography>
            </CardText>
          </StyledContainer>
        </Grid>

        {/* Segundo bloque: Texto y luego carrusel */}
        <Grid item xs={12} md={12}>
          <StyledContainer>
            <CardText>
              <StyledTypography variant="h5"    
                style={{
                  textAlign: 'left', // Alineación del texto a la izquierda
                  fontSize: '32px',  // Ajusta el tamaño de la fuente
                  fontFamily: 'inter', // Cambia el tipo de letra
                }}> <strong>Bosque Nativo</strong></StyledTypography>
              <Typography variant="body1"  style={{
                  textAlign: 'justify', // Justifica el texto
                  fontSize: '24px', // Ajusta el tamaño de la fuente para el cuerpo del texto
                  fontFamily: 'inter', // Cambia el tipo de letra si lo deseas
                }}>
                Primer espacio público del proyecto, donde todo se originó. Ubicado a la entrada del bosque nativo del sector Bosques, cuenta con espacios para sentarse a compartir y disfrutar de un entorno sereno y natural. Ideal para quienes buscan un momento de desconexión.
              </Typography>
            </CardText>
            <CarouselContainer>
              <Carousel
                showArrows={false} // Oculta las flechas del carrusel
                infiniteLoop={true}
                showThumbs={false}
                autoPlay={true}
                interval={3000}
                transitionTime={500}
                centerMode={true}
                centerSlidePercentage={100} // Muestra una imagen a la vez completamente centrada
                showStatus={false} // Oculta el texto "1 of 3"
              >
                <div>
                  <img src={image2a} alt="Imagen 2a" style={{ height: '400px', width: '400px', objectFit: 'cover' }} />
                </div>
                <div>
                  <img src={image2b} alt="Imagen 2b" style={{ height: '400px', width: '400px', objectFit: 'cover' }} />
                </div>
                <div>
                  <img src={image2c} alt="Imagen 2c" style={{ height: '400px', width: '400px', objectFit: 'cover' }} />
                </div>
              </Carousel>
            </CarouselContainer>
          </StyledContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PublicSpaces;
