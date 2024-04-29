import Logo from "assets/image/icons/logo-footer.svg";
import Facebook from "assets/image/icons/feacebook.svg"
import Tweeter from "assets/image/icons/tweeter.svg"
import Instagram from "assets/image/icons/instagram.svg"
import "assets/allstyles/all.css"
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
              <img className="footer-icon" src={Facebook} alt="Facebook icon" />
            </a>
            <a className="footer-icons__link" href="#">
              <img className="footer-icon" src={Tweeter} alt="Tweeter icon" />
            </a>
            <a footer-icons__link href="#">
              <img className="footer-icon" src={Instagram} alt="Instagram icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer