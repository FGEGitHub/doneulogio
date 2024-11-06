import React, { useEffect, useState } from 'react';
import whatsappIcon from '../../Assets/logosolidowasap.png'; // Asegúrate de que la ruta sea correcta
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
      onClick={() => window.open('https://wa.me/3794008721?text=Hola%20tengo%20una%20consulta%20sobre%20la%20web%20Don%20Eulogio', '_blank')}
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 50,
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        fontFamily: "Inter",
        animation: `${slideIn} 0.5s ease-out`,
      }}
    >
   <img src={whatsappIcon} alt="WhatsApp" style={{ width: 60, height: 60 }} />

      <Box sx={{ mt: 1, fontSize: 14, color: '#25D366' }}>Contactar</Box>
    </Box>
  );
};

export default WhatsAppButton;
