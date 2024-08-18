import "./Time.css";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import timelineElements from "./TimelineElements";
import AOS from "aos";
import 'aos/dist/aos.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { useEffect } from "react";

function Time() {

    useEffect(()=>{
        AOS.init({duration:2000});
    },[])

    let workIconStyles = { 
      background: "linear-gradient(135deg, rgb(204, 60, 60) 13%, rgb(51, 0, 0) 35%)" 
    };
    
    let schoolIconStyles = { 
      background: "linear-gradient(135deg, rgb(204, 60, 60) 43%, rgb(51, 0, 0) 60%)" 
    };
    
  
    return (
      <div  className="timeline-container" data-aos="zoom-in">
        <br/>
        <br/>
        <VerticalTimeline >
          {timelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";
            let showButton =
              element.buttonText !== undefined &&
              element.buttonText !== null &&
              element.buttonText !== "";
  
            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description">{element.description}</p>
                {showButton && (
                  <a
                    className={`button ${
                      isWorkIcon ? "workButton" : "schoolButton"
                    }`}
                    href="/"
                  >
                    {element.buttonText}
                  </a>
                )}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    );
}

export default Time;