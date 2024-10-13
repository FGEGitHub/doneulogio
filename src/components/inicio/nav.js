import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function NavBar() {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: '#ffffff',
        boxShadow: 'none',
        padding: '0',
        marginLeft: '-10px', // Desplaza el AppBar -10px a la izquierda
        width: 'calc(100% + 10px)', // Expande el ancho para cubrir el margen negativo
      }}
    >
      <Toolbar
        style={{
          padding: '0',
          margin: '0',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          style={{
            color: '#1f3c3d',
            margin: '0',
            padding: '0',
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{ flexGrow: 1 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            margin: '0',
            padding: '0',
          }}
        >
          <Typography
            variant="h6"
            component="div"
            style={{
              color: '#1f3c3d',
              fontFamily: 'serif',
              fontWeight: 'bold',
              letterSpacing: '2px',
              fontSize: '24px',
              margin: '0',
              padding: '0',
            }}
          >
            DON EULOGIO
          </Typography>
          <Typography
            variant="subtitle1"
            style={{
              color: '#1f3c3d',
              fontFamily: 'serif',
              fontSize: '12px',
              letterSpacing: '2px',
              margin: '0',
              padding: '0',
            }}
          >
            URBANIZACIÓN ABIERTA
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
