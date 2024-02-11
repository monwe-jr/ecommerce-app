import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo-1.png";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" className="logo" />
        <p>GAMEGEAR</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("headsets");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/headsets">
            Headsets
          </Link>
          {menu === "headsets" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("keyboards");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/keyboards">
            Keyboards
          </Link>
          {menu === "keyboards" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mice");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mice">
            Mice
          </Link>
          {menu === "mice" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <FaShoppingCart size={35} />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
