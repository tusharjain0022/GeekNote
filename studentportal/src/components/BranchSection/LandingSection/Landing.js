import React from "react";
import "./Landing.css";
import back from "./svg_img/back.svg";
import Resources from "../Resources/Resources.js";

function Landing(props) {
  return (
    <>
      <div className="landing-section">
        <div
          className="land_div"
          style={{ backgroundImage: `url(${back})`, backgroundSize: "cover" }}
        >
          <div className="text_land">
            <h1
              style={{
                color: "white",
                fontFamily: "Roboto Slab",
                fontWeight: "bolder",
              }}
            >
              {props.name} Section
            </h1>
          </div>

        </div>
      </div>

      <Resources name={props.name} />
    </>
  );
}
export default Landing;
