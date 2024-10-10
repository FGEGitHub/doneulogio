import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function NavBar() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#ffffff', boxShadow: 'none' }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          style={{ color: '#1f3c3d' }} // Color del icono del menú
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            component="div"
            style={{
              color: '#1f3c3d',
              fontFamily: 'serif', // Similar a la tipografía del logo
              textAlign: 'center',
              fontWeight: 'bold',
              letterSpacing: '2px',
              fontSize: '24px'
            }}
          >
            DON EULOGIO
          </Typography>
          <Typography
            variant="subtitle1"
            style={{
              color: '#1f3c3d',
              fontFamily: 'serif', // Tipografía para el subtítulo
              textAlign: 'center',
              fontSize: '12px',
              letterSpacing: '2px'
            }}
          >
            URBANIZACIÓN ABIERTA
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
