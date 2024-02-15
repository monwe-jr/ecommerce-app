import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Welcome to GAMEGEAR, your ultimate destination for high-quality gaming
          peripherals. Explore our extensive collection of gaming mice,
          headsets, and keyboards, meticulously curated to enhance your gaming
          experience. Whether you're a casual gamer or a competitive enthusiast,
          we offer cutting-edge technology and ergonomic designs to help you
          stay ahead of the game. Browse our selection of top brands, including
          Razer, Logitech, HyperX, and more, and find the perfect peripherals to
          elevate your gameplay.
        </p>
        <p>
          With fast shipping and exceptional customer service, GAMEGEAR is your
          go-to destination for all your gaming needs. Start shopping now and
          level up your gaming setup today!
        </p>
      </div>
    </div>
  );
};
