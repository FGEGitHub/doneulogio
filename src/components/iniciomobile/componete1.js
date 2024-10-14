import React from 'react';
// Importa tus imágenes aquí
import Image1 from '../../Assets/iniciomobile.png';
import Image2 from '../../Assets/libertad.png';
import Imagemapa from '../../Assets/imagenmappa.png';
import Dibujoarboles from '../../Assets/dibujoarboles.png';
import Doslogos from '../../Assets/doslogos.png';



import Componete1 from './componente2';
import Componente2 from './componente3';

import Footer from '../footermobile';

const CiudadVerde = () => {
  return (
    <div >
          <div style={styles.imageContainer}>
      <img 
        src={Image1} 
        alt="Urbanización Abierta" 
        style={styles.image} 
      />
      <span style={styles.imageText}>Tu Futuro en <br/>
        Don Eulogio
      </span>
    </div><Componete1/>
    <img 
        src={Image2} 
        alt="Urbanización Abierta" 
        style={styles.image} 
      />
   
    <Componente2/> 
    <img 
        src={Imagemapa} 
        alt="Urbanización Abierta" 
        style={styles.image} 
      />
         <img 
        src={Dibujoarboles} 
        alt="Urbanización Abierta" 
        style={styles.image} 
      />
          <img 
        src={Doslogos} 
        alt="Urbanización Abierta" 
        style={styles.image2} 
      />
    <Footer/>
    </div>
  );
};
const styles = {
    imageContainer: {
      position: 'relative',
      display: 'inline-block', // Ajusta el tamaño al de la imagen
    },
    image2: {
        width: '80%',
        height: 'auto',
        marginLeft:'10%',
        marginTop:'15%',
        marginRight:'5%',

        marginButton:'25%',

        display: 'block',
      },
    image: {
      width: '108%',
      height: 'auto',
      marginLeft:'-3%',
      display: 'block',
    },
    imageText: {
      position: 'absolute',
      top: '70%',
      left: '10%', // Mueve el texto más a la izquierda
      transform: 'translate(0, -50%)', // Mueve solo verticalmente para que no se afecte la posición horizontal
      color: 'white', // El color del texto
      fontSize: '35px', // Texto más grande
      fontWeight: 'bold', // Hacer el texto en negrita
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Sombra para que se lea mejor
      pointerEvents: 'none', // Para que el texto no interfiera con la imagen en términos de interacción
      
    },
    svgText: {
      fill: '#fff', // Relleno blanco para el texto
      stroke: '#fff', // Contorno blanco para el texto
      fontSize: '90px',
      fontFamily: "'Christian Sunday', sans-serif", // Aplica la fuente
      textAnchor: 'middle',
      fontFamily: 'Christian Sunday',
    },
    
};

export default CiudadVerde;
