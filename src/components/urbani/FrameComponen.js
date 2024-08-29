import PropTypes from "prop-types";
import "./FrameComponen.css";
import logo from "../../Assets/logo.png";

const FrameComponent = ({ className = "" }) => {
  return (
    <header className={`frame-header ${className}`}>
      <div className="frame-group">
        <div className="recurso-62x-1-wrapper">
          <img
            className="recurso-62x-1"
            loading="lazy"
            alt=""
            src={logo}
          />
        </div>
        <div className="home-parent">
          <div className="home">Home</div>
          <div className="home">Urbanización Abierta</div>
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
