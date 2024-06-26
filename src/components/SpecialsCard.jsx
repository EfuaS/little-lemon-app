import React from "react";

export default function SpecialsCard(props) {
  return (
    <div className="specials-card">
      <img src="https://picsum.photos/seed/picsum/250/200" alt="food" />
      <div>
        <div className="flex-spread-out">
          <p style={{ fontWeight: 500, fontSize: "16px" }}>{props.title}</p>
          <p style={{ fontSize: "12px", color: "orange" }}>${props.price}</p>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
          dolores optio officia, fuga ab non ipsam accusamus commodi sunt
        </p>
        <p>Order a delivery</p>
      </div>
    </div>
  );
}
