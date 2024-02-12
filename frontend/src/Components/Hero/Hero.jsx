import React from "react";
import "./Hero.css";
import { FaArrowRight } from "react-icons/fa";
import hand_icon from "../Assets/hand-icon.png";
import hero_image from "../Assets/new-arrival.png";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>products</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-button">
          <div>Latest Products</div>
          <FaArrowRight />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};
