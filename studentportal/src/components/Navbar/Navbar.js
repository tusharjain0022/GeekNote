import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar_Top() {
  return (
    <div className="Navbar">
      <nav class="navbar navbar-expand-lg ">
        <a class="navbar-brand" href="/">
          GeekNote
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
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
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="/first-year-cse">
                  First Year CSE
                </a>
                <a class="dropdown-item" href="/first-year-ece">
                  First Year ECE
                </a>
                <a class="dropdown-item" href="/second-year-cse">
                  Second Year CSE
                </a>
                <a class="dropdown-item" href="/Second-year-ece">
                  Second Year ECE
                </a>
                <a class="dropdown-item" href="/third-year-cse">
                  Third Year CSE
                </a>
                <a class="dropdown-item" href="/third-year-ece">
                  Third Year ECE
                </a>
                <a class="dropdown-item" href="/fourth-year-cse">
                  Fourth Year CSE
                </a>
                <a class="dropdown-item" href="/fourth-year-ece">
                  Fourth Year ECE
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/blog">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Contact us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar_Top;
