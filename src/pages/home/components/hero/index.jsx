import "./index";
import "assets/allstyles/container.css";
import "assets/allstyles/all.css";
import "./style.css";
import { Button } from "components";

const About = () => {
  return (
    <div className="container">
      <div className="hero-info">
        <h1 className="hero-title">Great coffee made simple.</h1>

        <p className="hero-description">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <Button className="hero-button" title={"Create your plan"} style={{ marginTop: "55px" }} />
      </div>
    </div>
  );
};

export default About;
