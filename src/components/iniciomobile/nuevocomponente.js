import React from "react";
import { useNavigate } from 'react-router-dom';



const MapaInteractivo = () => {
    const navigate = useNavigate();
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginLeft:'-5%',
      justifyContent: "center",
      backgroundColor: "#2f7032", // Color de fondo verde
      padding: "20px",
      width: "100%", // Abarcar todo el ancho
      textAlign: "center",
      fontFamily: "'Inter', sans-serif", // Fuente Inter
    },
    title: {
      fontSize: "22px",
      color: "white", // Texto blanco
      marginBottom: "15px",
      lineHeight: "1.5", // Espaciado entre líneas
    },
    button: {
      backgroundColor: "#8bc34a", // Verde claro del botón
      color: "white",
      fontSize: "16px",
      padding: "10px 20px",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#7cb342", // Color del botón al pasar el mouse
    },
  };
  const handleClick = () => {
    navigate('/masterplan');
  };
  return (
    <div style={styles.container}>
      {/* Título */}
      <h2 style={styles.title}>
        Navega por nuestro mapa <br/>interactivo y conoce precios y<br/> disponibilidades
      </h2>
      {/* Botón */}
      <button
        onClick={handleClick}
        style={styles.button}
        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
      >
        Ver mapa
      </button>
    </div>
  );
};

export default MapaInteractivo;
