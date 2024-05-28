import React from "react";
import "assets/allstyles/all.css";
import "assets/allstyles/container.css";
import "./style.css";
import Shape from "assets/image/icons/Shape.svg";
import Sovga from "assets/image/icons/sovga.svg";
import Dastavka from "assets/image/icons/dastavka.svg";

const ChooseUs = () => {
  return (
      <div className="container">
        <div className="choose-box">
          <div className="choose-td">
            <h3 className="choose-title">Why choose us?</h3>
            <p className="choose-description">
              A large part of our role is choosing which particular coffees will
              be featured in our range. This means working closely with the best
              coffee growers to give you a more impactful experience on every
              level.
            </p>
          </div>
        </div>
        <div className="choose-cards">
          <div className="choose-card">
            <div className="choose-image">
              <img src={Shape} alt="Shape" />
            </div>

            <div className="choose-hp">
              <h5 className="choose-card__name">Best quality</h5>
              <p className="choose-card__description">
                Discover an endless variety of the world’s best artisan coffee
                from each of our roasters.
              </p>
            </div>
          </div>

          <div className="choose-card">
            <div className="choose-image">
              <img src={Sovga} alt="Sovga" />
            </div>
            <div className="choose-hp">
              <h5 className="choose-card__name">Best quality</h5>
              <p className="choose-card__description">
                Discover an endless variety of the world’s best artisan coffee
                from each of our roasters.
              </p>
            </div>
          </div>

          <div className="choose-card">
            <div className="choose-image">
              <img src={Dastavka} alt="Dastavka" />
            </div>
            <div className="choose-hp">
              <h5 className="choose-card__name">Best quality</h5>
              <p className="choose-card__description">
                Discover an endless variety of the world’s best artisan coffee
                from each of our roasters.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ChooseUs;
