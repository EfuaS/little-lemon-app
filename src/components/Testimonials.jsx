import React from "react";
import TestimonialsCard from "./TestimonialsCard";

const names = ["John", "Tobias", "April", "Joyce"];
export default function Testimonials() {
  return (
    <div
      style={{
        gap: "10px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {[1, 2, 3, 4].map((client, index) => (
        <TestimonialsCard rating={client} name={names[index]} />
      ))}
    </div>
  );
}
