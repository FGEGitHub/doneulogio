import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import imagen from "../../Assets/logo.png";

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate(); // Hook para navegar

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  // Mapeo de nombres del menú a sus rutas correspondientes
  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Urbanización Abierta', path: '/urbanizacion-abierta' },
    { text: 'MasterPlan', path: '/masterplan' },
    { text: 'Espacios Públicos', path: '/espacios-publicos' },
    { text: 'Contacto', path: '/contacto' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setDrawerOpen(false); // Cierra el drawer después de la navegación
  };

  return (
    <>
      <AppBar
        position="sticky" // Cambiado a sticky para que el nav sea siempre visible
        style={{
          backgroundColor: '#ffffff',
          boxShadow: 'none',
          padding: '0',
          // Ajusta el AppBar
          width: '100%', // Expande el ancho para cubrir el margen negativo
          height:'50%'
        }}
      >

        <Toolbar
          style={{
            padding: '0',
            margin: '0',
            width: '100%',
            height: '100px', // Ajusta la altura del Toolbar
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginLeft: '-45%',
           
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
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
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0',
              padding: '0',
              marginLeft: '-15%',
            }}
          >
            <img
              src={imagen}
              alt="Logo Don Eulogio"
              onClick={() => navigate('/')} // Redirige a la raíz al hacer clic
              style={{
                cursor: 'pointer', // Cambia el cursor para indicar que es clickeable
                height: '45px',
                width: 'auto',
                margin: '0',
                padding: '0',
              }}
            />
          </Box>
          <Box style={{ width: '48px' }} />
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={index} onClick={() => handleNavigation(item.path)}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
