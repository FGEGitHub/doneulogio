import PropTypes from "prop-types";
import "./FrameComponent.css";
import logo from "../../Assets/logo.png";

const FrameComponent = ({ className = "" }) => {
  return (
    <header className={`home-inner ${className}`}>
      <div className="home-navigation-parent">
        <div className="home-navigation">
          <img
            className="recurso-62x-1"
            loading="lazy"
            alt=""
            src={logo}
          />
        </div>
        <div className="menu">
          <a className="home1">Home</a>
          <div className="urbanizacin-abierta">{`Urbanización Abierta `}</div>
          <div className="masterplan">MasterPlan</div>
          <div className="espacios-pblicos">Espacios públicos</div>
          <div className="contacto">Contacto</div>
        </div>
      </div>
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
