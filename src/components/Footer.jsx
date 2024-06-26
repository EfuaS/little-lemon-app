import React from "react";
import logo from "../assets/little-lemon-logo.png";
export default function Footer() {
  return (
    <footer className="flex-spread-out">
      <img src={logo} alt="logo" className="App-logo" />
      <p>Copyright @2024</p>
    </footer>
  );
}
