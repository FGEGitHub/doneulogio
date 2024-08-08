import React from 'react';
import { Card, CardContent, Typography, Container, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';
import videodron from "../../Assets/videodron.mp4";

import foto1 from '../../Assets/espaciospubllicosbaner.png';

const Root = styled(Box)({
  backgroundColor: '#1a393c',
  padding: '16px',
  minHeight: '100vh',
  fontFamily: 'Montserrat, sans-serif',
  position: 'relative',
});

const CardStyled = styled(Card)({
  marginBottom: '16px',
  minHeight: '400px',
});

const ContentBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
});

const ImageStyled = styled('img')({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
});

const TextContent = styled(Box)({
  padding: '16px',
});

const Title = styled(Typography)({
  fontFamily: 'Montserrat, sans-serif',
  color: '#000',
});

const Description = styled(Typography)({
  fontFamily: 'Montserrat, sans-serif',
  color: '#000',
});

const VideoBackground = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
  overflow: 'hidden',
});

const Video = styled('video')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const PublicSpaces = () => {
  const spaces = [
    {
      title: 'Puente Pexoa',
      description: 'El Puente Pexoa es una estructura de hierro sobre el arroyo Riachuelo, en el llamado Paso Pexoa, en la localidad de Riachuelo, provincia de Corrientes.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Puente-pexoa-san-cayetano.jpg',
    },
    {
      title: 'Camping Puente Pexoa',
      description: 'El Camping Puente Pexoa ofrece un lugar ideal para disfrutar de la naturaleza y realizar actividades al aire libre en Corrientes.',
      imageUrl: 'https://s1.elespanol.com/2022/09/09/actualidad/701940464_227019911_1706x960.jpg',
    },
    {
      title: 'Capilla San Cayetano',
      description: 'La Capilla San Cayetano es un importante lugar de peregrinación y devoción en la provincia de Corrientes.',
      imageUrl: 'https://img.freepik.com/fotos-premium/complejo-deportivo-centro-minsk-canchas-deportivas-al-aire-libre-juegos-bielorrusia_217593-15308.jpg?w=996',
    },
    {
      title: 'Parque Provincial San Cayetano',
      description: 'El Parque Provincial San Cayetano es un espacio natural protegido que ofrece una variedad de flora y fauna en Corrientes.',
      imageUrl: 'https://example.com/parque-san-cayetano.jpg',
    },
  ];

  return (
    <Root>
              <img src={foto1} alt="Urbanización Abierta" className="urbanizacion-content-image" />

      <VideoBackground>
        <Video autoPlay loop muted>
          <source src={videodron} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </VideoBackground>
      <Container>
        <Grid container spacing={2}>
          {spaces.map((space, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CardStyled>
                <ImageStyled
                  src={space.imageUrl}
                  alt={space.title}
                />
                <CardContent>
                  <Title variant="h5" component="div">
                    {space.title}
                  </Title>
                  <Description variant="body2">
                    {space.description}
                  </Description>
                </CardContent>
              </CardStyled>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Root>
  );
};

export default PublicSpaces;
