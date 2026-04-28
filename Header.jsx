import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">Flipkart</div>

      <input
        type="text"
        placeholder="Search for products, brands and more"
        className="search"
      />

      <div className="menu">
        <button className="login-btn">Login</button>
        <span>Become a Seller</span>
        <span>More</span>
        <span>Cart</span>
      </div>
    </div>
  );
}

export default Header;