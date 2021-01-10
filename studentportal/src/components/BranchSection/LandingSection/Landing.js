import React, { useState } from "react";
import "./Landing.css";
import back from "./svg_img/back.svg";
import Resources from "../Resources/Resources.js";

function Landing(props) {

  const[semester_prop,set_semester_prop]=useState(1);
  
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
              {props.name} Branch Section
            </h1>
            <div className="button_block">
              <button
                style={{ backgroundColor: "#c7c3c3" }}
                className="left_button"
                onClick={()=>set_semester_prop(2)}
              >
                <span
                  style={{
                    fontFamily: "Roboto Slab",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    fontWeight: "bold",
                  }}
                >
                  2nd sem
                </span>
              </button>
              <button
                style={{ backgroundColor: "#c7c3c3" }}
                className="right_button"
                onClick={()=>set_semester_prop(1)}
              >
                <span
                  style={{
                    fontFamily: "Roboto Slab",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    fontWeight: "bold",
                  }}
                >
                  1st sem
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Resources name={props.name} sem={semester_prop} />
      
    </>
  );
}
export default Landing;
