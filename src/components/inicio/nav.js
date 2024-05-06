import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import Map from '../mapas/arg';
import Tarj1 from './tarjetas';
import Tarj2 from './tarjetas2';
import Tarj3 from './tarjetas3';
import logo from "../../Assets/logonav.png";
import General from './general'

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

export default function BackToTop(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: '#1a393c' }}>
        <Toolbar>
          <Typography variant="h6" component="div">
            <img style={islogo} src={logo} alt="logo" /> 
          </Typography>
        </Toolbar>
      </AppBar>

      <Toolbar id="back-to-top-anchor" />
      <Container
        sx={{
          backgroundColor: '#1b7f3e',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      > <br/> <br/>
        {/* Usamos flexbox para colocar las tarjetas en línea */}
     {/*    <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between', // Espacio entre las tarjetas
            width: '100%',
            padding: '0 20px', // Espacio horizontal para las tarjetas
          }}
        >
           
          <Tarj1 />
          <Tarj2 />
          <Tarj3 />
        </Box> */}

<General/>
      </Container>

      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
