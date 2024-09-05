import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import servicioLogin from '../../services/login';
import './loginComponent.css'; // Asegúrate de crear este archivo para los estilos CSS
import imagenbosques from '../../Assets/bosquesfoto.jpg';
import logourl from '../../Assets/doneu1.png'; // Asegúrate de tener el logo en tu directorio de Assets

function LoginComponent() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await servicioLogin.login({ usuario: username, password: password });
    console.log(user.nivel);
    await window.localStorage.setItem('loggedNoteAppUser', JSON.stringify(user));

    switch (user.nivel) {
      case 100:
        console.log(100);
        navigate('/admin/datos');
        break;
      default:
        window.localStorage.removeItem('loggedNoteAppUser');
        break;
    }
  };

  return (
    <div className="login-page">
      <div className="image-container">
        <img src={imagenbosques} alt="Fondo" />
      </div>
      <div className="login-container">
        <img src={logourl} alt="Logo Empresa" className="logo" />
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
    </div>
  );
}

export default LoginComponent;
