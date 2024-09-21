import React from 'react';
import { Container, Card, CardContent, Typography, CssBaseline, Grid, Box, Link, AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/system';
import Dosfotos from "./compnente2fotos";
import { useNavigate } from "react-router-dom";
import foto1 from '../../Assets/espacios.png';
import logo from '../../Assets/logonav2.png';
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
  const spaces = [
    {
      title: 'Puente Pexoa',
      description: 'El Puente Pexoa es una estructura de hierro sobre el arroyo Riachuelo, en el llamado Paso Pexoa, en la localidad de Riachuelo, provincia de Corrientes.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Puente-pexoa-san-cayetano.jpg',
    },
    {
      title: 'Camping Puente Pexoa',
      description: 'El Camping Puente Pexoa ofrece un lugar ideal para disfrutar de la naturaleza y realizar actividades al aire libre en Corrientes.',
      imageUrl: 'https://s1.elespanol.com/2022/09/09/actualidad/701940464_227019911_1706x960.jpg',
    },
    {
      title: 'Capilla San Cayetano',
      description: 'La Capilla San Cayetano es un importante lugar de peregrinación y devoción en la provincia de Corrientes.',
      imageUrl: 'https://img.freepik.com/fotos-premium/complejo-deportivo-centro-minsk-canchas-deportivas-al-aire-libre-juegos-bielorrusia_217593-15308.jpg?w=996',
    },
    {
      title: 'Parque Provincial San Cayetano',
      description: 'El Parque Provincial San Cayetano es un espacio natural protegido que ofrece una variedad de flora y fauna en Corrientes.',
      imageUrl: 'https://example.com/parque-san-cayetano.jpg',
    },
  ];

  return (
    <>
      <CssBaseline />
      <Toolbar className="urbanizacion-toolbar">
          <img src={logo} alt="Logo" className="urbanizacion-logo" />
        </Toolbar>
   
   
      
      <nav className="urbanizacion-nav">
  <Link
    variant="button"
    color="primary" // Cambia el color del texto
    href="#"
    className="urbanizacion-navlink"
    style={{ color: "#246F74", marginRight: "25px",fontSize: "20px" }} // Cambia el color del texto y agrega separación
    onClick={() => navigate('/')}
  >
    Home
  </Link>
  <Link
    variant="button"
    color="primary"
    href="#"
    className="urbanizacion-navlink"
    style={{ color: "#246F74", marginRight: "25px",fontSize: "20px" }}
    onClick={() => navigate('/masterplan')}
  >
    Urbanización Abierta
  </Link>
  <Link
    variant="button"
    color="primary"
    href="#"
    className="urbanizacion-navlink"
    style={{ color: "#246F74", marginRight: "25px",fontSize: "20px" }}
    onClick={() => navigate('/masterplan')}
  >
    MasterPlan
  </Link>
  <Link
    variant="button"
    color="primary"
    href="#"
    className="urbanizacion-navlink"
    style={{ color: "#246F74", marginRight: "25px",fontSize: "20px" }}
    onClick={() => navigate('/espacios-publicos')}
  >
    Espacios públicos
  </Link>
  <Link
    variant="button"
    color="primary"
    href="#"
    className="urbanizacion-navlink"
    style={{ color: "#246F74", marginRight: "25px",fontSize: "20px"  }}
    onClick={() => navigate('/contacto')}
  >
    Contacto
  </Link>
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
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  imageText: {
    position: 'absolute',
    top: '50%',
    left: '10%', // Mueve el texto más a la izquierda
    transform: 'translate(0, -50%)', // Mueve solo verticalmente para que no se afecte la posición horizontal
    color: 'white', // El color del texto
    fontSize: '60px', // Texto más grande
    fontWeight: 'bold', // Hacer el texto en negrita
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Sombra para que se lea mejor
    pointerEvents: 'none', // Para que el texto no interfiera con la imagen en términos de interacción
  },
};
export default PublicSpaces;
