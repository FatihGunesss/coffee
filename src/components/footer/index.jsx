import Logo from "assets/image/icons/logo-footer.svg";
import { Facebook, Tweeter, Instagram } from "assets/image/icons";
import { Link } from "react-router-dom";
import "assets/allstyles/all.css";
import "./style.css";
import "assets/allstyles/container.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="footer-info">
          <div className="footer-img">
            <img className="footer-logo" src={Logo} alt="Footer logo" />
          </div>

          <div className="footer-nav">
            <ul className="footer-nav__ul">
              <li className="footer-item">
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li className="footer-item">
                <Link to="about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li className="footer-item">
                <Link to="/plan" className="footer-link">
                  Create Your Plan
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-icons">
            <a className="footer-icons__link" href="https://facebook.com ">
              <Facebook />
            </a>
            <a className="footer-icons__link" href="https://X.com">
              <Tweeter />
            </a>
            <a className="footer-icons__link" href="https://Instagram.com">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
