import Coffe from "assets/image/expresso.png";
import "assets/allstyles/all.css";
import "./style.css";

const Card = () => {
  return (
    <>
      <div className="section-info">
        <img src={Coffe} alt="coffe" className="coffe-img" />
        <h2 className="coffee-name">Gran Espresso</h2>
        <p className="coffee-description">
          Light and flavorful blend with cocoa and black pepper for an intense
          experience
        </p>
      </div>
    </>
  );
};

export default Card;
