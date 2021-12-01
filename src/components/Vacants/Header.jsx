import React from "react";
import Dropdown from "../DropDown";
import { Link } from "react-router-dom";
import logoSumar from "../../assets/add.png"
const HeaderVacants = ({ areas, seniorities, pais }) => {
  /*  const [reset, setReset] = React.useState(false) */

  const removeFilters = () => {
    console.log("delet");
  };

  return (
    <div className="body-page">
      <div className="filters">
        <i className="fas fa-search"></i>
        <Dropdown name="Areas" data={areas} />
        <Dropdown name="Grado" data={seniorities} />
        <Dropdown name="Pais" data={pais} />
        <i class="far fa-trash-alt trash" OnClick={removeFilters}></i>
        <Link to="/vacant-form"><button className="text-white font-bold py-2 px-3 buttonAdd">
          <img className="h-6 w-6"src={logoSumar} />
          Vacante
        </button>
        </Link>
      </div>
    </div>
  );
};

export default HeaderVacants;
