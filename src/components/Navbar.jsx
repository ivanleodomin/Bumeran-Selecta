import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  let location = useLocation();


  const checkRout = () => {
    if(location.pathname === "/") return { maxHeight: "0"}
  }


  return (
    <nav style={checkRout()}>
      <div style={checkRout()} className="flex item-center justify-center shadow h-16 navbar">
        <div style={checkRout()} className="logo">
          <Link to={location.pathname !== "/" ? "/home" : "/"}>
            <img style={checkRout()} src={logo} alt="BumeranLogo" className="w-full" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
