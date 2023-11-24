import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary navbar-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand active" to="/">
            <img src="./vite.svg" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  // activeClassName="active"
                  to="/greet"
                >
                  Greet
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  // activeClassName="active"
                  to="/form"
                >
                  Form
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  // activeClassName="active"
                  to="/style"
                >
                  Style
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  // activeClassName="active"
                  to="/loop"
                >
                  Loop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  // activeClassName="active"
                  to="/refs"
                >
                  Refs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  // activeClassName="active"
                  to="/hoc"
                >
                  HOC
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
