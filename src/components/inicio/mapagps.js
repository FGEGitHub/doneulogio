import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapaGPS = () => {
  // Coordenadas específicas
  const coordenadas = [-27.568544, -58.727339];

  return (
    <MapContainer center={coordenadas} zoom={13} style={{ height: '400px' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordenadas}>
        <Popup>
          Coordenadas: {coordenadas[0]}, {coordenadas[1]}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapaGPS;
