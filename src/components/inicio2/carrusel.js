import React, { useState, useEffect } from "react";
import foto1 from "../../Assets/libertad2.png";
import foto2 from "../../Assets/comunidad2.png";
import foto3 from "../../Assets/Naturaleza.png";
import foto4 from "../../Assets/Inversion.png";
import foto5 from "../../Assets/Bienestar.png";
import "./carrusel.css";

const Carousel = ({ images, links }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="carouselContainer">
      <div
        className="imageWrapper"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="imageContainer">
        
              <img src={image} alt={`Carousel ${index + 1}`} className="carouselImage" />
          
          </div>
        ))}
      </div>
      
      {/* Indicadores de círculo */}
      <div className="indicatorsContainer">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

// Uso del componente
const App = () => {
  const images = [foto1, foto2, foto3, foto4, foto5];


  return (
    <div>
      <Carousel images={images}  />
    </div>
  );
};

export default App;
