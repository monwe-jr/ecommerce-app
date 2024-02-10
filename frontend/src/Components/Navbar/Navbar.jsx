import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo-1.png";
import { FaShoppingCart } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" className="logo" />
        <p>GAMEGEAR</p>
      </div>
      <ul className="nav-menu">
        <li>Shop</li>
        <li>Headsets</li>
        <li>Keyboard</li>
        <li>Mice</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <FaShoppingCart size={35} />
      </div>
    </div>
  );
};
