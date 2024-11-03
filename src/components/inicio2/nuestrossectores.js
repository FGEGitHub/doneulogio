import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import bosques from '../../Assets/bosquesvg.svg';
import pinares from '../../Assets/pinaressvg.svg';
import { useNavigate } from "react-router-dom";
const SectoresComponent = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ textAlign: 'center', padding: '60px 0' }}> {/* Aumenté el padding para más espacio arriba y abajo */}
      <Typography 
        variant="h2" 
        sx={{ fontFamily: 'Inter, sans-serif', marginBottom: '40x', fontSize: '2.5rem' ,color: '#000000'  , fontSize:'40px'      }} // Aumenté el marginBottom y el tamaño de la fuente
      >
       <strong onClick={() => navigate('/masterplan')}>Conocé nuestro MasterPlan</strong> 
      </Typography>
      <br/>    <br/>    <br/>
      <Grid container spacing={8} justifyContent="center" onClick={() => navigate('/masterplan')}> {/* Cambié spacing de 6 a 8 para mayor separación */}
        {/* Botón Bosques */}
        <Grid item>
          <Box
            sx={{
              width: '250px', // Aumenté el ancho
              height: '100px', // Aumenté la altura
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
              width: '250px', // Aumenté el ancho
              height: '100px', // Aumenté la altura
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
