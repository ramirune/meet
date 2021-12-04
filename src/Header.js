import React from "react";
import logo from "./img/meet.png";

function Header(prop) {
  return (
    <div className="logo">
      <img src={logo} alt="Meet app logo" />
    </div>
  );
}

export default Header;