import React from 'react';
import MapComponent from '../../Assets/map.jpg'; // Importa el componente del mapa

const LocationInfo = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '40px 20px' }}> 
            {/* JustifyContent agregado para distribuir mejor el espacio */}
            <div style={{ width: '25%', padding: '20px', textAlign: 'center' }}> 
                {/* Reducido el ancho a 45% para mejor ajuste y alineación de texto */}
                <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontFamily: 'Inter, sans-serif',marginLeft:'8%', color:'#1C6A3B' }}>
                    {/* Incrementé el tamaño de fuente a 2.5rem */}
                    ¿Dónde estamos?
                </h2>
                <p style={{ fontSize: '1.3rem', marginBottom: '10px',marginLeft:'20%', textAlign: 'left', fontFamily: 'Inter, sans-serif' }}>
                    {/* Incrementé el tamaño de fuente a 1.3rem */}
                    Don Eulogio se ubica en el camino de acceso principal
                    al Pueblo de San Cayetano (Ruta Prov. Nº 08)
                </p>
                <p style={{ fontSize: '1.3rem', marginBottom: '20px',marginLeft:'20%', textAlign: 'left', fontFamily: 'Inter, sans-serif' }}>
                    {/* Incrementé el tamaño de fuente a 1.3rem */}
                    Está situado a 1,5 Km. de la Ruta Nac. Nº 12 y a 12 Km. de la Rotonda de la Virgen
                </p>
                
               
            </div>
            <div style={{ width: '45%' }}>
            <img src={MapComponent} alt="Logo"    style={{ 
     width:"90%" // Cambia el cursor al pasar el mouse
    }} />
          
            </div>
        </div>
    );
};

export default LocationInfo;
