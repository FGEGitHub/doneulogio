import React, { useState, useEffect } from "react";
import { StrictMode } from "react";
import Nav from '../../components/inicio/nav';
import General from '../../components/ubicacion/ubi';
import backgroundVideo from "../../Assets/videodron.mp4"; // Importa tu video de fondo

const backgroundVideoStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: -1, // Coloca el video de fondo detrás de los otros elementos
};

const contentStyle = {
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  width: '100%',
};

const innerContentStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo blanco semitransparente
  padding: '20px',
  borderRadius: '8px',
  maxWidth: '800px', // Ajusta el ancho máximo según sea necesario
  width: '100%',
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
            {/* Video de fondo */}
            <video style={backgroundVideoStyle} autoPlay loop muted>
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Contenido principal */}
            <div style={contentStyle}>
                <div style={innerContentStyle}>
                    <StrictMode>
                        <Nav />
                        {/* Agrega aquí el resto de tu contenido */}
                        <br/><br/><br/> <br/><br/><br/>
                        <General />
                    </StrictMode>
                </div>
            </div>
        </>
    );
}
