import React from 'react';
import MapComponent from '../../Assets/map.jpg'; // Cambia esta ruta a la de tu imagen del mapa

const LocationInfo = ({ titleFontSize = '2.5rem', textFontSize = '1.5rem', lineSpacing = '1.2rem' }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '10px 20px' }}>
            {/* Contenedor principal */}
            <div style={{ width: '30%', padding: '20px', marginTop:'-10%' }}>
                <h2 style={{ fontSize: titleFontSize, marginBottom: lineSpacing, fontFamily: 'Inter, sans-serif', color:'#1C6A3B', textAlign: 'left' }}>
                    ¿Dónde estamos?
                </h2>
                <p style={{ fontSize: textFontSize, marginBottom: lineSpacing, fontFamily: 'Inter, sans-serif', color: '#333', textAlign: 'left' }}>
                    Don Eulogio se ubica en el camino de acceso principal al Pueblo de San Cayetano (Ruta Prov. Nº 08).
                </p>
                <p style={{ fontSize: textFontSize, marginBottom: lineSpacing, fontFamily: 'Inter, sans-serif', color: '#333', textAlign: 'left' }}>
                    Está situado a 1,5 Km. de la Ruta Nac. Nº 12 y a 12 Km. de la Rotonda de la Virgen.
                </p>
                <a href="https://maps.app.goo.gl/R8e7DgKRfDbMwdAd6" target="_blank" rel="noopener noreferrer" style={{ fontSize: textFontSize, color: '#1E90FF', textDecoration: 'underline', fontFamily: 'Inter, sans-serif', textAlign: 'left' }}>
                    Hace click para verlo en Google Maps
                </a>
            </div>
            <div style={{ width: '50%', textAlign: 'center' }}>
                <img src={MapComponent} alt="Mapa de Don Eulogio" style={{ width: '80%', borderRadius: '8px', marginTop: '10%' }} />
            </div>
        </div>
    );
};

export default LocationInfo;
