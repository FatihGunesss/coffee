import Logo from "assets/image/icons/logo.svg";
import"assets/allstyles/all.css"
import "./style.css";


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
                <a href="" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Create Your Plan
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
