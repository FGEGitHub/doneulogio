import PropTypes from "prop-types";
import "./Component1.css";
import logo from "../../Assets/logo.png";
import img2 from "../../Assets/98.png"


const Component1 = ({ className = "" }) => {
  return (
    <div className={`component-3 ${className}`}>
      <footer className="component-background-wrapper">
        <div className="component-background" />
      </footer>
      <img
        className="recurso-82x-1"
        loading="lazy"
        alt=""
        src={img2}
      />
      <div className="component-3-inner">
        <div className="home-group">
          <div className="home1">Home</div>
          <div className="urbanizacin-abierta4">{`Urbanización Abierta `}</div>
          <div className="masterplan-wrapper">
            <div className="masterplan1">MasterPlan</div>
          </div>
          <div className="espacios-pblicos1">Espacios públicos</div>
          <div className="contacto1">Contacto</div>
        </div>
      </div>
      <div className="component-3-child">
        <div className="group-parent">
          <img className="group-icon" loading="lazy" alt="" src="/group.svg" />
          <img className="group-icon1" alt="" src="/group-1.svg" />
        </div>
      </div>
    </div>
  );
};

Component1.propTypes = {
  className: PropTypes.string,
};

export default Component1;
