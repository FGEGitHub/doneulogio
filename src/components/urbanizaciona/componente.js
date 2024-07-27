import React from 'react';
import { Container, Typography, Grid, Box, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import videodron from "../../Assets/videodron.mp4";

const Root = styled(Box)({
  backgroundColor: '#f4f4f4',
  padding: '32px 0',
  minHeight: '100vh',
  fontFamily: 'Montserrat, sans-serif',
});

const SectionTitle = styled(Typography)({
  marginBottom: '24px',
  fontWeight: 'bold',
  color: '#1a393c',
});

const ServiceCard = styled(Card)({
  display: 'flex',
  alignItems: 'center',
  padding: '16px',
  marginBottom: '16px',
});

const ServiceIcon = styled('img')({
  width: '50px',
  height: '50px',
  marginRight: '16px',
});

const ServiceDescription = styled(Typography)({
  color: '#333',
});

const services = [
  {
    title: 'Red de Agua',
    description: 'Provisión de agua potable de alta calidad para todos los residentes.',
    icon: 'https://image.shutterstock.com/image-vector/water-drop-icon-vector-template-260nw-1421285760.jpg',
  },
  {
    title: 'Red de Energía Eléctrica',
    description: 'Suministro eléctrico confiable y eficiente para todas las viviendas.',
    icon: 'https://image.shutterstock.com/image-vector/electricity-icon-vector-260nw-1456835738.jpg',
  },
  {
    title: 'Alumbrado Público LED',
    description: 'Iluminación de calles y espacios comunes con tecnología LED.',
    icon: 'https://image.shutterstock.com/image-vector/led-icon-vector-260nw-1512313745.jpg',
  },
  {
    title: 'Calles Enripiadas',
    description: 'Vías de acceso mejoradas con material de ripio para mayor durabilidad.',
    icon: 'https://image.shutterstock.com/image-vector/road-icon-vector-260nw-1413922426.jpg',
  },
  {
    title: 'Espacios Verdes',
    description: 'Áreas recreativas y parques para el disfrute de toda la comunidad.',
    icon: 'https://image.shutterstock.com/image-vector/park-icon-vector-260nw-1507048711.jpg',
  },
];

const UrbanizacionAbierta = () => {
  return (
    <Root>
      <Container>
        <SectionTitle variant="h4" component="div">
          Urbanización Abierta
        </SectionTitle>
        <Typography variant="body1" gutterBottom>
         Una urbanización abierta es un tipo de desarrollo residencial que no tiene límites físicos cerrados, lo que permite una mayor integración con el entorno urbano y accesibilidad para todos los residentes y visitantes. Este modelo fomenta una comunidad más inclusiva y conectada, ofreciendo una variedad de servicios e infraestructuras para mejorar la calidad de vida.
        </Typography>
        <SectionTitle variant="h5" component="div">
          Servicios de Infraestructura
        </SectionTitle>
        <Grid container spacing={2}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServiceCard>
                <ServiceIcon src={service.icon} alt={service.title} />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {service.title}
                  </Typography>
                  <ServiceDescription variant="body2">
                    {service.description}
                  </ServiceDescription>
                </CardContent>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Root>
  );
};

export default UrbanizacionAbierta;
