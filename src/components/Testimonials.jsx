import React from "react";
import TestimonialsCard from "./TestimonialsCard";

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
      {[1, 2, 3, 4].map((client) => (
        <TestimonialsCard client={client} />
      ))}
    </div>
  );
}
