import { Link } from "react-router-dom";
import { useState } from "react";

import Burger from "assets/image/icons/burger.svg";
import Colsed from "assets/image/icons/close.svg";
import Logo from "assets/image/icons/logo.svg";

import "assets/allstyles/all.css";
import "./style.css";
import "assets/allstyles/container.css";

const Header = () => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="header-logo">
          <Link to="/">
            <img src={Logo} alt="Header-logo" />
          </Link>
        </div>
        <button onClick={handleActive} className="menu-burger">
          {active === false ? (
            <img className="menu-icon" src={Burger} alt="Burger" />
          ) : (
            <img className="menu-icon" src={Colsed} alt="Burger" />
          )}
        </button>
        <ul className={`nav ${active === true ? "actived" : ""}`}>
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
  );
};

export default Header;
