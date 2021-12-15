import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  let location = useLocation();

  return (
    <header className="relative">
      <div className="flex item-center justify-center shadow h-16 navbar">
        <div className="logo">
          <Link to={location.pathname !== "/" && "/home"}>
            <img src={logo} alt="BumeranLogo" className="w-full" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
