import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import logo from "../../Assets/logonav.png";
import Fade from '@mui/material/Fade'; // Asegúrate de tener esto

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    if (anchor) {
      anchor.scrollIntoView({ block: 'center' });
    }
  };

  return (
    <Fade in={trigger}>
      <Box onClick={handleClick} role="presentation" sx={{ position: 'fixed', bottom: 16, right: 16 }}>
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

// Estilo para el logo: tamaño ajustado y centrado
const logoStyle = {
  width: "100px", // Tamaño del logo
  height: "auto",
  display: "block",
};

// Define las páginas y sus rutas correspondientes
const pages = [
  { name: 'Home', path: '/' },
  { name: 'Ubicación', path: '/ubicacion' },
  { name: 'Urbanización Abierta', path: '/urbanizacion-abierta' },
  { name: 'Master Plan', path: '/masterplan' },
  { name: 'Espacios Públicos', path: '/espacios-publicos' },
  { name: 'Contacto', path: '/contacto' }
];

export default function BackToTop(props) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} onKeyDown={handleDrawerToggle} sx={{ width: '250px', textAlign: 'right' }}>
      <List>
        {pages.map((page) => (
          <ListItem button key={page.name} component={Link} to={page.path}>
            <ListItemText primary={page.name} sx={{ textAlign: 'right' }} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <React.Fragment >
      <CssBaseline />
      <AppBar position="sticky" sx={{ backgroundColor: '#fff', color: '#000', boxShadow: 'none' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          
          {/* Icono de menú hamburguesa alineado a la izquierda */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start" // Esto asegura que el icono esté alineado a la izquierda
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Logo centrado */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <img style={logoStyle} src={logo} alt="logo" />
          </Box>

          {/* Espacio vacío en el lado derecho del toolbar en la versión móvil para centrar el logo */}
          {isMobile && <Box sx={{ width: '48px' }} />} {/* Ancho equivalente al del botón hamburguesa */}
          
          {/* Botones de páginas en escritorio */}
          {!isMobile && (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  component={Link}
                  to={page.path}
                  sx={{
                    my: 2,
                    color: '#000',
                    fontFamily: 'Galileo, sans-serif',
                    textTransform: 'none',
                    margin: '0 10px',
                    '&:hover': {
                      color: '#1a393c', // Misma que AppBar
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </React.Fragment>
  );
}
