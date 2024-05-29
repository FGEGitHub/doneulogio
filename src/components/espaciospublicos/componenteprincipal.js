import React from 'react';
import { Card, CardContent, CardMedia, Typography, Container, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';

const Root = styled(Box)({
  backgroundColor: '#1a393c',
  padding: '16px',
  minHeight: '100vh',
  fontFamily: 'Montserrat, sans-serif',
});

const CardStyled = styled(Card)({
  marginBottom: '16px',
  display: 'flex',
  minHeight: '400px', // Asegura que las tarjetas tengan una altura mínima suficiente
});

const MediaStyled = styled(CardMedia)({
  width: '75%', // La imagen ocupa el 75% del ancho
  height: '100%', // Asegura que la imagen ocupe todo el contenedor en altura
  objectFit: 'cover', // Asegura que la imagen cubra el área del contenedor
});

const ContentBox = styled(Box)({
  width: '25%', // El contenido ocupa el 25% del ancho
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', // Centra el contenido verticalmente
});

const Title = styled(Typography)({
  fontFamily: 'Montserrat, sans-serif',
  color: '#fff',
});

const Description = styled(Typography)({
  fontFamily: 'Montserrat, sans-serif',
  color: '#fff',
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
    imageUrl: 'https://via.placeholder.com/400x200',
  },
];

const PublicSpaces = () => {
  return (
    <Root>
      <Container>
        <Grid container spacing={4}>
          {spaces.map((space, index) => (
            <Grid item xs={12} key={index}>
              <CardStyled>
                <MediaStyled
                  image={space.imageUrl}
                  title={space.title}
                />
                <ContentBox>
                  <Title variant="h5" component="div">
                    {space.title}
                  </Title>
                  <Description variant="body2">
                    {space.description}
                  </Description>
                </ContentBox>
              </CardStyled>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Root>
  );
};

export default PublicSpaces;
