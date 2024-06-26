import React from "react";
import logo from "../assets/little-lemon-logo.png";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="flex-spread-out">
      <img src={logo} alt="logo" />
      <Nav />
    </header>
  );
}
