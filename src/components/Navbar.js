import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark py-2">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Contact App
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
