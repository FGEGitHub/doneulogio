import React from 'react';
import Logo from '../Assets/doneu1.png'; // Importa el logo desde la ubicación correspondiente
import Face from '../Assets/face.png';
import Inst from '../Assets/inst.png';
const Footer = () => {
  const footerStyle = {
    backgroundColor: '#1A393C', // Color de fondo del footer (ajústalo según el color que veas en la imagen)
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 30px',
  
    borderTop: '3px solid #8a3ff7', // Borde superior púrpura
    height: '375.9px', // Ajuste de altura para el footer
  };

  const navStyle = {
    display: 'flex',
    gap: '20px',
    fontSize: '26px',
    color: 'white',
    marginRight:'15%',
  };

  const logoStyle = {
    height: '170px', // Ajuste del tamaño del logo
    marginRight: '208.27px',
  };

  const socialStyle = {
    display: 'flex',
    gap: '15px',
  };

  const iconStyle = {
    marginRight:'20px',
    width: '50px',
    height: '50px',
  };

  return (
    <footer style={footerStyle}>
      <div>
        <img src={Logo} alt="Don Eulogio Logo" style={logoStyle} />
      </div>

      <nav style={navStyle}>
        <p href="/">Home</p>
        <p href="/urbanizacion">Urbanización Abierta</p>
        <p href="/masterplan">MasterPlan</p>
        <p href="/espacios-publicos">Espacios públicos</p>
        
        <p href="/contacto">Contacto</p>
      </nav>

      <div style={socialStyle}>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <img src={Face }alt="Instagram" style={iconStyle} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <img src={Inst} alt="Facebook" style={iconStyle} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
