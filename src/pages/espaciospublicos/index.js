import React, { useState, useEffect } from "react";
import { StrictMode } from "react";

import General from '../../components/espaciospublicos/componenteprincipal';

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
 
     
             
                    {/* Agrega aquí el resto de tu contenido */}
                    <General/>

         
        </>
    );
}
