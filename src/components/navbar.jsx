import React from "react";
import Logo from "../Assets/unnamed1.png";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <FaCartShopping className="cart" />
        </Link>
      </div>
    </header>
  );
};
