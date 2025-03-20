import { Link } from "react-router-dom";

import "./NavBar.scss";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img
            className="navbar__logo"
            src="/src/assets/icons/Comfort Companions Logo light.svg"
            alt="Comfort Companions Pet Care logo"
          />
        </Link>
        <Link to="/bookings">
          <p className="navbar__bookings">Bookings</p>
        </Link>
        <Link to="/about">
          <p className="navbar__about">About</p>
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
