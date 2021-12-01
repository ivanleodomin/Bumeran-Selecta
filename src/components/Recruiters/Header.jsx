import Dropdown from "../DropDown";
import React from "react";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { resetArea, addArea } from "../../features/areaSlice";
import { resetSeniority, addSeniority } from "../../features/senioritys";
import { addCountry, resetCountry } from "../../features/countrySlice";

const HeaderRecruiters = ({ areas, seniorities, countries }) => {
  const [reset, setReset] = React.useState(false);

  const dispatch = useDispatch();

  const handleTrash = () => {
    dispatch(resetCountry());
    dispatch(resetSeniority());
    dispatch(resetArea());
    setReset(true);
  };

  return (
    <div className="body-page">
      <div className="filters">
        <i className="fas fa-search"></i>
        <Dropdown
          name="Areas"
          data={areas}
          action={addArea}
          reset={{ reset, setReset }}
        />
        <Dropdown
          name="Grado"
          data={seniorities}
          action={addSeniority}
          reset={{ reset, setReset }}
        />
        <Dropdown
          name="Pais"
          data={countries}
          action={addCountry}
          reset={{ reset, setReset }}
        />
        <div>
          <button
            onClick={handleTrash}
            className="text-white font-bold py-2 px-3 buttonAdd"
          >
            <BsFillTrashFill />
          </button>
        </div>
        <div className="newRecruiter">
          <Link to="/recruiter-form">
            <button className="fas fa-plus-circle"></button>
            <span>Nuevo</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderRecruiters;
