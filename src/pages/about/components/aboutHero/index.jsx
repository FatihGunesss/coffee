import "./style.css";
import "assets/allstyles/all.css";
import "assets/allstyles/container.css";

const AboutHero = () => {
  return (
    <div className="container">
      <div className="about-hero__info">
        <div className="about-hero__td">
          <h1 className="about-title">About Us</h1>
          <p className="about-description">
            Coffeeroasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup - from bean to brew - in
            every shipment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
