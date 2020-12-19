import "./Navbar.css";
import 'C:/Users/Lenovo/Desktop/3001/studentportal/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Navbar_Top() {
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
                <Button variant="secondary" size="sm" className="ml-3 pl-3 pr-3" style={{backgroundColor: "rgb(32, 38, 82)"}}>Sign Up</Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    </div>
  );
}
export default Navbar_Top;