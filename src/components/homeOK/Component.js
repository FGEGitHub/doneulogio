import PropTypes from "prop-types";
import "./Component.css";
import logo from "../../Assets/logo.png";
import video from '../../Assets/videodron.mp4';
import ig from "../../Assets/ig.svg";
import fb from '../../Assets/fb.svg';
import footer from '../../Assets/footerlog.png';



const Component1 = ({ className = "" }) => {
  return (
    <section className={`component-2 ${className}`}>
      <div className="background-wrapper">
        <div className="background" />
      </div>
      <div className="home-parent">
        <a className="home2">Home</a>
        <div className="home2">Urbanización Abierta</div>
        <div className="masterplan-wrapper">
          <div className="masterplan1">MasterPlan</div>
        </div>
        <div className="espacios-pblicos1">Espacios públicos</div>
        <div className="contacto1">Contacto</div>
      </div>
      <img className="group-icon" loading="lazy" alt="" src={ig} />
      <img className="group-icon1" alt="" src={fb} />
      <img
        className="recurso-82x-1"
        loading="lazy"
        alt=""
        src={logo}
      />
    </section>
  );
};

Component1.propTypes = {
  className: PropTypes.string,
};

export default Component1;
