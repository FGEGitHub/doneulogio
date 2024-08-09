import React from 'react';
import MapComponent from '../ubicacion/ubi'; // Importa el componente del mapa

const LocationInfo = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '50%', padding: '20px' }}>
                <h2>¿Dónde estamos?</h2>
                <p>Don Eulogio se ubica en el camino de acceso principal al Pueblo de San Cayetano (Ruta Prov. Nº 08)</p>
                <p>Esta situado a 1,5 Km. de la Ruta Nac. Nº 12 y a 12 Km. de la Rotonda de la Virgen</p>
                <div style={{ marginTop: '20px' }}>
                    <p>
                        <span role="img" aria-label="car">🚗</span> 15 min.
                    </p>
                    <p>
                        <span role="img" aria-label="bicycle">🚴‍♂️</span> 35 min.
                    </p>
                </div>
            </div>
            <div style={{ width: '50%' }}>
                <MapComponent /> {/* Muestra el componente del mapa */}
            </div>
        </div>
    );
};

export default LocationInfo;
