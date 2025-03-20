import { Link } from "react-router-dom";

import "./Footer.scss";

function Footer() {
  return (
    <>
      <nav className="footer-navbar">
        <Link to="/">
          <p className="footer-navbar__logo">Comfort Companions Pet Care</p>
        </Link>
        <Link to="/bookings">
          <p className="footer-navbar__bookings">Bookings</p>
        </Link>
        <Link to="/about">
          <p className="footer-navbar__about">About</p>
        </Link>
      </nav>
    </>
  );
}

export default Footer;
