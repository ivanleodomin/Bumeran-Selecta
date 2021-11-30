import React from "react";
import Dropdown from "../DropDown";
import { Link } from "react-router-dom";
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
        <div className="newRecruiter">
          <i className="fas fa-plus-circle"></i>
          <span>Nuevo</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderVacants;
