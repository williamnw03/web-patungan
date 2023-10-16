import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary shadow p-0 mb-0 bg-body-tertiary rounded">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="assets/PatunganNoBG.png"
              alt="logo"
              height="auto"
              width="120px"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
              <li className="nav-item fs-5 mx-3">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item fs-5 mx-3">
                <a className="nav-link" href="landing-page.html#about">
                  About
                </a>
              </li>

              <li className="nav-item fs-5 mx-3">
                <a className="nav-link" aria-disabled="true">
                  Cooming Soon
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
