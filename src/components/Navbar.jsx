import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <header className="relative">
      <div
        className="flex item-center justify-center shadow h-16 navbar"
      >
        <div className="logo">
          <Link to="/home">
          <img
            src={logo}
            alt="BumeranLogo"
            className="w-full"
          />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
