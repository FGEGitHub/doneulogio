import React, { useEffect, useState } from 'react';
import whatsappIcon from '../../Assets/what.png'; // Asegúrate de que la ruta sea correcta
import { Box, keyframes } from '@mui/material';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const WhatsAppButton = () => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    // Muestra el botón de WhatsApp después de 3 segundos
    const timer = setTimeout(() => setShowWhatsApp(true), 3000);
    return () => clearTimeout(timer); // Limpia el temporizador al desmontar
  }, []);

  if (!showWhatsApp) return null;

  return (
    <Box
      onClick={() => window.open('https://wa.me/3794008721', '_blank')} // Cambia '1234567890' por el número deseado
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 50, // Ajusta el valor de "right" para moverlo más hacia afuera de la pantalla
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        fontFamily: "Inter",
        animation: `${slideIn} 0.5s ease-out`,
      }}
    >
      <img src={whatsappIcon} alt="WhatsApp" style={{ width: 80, height: 80 }} />
      <Box sx={{ mt: 1, fontSize: 14, color: '#25D366' }}>Contactar</Box>
    </Box>
  );
};

export default WhatsAppButton;
