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
          <div className="col-12 col-sm-3">
            <div className="Option">
              <h4>GeekNote</h4>
            </div>
            <div className="Contents">
              <ul className="d-none d-sm-block list-unstyled">
                <li>Copyright &copy; GeekNote</li>
                <li>All rights reserved</li>
              </ul>
            </div>
            <div className="Links">
              <Link to="/">
                <img src={instagram} alt="Instagram" />
              </Link>
              <Link to="/">
                <img src={dribble} alt="Dribbble" />
              </Link>
              <Link to="/">
                <img src={youtube} alt="Youtube" />
              </Link>
              <Link to="/">
                <img src={twitter} alt="Twitter" />
              </Link>
            </div>
          </div>
          <span className=" d-block d-sm-none divider" />
          {/*Column2*/}
          <div className="col-12 col-sm-3">
            <div className="Option">
              <h5>Links</h5>
            </div>
            <div className="Contents">
              <ul className="list-unstyled">
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
              </ul>
            </div>
          </div>
          <span className=" d-block d-sm-none divider" />
          {/*Column3*/}
          <div className="col-12 col-sm-3">
            <div className="Option">
              <h5>Support</h5>
            </div>
            <div className="Contents">
              <ul className="list-unstyled">
                <li>
                  <Link to="/">Sign up</Link>
                </li>
                <li>
                  <Link to="/">Login</Link>
                </li>
                <li>
                  <Link to="/">Developers</Link>
                </li>
                <li>
                  <Link to="/">Page admins</Link>
                </li>
                <li>
                  <Link to="/">Terms and Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <span className=" d-block d-sm-none divider" />
          {/*Column4*/}
          <div className="col-12 col-sm-3">
            <div className="sp">
              <h5>Stay Up to Date</h5>
            </div>
            <div className="d-none d-sm-block">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    className="forbg"
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
              </Form>
            </div>
            <div className="d-block d-sm-none form">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    className="forbg"
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
              </Form>
            </div>
            <div className="sp">
              <h5>Want to Contribute?</h5>
            </div>
            <div className="d-none d-sm-block sp-contents">
              <div className="text">
                <a href="https://github.com/tusharjain0022/GeekNote">
                  github.com/tusharjain0022/GeekNote
                </a>
              </div>
            </div>
            <div className="d-block d-sm-none spcontents">
              <div className="text">
                <a href="https://github.com/tusharjain0022/GeekNote">
                  github.com/tusharjain0022/GeekNote
                </a>
              </div>
            </div>
          </div>
          <span className=" d-block d-sm-none spdivider" />
          {/*Column5*/}
          <div className="col-12 d-block d-sm-none baseLine">
            <p>All Rights Reserved Copyright &copy; GeekNote</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
