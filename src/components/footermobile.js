import React from 'react';
import logo from '../Assets/Recursofooter.png';
import facebookIcon from '../Assets/face.png';
import instagramIcon from '../Assets/inst.png';
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer style={styles.footerContainer}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Don Eulogio" style={styles.logo} />
      </div>
      <ul style={styles.menuList}>
        <li     onClick={() => navigate('/')}
        >Home</li>
        <li onClick={() => navigate('/urbanizacion-abierta')}>Urbanización abierta</li>
        <li     onClick={() => navigate('/masterplan')}
        >MasterPlan</li>
        <li     onClick={() => navigate('/espacios-publicos')}
        >Espacios públicos</li>
        <li     onClick={() => navigate('/contacto')}
        >Contacto</li>
      </ul>
      <div style={styles.socialContainer}>
      <a href="https://www.facebook.com/share/JhUwD6qmGXXzT4pE/?mibextid=kFxxJD" target="_blank" rel="noopener noreferrer">
  <img src={facebookIcon} alt="Facebook" style={styles.socialIcon} />
</a>
<a href="https://www.instagram.com/doneulogio.ua/" target="_blank" rel="noopener noreferrer">
  <img src={instagramIcon} alt="Instagram" style={styles.socialIcon} />
</a>
      </div>
    </footer>
  );
};

const styles = {
  footerContainer: {
    backgroundColor: '#123d45',
    padding: '20px 0',
    textAlign: 'center',
    color: 'white',
  },
  logoContainer: {
    marginBottom: '15px',
  },
  logo: {
    width: '130px',
    height: 'auto',
  },
  menuList: {
    listStyle: 'none',
    padding: 0,
    margin: '20px 0',
    color: 'white',
  },
  socialContainer: {
    marginTop: '20px',
  },
  socialIcon: {
    width: '24px',
    height: '24px',
    margin: '0 10px',
  }
};

export default Footer;
