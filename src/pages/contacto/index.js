import React, { useState, useEffect } from "react";
import { StrictMode } from "react";
import Nav from '../../components/inicio/nav';
import backgroundImage1 from "../../Assets/contacto.png"; // Importa tus imágenes de fondo
import General from '../../components/contacto/componenteprinc';

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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      // Función que verifica si el ancho de la pantalla es menor o igual a 768px
      const handleResize = () => {
        setIsMobile(window.matchMedia("(max-width: 768px)").matches);
      };
  
      // Llamamos a la función al montar el componente y cada vez que la ventana cambia de tamaño
      handleResize();
      window.addEventListener('resize', handleResize);
  
      // Cleanup: eliminamos el event listener al desmontar el componente
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
        <>
                    {/* Agrega aquí el resto de tu contenido */}
                    {isMobile ? <div style={{  padding: '-10px', textAlign: 'left' }}><Nav/><General /></div> :       <div style={{  padding: '10px', textAlign: 'center' }}><General />  </div>}
       
        </>
    );
}
