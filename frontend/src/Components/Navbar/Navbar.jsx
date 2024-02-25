import React, { useContext, useRef } from "react";
import "./Navbar.css";
import logo from "../Assets/logo-1.png";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { FaArrowCircleDown } from "react-icons/fa";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const toggleDropDown = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.currentTarget.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <button
        className="nav-logo"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <img src={logo} alt="" className="logo" />
        <p>GAMEGEAR</p>
      </button>
      <FaArrowCircleDown
        className="nav-dropdown"
        size={40}
        onClick={toggleDropDown}
      />
      <ul ref={menuRef} className="nav-menu">
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
        {localStorage.getItem("aut-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("aut-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        <Link to="/cart" className="custom-link">
          <FaShoppingCart size={35} />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
