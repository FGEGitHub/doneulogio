import React from 'react';
import { Card, CardContent, Typography, Container, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';

const Root = styled(Box)({
  backgroundColor: '#1a393c',
  padding: '16px',
  minHeight: '100vh',
  fontFamily: 'Montserrat, sans-serif',
});

const CardStyled = styled(Card)({
  marginBottom: '16px',
  minHeight: '400px', // Asegura que las tarjetas tengan una altura mínima suficiente
});

const ContentBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
});

const ImageStyled = styled('img')({
  width: '100%', // La imagen ocupa todo el ancho del contenedor
  height: 'auto', // La altura se ajusta automáticamente para mantener la proporción de la imagen
  objectFit: 'cover', // Asegura que la imagen cubra el área del contenedor
});

const TextContent = styled(Box)({
  padding: '16px',
});

const Title = styled(Typography)({
  fontFamily: 'Montserrat, sans-serif',
  color: '#000', // Cambia el color del texto a negro
});

const Description = styled(Typography)({
  fontFamily: 'Montserrat, sans-serif',
  color: '#000', // Cambia el color del texto a negro
});

const spaces = [
  {
    title: 'Puente Pexoa',
    description: 'El Puente Pexoa es una estructura de hierro sobre el arroyo Riachuelo, en el llamado Paso Pexoa, en la localidad de Riachuelo, provincia de Corrientes.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Puente-pexoa-san-cayetano.jpg',
  },
  {
    title: 'Bosques Don Eulogio',
    description: 'El Puente Pexoa es una estructura de hierro sobre el arroyo Riachuelo, en el llamado Paso Pexoa, en la localidad de Riachuelo, provincia de Corrientes.',
    imageUrl: 'https://s1.elespanol.com/2022/09/09/actualidad/701940464_227019911_1706x960.jpg',
  },
  {
    title: 'Centro deportivo',
    description: 'El Puente Pexoa es una estructura de hierro sobre el arroyo Riachuelo, en el llamado Paso Pexoa, en la localidad de Riachuelo, provincia de Corrientes.',
    imageUrl: 'https://img.freepik.com/fotos-premium/complejo-deportivo-centro-minsk-canchas-deportivas-al-aire-libre-juegos-bielorrusia_217593-15308.jpg?w=996',
  },
];

const PublicSpaces = () => {
  return (
    <Root>
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
