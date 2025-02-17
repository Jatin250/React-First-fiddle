import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar bg-dark navbar-dark navbar-expand-md">
        <div className="container-fluid">
          <a href="">
            <img
              src="https://pn-paul.netlify.app/image/ff-logo-02.png"
              className="img123"
              alt=""
            />
          </a>

          <div className="menu">
            <ul className="navbar-nav">
              <li>
                <Link to="/" className="nav-link text-light">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link text-light">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to="/brand" className="nav-link text-light">
                  BRAND
                </Link>
              </li>
              <li>
                <Link to="/ourTeam" className="nav-link text-light">
                  OUR TEAM
                </Link>
              </li>
              <li>
                <Link to="/pressRelease" className="nav-link text-light">
                  PRESS RELEASE
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link text-light">
                  CONTACT
                </Link>
              </li>
              <li>
                <Link to="/careers" className="nav-link text-light">
                  CARRERS
                </Link>
              </li>
              <li>
                <Link to="/franchise" className="nav-link text-light">
                  FRANCHISE
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
