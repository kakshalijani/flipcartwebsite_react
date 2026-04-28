import React from "react";
import "../styles/login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        
        {/* Left Side */}
        <div className="left">
          <h2>Login</h2>
          <p>
            Get access to your Orders,<br />
            Wishlist and Recommendations
          </p>
        </div>

        {/* Right Side */}
        <div className="right">
          <input
            type="text"
            placeholder="Enter Email/Mobile number"
          />

          <p className="terms">
            By continuing, you agree to Terms of Use and Privacy Policy.
          </p>

          <button className="otp-btn">Request OTP</button>
        </div>

      </div>
    </div>
  );
}

export default Login;