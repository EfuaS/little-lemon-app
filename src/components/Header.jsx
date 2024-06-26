import React from "react";
import logo from "../assets/little-lemon-logo.png";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="flex-spread-out App-header">
      <img src={logo} alt="logo" className="App-logo" />
      <Nav />
    </header>
  );
}
