import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../Assets/logo-1.png";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

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
          <Link to="/" className="custom-link">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("headsets");
          }}
        >
          <Link to="/headsets" className="custom-link">
            Headsets
          </Link>
          {menu === "headsets" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("keyboards");
          }}
        >
          <Link to="/keyboards" className="custom-link">
            Keyboards
          </Link>
          {menu === "keyboards" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mice");
          }}
        >
          <Link to="/mice" className="custom-link">
            Mice
          </Link>
          {menu === "mice" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart" className="custom-link">
          <FaShoppingCart size={35} />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
