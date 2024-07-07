import React, { useState, useEffect } from "react";
import Nav from '../../components/inicio/nav';
import fondoMaster from "../../Assets/fondomaster.png"; // Importa la imagen de fondo
import General from '../../components/mapas/doneulogiocompleto';

const backgroundOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1, // Coloca las imágenes de fondo detrás de los otros elementos
  display: 'flex',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: `url(${fondoMaster})`,
};

const contentContainerStyle = {
  minHeight: '200vh',
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  justifyContent: 'center', // Centra horizontalmente
  alignItems: 'center', // Centra verticalmente
  flexDirection: 'column', // Asegura que los elementos se coloquen uno debajo del otro
};

const generalContainerStyle = {
  padding: '20px',
  backgroundColor: 'white', // Color de fondo del recuadro
  border: '2px solid black', // Borde del recuadro
  borderRadius: '10px', // Bordes redondeados
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra para el recuadro
  overflow: 'hidden', // Asegura que el contenido no se salga del recuadro
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
            <div style={{ backgroundColor: '#558b2f', minHeight: '100vh', zIndex: -2, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}></div>
            
            {/* Fondo con imagen */}
            <div style={backgroundOverlayStyle}></div>
         
            {/* Contenido principal */}
            <div style={contentContainerStyle}>
                <Nav /> <br /><br />   
                <div style={generalContainerStyle}>
                    <General />
                </div>
            </div>
        </>
    );
}
