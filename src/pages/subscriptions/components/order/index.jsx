import "./style.css";
import "assets/allstyles/all.css";
import "assets/allstyles/container.css";
import Strelka from "assets/image/icons/strelka.svg";
import { Button } from "components";
import { useState } from "react";

const Order = () => {
  const [collapsed, setCollapsed] = useState({ collapsed: true, index: null });
  const [actived, setActived] = useState(1);
  const [wrappActived, setWrappActived] = useState(1);

  const rightData = [
    {
      id: 1,
      title: "How do you drink your coffee?",
      description: [
        {
          id: 1,
          title: "Capsule",
          desc: "Compatible with Nespresso systems and similar brewers",
        },
        {
          id: 2,
          title: "Filter",
          desc: "For pour over or drip methods like Aeropress, Chemex, and V60",
        },
        {
          id: 3,
          title: "Espresso",
          desc: "Dense and finely ground beans for an intense, flavorful experience",
        },
      ],
    },
    {
      id: 2,
      title: "What type of coffee?",
      description: [
        {
          id: 4,
          title: "Single Origin",
          desc: "Distinct, high quality coffee from a specific family-owned farm",
        },
        {
          id: 5,
          title: "Decaf",
          desc: "Just like regular coffee, except the caffeine has been removed",
        },
        {
          id: 6,
          title: "Blended",
          desc: "Combination of two or three dark roasted beans of organic coffees",
        },
      ],
    },
    {
      id: 3,
      title: "How much would you like?",
      description: [
        {
          id: 7,
          title: "250g",
          desc: "Perfect for the solo drinker. Yields about 12 delicious cups.",
        },
        {
          id: 8,
          title: "500g",
          desc: "Perfect option for a couple. Yields about 40 delectable cups.",
        },
        {
          id: 9,
          title: "1000g",
          desc: "Perfect for offices and events. Yields about 90 delightful cups.",
        },
      ],
    },
    {
      id: 4,
      title: "Want us to grind them?",
      description: [
        {
          id: 10,
          title: "Wholebean",
          desc: "Best choice if you cherish the full sensory experience",
        },
        {
          id: 11,
          title: "Filter",
          desc: "For drip or pour-over coffee methods such as V60 or Aeropress",
        },
        {
          id: 12,
          title: "Cafetiére",
          desc: " Course ground beans specially suited for french press coffee",
        },
      ],
    },
    {
      id: 5,
      title: "How often should we deliver?",
      description: [
        {
          id: 13,
          title: "Every week",
          desc: "$7.20 per shipment. Includes free first-class shipping.",
        },
        {
          id: 14,
          title: "Every 2 weeks",
          desc: "$9.60 per shipment. Includes free priority shipping.",
        },
        {
          id: 15,
          title: "Every month",
          desc: "$12.00 per shipment. Includes free priority shipping.",
        },
      ],
    },
  ];

  const leftData = [
    {
      id: 1,
      title: "Preferences",
    },
    {
      id: 2,
      title: "Bean Type",
    },
    {
      id: 3,
      title: "Quantity",
    },
    {
      id: 4,
      title: "Grind Option",
    },
    {
      id: 5,
      title: "Deliveries",
    },
  ];

  return (
    <div className="container">
      <div className="order">
        <div className="order-left">
          {leftData.map((item, index) => (
            <div
              onClick={() => setActived(item.id)}
              className={`order-menu ${
                actived === item.id ? "selected-menu" : ""
              }`}
              key={item.id}
            >
              <p className="menu-number">{"0" + (index + 1)}</p>
              <h3 className="menu-title">{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="order-right">
          {rightData.map((item, idx) => (
            <div className="filter" key={item.id}>
              <div
                className={
                  collapsed.index === idx && collapsed.collapsed === true
                    ? "filter-title__icon collapsed-title"
                    : "filter-title__icon"
                }
                onClick={() =>
                  setCollapsed(
                    collapsed.index === idx
                      ? { collapsed: !collapsed.collapsed, index: idx }
                      : { collapsed: collapsed.collapsed, index: idx }
                  )
                }
              >
                <h3 className="filter-title">{item.title}</h3>
                <img
                  src={Strelka}
                  alt="Strelka"
                  className={
                    collapsed.index === idx && collapsed.collapsed === true
                      ? "arrow collapsed-arrow"
                      : "arrow"
                  }
                />
              </div>


              <div
                className={
                  collapsed.index === idx && collapsed.collapsed === true
                    ? "filter-wrapps collapsed"
                    : "filter-wrapps"
                }
              >
                {item?.description.map((desc, descIdx) => (
                  <div
                    onClick={() => setWrappActived(desc.id)}
                    className={`filter-wrapp ${wrappActived === desc.id ? "filter-selected" : ""}`}
                    key={descIdx}
                  >
                    <div className="filter-wrapp-td">
                      <h5 className="filter-wrapps__title">{desc.title}</h5>
                      <p className="filter-wrapps__descrip">{desc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

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
            <Button title={"Create my plan!"} style={{ marginTop: "40px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
