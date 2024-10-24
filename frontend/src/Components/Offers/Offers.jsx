import React, { useState } from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  const [showOffers, setShowOffers] = useState(false);

  const toggleOffers = () => {
    setShowOffers(!showOffers);
  };

  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>Only On Best Seller Products</p>
        <button onClick={toggleOffers}>Check Now</button>

        {/* Show the offers when button is clicked */}
        {showOffers && (
          <div className={`offers-list ${showOffers ? "active" : ""}`}>
            <h2>Available Clothing Offers</h2>
            <ul>
              <li>Buy 2 Get 1 Free on T-Shirts</li>
              <li>Flat 30% Off on Winter Jackets</li>
              <li>Exclusive 50% Off on First Purchase</li>
              <li>Get Free Shipping on Orders Above $100</li>
              <li>Up to 40% Off on Selected Accessories</li>
            </ul>
          </div>
        )}
      </div>

      <div className="offers-right">
        <img src={exclusive_image} alt="Exclusive Offers" />
      </div>
    </div>
  );
};

export default Offers;
