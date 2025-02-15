// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import logo from './logo.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <h1>T&P Portal</h1>
        <ul className="navbar-options">
          <li><a href="#communities">Communities</a></li>
          <li><a href="#stats">Stats</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="login-button">Login</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
