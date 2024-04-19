
import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import Login from '../../components/login/componente'

function LoginComponent() {
  // Definimos el estado para el nombre de usuario y la contraseña
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
      const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
      if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON)
        switch (user.nivel) {
          case 100:
            navigate('/admin/menu')
            break;
        
          default:
            
            break;
        }
      }
    }, [])
  // Función que maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar la autenticación
    console.log('Nombre de usuario:', username);
    console.log('Contraseña:', password);
    // Puedes realizar llamadas a una API de autenticación aquí
  };

  return (
    <>
    <Login/>
    </>
  );
}

export default LoginComponent;
