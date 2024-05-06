import Kalp from "assets/image/about-image/coffee-kalp.png"

import "./style.css";
import "assets/allstyles/all.css";
import "assets/allstyles/container.css"

const Quality = () => {
  return (
    <div className="container">
      <div className="quality-box">
        <div className="quality-td">
          <h3 className="quality-title">Uncompromising quality</h3>
          <p className="quality-description">
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>

        <div>
          <img className="quality-image" src={Kalp} alt="Coffee-Kalp" />
        </div>
      </div>
    </div>
  );
};

export default Quality;
