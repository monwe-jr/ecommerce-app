import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo-1.png";
import cart_icon from "../Assets/cart-icon.png";

export const Navbar = () => {
  return (
    <div className="navBar">
      <div className="navLogo">
        <img src={logo} alt=""></img>
        <p>GameGear</p>
      </div>
    </div>
  );
};
