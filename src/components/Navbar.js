import React from "react";
import airbnblogo from "../assets/abnb.png"

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <img src={airbnblogo} alt="airbnb-logo"></img>
      </nav>
    </div>
  );
}

export default Navbar;
