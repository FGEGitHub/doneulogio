import React, { useState, useEffect } from "react";
import fondoMaster from "../../Assets/fondomaster.png"; // Importa la imagen de fondo
import General from '../../components/inicio2/Component';
import Mobile from '../../components/iniciomobile/componete1';
import Nav from '../../components/inicio/nav';

const backgroundOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',  zIndex: -1, // Coloca las imágenes de fondo detrás de los otros elementos
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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Función que verifica si el ancho de la pantalla es menor o igual a 768px
        const handleResize = () => {
          setIsMobile(window.matchMedia("(max-width: 768px)").matches);
        };
    
        // Llamamos a la función al montar el componente y cada vez que la ventana cambia de tamaño
        handleResize();
        window.addEventListener('resize', handleResize)
 } )
        

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
            
            {/* Fondo con imagen */}
         
         
            {/* Contenido principal */}
        
            {isMobile ? <div style={{  padding: '-10px', textAlign: 'left' }}><Nav/><Mobile /></div> :       <div style={{  padding: '10px', textAlign: 'center',overflowX: 'hidden' }}><General />  </div>}
              
                
             
           </>
    );
}
