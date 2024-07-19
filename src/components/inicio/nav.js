import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import { Link } from 'react-router-dom'; // Importa el componente Link
import logo from "../../Assets/logonav.png";
import General from './general';

// Falta  Importa la fuente "Galileo"

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const islogo = {
  width: "70px",
};

// Define las páginas y sus rutas correspondientes
const pages = [
 /*  { name: 'Home', path: '/' }, */
  { name: 'ubicacion', path: '/ubicacion' },
  { name: 'Urbanización Abierta', path: '/urbanizacion-abierta' },
  { name: 'Master Plan', path: '/masterplan' },
  { name: 'Espacios Públicos', path: '/espacios-publicos' },
  { name: 'Contacto', path: '/contacto' }
];

export default function BackToTop(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: '#1a393c' }}>
        <Toolbar>
          <Typography variant="h6" component="div">
            <img style={islogo} src={logo} alt="logo" /> 
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                sx={{ 
                  my: 2, 
                  color: '#d9d9d9', 
                  display: 'block', 
                  fontFamily: 'Galileo, sans-serif', 
                  textTransform: 'none',
                  margin: '0 10px', 
                  backgroundColor: '#1e4d50', // Leve diferencia de color
                  '&:hover': {
                    backgroundColor: '#1a393c', // Misma que AppBar
                    color: '#fff', // Cambia el color del texto al pasar el mouse
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />

    </React.Fragment>
  );
}
