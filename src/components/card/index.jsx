import React from "react";
import "assets/allstyles/all.css";
import "./style.css";

import "assets/image/expresso.png";

const Card = () => {
  return (
    <>
      <div className="container">
        <div className="section-info">
          <h2 className="coffee-name">Gran Espresso</h2>
          <p className="coffee-description">
            Light and flavorful blend with cocoa 
            and black pepper for an intense
            experience
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
