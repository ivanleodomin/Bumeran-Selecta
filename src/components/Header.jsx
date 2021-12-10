import Dropdown from "./DropDown";
import React from "react";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

const HeaderRecruiters = ({ filters, resets, adds, routeButton }) => {
  const [reset, setReset] = React.useState(false);
  const dispatch = useDispatch();
  const handleTrash = () => {
    resets.map((reset) => dispatch(reset()));
    setReset(true);
  };

  return (
    <div className="body-page">
      <div className="filters">
        <i className="fas fa-search"></i>
        {filters.map((filter, i) => {
<<<<<<< HEAD
          return (
            <Dropdown
              key={i}
              name={filter.name}
              data={filter.data}
              action={adds[i]}
              reset={{ reset, setReset }}
            />
          );
=======
         return  <Dropdown
            name={filter.name}
            data={filter.data}
            action={adds[i]}
            reset={{ reset, setReset }}
          />;
>>>>>>> 60428b4f45db19085e02636d407c62a06e526148
        })}
        <div>
          <button
            onClick={handleTrash}
            className="text-white font-bold py-2 px-3 buttonAdd"
          >
            <BsFillTrashFill />
          </button>
        </div>
        <div className="newRecruiter">
          <Link to={routeButton}>
            <button className="fas fa-plus-circle"></button>
            <span>Nuevo</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderRecruiters;
