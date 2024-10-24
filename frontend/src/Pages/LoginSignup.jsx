import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  // State to track if the user is signed in
  const [isSignedIn, setIsSignedIn] = useState(false);

  // State to track the form type (sign up or login)
  const [isLogin, setIsLogin] = useState(false);

  // State to track form input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle sign-in action
  const handleSignIn = () => {
    if (formData.email && formData.password) {
      setIsSignedIn(true); // Simulate successful sign-in
    } else {
      alert("Please fill in all fields"); // Alert if any field is missing
    }
  };

  // Handle sign-up action
  const handleSignUp = () => {
    if (formData.name && formData.email && formData.password) {
      setIsSignedIn(true); // Simulate successful sign-up
    } else {
      alert("Please fill in all fields"); // Alert if any field is missing
    }
  };

  // Toggle between login and signup forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ name: "", email: "", password: "" }); // Clear form fields when toggling
    setIsSignedIn(false); // Reset signed-in state
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>

        {!isSignedIn && ( // Render form only if not signed in
          <>
            <div className="loginsignup-fields">
              {!isLogin && (
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              )}
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <button onClick={isLogin ? handleSignIn : handleSignUp}>
              {isLogin ? "Login" : "Continue"}
            </button>
            <p className="loginsignup-toggle">
              {isLogin ? (
                <>Don't have an account? <span onClick={toggleForm}>Sign up here</span></>
              ) : (
                <>Already have an account? <span className="red-text" onClick={toggleForm}>Login here</span></>
              )}
            </p>
            <div className="loginsignup-agree">
              <input type="checkbox" name="" id="" />
              <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
          </>
        )}

        {isSignedIn && ( // Render success message if signed in
          <p className="success-message">
            Welcome, {formData.name || formData.email}! You have successfully logged in.
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
