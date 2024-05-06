import Coffe from "assets/image/home-image/expresso.png";
import "assets/allstyles/all.css";
import "./style.css";
import "assets/allstyles/container.css";

const Card = () => {
  return (
    <>
      <div className="section-info">
        <div className="coffee-image">
          <img src={Coffe} alt="coffe" className="coffe-img" />
        </div>
        <div className="section-td">
          <h2 className="coffee-name">Gran Espresso</h2>
          <p className="coffee-description">
            Light and flavorful blend with cocoa and black pepper for an intense
            experience
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
