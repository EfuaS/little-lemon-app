import React from "react";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>Description of little lemon restaurant here.</p>
        <button type="button">Reserve a table</button>
      </div>
      <div>
        <img
          style={{ borderRadius: "16px" }}
          src="https://picsum.photos/seed/picsum/200/300"
          alt="lemon-image"
        />
      </div>
    </section>
  );
}
