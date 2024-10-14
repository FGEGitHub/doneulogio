import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
// Importa tus íconos aquí
import Icon1 from '../../Assets/uno.png';
import Icon2 from '../../Assets/dos.png';
import Icon3 from '../../Assets/tres.png';
import Icon4 from '../../Assets/cuatro.png';
import Icon5 from '../../Assets/cinco.png';
import Icon6 from '../../Assets/seis.png';
import Icon7 from '../../Assets/siete.png';

const Servicios = () => {
  return (
    <Box sx={{ padding: 2, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Nuestros Servicios
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <img src={Icon1} alt="Servicio 1" style={{ width: '50px', height: '50px' }} />
            <Typography variant="h6">Servicio 1</Typography>
            <Typography variant="body2">
              Descripción breve del servicio 1.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <img src={Icon2} alt="Servicio 2" style={{ width: '50px', height: '50px' }} />
            <Typography variant="h6">Servicio 2</Typography>
            <Typography variant="body2">
              Descripción breve del servicio 2.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <img src={Icon3} alt="Servicio 3" style={{ width: '50px', height: '50px' }} />
            <Typography variant="h6">Servicio 3</Typography>
            <Typography variant="body2">
              Descripción breve del servicio 3.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <img src={Icon4} alt="Servicio 4" style={{ width: '50px', height: '50px' }} />
            <Typography variant="h6">Servicio 4</Typography>
            <Typography variant="body2">
              Descripción breve del servicio 4.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <img src={Icon5} alt="Servicio 5" style={{ width: '50px', height: '50px' }} />
            <Typography variant="h6">Servicio 5</Typography>
            <Typography variant="body2">
              Descripción breve del servicio 5.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <img src={Icon6} alt="Servicio 6" style={{ width: '50px', height: '50px' }} />
            <Typography variant="h6">Servicio 6</Typography>
            <Typography variant="body2">
              Descripción breve del servicio 6.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <img src={Icon7} alt="Servicio 7" style={{ width: '50px', height: '50px' }} />
            <Typography variant="h6">Servicio 7</Typography>
            <Typography variant="body2">
              Descripción breve del servicio 7.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Servicios;
