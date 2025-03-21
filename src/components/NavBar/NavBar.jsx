import { Link } from "react-router-dom";

import "./NavBar.scss";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img
            className="navbar__logo"
            src="/src/assets/logos/Comfort Companions Logo light.svg"
            alt="Comfort Companions Pet Care logo"
          />
        </Link>
        <div className="page-links">
          <Link to="/bookings" className="page-links__link">
            <p>Bookings</p>
          </Link>
          <Link to="/about" className="page-links__link">
            <p>About</p>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
