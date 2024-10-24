import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import bosques from '../../Assets/bosquesvg.svg';
import pinares from '../../Assets/pinaressvg.svg';

const SectoresComponent = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: '60px 0' }}> {/* Aumenté el padding para más espacio arriba y abajo */}
      <Typography 
        variant="h2" 
        sx={{ fontFamily: 'Inter, sans-serif', marginBottom: '60px', fontSize: '2.5rem' }} // Aumenté el marginBottom y el tamaño de la fuente
      >
        Nuestros sectores
      </Typography>
      <Grid container spacing={8} justifyContent="center"> {/* Cambié spacing de 6 a 8 para mayor separación */}
        {/* Botón Bosques */}
        <Grid item>
          <Box
            sx={{
              width: '300px', // Aumenté el ancho
              height: '150px', // Aumenté la altura
              backgroundImage: `url(${bosques})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)', // Aumenté la sombra para mayor énfasis
            }}
          >
            {/* Aquí puedes añadir texto o íconos si es necesario */}
          </Box>
        </Grid>

        {/* Botón Pinares */}
        <Grid item>
          <Box
            sx={{
              width: '300px', // Aumenté el ancho
              height: '150px', // Aumenté la altura
              backgroundImage: `url(${pinares})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)', // Aumenté la sombra para mayor énfasis
            }}
          >
            {/* Aquí puedes añadir texto o íconos si es necesario */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SectoresComponent;
