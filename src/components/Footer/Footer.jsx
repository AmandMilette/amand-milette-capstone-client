import { Link } from "react-router-dom";

import "./Footer.scss";

function Footer() {
  return (
    <>
      <footer className="footer-navbar">
        <Link to="/">
          <h2 className="footer-navbar__title">Contact</h2>
        </Link>

        <section className="footer-navbar__social">
          <img
            className="footer-navbar__social--facebook"
            src="/src/assets/logos/Facebook.svg"
            alt="Facebook logo"
          />
          <img
            className="footer-navbar__social--twitter"
            src="/src/assets/logos/X_twitter.svg"
            alt="Twitter logo"
          />
          <img
            className="footer-navbar__social--instagram"
            src="/src/assets/logos/Instagram.svg"
            alt="Instagram logo"
          />
        </section>
        <section className="footer-navbar__copyright">
          <p>© 2024 Snaps</p>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Cookies</p>
        </section>
      </footer>
    </>
  );
}

export default Footer;
