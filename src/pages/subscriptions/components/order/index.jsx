import "./style.css";
import "assets/allstyles/all.css";
import Strelka from "assets/image/icons/strelka.svg";
import { Button } from "components";

const Order = () => {
  return (
    <div className="container">
      <div className="order">
        <div className="order-left">
          <div className="order-menu selectet-menu">
            <p className="menu-number">01</p>
            <h3 className="menu-title">Preferences</h3>
          </div>
          <div className="order-menu">
            <p className="menu-number">02</p>
            <h3 className="menu-title">Bean Type</h3>
          </div>
          <div className="order-menu">
            <p className="menu-number">03</p>
            <h3 className="menu-title">Quantity</h3>
          </div>
          <div className="order-menu">
            <p className="menu-number">04</p>
            <h3 className="menu-title">Grind Option</h3>
          </div>
          <div className="order-menu">
            <p className="menu-number">05</p>
            <h3 className="menu-title">Deliveries</h3>
          </div>
        </div>

        <div className="order-right">
          <div className="filter">
            <div className="filter-title__icon">
              <h3 className="filter-title">How do you drink your coffee?</h3>
              <img src={Strelka} alt="Strelka" />
            </div>

            <div className="filter-wrapps">
              <div className="filter-wrapp">
                <div className="filter-wrapp-td">
                  <h5 className="filter-wrapps__title">Capsule</h5>
                  <p className="filter-wrapps__descrip">
                    Compatible with Nespresso systems and similar brewers
                  </p>
                </div>
              </div>
              <div className="filter-wrapp">
                <div className="filter-wrapp-td">
                  <h5 className="filter-wrapps__title">Filter</h5>
                  <p className="filter-wrapps__descrip">
                    For pour over or drip methods like Aeropress, Chemex, and
                    V60
                  </p>
                </div>
              </div>
              <div className="filter-wrapp">
                <div className="filter-wrapp-td">
                  <h5 className="filter-wrapps__title">Espresso</h5>
                  <p className="filter-wrapps__descrip">
                    Dense and finely ground beans for an intense, flavorful
                    experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="filter">
            <div className="filter-title__icon">
              <h3 className="filter-title">What type of coffee?</h3>
              <img src={Strelka} alt="Strelka" />
            </div>

            <div className="filter-wrapps">
              <div className="filter-wrapp">
                <div className="filter-wrapp-td">
                  <h5 className="filter-wrapps__title">Single Origin</h5>
                  <p className="filter-wrapps__descrip">
                    Distinct, high quality coffee from a specific family-owned
                    farm
                  </p>
                </div>
              </div>
              <div className="filter-wrapp">
                <div className="filter-wrapp-td">
                  <h5 className="filter-wrapps__title">Decaf</h5>
                  <p className="filter-wrapps__descrip">
                    Just like regular coffee, except the caffeine has been
                    removed
                  </p>
                </div>
              </div>
              <div className="filter-wrapp">
                <div className="filter-wrapp-td">
                  <h5 className="filter-wrapps__title">Blended</h5>
                  <p className="filter-wrapps__descrip">
                    Combination of two or three dark roasted beans of organic
                    coffees
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="filter">
            <div className="filter-title__icon">
              <h3 className="filter-title">How much would you like?</h3>
              <img src={Strelka} alt="Strelka" />
            </div>

            <div className="filter-wrapps">
              <div className="filter-wrapp">
                <div className="filter-wrapp-td">
                  <h5 className="filter-wrapps__title">250g</h5>
                  <p className="filter-wrapps__descrip">
                    Perfect for the solo drinker. Yields about 12 delicious
                    cups.
                  </p>
                </div>
              </div>
              <div className="filter-wrapp">
                <div className="filter-wrapp-td">
                  <h5 className="filter-wrapps__title">500g</h5>
                  <p className="filter-wrapps__descrip">
                    Perfect option for a couple. Yields about 40 delectable
                    cups.
                  </p>
                </div>
              </div>
              <div className="filter-wrapp">
                <div className="filter-wrapp-td">
                  <h5 className="filter-wrapps__title">1000g</h5>
                  <p className="filter-wrapps__descrip">
                    Perfect for offices and events. Yields about 90 delightful
                    cups.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="filter">
            <div className="filter-title__icon">
              <h3 className="filter-title">Want us to grind them?</h3>
              <img src={Strelka} alt="Strelka" />
            </div>

            <div className="filter-wrapps">
              <div className="filter-wrapp">
                <div className="filter-wrapp-td">
                  <h5 className="filter-wrapps__title">Wholebean</h5>
                  <p className="filter-wrapps__descrip">
                    Best choice if you cherish the full sensory experience
                  </p>
                </div>
              </div>
              <div className="filter-wrapp">
                <div className="filter-wrapp-td">
                  <h5 className="filter-wrapps__title">Filter</h5>
                  <p className="filter-wrapps__descrip">
                    For drip or pour-over coffee methods such as V60 or
                    Aeropress
                  </p>
                </div>
              </div>
              <div className="filter-wrapp">
                <div className="filter-wrapp-td">
                  <h5 className="filter-wrapps__title">Cafetiére</h5>
                  <p className="filter-wrapps__descrip">
                    Course ground beans specially suited for french press coffee
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="filter">
            <div className="filter-title__icon">
              <h3 className="filter-title">How often should we deliver?</h3>
              <img src={Strelka} alt="Strelka" />
            </div>

            <div className="filter-wrapps">
              <div className="filter-wrapp">
                <div className="filter-wrapp-td">
                  <h5 className="filter-wrapps__title">Every week</h5>
                  <p className="filter-wrapps__descrip">
                    $7.20 per shipment. Includes free first-class shipping.
                  </p>
                </div>
              </div>
              <div className="filter-wrapp">
                <div className="filter-wrapp-td">
                  <h5 className="filter-wrapps__title">Every 2 weeks</h5>
                  <p className="filter-wrapps__descrip">
                    $9.60 per shipment. Includes free priority shipping.
                  </p>
                </div>
              </div>
              <div className="filter-wrapp">
                <div className="filter-wrapp-td">
                  <h5 className="filter-wrapps__title">Every month</h5>
                  <p className="filter-wrapps__descrip">
                    $12.00 per shipment. Includes free priority shipping.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="summary">
            <div className="summary-td">
              <p className="summary-title">Order Summary</p>
              <h3 className="summary-description">
                “I drink my coffee as <span>Filter</span>, with a{" "}
                <span>Decaf</span> type of bean. <span>250g </span>
                 ground ala <span>Cafetiére</span>, sent to me{" "}
                <span>Every Week.</span>”
              </h3>
            </div>
          </div>
          <div className="summary-button">
            <Button
              title={"Create my plan!"}
              style={{ marginTop: "40px"}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
