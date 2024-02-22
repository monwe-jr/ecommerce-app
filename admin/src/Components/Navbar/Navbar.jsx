import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo-1.png";
import profile from "../../assets/profile.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" className="logo" />
        <h1>Admin Panel</h1>
      </div>

      <img src={profile} alt="" className="profile-image" />
    </div>
  );
};
