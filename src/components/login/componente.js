import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import servicioLogin from '../../services/login'
import servicioUsuario from '../../services/usuarios'
import './loginComponent.css'; // Asegúrate de crear este archivo para los estilos CSS



function LoginComponent() {
  const navigate = useNavigate();
  // Definimos el estado para el nombre de usuario y la contraseña
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  // Función que maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar la autenticación
   const user =  servicioLogin.login({usuario:username,password:password})
    
    window.localStorage.setItem(
      'loggedNoteAppUser', JSON.stringify(user)
    )

    switch(user.nivel){
       
      case 50:navigate('/doneulogio/admin')
      default: window.localStorage.removeItem('loggedNoteAppUser');
      break;


  }



    // Puedes realizar llamadas a una API de autenticación aquí
  };

  return (
    <div className="login-container">
    <div className="login-card">
      <h2>Inicio de sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  </div>
  );
}

export default LoginComponent;
