import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Nav from '../../../components/navbar';
import Clientes from '../../../components/clientes/seleccionador';

export default function Paginas() {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      if (user.nivel !== 100) {
        console.log('Usuario no autorizado');
        window.localStorage.removeItem('loggedNoteAppUser');
        navigate("/login");
      }
    } else {
      console.log('Usuario no autenticado');
    }
  }, [navigate]);

  return (
    <div style={{ 
      backgroundColor: '#1A393C', 
      minHeight: '100vh', // Ocupa toda la altura de la ventana
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', // Opcional, alinea al centro el contenido horizontalmente
    }}>
      <Nav />
      <div style={{ flex: 1, width: '100%' }}> {/* Flex 1 para asegurar que Clientes ocupe el espacio restante */}
        <Clientes />
      </div>
      <br /><br /><br /><br />
    </div>
  );
}
