import React from 'react';
import Logo from '../Assets/doneu1.png'; // Importa el logo desde la ubicación correspondiente
import Face from '../Assets/face.png';
import Inst from '../Assets/inst.png';
import './urbanizaciona/UrbanizacionAbierta.css'
const Footer = () => {
  const footerStyle = {
    backgroundColor: '#1A393C', // Color de fondo del footer (ajústalo según el color que veas en la imagen)
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 30px',
    borderTop: '3px solid #8a3ff7', // Borde superior púrpura
    height: '300.9px', // Ajuste de altura para el footer
  };

  const navStyle = {
    display: 'flex',
    gap: '20px',
    fontSize: '26px',
    color: 'white',
    fontFamily: "Inter", // Aplica la fuente Inter
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
        <a href="/" style={{ textDecoration: 'none', color: 'white' }}>Home</a>
        <a href="/urbanizacion-abierta" style={{ textDecoration: 'none', color: 'white' }}>Urbanización Abierta</a>
        <a href="/masterplan" style={{ textDecoration: 'none', color: 'white' }}>MasterPlan</a>
        <a href="/espacios-publicos" style={{ textDecoration: 'none', color: 'white' }}>Espacios Públicos</a>
        <a href="/contacto" style={{ textDecoration: 'none', color: 'white' }}>Contacto</a>
      </nav>

      <div style={socialStyle}>
        <a href="https://www.facebook.com/share/JhUwD6qmGXXzT4pE/?mibextid=kFxxJD" target="_blank" rel="noreferrer">
          <img src={Face} alt="Instagram" style={iconStyle} />
        </a>
        <a href="https://www.instagram.com/doneulogio.ua/" target="_blank" rel="noreferrer">
          <img src={Inst} alt="Facebook" style={iconStyle} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
