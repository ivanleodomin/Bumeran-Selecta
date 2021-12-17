import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import logoRecruiters from "../assets/recruiternav.png";
import logoVacants from "../assets/vacantnav.png";
import { useSelector } from "react-redux";
import "../styles/navbar.css";

const Navbar = () => {
  let location = useLocation();
  const country = useSelector((state) => state.country).value;
  const route = `https://www.bumeran.com.ar/selecta/wp-content/uploads/2021/06/${lowerChar(
    country
  )}.png`;
  const checkRout = () => {
    if (location.pathname === "/") return { maxHeight: "0" };
  };

  const checkLoge = () => {
    if (location.pathname.includes("recruiters")) return logoRecruiters;
    else if (location.pathname.includes("vacants")) return logoVacants;
    else return logo;
  };

  function lowerChar(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  }

  return (
    <nav style={checkRout()}>
      <div
        style={checkRout()}
        className="flex item-center justify-center shadow h-16 navbar"
      >
        <div className="flex item-center justify-start">

        <img className="h-8 mt-5 pr-6" style={checkRout()} src={route} alt="pais" />
        </div>
        <div
          className={checkLoge() === logo ? "w-full logo" : "w-full-rec-vac"}
        >
          <Link to={"/home"}>
            <img style={checkRout()} src={checkLoge()} alt="BumeranLogo" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
