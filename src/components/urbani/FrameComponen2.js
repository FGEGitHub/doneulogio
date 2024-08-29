import Component1 from "./Component";
import PropTypes from "prop-types";
import "./FrameComponen2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`component-3-wrapper ${className}`}>
      <Component1 />
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
