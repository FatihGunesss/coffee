import { Card } from "components";
import React from "react";
import "./style.css"
import "assets/allstyles/all.css"

const OurCollection = () => {
  return (
    <div>
      <div className="hero-collection container">
        <div className="hero-text__wrap">
          <p className="hero-our">our collection</p>
        </div>
        <div className="cards-wraprs">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default OurCollection;
