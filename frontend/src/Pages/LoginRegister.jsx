import React from "react";
import "./CSS/LoginRegister.css";

export const LoginRegister = () => {
  return (
    <div className="login-register">
      <div className="login-register-container">
        <h1>Sign Up</h1>
        <div className="login-register-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Register</button>
        <p className="login-register-login">
          Already have an account? <span>Login here</span>
        </p>
      </div>
    </div>
  );
};
