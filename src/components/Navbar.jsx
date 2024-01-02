import React from "react";

function Navbar() {
  return (
    <nav>
      <h3>TrackIT!</h3>
      <a href="#">Home</a>
      <a href="/tracking">Tracking</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="/login">Login</a>
      <a href="/register">Register</a>
    </nav>
  );
}

export default Navbar;
