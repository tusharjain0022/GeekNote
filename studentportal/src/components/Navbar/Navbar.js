import "./Navbar.css";

function Navbar() {
  return (
    <div>
<ul>
  <li><a href="#logo">Logo</a></li>
  <li><a href="#home">Project 3001</a></li>
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <div className="dropdown">
    <button className="dropbtn">Resources 
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <div className="dropdown">
      <button className="dropbtn"> 1st year 
      <i className="fa fa-caret-down"></i>
      </button>
        <div className="dropdown-content">
          <a href="#">CSE</a>
          <a href="#">ECE</a>
        </div>
      </div>
    <div className="dropdown">
      <button className="dropbtn"> 2nd year 
      <i className="fa fa-caret-down"></i>
      </button>
        <div className="dropdown-content">
        <a href="#">CSE</a>
        <a href="#">ECE</a>
        </div>
    </div>
    <div className="dropdown">
      <button className="dropbtn"> 3rd year 
      <i className="fa fa-caret-down"></i>
      </button>
        <div className="dropdown-content">
        <a href="#">CSE</a>
        <a href="#">ECE</a>
        </div>
     </div>
     <div className="dropdown">
      <button className="dropbtn"> 4th year 
      <i className="fa fa-caret-down"></i>
      </button>
        <div className="dropdown-content">
        <a href="#">CSE</a>
        <a href="#">ECE</a>
        </div>
     </div> 
      
    </div>
  </div>
  <li><a href="#blog">Blog</a></li>
  <li><a href="#calender">Calender</a></li>
  <div className="dropdown">
      <button className="dropbtn"> Contact Us 
      <i className="fa fa-caret-down"></i>
      </button>
        <div className="dropdown-content">
          <a href="#">Call us</a>
          <a href="#">Via E-mail</a>
        </div>
   </div>
   <div className="login"><li><a href="#about">Login</a></li></div>
  <div className="signup"><li><a href="#about">Signup</a></li></div>
</ul>
</div>
  );
}
export default Navbar;



