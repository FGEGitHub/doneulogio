import React from "react";
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
import useMediaQuery from '@mui/material/useMediaQuery';
import "../mapas/config.css";

const WorkIcon = () => <></>;

export default function App() {
  const isMobile = useMediaQuery('(max-width:600px)');

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
            contentStyle={{ 
              background: "rgb(33, 150, 243)", 
              color: "#1a393c",
              ...(isMobile && { textAlign: 'left' }) 
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={!isMobile && "Don eulogio"} // Ocultar fecha en móvil
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#1a393c" }}
            icon={<WorkIcon />}
          >
            <Ubi />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={!isMobile && "Don Eulogio"} // Ocultar fecha en móvil
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <Tarjeta2 />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={!isMobile && "Don elogio"} // Ocultar fecha en móvil
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <div><Tarjeta /></div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={!isMobile && "2006 - 2008"} // Ocultar fecha en móvil
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <Tarjeta />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date={!isMobile && "April 2013"} // Ocultar fecha en móvil
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
            date={!isMobile && "November 2012"} // Ocultar fecha en móvil
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<WorkIcon />}
          >
            {/* <MapaGps/> */}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date={!isMobile && "2002 - 2006"} // Ocultar fecha en móvil
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
