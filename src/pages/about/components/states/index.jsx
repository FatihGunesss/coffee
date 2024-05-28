import "./style.css";
import "assets/allstyles/all.css";
import "assets/allstyles/container.css";

import United from "assets/image/icons/united.svg";
import Canada from "assets/image/icons/canada.svg";
import Australia from "assets/image/icons/australia.svg";

const States = () => {
  return (
    <div className="container">
      <div className="container2">
        <h3 className="states-title">Our headquarters</h3>
        <div className="states-info">
          <div className="states-tdi">
            <img className="states-image" src={United} alt="United" />
            <h3 className="states-name">United Kingdom</h3>
            <p className="states-description">
              68 Asfordby Rd Alcaston SY6 1YA +44 1241 918425
            </p>
          </div>

          <div className="states-tdi">
            <img className="states-image" src={Canada} alt="Canada" />
            <h3 className="states-name">Canada</h3>
            <p className="states-description">
              1528 Eglinton Avenue Toronto Ontario M4P 1A6 +1 416 485 2997
            </p>
          </div>

          <div className="states-tdi">
            <img className="states-image" src={Australia} alt="Australia" />
            <h3 className="states-name">Australia</h3>
            <p className="states-description">
              36 Swanston Street Kewell Victoria +61 4 9928 3629
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;
