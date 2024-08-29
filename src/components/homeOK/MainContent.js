import PropTypes from "prop-types";
import "./MainContent.css";
import img from "../../Assets/98.png";
import vector from "../../Assets/Vector.png";
import vector1 from "../../Assets/Vector1.svg";
import vector2 from "../../Assets/Vector2.svg"

const MainContent = ({ className = "" }) => {
  return (
    <section className={`main-content ${className}`}>
      <div className="rectangle-parent">
        <div className="frame-child" />
        <div className="description">
          <img className="description-child" alt="" src={vector1} />
          <img className="description-child" alt="" src={vector2} />

          <i className="i">/</i>
        </div>
        <i className="bosques">Bosques</i>
        <div className="feature-highlight">
          <div className="pinares">Pinares</div>
        </div>
      </div>
      <div className="mask-group-parent">
        <img
          className="mask-group-icon"
          loading="lazy"
          alt=""
          src={img}
        />
        <div className="freedom-title">
          <div className="freedom-title-child" />
          <h1 className="libertad">Libertad</h1>
        </div>
      </div>
    </section>
  );
};

MainContent.propTypes = {
  className: PropTypes.string,
};

export default MainContent;