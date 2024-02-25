import React from "react";
import "./Footer.css";
import logo from "../Assets/logo-1.png";
import github_icon from "../Assets/github-icon.png";
import linkedin_icon from "../Assets/linkedin-icon.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>GAMEGEAR</p>
      </div>
      <div className="footer-contact-icons">
        <div className="footer-icons-container">
          <a href="https://github.com/monwe-jr/ecommerce-app">
            <img src={github_icon} alt="GitHub" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href="https://www.linkedin.com/in/francis-monwe-674501198/">
            <img src={linkedin_icon} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};
