import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import imagen from "../../Assets/logo.png";

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Urbanización Abierta', path: '/urbanizacion-abierta' },
    { text: 'MasterPlan', path: '/masterplan' },
    { text: 'Espacios Públicos', path: '/espacios-publicos' },
    { text: 'Contacto', path: '/contacto' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        style={{
          backgroundColor: '#ffffff',
          boxShadow: 'none',
          padding: '0',
          width: '100%',
        }}
      >
        <Toolbar
          style={{
            padding: '0',
            margin: '0',
            width: '100%',
            height: '65px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            onClick={toggleDrawer(true)}
            style={{ cursor: 'pointer' }}
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
            <Typography
              variant="body1"
              sx={{ fontFamily: 'Inter, sans-serif', color: '#1f3c3d', marginLeft: '5px' }}
            >
              Menu
            </Typography>
          </Box>
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
              onClick={() => navigate('/')}
              style={{
                marginLeft: '9%',
                cursor: 'pointer',
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
