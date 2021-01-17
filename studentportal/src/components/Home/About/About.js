import "./About.css";
import React from "react";
import line from "../../../images/line.svg";
import hline from "../../../images/horline.svg";
import info from "../../../images/info.svg";
import "bootstrap/dist/css/bootstrap.css";

function About() {
  return (
    <div className="Aboutus container">
      <div className="row">
        <div className="line d-none d-lg-block">
          <img src={line} alt="line" className="line-pic"></img>
        </div>
        <div className="hline d-none d-lg-block">
          <img src={hline} alt="hline" className="hline-pic"></img>
        </div>
        <div className="col-12">
          <h1 className="heading">
            <img
              src={info}
              alt="logo"
              style={{
                width: "5.2vh",
                height: "5.2vh",
                margin: "5px 5px",
              }}
            ></img>{" "}
            About us
          </h1>
          <hr
            className="d-lg-none"
            style={{ borderTop: "1px solid #ccd6f6", width: "70%" }}
          ></hr>
        </div>
        <div className="col-12 about-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In diam
            purus, sollicitudin a mauris et,{" "}
            <span className="highlight">Resources</span> tincidunt turpis. Sed
            non nibh massa. Vivamus urna eros, blandit in volutpat sed
          </p>
          <p>
            <span className="highlight">Blog</span> ipsum dolor sit amet,
            consectetur adipiscing elit. In diam purus, sollicitudin a mauris
            et, vestibulum tincidunt turpis. Sed non nibh massa. Vivamus urna
            eros, blandit in volutpat sedLorem ipsum dolor sit amet, consectetur
            adipiscing elit. In diam purus, sollicitudin a mauris et, vestibulum
            tincidunt turpis. Sed non nibh massa. Vivamus urna eros, blandit in
            volutpat sedLorem ipsum dolor sit amet, consectetur adipiscing elit.
            In diam purus, sollicitudin a mauris et, vestibulum tincidunt
            turpis. Sed non nibh massa. Vivamus urna eros, blandit in volutpat
            sed
          </p>
          <p>
            <span className="highlight">Organised notes</span> ipsum dolor sit
            amet, consectetur adipiscing elit. In diam purus, sollicitudin a
            mauris et,tincidunt turpis. Sed non nibh massa. Vivamus urna eros,
            blandit in volutpat sed
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
