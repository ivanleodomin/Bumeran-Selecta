import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import logoRecruiters from "../assets/recruiternav.png";
import logoVacants from "../assets/vacantnav.png";
import "../styles/navbar.css";

const Navbar = () => {
  let location = useLocation();

  const checkRout = () => {
    if (location.pathname === "/") return { maxHeight: "0" };
  };

  const checkLoge = () => {
    if (location.pathname.includes("recruiters")) return logoRecruiters;
    else if (location.pathname.includes("vacants")) return logoVacants;
    else return logo;
  };

  return (
    <nav style={checkRout()}>
      <div
        style={checkRout()}
        className="flex item-center justify-center shadow h-16 navbar"
      >
        <div
          className={checkLoge() === logo ? "w-full logo" : "w-full-rec-vac"}
        >
          <Link to={"/home"}>
            <img
              style={checkRout()}
              src={checkLoge()}
              alt="BumeranLogo"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
