import React from "react";
import "./login.css";

const Loginpage = () => {
  return (
    <div className="login-container">

      
      <div className="login-left">
        <div className="logo">
          <div className="logo-box"></div>
          <span>TheCubeFactory</span>
        </div>

        <h2>Welcome back</h2>
        <p className="subtitle">Please enter your details</p>

        <form>
          <label>Email address</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <div className="options">
            <label className="remember">
              <input type="checkbox" /> Remember for 30 days
            </label>
            <a href="#">Forgot password</a>
          </div>

          <button className="sign-btn">Sign in</button>

          <button className="google-btn">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
            />
            Sign in with Google
          </button>
        </form>

        <p className="signup">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>

      
      <div className="login-right">
        <img
          className="illustration"
          src="/mnt/data/WhatsApp Image 2025-11-21 at 3.39.12 PM.jpeg"
          alt="illustration"
        />
      </div>
    </div>
  );
};

export default Loginpage;
