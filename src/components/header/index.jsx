import Logo from "assets/image/icons/logo.svg";
import"assets/allstyles/all.css"
import "./style.css";
import "assets/allstyles/container.css"
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="header-logo">
            <img src={Logo} alt="Header-logo" />
          </div>

          <div className="header-nav">
            <ul className="nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/plan" className="nav-link">
                  Create Your Plan
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
