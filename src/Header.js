import React from "react";
import logo from "./img/meet.png";
import './styles/Header.scss';

function Header(prop) {
  return (
    <div className="logo">
      <img src={logo} alt="Meet app logo" />
    </div>
  );
}

export default Header;