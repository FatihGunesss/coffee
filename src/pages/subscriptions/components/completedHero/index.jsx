import "./style.css";
import "assets/allstyles/all.css";

const Subscriptions = () => {
  return (
    <div className="container">
      <div className="completed-hero">
        <h1 className="completed-hero__title">Create a plan</h1>
        <p className="completed-hero__decrip">
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </div>

      <div className="completed-hero__box">
      <div className="completed-circle__line">
          <div className="completed-circle"></div>
          <div className="completed-line"></div>
          <div className="completed-circle"></div>
          <div className="completed-line"></div>
          <div className="completed-circle"></div>
        </div>

        <div className="completed-hero__info">
          <div>
            <p className="completed-number">01</p>
            <h3 className="completed-hero__name">
              Pick your <br /> coffee
            </h3>
            <p className="completed-hero__descrip">
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </div>

          <div>
            <p className="completed-number">02</p>
            <h3 className="completed-hero__name">
              Choose the <br /> frequency
            </h3>
            <p className="completed-hero__descrip">
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </div>

          <div>
            <p className="completed-number">03</p>
            <h3 className="completed-hero__name">
              Receive and <br /> enjoy!
            </h3>
            <p className="completed-hero__descrip">
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Subscriptions;
