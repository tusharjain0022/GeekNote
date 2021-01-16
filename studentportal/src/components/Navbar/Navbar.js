import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import signup_img from "./svg_nav/signup_img.svg";
import google_logo from "./svg_nav/google_logo.svg";
import login_img from "./svg_nav/login_img.svg";
import "./sign_up.css";
import "./login.css";

function Navbar_Top() {
  // following use states are for sign up modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // following use state are for login modal
  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  // for signnup modal
  const for_signup_modal = () => {
    setShowLogin(false);
    setShow(true);
  };

  const for_login_modal = () => {
    setShow(false);
    setShowLogin(true);
  };
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-md ">
        <a className="navbar-brand" href="/">
          GeekNote
        </a>
        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Resources
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="/first-year-cse">
                  First Year CSE
                </a>
                <a className="dropdown-item" href="/first-year-ece">
                  First Year ECE
                </a>
                <a className="dropdown-item" href="/second-year-cse">
                  Second Year CSE
                </a>
                <a className="dropdown-item" href="/Second-year-ece">
                  Second Year ECE
                </a>
                <a className="dropdown-item" href="/third-year-cse">
                  Third Year CSE
                </a>
                <a className="dropdown-item" href="/third-year-ece">
                  Third Year ECE
                </a>
                <a className="dropdown-item" href="/fourth-year-cse">
                  Fourth Year CSE
                </a>
                <a className="dropdown-item" href="/fourth-year-ece">
                  Fourth Year ECE
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact us
              </a>
            </li>
          </ul>
          <div className=" button-group">
            <button className="btn login-signup" onClick={handleShowLogin}>
              Login
            </button>
            <button className="btn login-signup" onClick={handleShow}>
              Sign up
            </button>
            {/* code for Sign up modal starts here */}
            <Modal size="lg" centered show={show} onHide={handleClose}>
              <div className="main_div">
                <div className="disappear">
                  <img className="for_img" src={signup_img} alt="signup " />
                </div>
                <hr></hr>
                <div className="container mt-4">
                  <Form className="form_css">
                    <Button
                      className=" goggle_button font-weight-bold mb-0"
                      style={{
                        color: "black",
                        background: "#FFFFFF",
                        border: "#FFFFFF",
                        borderRadius: "1cm",
                      }}
                      type="submit"
                    >
                      <img className="mr-3" src={google_logo} alt="Google" />{" "}
                      SignUp with Google
                    </Button>

                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="font-weight-bold">
                        Email address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        className="border border-primary"
                        placeholder="Enter email"
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="font-weight-bold">
                        Username
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="border border-info"
                        placeholder="Enter Username"
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label className="font-weight-bold">
                        Password
                      </Form.Label>
                      <Form.Control
                        type="password"
                        className="border border-primary"
                        placeholder="Password"
                      />
                    </Form.Group>
                    <Form.Group
                      style={{ display: "flex" }}
                      controlId="formBasicCheckbox"
                    >
                      <Form.Check
                        type="checkbox"
                        className="txt_policy_conditions"
                        label="I Agree to all the Terms and condition and Privacy Policy"
                      />
                    </Form.Group>

                    <Button
                      className="text-light"
                      style={{
                        backgroundColor: "rgba(14, 56, 84, 0.79)",
                        width: "100%",
                        borderRadius: "1cm",
                      }}
                      type="submit"
                    >
                      Continue
                    </Button>
                    <p className="text-center">
                      Already have an account ?{" "}
                      <button
                        type="button"
                        onClick={for_login_modal}
                        className="btn btn-link"
                      >
                        Login here
                      </button>
                    </p>
                  </Form>
                </div>
              </div>
            </Modal>
            {/* sign up modal code ends here */}

            {/* code for Login modal starts here */}
            <Modal
              size="lg"
              centered
              show={showLogin}
              onHide={handleCloseLogin}
            >
              <div className="main_div_login">
                <div className="disappear_login">
                  <img className="for_img_login" src={login_img} alt="login" />
                </div>
                <hr></hr>
                <div className="container mt-4">
                  <Form className="form_css_login">
                    <Button
                      className=" google_button_login font-weight-bold"
                      style={{
                        color: "black",
                        background: "#FFFFFF",
                        border: "#FFFFFF",
                        borderRadius: "1cm",
                      }}
                      type="submit"
                    >
                      <img className="mr-3" src={google_logo} alt="google" />
                      Login with Google
                    </Button>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="font-weight-bold mt-2">
                        Username
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="mt-1  border border-primary"
                        placeholder="Enter Username"
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label className="font-weight-bold mt-2">
                        Password
                      </Form.Label>
                      <Form.Control
                        type="password"
                        className="mt-1 border border-info"
                        placeholder="Password"
                      />
                    </Form.Group>
                    <Form.Group
                      style={{ display: "flex" }}
                      controlId="formBasicCheckbox"
                    >
                      <Form.Check
                        type="checkbox"
                        className="txt_policy_conditions_login"
                        label="Remember me"
                      />
                      <Form.Label className="forgot-link">
                        <button
                          type="button"
                          className="btn btn-link btn-forgot float-right"
                        >
                          {" "}
                          Forgot Password ?
                        </button>
                      </Form.Label>
                    </Form.Group>

                    <Button
                      className="text-light mt-3"
                      style={{
                        backgroundColor: "rgba(14, 56, 84, 0.79)",
                        width: "100%",
                        borderRadius: "1cm",
                      }}
                      type="submit"
                    >
                      Login
                    </Button>
                    <p className="text-center">
                      Don't have an account ?
                      <button
                        type="button"
                        onClick={for_signup_modal}
                        className="btn btn-link"
                      >
                        Signup
                      </button>
                    </p>
                  </Form>
                </div>
              </div>
            </Modal>
            {/* Login up modal code ends here */}
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar_Top;
