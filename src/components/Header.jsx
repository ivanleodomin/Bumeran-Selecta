import Dropdown from "./DropDown";
import React from "react";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";

const HeaderRecruiters = ({ filters, resets, adds, routeButton }) => {
  const [reset, setReset] = React.useState(false);
  const dispatch = useDispatch();
  const handleTrash = () => {
    resets.forEach((reset) => {
      dispatch(reset());
    });
    setReset(true);
  };

  return (
    <div className="body-page">
      <div className="filters">
        <i className="fas fa-search"></i>
        {filters.map((filter, i) => {
          return (
            <Dropdown
              key={i}
              name={filter.name}
              data={filter.data}
              action={adds[i]}
              reset={{ reset, setReset }}
            />
          );
        })}
        <button className="remove-filters" onClick={handleTrash}>
          <BsFillTrashFill />
        </button>
        <div className="newRecruiter">
            <Link to={routeButton}>
          <button className="newRecruiterButton">
              <AiOutlinePlusCircle style={{ color: "white", position: "relative", left: "0"}} />
              <span>Nuevo</span>
          </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderRecruiters;
