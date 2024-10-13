import React, { useState } from 'react';
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

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = ['Home', 'Urbanización Abierta', 'MasterPlan', 'Espacios Públicos', 'Contacto'];

  return (
    <>
      <AppBar
        position="static"
        style={{
          backgroundColor: '#ffffff',
          boxShadow: 'none',
          padding: '0',
          marginLeft: '-45%', // Ajusta el AppBar
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
            justifyContent: 'space-between', // Asegura que haya espacio entre el icono del menú y el logo
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
              justifyContent: 'center', // Centra el logo horizontalmente
              alignItems: 'center',
              marginLeft: '-15%', // Ajusta el AppBar

              margin: '0',
              padding: '0',
            }}
          >
            <img
              src={imagen}
              alt="Logo Don Eulogio"
              style={{
                height: '40px', // Ajusta la altura según tus necesidades
                width: 'auto',
                margin: '0',
               // marginLeft: '-25%',  Ajusta el AppBar

                padding: '0',
              }}
            />
          </Box>
          <Box style={{ width: '48px' }} /> {/* Espacio vacío para balancear el layout */}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <List>
          {menuItems.map((text, index) => (
            <ListItem button key={index}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
