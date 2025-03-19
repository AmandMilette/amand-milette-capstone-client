import { Link } from "react-router-dom";

import "./NavBar.scss";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <p className="navbar__logo">Comfort Companions Pet Care</p>
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
