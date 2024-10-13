import React, { useState, useEffect } from "react";
import General from '../../components/mapas/doneulogiocompleto';
import MobileComponent from '../../components/mapas/mobilemapacompleto'; // Componente para móvil

import Nav from '../../components/inicio/nav';

export default function Paginas() {
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


        {isMobile ? <div style={{  padding: '-10px', textAlign: 'left' }}><Nav/><MobileComponent /></div> :       <div style={{  padding: '10px', textAlign: 'center' }}><General />  </div>}
    
    </>
  );
}