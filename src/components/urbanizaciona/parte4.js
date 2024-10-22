import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import flechaIzquierda from '../../Assets/iz.png'; // Importa la flecha izquierda
import flechaDerecha from '../../Assets/der.png'; // Importa la flecha derecha
import flechaabajo from '../../Assets/flechaabajo.svg'; // Importa la flecha que apunta hacia abajo
import tarjeta1 from '../../Assets/tarjeta1.svg'; // Importa tarjeta1
import tarjeta2 from '../../Assets/tarjeta2.svg'; // Importa tarjeta2
import tarjeta3 from '../../Assets/tarjeta3.svg'; // Importa tarjeta3

const UrbanizacionAbierta = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#246F74',
        padding: '40px',
        paddingBottom: '80px',  // Aumenta el padding inferior para extender 40px más
        minHeight: '100vh',     // Asegura que el fondo abarque toda la pantalla
        position: 'relative'
      }}
    >
      {/* Título con salto de línea */}
      <Typography
  variant="h4"
  sx={{
    textAlign: 'center',
    color: 'white',
    //marginBottom: '5px',
    fontFamily: 'Inter',
    fontSize: '2.5rem', // Tamaño de letra aumentado
  }}
>
  Aspectos clave de una <br />
  <strong>Urbanización abierta</strong>
</Typography>

      {/* Flecha abajo más separada, entre el título y las tarjetas */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}> {/* Aquí se puede reducir el espacio */}
        <img
          src={flechaabajo}
          alt="Flecha Abajo"
          style={{
            height: '55px',
          }}
        />
      </Box>

      {/* Flechas laterales */}
      <Box sx={{ position: 'relative', marginBottom: '50px' }}>
        {/* Flecha izquierda */}
        <img
          src={flechaIzquierda}
          alt="Flecha Izquierda"
          style={{
            position: 'absolute',
            top: '-120px',
            left: '25%',
            height: '80px',
            transform: 'rotate(5deg)',
          }}
        />
        {/* Flecha derecha */}
        <img
          src={flechaDerecha}
          alt="Flecha Derecha"
          style={{
            position: 'absolute',
            top: '-120px',
            right: '25%',
            height: '80px',
            transform: 'rotate(-5deg)',
          }}
        />
      </Box>

      {/* Imágenes centradas más grandes */}
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={4} display="flex" justifyContent="center">
          <img
            src={tarjeta1}
            alt="Tarjeta 1"
            style={{
              height: '90%',  // Modificar el tamaño aquí
              width: '90%',   // Modificar el tamaño aquí
              objectFit: 'contain'
            }}
          />
        </Grid>

        <Grid item xs={12} sm={4} display="flex" justifyContent="center" position="relative">
          <img
            src={tarjeta2}
            alt="Tarjeta 2"
            style={{
              height: '90%',  // Modificar el tamaño aquí
              width: '90%',   // Modificar el tamaño aquí
              objectFit: 'contain'
            }}
          />
        </Grid>

        <Grid item xs={12} sm={4} display="flex" justifyContent="center">
          <img
            src={tarjeta3}
            alt="Tarjeta 3"
            style={{
              height: '90%',  // Modificar el tamaño aquí
              width: '90%',   // Modificar el tamaño aquí
              objectFit: 'contain'
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default UrbanizacionAbierta;
