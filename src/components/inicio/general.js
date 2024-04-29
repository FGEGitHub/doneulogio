import React from 'react';
import Navbar from '../navbar'
import Mapa from '../mapas/bosques'
function DarkGreenBackground() {
  const style = {
    backgroundColor: 'darkgreen',
    height: '100vh', // Altura total de la pantalla
    width: '100vw', // Ancho total de la pantalla
    overflow: 'hidden',
  };

  const scrollStyle = {
    height: '100%', // Toma toda la altura del componente padre
    overflowY: 'auto', // Permite desplazamiento vertical
    padding: '20px', // Margen para el contenidoim
  };

  return (
    <div style={style}>
      <div style={scrollStyle}>
        {/* Aquí puedes agregar el contenido que desees */}

        <Mapa/>
        {/* Añade más contenido según sea necesario */}
      </div>
    </div>
  );
}

export default DarkGreenBackground;
