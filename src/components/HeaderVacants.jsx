import React from "react";
import logoSumar from "../assets/add.png";
import { Link } from "react-router-dom"

const HeaderVacants = () => {
  return (
    <>
      <div className=" container w-full px-20 pt-20 mx-auto text-center bg-white shadow h-18 rounded-b-lg">
        <Link to="/vacant-form"><button className="text-white font-bold py-2 px-3 buttonAdd">
          <img className="inline-block mr-2"src={logoSumar} />
          Vacante
        </button>
        </Link>
      </div>
    </>
  );
};

export default HeaderVacants;