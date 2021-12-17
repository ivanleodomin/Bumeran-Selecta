import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCountry } from "../features/countrySlice";

export default function CardCountry({countryName}) {
  const route = `https://www.bumeran.com.ar/selecta/wp-content/uploads/2021/06/${countryName}.png`;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRegion = (region) => {
    dispatch(addCountry(region));
    history.push("/home");
  };

  function capitalizeChar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  console.log(countryName,route)

  return (
    <div className="grid grid-cols-2 gap-2 card-country"onClick={()=>handleRegion(capitalizeChar(countryName))}>
      <img src={route} alt={`logo ${countryName}`} />
      <h1>{capitalizeChar(countryName)  }</h1>
    </div>
  );
}
