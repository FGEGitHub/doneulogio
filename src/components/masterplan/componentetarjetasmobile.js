import React from 'react';

// Importación de los iconos
import flecha from '../../Assets/flecha.png';
import icono1 from '../../Assets/uno.png';
import icono2 from '../../Assets/dos.png';
import icono3 from '../../Assets/tres.png';
import icono4 from '../../Assets/cuatro.png';
import icono5 from '../../Assets/cinco.png';
import icono6 from '../../Assets/seis.png';
import icono7 from '../../Assets/siete.png';
import '../mapas/config.css'
const Sectores = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#2a6e6e',
    padding: '20px',
  };

  const titleStyle = {
    color: '#fff',
    fontSize: '24px',
  };

  const flechaStyle = {
    margin: '10px 0',
    width: '40px',
  };

  const tarjetaStyle = {
    position: 'relative', // Para posicionar el estado
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '20px 0',
    padding: '40px 20px', // Aumenté el padding vertical
    width: '65%',
    maxWidth: '400px',
    minHeight: '250px', // Puedes ajustar esta altura para hacer la tarjeta más larga
  };

  const estadoStyle = {
    position: 'absolute', // Posición absoluta para moverlo a la esquina
    top: '0',
    left: '0',
    backgroundColor: '#b0d354',
    padding: '5px 10px',
    borderRadius: '0 0 10px 0', // Solo borde inferior derecho redondeado
    fontWeight: 'bold',
    color: 'white',
  };

  const estadoEnCursoStyle = {
    ...estadoStyle,
    backgroundColor: '#ced655',
  };

  const tituloStyle = {
    color: '#2a6e6e',
    fontFamily: "'Christian Sunday', sans-serif", // Aplica la fuente
    fontSize: '46px',
    margin: '10px 0',
    textAlign:'center'
  };
 
   const tituloStyle2 = {
    color: '#2a6e6e',
    fontFamily: "Human Nature - Demo", // Aplica la fuente
    fontSize: '46px',
    margin: '10px 0',
    textAlign:'center'
  };
  const detallesStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const detalleItemStyle = {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
    fontFamily: "inter", // Aplica la fuente

  };

  const iconoStyle = {
    marginRight: '10px',
    width: '24px',
    height: '24px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Nuestros sectores</h2>
      <img src={flecha} alt="Flecha" style={flechaStyle} />

      {/* Tarjeta 1 */}
      <div style={tarjetaStyle}>
        <div style={estadoStyle}>
          <span>Obra Terminada</span>
        </div>
        <h3 style={tituloStyle}>Bosques</h3>
        <ul style={detallesStyle}>
          <li style={detalleItemStyle}>
            <img src={icono1} alt="Icono 1" style={iconoStyle} />
            50 Lotes Residenciales
          </li>
          <li style={detalleItemStyle}>
            <img src={icono2} alt="Icono 2" style={iconoStyle} />
            Parque del Origen
          </li>
          <li style={detalleItemStyle}>
            <img src={icono3} alt="Icono 3" style={iconoStyle} />
            Escrituración y Entrega de Posesión Inmediata
          </li>
          <li style={detalleItemStyle}>
            <img src={icono4} alt="Icono 4" style={iconoStyle} />
            Bosque Nativo
          </li>
        </ul>
      </div>

      {/* Tarjeta 2 */}
      <div style={tarjetaStyle}>
        <div style={estadoEnCursoStyle}>
          <span>Obra en curso</span>
        </div>
        <h3 className="tituloStyle2">Pinares</h3>
        <ul style={detallesStyle}>
          <li style={detalleItemStyle}>
            <img src={icono1} alt="Icono 1" style={iconoStyle} />
            93 Lotes Residenciales
          </li>
          <li style={detalleItemStyle}>
            <img src={icono5} alt="Icono 5" style={iconoStyle} />
            Área Comercial
          </li>
          <li style={detalleItemStyle}>
            <img src={icono6} alt="Icono 6" style={iconoStyle} />
            Plaza Deportiva
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sectores;
