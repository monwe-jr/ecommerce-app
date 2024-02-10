import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo-1.png";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

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
          Shop {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("headsets");
          }}
        >
          Headsets {menu === "headsets" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("keyboards");
          }}
        >
          Keyboards {menu === "keyboards" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mice");
          }}
        >
          Mice {menu === "mice" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <FaShoppingCart size={35} />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
