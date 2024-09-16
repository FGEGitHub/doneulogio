import React, { useState, useEffect } from "react";
import Nav from '../../components/inicio/nav';
import General from '../../components/mapas/doneulogiocompleto';
import MobileComponent from '../../components/mapas/mobilemapacompleto'; // Componente para móvil


export default function Paginas() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Función que verifica si el ancho de la pantalla es menor o igual a 768px
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
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
      <Nav /> <br /><br />
      <div style={{  padding: '20px', textAlign: 'center' }}>
        {isMobile ? <MobileComponent /> : <General />}
      </div>
    </>
  );
}