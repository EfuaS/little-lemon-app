import React from "react";

export default function TestimonialsCard({ client }) {
  return (
    <div className="testimonialsCardStyle">
      <p>Rating</p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          justifyContent: "center",
        }}
      >
        <img
          src="https://picsum.photos/id/128/200/300"
          alt="avatar"
          className="avatarStyle"
        />
        <p>Name</p>
      </div>
      <p>Review:</p>
    </div>
  );
}
