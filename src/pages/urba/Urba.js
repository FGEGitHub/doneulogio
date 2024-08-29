import FrameComponent from "../../components/urbani/FrameComponen";
import FrameComponent1 from "../../components/urbani/FrameComponen1";
import FrameComponent2 from "../../components/urbani/FrameComponen2";
import img from '../../Assets/125 1.png';
import img2 from '../../Assets/98.png';
import "./UrbanizacinAbierta.css";
import "../../global1.css"

const UrbanizacinAbierta = () => {
  return (
    <div className="urbanizacin-abierta">
      <FrameComponent />
      <section className="urbanizacin-abierta-inner">
        <div className="parent">
          <img className="icon" alt="" src={img} />
          <div className="rectangle-parent">
            <div className="frame-child" />
            <h1 className="urbanizacin-abierta1">
              <p className="urbanizacin">Urbanización</p>
              <p className="abierta">Abierta</p>
            </h1>
          </div>
        </div>
      </section>
      <section className="urbanizacin-abierta-child">
        <div className="frame-parent">
          <div className="al-desarrollar-un-proyecto-al-wrapper">
            <div className="al-desarrollar-un-container">
              <span>{`Al desarrollar un proyecto al estilo Urbanización Abierta se busca `}</span>
              <span className="generar-un-modelo">
                generar un modelo de “Ciudad dentro del verde”
              </span>
              <span className="logrando-integrar-el">{`,  logrando integrar el Barrio al entorno natural que lo rodea y conformando una comunidad activa. `}</span>
            </div>
          </div>
          <img
            className="separator-icon"
            loading="lazy"
            alt=""
            src={img}
          />
        </div>
      </section>
      <FrameComponent1 />
      <FrameComponent2 />
      <div className="background" />
    </div>
  );
};

export default UrbanizacinAbierta;
