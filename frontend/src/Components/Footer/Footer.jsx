import React from "react";
import "./Footer.css";
import logo from "../Assets/logo-1.png";
import github_icon from "../Assets/github-icon.png";
import linkedin_icon from "../Assets/linkedin-icon.png";

export const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>GAMEGEAR</p>
      </div>
      <div className="footer-contact-icons">
        <div className="footer-icons-container">
          <img src={github_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={linkedin_icon} alt="" />
        </div>
      </div>
    </div>
  );
};
