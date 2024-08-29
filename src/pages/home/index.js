import FrameComponent from "../../components/homeOK/FrameComponent";
import MainContent from "../../components/homeOK/MainContent";
import Location1 from "../../components/homeOK/Location1";
import Component1 from "../../components/homeOK/Component";
import video from "../../Assets/videodron.mp4";
import "./Home.css";
import "../../global.css";

const Home = () => {
  return (
    <div className="home">
      <section className="image-15-parent">
        <video
          className="image-15-icon"
          loading="lazy"
          alt=""
          src={video}
        />
        <h1 className="tu-futuro-en-container">
          <p className="tu-futuro-en">Tu futuro en</p>
          <p className="don-eulogio">Don Eulogio</p>
        </h1>
      </section>
      <FrameComponent />
      <div className="videotitulo-wrapper">
        <h1 className="videotitulo"></h1>
      </div>
      <section className="home-child" />
      <MainContent />
      <Location1 />
      <Component1 />
    </div>
  );
};

export default Home;
