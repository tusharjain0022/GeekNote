import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Logo</Link>
        </li>
        <li>
          <Link to="/">Project 3001</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <div className="dropdown">
          <button className="dropbtn">
            Resources
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <div className="dropdown">
              <button className="dropbtn">
                {" "}
                1st year
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <Link to="first-year-cse">CSE</Link>
                <Link to="first-year-ece">ECE</Link>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">
                {" "}
                2nd year
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <Link to="second-year-cse">CSE</Link>
                <Link to="second-year-ece">ECE</Link>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">
                {" "}
                3rd year
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <Link to="third-year-cse">CSE</Link>
                <Link to="third-year-ece">ECE</Link>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">
                {" "}
                4th year
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <Link to="fourth-year-cse">CSE</Link>
                <Link to="fourth-year-ece">ECE</Link>
              </div>
            </div>
          </div>
        </div>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/calender">Calender</Link>
        </li>
        <div className="dropdown">
          <button className="dropbtn">
            {" "}
            Contact Us
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <Link to="/">Call us</Link>
            <Link to="/">Via E-mail</Link>
          </div>
        </div>
        <div className="login">
          <li>
            <Link to="/">Login</Link>
          </li>
        </div>
        <div className="signup">
          <li>
            <Link to="/">Signup</Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
export default Navbar;
