import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand active" aria-current="page" to="/">
            <img src="../../public/vite.svg" />
          </Link>
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
                <Link className="nav-link " aria-current="page" to="/greet">
                  Greet
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/form">
                  Form
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/style">
                  Style
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/loop">
                  Loop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/refs">
                  Refs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/hoc">
                  HOC
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
