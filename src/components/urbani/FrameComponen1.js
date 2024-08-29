import PropTypes from "prop-types";
import "./FrameComponen1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`frame-section ${className}`}>
      <div className="frame-container">
        <div className="frame-wrapper">
          <div className="frame-div">
            <div className="frame-wrapper1">
              <img
                className="frame-item"
                loading="lazy"
                alt=""
                src="/group-49.svg"
              />
            </div>
            <div className="aspectos-clave-de-una-urbaniza-parent">
              <h2 className="aspectos-clave-de-container">
                <span>Aspectos clave de una</span>
                <span className="urbanizacin-abierta3">
                  {" "}
                  Urbanización abierta
                </span>
              </h2>
              <div className="key-aspects-icon-wrapper">
                <img
                  className="key-aspects-icon"
                  loading="lazy"
                  alt=""
                  src="/vector-8.svg"
                />
              </div>
            </div>
            <div className="frame-wrapper2">
              <img
                className="frame-inner"
                loading="lazy"
                alt=""
                src="/group-28@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="group-div">
          <div className="rectangle-group">
            <div className="rectangle-div" />
            <div className="libertad-de-decisiones-container">
              <span>
                <b>Libertad de Decisiones</b>
                <span className="span">{` `}</span>
              </span>
              <span className="ante-la-inexistencia-de-conso">
                <span className="ante-la-inexistencia">{`Ante la inexistencia de  `}</span>
                consorcios de administración y de reglamentos internos de
                convivencia y construcción, cada propietario goza de total
                libertad en cuanto a las decisiones sobre su lote (respetando la
                legislación aplicable).
              </span>
            </div>
          </div>
          <div className="rectangle-container">
            <div className="frame-child1" />
            <div className="integracin-al-entorno-container">
              <span className="integracin-al-entorno">
                <b>Integración al Entorno:</b>
              </span>
              <span className="en-este-tipo-de-proyectos-tan">
                <span className="span1">
                  <span className="span2">{` `}</span>
                </span>
                <span>
                  <span className="en-este-tipo">{`En este tipo de proyectos  `}</span>
                  tanto las calles y avenidas, como las áreas comunes y los
                  espacios verdes están interconectados y accesibles a toda la
                  comunidad.
                </span>
              </span>
            </div>
          </div>
          <div className="rectangle-parent1">
            <div className="frame-child2" />
            <div className="interaccin-social-y-container">
              <p className="interaccin-social-y-comunidad">
                <span className="interaccin-social-y-comunidad1">
                  <b className="interaccin-social-y">
                    Interacción Social y Comunidad Activa:
                  </b>
                </span>
                <span>
                  <span className="span3">
                    <span className="span4">{` `}</span>
                  </span>
                </span>
              </p>
              <p className="en-este-tipo-de-proyectos-tan1">
                <span>
                  <span>
                    <span className="en-este-tipo1">{`En este tipo de proyectos  `}</span>
                    tanto las calles y avenidas, como las áreas comunes y los
                    espacios verdes están interconectados y accesibles a toda la
                    comunidad.
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
