import React from "react";

export default function TestimonialsCard({ rating, name }) {
  return (
    <div className="testimonialsCardStyle">
      <p>Rating: {rating}</p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          justifyContent: "center",
        }}
      >
        <img
          src={`https://picsum.photos/id/${rating}/200/300`}
          alt="avatar"
          className="avatarStyle"
        />
        <p>{name}</p>
      </div>
      <p>Review: " Best food on the planet"</p>
    </div>
  );
}
