import React from "react";
import "./Hero.css";
import { FaArrowRight } from "react-icons/fa";
import level_icon from "../Assets/level-up.png";
import hero_image from "../Assets/new-arrival.png";

export const Hero = ({ newArrivalsRef }) => {
  const scrollToNewArrivals = () => {
    newArrivalsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW GEAR</h2>
        <div>
          <p>Game</p>
          <div className="hero-icon">
            <p>With </p>
            <img src={level_icon} alt="" />
          </div>
          <p>The Best!</p>
        </div>
        <button className="hero-latest-button" onClick={scrollToNewArrivals}>
          <div>Latest Products</div>
          <FaArrowRight />
        </button>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};
