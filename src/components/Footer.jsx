import React from "react";
import logo from "../assets/little-lemon-logo.png";
export default function Footer() {
  return (
    <div className="flex-spread-out">
      <img src={logo} alt="logo" />
      <p>Copyright @2024</p>
    </div>
  );
}
