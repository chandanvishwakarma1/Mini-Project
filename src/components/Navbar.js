import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
      <Link to="/">
          <img src={logo} alt="Logo" className="logo clickable-logo" />
        </Link>
        <h1><Link to="/" className="clickable-text">T&P Portal</Link></h1>
        <ul className="navbar-options">
          <li><Link to="/stats">Communities</Link></li>
          <li><Link to="/stats">Stats</Link></li>
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
