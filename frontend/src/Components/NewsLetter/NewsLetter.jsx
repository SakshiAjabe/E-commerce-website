import React, { useState } from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true); // Show the success message
      setEmail(""); // Clear the input field
    } else {
      alert("Please enter a valid email address."); // Show alert if email is empty
    }
  };

  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input
          type="email"
          placeholder="Your Email Id"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state on input change
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>

      {/* Show this message if the user has subscribed */}
      {subscribed && (
        <p className="subscribe-message">Thank you for subscribing! You will receive the latest offers soon.</p>
      )}
    </div>
  );
};

export default NewsLetter;
