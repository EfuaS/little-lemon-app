import React from "react";
import SpecialsCard from "./SpecialsCard";

export default function HighlightsSction() {
  return (
    <section className="">
      <div className="    flex-spread-out">
        <h2>Specials</h2>
        <button>Online Menu</button>
      </div>
      <div
        style={{ flexWrap: "wrap", gap: "10px" }}
        className="flex-spread-out"
      >
        <SpecialsCard title="Greek Salad" price="500.00" />
        <SpecialsCard title="Steak" price="800.00" />
        <SpecialsCard title="Pasta" price="255.00" />
      </div>
    </section>
  );
}
