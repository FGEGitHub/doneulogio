import React from 'react';
import logo from '../Assets/Recursofooter.png';
import facebookIcon from '../Assets/face.png';
import instagramIcon from '../Assets/inst.png';

const Footer = () => {
  return (
    <footer style={styles.footerContainer}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Don Eulogio" style={styles.logo} />
      </div>
      <ul style={styles.menuList}>
        <li>Home</li>
        <li>Urbanización abierta</li>
        <li>MasterPlan</li>
        <li>Espacios públicos</li>
        <li>Contacto</li>
      </ul>
      <div style={styles.socialContainer}>
        <img src={facebookIcon} alt="Facebook" style={styles.socialIcon} />
        <img src={instagramIcon} alt="Instagram" style={styles.socialIcon} />
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
