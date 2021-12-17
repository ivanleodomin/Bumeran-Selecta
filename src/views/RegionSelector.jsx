import React from "react";
import "../styles/region.css";
import CardCountry from "../components/CardCountry";
import LogoSelector from "../assets/LogoSelector.png";

export default function RegionSelector() {
  const counties = [
    "argentina",
    "chile",
    "peru",
    "colombia",
    "ecuador",
    "panama",
    "mexico",
    "uruguay",
  ];

  
  return (
    <div className="grid grid-cols-2 gap-2 loge-home">
      <div className="logoselector">
        <img src={LogoSelector} alt="" />
      </div>
      <div>
      {counties.map((country) => {
        return <CardCountry countryName={country} />;
      })}
      </div>
    </div>
  );
}
