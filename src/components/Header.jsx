import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-dark fixed-top">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            <img src="/src/assets/ff-logo-02.png" className="weblogo" alt="" />
            <img
              src="/src/assets/logo-for-mobile.png"
              className="moblogo"
              alt="logo"
            />
          </a>

          {/* mobile menu */}
          <button
            className="navbar-toggler"
            data-bs-target="#pn"
            data-bs-toggle="collapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* menu */}
          <div className="navbar-collapse collapse" id="pn">
            <ul className="navbar-nav ms-auto text-center">
              <li>
                <Link
                  className="nav-link"
                  to="/"
                  style={{ fontWeight: "lighter", fontSize: "15px" }}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="/about"
                  style={{ fontWeight: "lighter", fontSize: "15px" }}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="/brand"
                  style={{ fontWeight: "lighter", fontSize: "15px" }}
                >
                  BRAND
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="/ourTeam"
                  style={{ fontWeight: "lighter", fontSize: "15px" }}
                >
                  OUR TEAM
                </Link>
              </li>
              <li>
                <Link
                  to="/pressRelease"
                  className="nav-link"
                  style={{ fontWeight: "lighter", fontSize: "15px" }}
                >
                  PRESS RELEASE
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="/contact"
                  style={{ fontWeight: "lighter", fontSize: "15px" }}
                >
                  CONTACT
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="/careers"
                  style={{ fontWeight: "lighter", fontSize: "15px" }}
                >
                  CARRERS
                </Link>
              </li>
              <li>
                <Link
                  to="/franchise"
                  className="nav-link"
                  style={{
                    fontWeight: "lighter",
                    fontSize: "15px",
                    border: "1px orange solid",
                  }}
                >
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
