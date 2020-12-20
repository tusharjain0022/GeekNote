import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Footer.css";
import Form from "react-bootstrap/Form";
import youtube from "./Youtube.svg";
import instagram from "./Instagram.svg";
import twitter from "./Twitter.svg";
import dribble from "./Dribbble.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container containerclass">
        <div className="row">
          {/* Column1 */}
          <div className="col-6 col-sm-4">
            <div className="Option">
              <h4>Project 3001</h4>
            </div>
            <div className="Contents">
              <ui className="list-unstyled">
                <li>Copyright&copy;3001</li>
                <li>All rights reserved</li>
              </ui>
            </div>
            <div className="Links">
              <Link to="/">
                <img src={instagram} alt="Instagram"></img>
              </Link>
              <Link to="/">
                <img src={dribble} alt="Dribbble"></img>
              </Link>
              <Link to="/">
                <img src={youtube} alt="Youtube"></img>
              </Link>
              <Link to="/">
                <img src={twitter} alt="Twitter"></img>
              </Link>
            </div>
          </div>
          {/*Column2*/}
          <div className="col-6 col-sm-2">
            <div className="Option">
              <h5>Links</h5>
            </div>
            <div className="Contents">
              <ui className="list-unstyled">
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/">Resources</Link>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Calendar</Link>
                </li>
              </ui>
            </div>
          </div>
          {/*Column3*/}
          <div className="col-4 col-sm-2">
            <div className="Option">
              <h5>Support</h5>
            </div>
            <div className="Contents">
              <ui className="list-unstyled">
                <li>
                  <Link to="/">Contact CR</Link>
                </li>
                <li>
                  <Link to="/">Contact Page admins</Link>
                </li>
                <li>
                  <Link to="/">Developers</Link>
                </li>
                <li>
                  <Link to="/">Terms and Policy</Link>
                </li>
                <li>
                  <Link to="/">Login/SignUp</Link>
                </li>
              </ui>
            </div>
          </div>
          {/*Column4*/}
          <div className="col-8 col-sm-4">
            <div className="sp">
              <h5>Stay Up to Date</h5>
            </div>
            <div className="sp-contents">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Form>
            </div>
            <div className="sp">
              <h5>Want to Contribute?</h5>
            </div>
            <div className="sp-contents">
              <div className="text">
                <Link to="https://github.com/tusharjain0022/3001">
                  github.com/tusharjain0022/3001
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
