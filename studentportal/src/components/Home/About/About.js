import "./About.css";
import logo from "../../../images/aboutLogo.svg"
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function About() {
    return (
        <div className="main-container">
            <div className="row">
                <div className="col-12 col-sm-4 align-self-center ">
                    <img src={logo} alt="Helping Hand" height="320px" length="120px" width="240px"/>
                </div>
                <div className="d-none d-sm-block col-12 col-sm text textSp">
                    <h1>About us heading - lorep ipsum lorep ipsum lorep ipsum lorep ipsum</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In diam purus, sollicitudin a mauris et, vestibulum tincidunt turpis.
                        Sed non nibh massa. Vivamus urna eros, blandit in volutpat sed</p>
                </div>
                <div className="d-block d-sm-none col-12 col-sm text2">
                    <h2>About us heading - lorep ipsum lorep ipsum lorep ipsum lorep ipsum</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In diam purus, sollicitudin a mauris et, vestibulum tincidunt turpis.
                        Sed non nibh massa. Vivamus urna eros, blandit in volutpat sed</p>
                </div>
            </div>
            <div className="row">
                <div className="d-block d-sm-none">
                    <img src={logo} alt="Helping Hand" height="320px" length="240px"/>
                </div>
                <div className="d-none d-sm-block col-12 col-sm-8 text">
                    <h1>About us heading - lorep ipsum lorep ipsum lorep ipsum lorep ipsum</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In diam purus, sollicitudin a mauris et, vestibulum tincidunt turpis.
                        Sed non nibh massa. Vivamus urna eros, blandit in volutpat sed</p>
                </div>
                <div className="d-block d-sm-none col-12 col-sm text2">
                    <h2>About us heading - lorep ipsum lorep ipsum lorep ipsum lorep ipsum</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In diam purus, sollicitudin a mauris et, vestibulum tincidunt turpis.
                        Sed non nibh massa. Vivamus urna eros, blandit in volutpat sed</p>
                </div>
                <div className="d-none d-sm-block col-12 col-sm-4">
                    <img src={logo} alt="Helping Hand" height="320px" length="120px" width="240px"/>
                </div>
            </div>
        </div>
    );
}

export default About;
