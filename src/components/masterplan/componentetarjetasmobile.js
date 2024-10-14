import React from 'react';
import { Box, Typography, Card, CardContent, Chip, Grid } from '@mui/material';
import { Home, Park, Edit, Forest, Store, SportsSoccer } from '@mui/icons-material';

const Sectores = () => {
  return (
    <Box sx={{ backgroundColor: '#2D7C7E', padding: '20px', textAlign: 'center' }}>
      <Typography variant="h5" sx={{ color: '#fff', marginBottom: '20px' }}>
        Nuestros sectores
      </Typography>
      <Typography variant="body1" sx={{ color: '#fff', marginBottom: '20px' }}>
        ⬇️
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ border: '1px solid #4CAF50', borderRadius: '10px' }}>
            <CardContent>
              <Chip label="Obra Terminada" sx={{ backgroundColor: '#9ACD32', color: '#fff', marginBottom: '10px' }} />
              <Typography variant="h6" sx={{ fontFamily: 'cursive', marginBottom: '10px' }}>
                Bosques
              </Typography>
              <Box sx={{ textAlign: 'left' }}>
                <Typography variant="body1">
                  <Home fontSize="small" /> 50 Lotes Residenciales
                </Typography>
                <Typography variant="body1">
                  <Park fontSize="small" /> Parque del Origen
                </Typography>
                <Typography variant="body1">
                  <Edit fontSize="small" /> Escrituración y Entrega de Posesión Inmediata
                </Typography>
                <Typography variant="body1">
                  <Forest fontSize="small" /> Bosque Nativo
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card sx={{ border: '1px solid #FFD700', borderRadius: '10px' }}>
            <CardContent>
              <Chip label="Obra en curso" sx={{ backgroundColor: '#FFD700', color: '#fff', marginBottom: '10px' }} />
              <Typography variant="h6" sx={{ fontFamily: 'cursive', marginBottom: '10px' }}>
                Pinares
              </Typography>
              <Box sx={{ textAlign: 'left' }}>
                <Typography variant="body1">
                  <Home fontSize="small" /> 93 Lotes Residenciales
                </Typography>
                <Typography variant="body1">
                  <Store fontSize="small" /> Área Comercial
                </Typography>
                <Typography variant="body1">
                  <SportsSoccer fontSize="small" /> Plaza Deportiva
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Sectores;
