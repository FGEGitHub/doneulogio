import React from 'react';
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
import flechaIzquierda from '../../Assets/iz.png'; // Importa la flecha izquierda
import flechaDerecha from '../../Assets/der.png'; // Importa la flecha derecha

const UrbanizacionAbierta = () => {
  return (
    <Box sx={{ backgroundColor: '#357369', padding: '40px 0', height: '847.15px', position: 'relative' }}>
      {/* Título con salto de línea */}
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          color: 'white',
          marginBottom: '40px',
          fontFamily: 'Inter',
        }}
      >
        Aspectos clave de una <br />
        <strong>Urbanización abierta</strong>
      </Typography>

      {/* Flechas largas más separadas */}
      <Box sx={{ position: 'relative', marginBottom: '50px' }}>
        {/* Flecha izquierda */}
        <img
          src={flechaIzquierda}
          alt="Flecha Izquierda"
          style={{
            position: 'absolute',
            top: '-80px',
            left: '25%',
            height: '100px',
            transform: 'rotate(20deg)',
          }}
        />
        {/* Flecha derecha */}
        <img
          src={flechaDerecha}
          alt="Flecha Derecha"
          style={{
            position: 'absolute',
            top: '-80px',
            right: '25%',
            height: '100px',
            transform: 'rotate(-20deg)',
          }}
        />
      </Box>

      <br /><br />
      {/* Tarjetas centradas */}
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* Tarjeta 1 */}
        <Grid item xs={12} sm={4} display="flex" justifyContent="center">
          <Card
            sx={{
              height: '550px',
              width: '70%',
              borderRadius: '16px', // Bordes redondeados
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center', // Centra el contenido verticalmente
              alignItems: 'center',   // Centra el contenido horizontalmente
            }}
          >
            <CardContent
              sx={{
                padding: '20px', // Ajusta el espacio interior, puedes cambiar el valor
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', // Centra el texto verticalmente
                alignItems: 'center', // Centra el texto horizontalmente
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', marginBottom: '20px', color: '#357369', fontSize: '27px' }} // Tamaño del título más grande
              >
                Libertad de Decisiones
              </Typography>
              <Typography variant="body2" sx={{ color: '#757575', fontSize: '25px', lineHeight: 1.5 }}>
                Ante la inexistencia de consorcios de administración y de reglamentos internos de convivencia y construcción, cada propietario goza de total libertad en cuanto a las decisiones sobre su lote (respetando la legislación aplicable).
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Tarjeta 2 */}
        <Grid item xs={12} sm={4} display="flex" justifyContent="center">
          <Card
            sx={{
              height: '550px',
              width: '70%',
              borderRadius: '16px', // Bordes redondeados
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center', // Centra el contenido verticalmente
              alignItems: 'center',   // Centra el contenido horizontalmente
            }}
          >
            <CardContent
              sx={{
                padding: '20px', // Ajusta el espacio interior, puedes cambiar el valor
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', // Centra el texto verticalmente
                alignItems: 'center', // Centra el texto horizontalmente
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', marginBottom: '20px',  marginTottom: '20px',color: '#357369', fontSize: '27px' }} // Tamaño del título más grande
              >
                Integración al Entorno
              </Typography>
              <Typography variant="body2" sx={{ color: '#757575', fontSize: '25px', lineHeight: 1.5 }}>
                En este tipo de proyectos tanto las calles y avenidas, como las áreas comunes y los espacios verdes están interconectados y accesibles a toda la comunidad.       <br/><br/><br/><br/>                                                      
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Tarjeta 3 */}
        <Grid item xs={12} sm={4} display="flex" justifyContent="center">
          <Card
            sx={{
              height: '550px',
              width: '70%',
              borderRadius: '16px', // Bordes redondeados
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center', // Centra el contenido verticalmente
              alignItems: 'center',   // Centra el contenido horizontalmente
            }}
          >
            <CardContent
              sx={{
                padding: '20px', // Ajusta el espacio interior, puedes cambiar el valor
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', // Centra el texto verticalmente
                alignItems: 'center', // Centra el texto horizontalmente
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', marginBottom: '20px', color: '#357369', fontSize: '27px' }} // Tamaño del título más grande
              >
                Interacción Social y Comunidad Activa
              </Typography>
              <Typography variant="body2" sx={{ color: '#757575', fontSize: '25px', lineHeight: 1.5 }}>
                En este tipo de proyectos tanto las calles y avenidas, como las áreas comunes y los espacios verdes están interconectados y accesibles a toda la comunidad.<br/><br/>  <br/>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UrbanizacionAbierta;
