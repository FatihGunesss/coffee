import React from "react";
import "./style.css";
import "assets/allstyles/all.css";

const Works = () => {
  return (
    <div>
      <div className="container">
        <div className="works-box">
          <h3 className="works-title">How it works</h3>
        </div>
        <div className="works-circle__line">
          <div className="works-circle"></div>
          <div className="works-line"></div>
          <div className="works-circle"></div>
          <div className="works-line"></div>
          <div className="works-circle"></div>
        </div>
        <div className="works-numbers">
          <p className="works-number">01</p>
          <p className="works-number">02</p>
          <p className="works-number">03</p>
        </div>
        <div className="works-info">
          <div>
            <h3 className="works-name">
              Pick your <br /> coffee
            </h3>
            <p className="works-description">
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </div>
          <div>
            <h3 className="works-name">
              Choose the <br /> frequency
            </h3>
            <p className="works-description">
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </div>
          <div>
            <h3 className="works-name">
              Receive and <br /> enjoy!
            </h3>
            <p className="works-description">
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </div>
        </div>
        <div className="works-button">
          <button className="work-button">Create your plan</button>
        </div>
      </div>
    </div>
  );
};

export default Works;
