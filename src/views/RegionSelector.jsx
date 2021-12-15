import React from "react";
import "../styles/region.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCountry } from "../features/countrySlice";

export default function RegionSelector() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleRegion = (region) => {
    dispatch(addCountry(region));
    history.push("/home");
  };

  return (
    <div>
      <h1 className="text-center title-region">Elija una region!</h1>
      <div className="grid grid-rows-2 grid-flow-col gap-4 pl-16 pr-16">
        <button
          className="country-button"
          onClick={() => handleRegion("Argentina")}
        >
          <img
            src="https://www.bumeran.com.ar/selecta/wp-content/uploads/2021/06/argentina.png"
            alt="logo"
          />
        </button>
        <button
          className="country-button"
          onClick={() => handleRegion("Chile")}
        >
          <img
            src="https://www.bumeran.com.ar/selecta/wp-content/uploads/2021/06/chile.png"
            alt="logo"
          />
        </button>
        <button className="country-button" onClick={() => handleRegion("Peru")}>
          <img
            src="https://www.bumeran.com.ar/selecta/wp-content/uploads/2021/06/peru.png"
            alt="logo"
          />
        </button>
        <button
          className="country-button"
          onClick={() => handleRegion("Colombia")}
        >
          <img
            src="https://www.bumeran.com.ar/selecta/wp-content/uploads/2021/06/colombia.png"
            alt="logo"
          />
        </button>
        <button
          className="country-button"
          onClick={() => handleRegion("Ecuador")}
        >
          <img
            src="https://www.bumeran.com.ar/selecta/wp-content/uploads/2021/06/ecuador.png"
            alt="logo"
          />
        </button>
        <button
          className="country-button"
          onClick={() => handleRegion("Panama")}
        >
          <img
            src="https://www.bumeran.com.ar/selecta/wp-content/uploads/2021/06/panama.png"
            alt="logo"
          />
        </button>
        <button
          className="country-button"
          onClick={() => handleRegion("Mexico")}
        >
          <img
            src="https://www.bumeran.com.ar/selecta/wp-content/uploads/2021/06/mexico.png"
            alt="logo"
          />
        </button>
        <button
          className="country-button"
          onClick={() => handleRegion("Uruguay")}
        >
          <img
            src="https://www.bumeran.com.ar/selecta/wp-content/uploads/2021/06/uruguay.png"
            alt="logo"
          />
        </button>
      </div>
    </div>
  );
}
