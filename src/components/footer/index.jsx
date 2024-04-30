import Logo from "assets/image/icons/logo-footer.svg";
import { Facebook, Tweeter, Instagram } from "assets/image/icons";
import "assets/allstyles/all.css";
import "./style.css";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="footer">
          <div className="footer-img">
            <img className="footer-logo" src={Logo} alt="Footer logo" />
          </div>

          <div className="footer-nav">
            <ul className="footer-nav__ul">
              <li className="footer-item">
                <a href="#" className="footer-link">
                  Home
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">
                  About Us
                </a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">
                  Create Your Plan
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-icons">
            <a className="footer-icons__link" href="#">
              <Facebook />
            </a>
            <a className="footer-icons__link" href="#">
              <Tweeter />
            </a>
            <a className="footer-icons__link" href="#">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
