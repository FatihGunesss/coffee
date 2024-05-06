import React from "react";
import "./index";
import "assets/allstyles/container.css"
import "assets/allstyles/all.css";
import "./style.css";
import { Button } from "components";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="hero-info">
          <div>
            <h1 className="hero-title">Great coffee made simple.</h1>

            <p className="hero-description">
              Start your mornings with the world’s best coffees. Try our
              expertly curated artisan coffees from our best roasters delivered
              directly to your door, at your schedule.
            </p>
1
            <Button title={"Create your plan"} style={{marginTop: '100px'}}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
