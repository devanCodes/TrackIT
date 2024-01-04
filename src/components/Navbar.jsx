import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h3>TrackIT!</h3>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tracking">Tracking</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </nav>
  );
}

export default Navbar;
