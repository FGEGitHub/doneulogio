import PropTypes from "prop-types";
import "./Location1.css";
import logodoble from "../../Assets/Logo_Doble.png";
import map from "../../Assets/map.png"

const Location1 = ({ className = "" }) => {
  return (
    <section className={`location ${className}`}>
      <div className="location-content">
        <div className="location-info">
          <div className="dnde-estamos-parent">
            <h3 className="dnde-estamos">¿Dónde estamos?</h3>
            <div className="don-eulogio-se-container">
              <p className="don-eulogio-se">
                Don Eulogio se ubica en el camino de acceso principal
              </p>
              <p className="al-pueblo-de">
                al Pueblo de San Cayetano (Ruta Prov. Nº 08)
              </p>
            </div>
            <div className="esta-situado-a">
              Esta situado a 1,5 Km. de la Ruta Nac. Nº 12 y a 12 Km. de la
              Rotonda de la Virgen
            </div>
          </div>
          <img className="mask-group-icon1" alt="" src={map} />
        </div>
        <div className="developer-info">
          <div className="developer-logo">
            <img
              className="logo-doble-d-fondo-blanco-1-icon"
              loading="lazy"
              alt=""
              src={logodoble}
            />
            <div className="developer-name">
              <div className="desarrolla-y-comercializa">
                Desarrolla y Comercializa Doble D Desarrollos Inmobiliarios
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Location1.propTypes = {
  className: PropTypes.string,
};

export default Location1;
