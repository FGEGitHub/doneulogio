import React from 'react';
import { useNavigate } from 'react-router-dom';
import bosqueImage from '../../Assets/bosques.png';
import pinarImage from '../../Assets/pinar.png';

const Sectores = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/masterplan');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Conocé nuestro MasterPlan</h2>
      <div style={styles.buttonContainer}>
        <div 
          style={{ ...styles.button, backgroundImage: `url(${bosqueImage})` }}
          onClick={handleClick}
        />
        <div 
          style={{ ...styles.button, backgroundImage: `url(${pinarImage})` }}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  title: {
    fontSize: '22px',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
  },
  button: {
    width: '200px',
    height: '60px',
    borderRadius: '30px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer', // Cambiar el cursor al pasar sobre el botón
  },
  text: {
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)',
  },
};

export default Sectores;
