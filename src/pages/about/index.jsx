import React from "react";
import "./index";
import "assets/allstyles/all.css";
import "./style.css";
import { Card } from "components";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="about-info">
          <div>
            <h1 className="about-title">Great coffee made simple.</h1>

            <p className="about-description">
              Start your mornings with the world’s best coffees. Try our
              expertly curated artisan coffees from our best roasters delivered
              directly to your door, at your schedule.
            </p>

            <button className="about-button">Create Your Plan</button>
          </div>
        </div>
        <div className="about-collection">
          <div className="about-text__wrap"><p className="about-our">our collection</p></div>
          <div className="cards-wraprs">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
