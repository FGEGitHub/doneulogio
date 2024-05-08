import React, { useState, useEffect } from "react";
import { StrictMode } from "react";
import Nav from '../../components/inicio/nav';
import backgroundImage1 from "../../Assets/imagenfondo1.jpg"; // Importa tus imágenes de fondo
import backgroundImage2 from "../../Assets/imagenfondo1.jpg"; 
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
const backgroundOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1, // Coloca las imágenes de fondo detrás de los otros elementos
  display: 'flex',

};

  
const backgroundOverlayImageStyle = {
  flex: '1 1 auto',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export default function Paginas() {
    const [showSecondBackground, setShowSecondBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            // Cambia el valor de setShowSecondBackground basado en la posición de scroll
            if (scrollPosition >= 1000) { // Cambia este valor según sea necesario
                setShowSecondBackground(true);
            } else {
                setShowSecondBackground(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* Fondo verde */}
            <div style={{ backgroundColor: '#8eb937', minHeight: '100vh', zIndex: -2, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}></div>
         
            {/* Contenedor para las imágenes de fondo */}
            <div style={backgroundOverlayStyle}>
              <div style={{ backgroundImage: `url(${backgroundImage1})`, ...backgroundOverlayImageStyle }}>
              <br/><br/>     <br/><br/>   <br/><br/>     <br/><br/>   <br/><br/>     <br/><br/>
              </div>
              {showSecondBackground && <div style={{ backgroundImage: `url(${backgroundImage2})`, ...backgroundOverlayImageStyle }}></div>}
            </div>
            
            {/* Contenido principal */}
            <div style={{ position: 'relative', zIndex: 0 }}>
            <StrictMode>
                    <Nav/>
                    {/* Agrega aquí el resto de tu contenido */}
              </StrictMode>
 
                    {/* Agrega más componentes aquí */}
                 
            </div>
        </>
    );
}
