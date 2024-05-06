import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapaGPS = () => {
  // Coordenadas específicas
  const coordenadas = [-27.568825, -58.727392];

  return (
    <MapContainer center={coordenadas} zoom={13} >

      <TileLayer
       
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
