import React from 'react';

const CircleImage = ({ images, circleStyle, imageStyle }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            width: '120px',  // Tamaño ligeramente más grande
            height: '120px', // Tamaño ligeramente más grande
            borderRadius: '50%',
            backgroundColor: '#ddd',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative',
            ...circleStyle
          }}
        >
          <img
            src={image}
            alt={`Circle ${index + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              ...imageStyle
            }}
          />
        </div>
      ))}
    </div>
  );
};

// Uso del componente
const App = () => {
  const images = [
    'https://via.placeholder.com/100', // Reemplaza con las URLs de las imágenes
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100'
  ];

  const circleStyle = {
    border: '2px solid #000', // Personalización de los círculos
  };

  const imageStyle = {
    borderRadius: '10%', // Personalización de las imágenes dentro de los círculos
  };

  return (
    <div>
      <CircleImage images={images} circleStyle={circleStyle} imageStyle={imageStyle} />
    </div>
  );
};

export default App;
