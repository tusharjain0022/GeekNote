import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Nav, Form, Navbar, NavDropdown, Modal } from 'react-bootstrap';
import { useState } from 'react';
import Signup_img from './svg_nav/Signup_img.svg';
import Google_logo from './svg_nav/Google_logo.svg';
import './Sign_up.css';

function Navbar_Top() {

  // following use states are for sign up modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <div>
      <>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand href="/">Logo 3001</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/" className="ml-3">Home</Nav.Link>
              <Nav.Link href="" className="ml-3 mr-3">About</Nav.Link>
              <NavDropdown title="Resources" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/first-year-cse">First Year CSE</NavDropdown.Item>
                <NavDropdown.Item href="/first-year-ece">First Year ECE</NavDropdown.Item>
                <NavDropdown.Item href="/second-year-cse">Second Year CSE</NavDropdown.Item>
                <NavDropdown.Item href="/second-year-ece">Second Year ECE</NavDropdown.Item>
                <NavDropdown.Item href="/third-year-cse">Third Year CSE</NavDropdown.Item>
                <NavDropdown.Item href="/third-year-ece">Third Year ECE</NavDropdown.Item>
                <NavDropdown.Item href="/fourth-year-cse">Fourth Year CSE</NavDropdown.Item>
                <NavDropdown.Item href="/fourth-year-ece">Fourth Year ECE</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">Terms and Policy</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/blog" className="ml-3">Blog</Nav.Link>
              <Nav.Link href="" className="ml-3 mr-3">Calender</Nav.Link>
              <NavDropdown title="Contact us" id="collasible-nav-dropdown">
                <NavDropdown.Item href="">Person 1</NavDropdown.Item>
                <NavDropdown.Item href="">Person 2</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <div>
                <Button variant="secondary" size="sm" className="ml-3 pl-3 pr-3">Log In</Button>

                <Button variant="secondary" onClick={handleShow} size="sm" className="ml-3 pl-3 pr-3" style={{ backgroundColor: "rgb(32, 38, 82)" }}>Sign Up</Button>
                {/* code for Sign up modal starts here */}
                  <Modal size="lg" centered show={show} onHide={handleClose}>
                        <div className="main_div">
                          <div className="disappear"><img className="for_img" src={Signup_img} alt="register here"/></div>
                          <hr></hr>
                          <div className="container mt-4">
                            <Form className="form_css">
                              <Button className=" goggle_button font-weight-bold" style={{ background: "#FFFFFF", border:"#FFFFFF", color:"#0E3854", borderRadius:"1cm"}} type="submit">
                                <img src={Google_logo} alt="google logo" />  SignUp with Google
                              </Button>

                              <Form.Group controlId="formBasicEmail">
                                <Form.Label className="font-weight-bold">Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                              </Form.Group>

                              <Form.Group controlId="formBasicEmail">
                                <Form.Label className="font-weight-bold">Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter Username" />
                              </Form.Group>

                              <Form.Group controlId="formBasicPassword">
                                <Form.Label className="font-weight-bold">Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />

                              </Form.Group>
                              <Form.Group style={{display:"flex"}} controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" className="txt_policy_conditions" label="I Agree to all the Terms and condition and Privacy Policy" />
                              </Form.Group>

                              <Button className="text-light" style={{ backgroundColor: "rgba(14, 56, 84, 0.79)", width: "100%", borderRadius:"1cm"}} type="submit">Continue</Button>
                              <p className="text-center">Already have an account ? Login here</p>
                            </Form>
                          </div>
                        </div>
                      </Modal>
                {/* sign up modal code ends here */}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    </div>
  );
}
export default Navbar_Top;