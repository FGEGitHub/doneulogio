import React from 'react';
import { Container, Card, CardContent, Typography, CssBaseline, Grid, Box, Link, AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import Dosfotos from "./compnente2fotos";
import { useNavigate } from "react-router-dom";
import foto1 from '../../Assets/espacios.png';
import logo from '../../Assets/logo.png';
import Puntosdeinteres from './puntosdeinteres'
import Footer from '../footer'
const Root = styled(Box)({
  //backgroundColor: '#1a393c',
  padding: '16px',
  minHeight: '100vh',
  fontFamily: 'Montserrat, sans-serif',
  position: 'relative',
});

const FullscreenImage = styled('div')({
  position: 'relative',
  width: '100%',
  height: '70vh',
  backgroundImage: `url(${foto1})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
});

const OverlayText = styled(Typography)({
  color: '#fff',
  fontSize: '3.5rem',
  fontWeight: 'bold',
  textAlign: 'left',
  //backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente para mejorar la legibilidad
  padding: '10px',
  borderRadius: '10px',
  fontFamily: 'Montserrat, sans-serif',
});

const PublicSpaces = () => {
  const navigate = useNavigate();
  

  return (
    <>
       <CssBaseline />
   
   <Toolbar className="urbanizacion-toolbar">
     <img src={logo} alt="Logo" className="urbanizacion-logo" />
   </Toolbar>

 
   <nav className="urbanizacion-nav">
<div
variant="button"
color="primary"
href="#"
className="urbanizacion-navlink"
style={{ 
 color: "#246F74", 
 marginRight: "25px", 
 fontSize: "24px", 
 fontFamily: "Inter", 
 fontWeight: 400,
 cursor: "pointer"  // Cambia el cursor al pasar el mouse
}}
onClick={() => navigate('/')}
>
Home
</div>
<div
variant="button"
color="primary"
href="#"
className="urbanizacion-navlink"
style={{ 
 color: "#246F74", 
 marginRight: "25px", 
 fontSize: "24px", 
 fontFamily: "Inter", 
 fontWeight: 400,
 cursor: "pointer"  // Cambia el cursor al pasar el mouse
}}
onClick={() => navigate('/urbanizacion-abierta')}
>
Urbanización Abierta
</div>
<div
variant="button"
color="primary"
href="#"
className="urbanizacion-navlink"
style={{ 
 color: "#246F74", 
 marginRight: "25px", 
 fontSize: "24px", 
 fontFamily: "Inter", 
 fontWeight: 400,
 cursor: "pointer"  // Cambia el cursor al pasar el mouse
}}
onClick={() => navigate('/masterplan')}
>
MasterPlan
</div>
<div
variant="button"
color="primary"
href="#"
className="urbanizacion-navlink"
style={{ 
 color: "#246F74", 
 marginRight: "25px", 
 fontSize: "24px", 
 fontFamily: "Inter", 
 fontWeight: 400,
 cursor: "pointer"  // Cambia el cursor al pasar el mouse
}}
onClick={() => navigate('/espacios-publicos')}
>
Espacios públicos
</div>
<div
variant="button"
color="primary"
href="#"
className="urbanizacion-navlink"
style={{ 
 color: "#246F74", 
 marginRight: "25px", 
 fontSize: "24px", 
 fontFamily: "Inter", 
 fontWeight: 400,
 cursor: "pointer"  // Cambia el cursor al pasar el mouse
}}
onClick={() => navigate('/contacto')}
>
Contacto
</div>
</nav>



<div style={styles.imageContainer}>
      <img 
        src={foto1} 
        alt="Urbanización Abierta" 
        style={styles.image} 
      />
      <span style={styles.imageText}>  Construimos espacios<br />
      para crecer juntos</span>
    </div>

      
      <Dosfotos/>
      <Puntosdeinteres/>
      <Footer/>
 </>
  );
};

const styles = {
  imageContainer: {
    position: 'relative',
    display: 'inline-block', // Ajusta el tamaño al de la imagen

   
  },
  image: {
    width:' 115vw',
    height: '50vh',
    display: 'block',
  },
  imageText: {
    position: 'absolute',
    fontFamily: "Inter", 
    top: '50%',
    left: '10%', // Mueve el texto más a la izquierda
    transform: 'translate(0, -50%)', // Mueve solo verticalmente para que no se afecte la posición horizontal
    color: 'white', // El color del texto
    fontSize: '65px', // Texto más grande
    fontWeight: 'bold', // Hacer el texto en negrita
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Sombra para que se lea mejor
    pointerEvents: 'none', // Para que el texto no interfiera con la imagen en términos de interacción
  },
};
export default PublicSpaces;
