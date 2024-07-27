import "../mapas/config.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Tarjeta from "./tarjetas";
import Tarjeta2 from "./tarjetas2";
import Ubi from "../ubicacion/ubi";
import MapaGps from "./mapagps";
import videodron from "../../Assets/videodron.mp4";

const WorkIcon = () => <></>;

export default function App() {
  return (
    <div className="App">
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={videodron} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#1a393c" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="Don eulogio"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#1a393c" }}
            icon={<WorkIcon />}
          >
          <Ubi/>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Don Eulogio "
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <Tarjeta2 />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Don elogio"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <div><Tarjeta /></div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2006 - 2008"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <Tarjeta />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2013"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Content Marketing for Web, Mobile and Social Media
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
            <p>Strategy, Social Media</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="November 2012"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            {/* <MapaGps/> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2002 - 2006"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <Tarjeta />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<WorkIcon />}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
}
