import React, { useState, useEffect } from "react";
import Nav from '../../components/inicio/nav';
import backgroundImage1 from "../../Assets/imagenfondo1.jpg"; // Importa tus imágenes de fondo
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
            <div style={{ minHeight: '200vh', position: 'relative', zIndex: 1 }}>
                <Nav /> <br /><br />   
                {/* Agrega aquí el resto de tu contenido */}
                <General />
            </div>
        </>
    );
}
