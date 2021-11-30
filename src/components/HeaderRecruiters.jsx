import logoSumar from "../assets/add.png";
import "../styles/filter.css";
import Link from "react-router-dom";
import Dropdown from "./DropDown";
import React from "react";
import { addArea } from "../features/areaSlice";
import { addSeniority } from "../features/senioritys";
import {BsFillTrashFill} from 'react-icons/bs'
import { useDispatch } from "react-redux";
import { resetArea } from "../features/areaSlice";
import { resetSeniority } from "../features/senioritys";

const HeaderRecruiters = ({ areas, seniorities, pais }) => {

  const [reset, setReset] = React.useState(false)

  const dispatch = useDispatch()

  const handleTrash = (areas) =>{
    dispatch(resetSeniority())
    dispatch(resetArea())
  } 

 

  return (
    <div className="body-page">
      <div className="filters">
        <i className="fas fa-search"></i>
        <Dropdown name="Areas" data={areas} action={addArea} reset={resetArea} />
        <Dropdown name="Grado" data={seniorities} action={addSeniority} reset={resetSeniority}/>
        <Dropdown name="Pais" data={pais}/>
        <div>
       <button
        onClick={handleTrash}
       className="text-white font-bold py-2 px-3 buttonAdd">
          <BsFillTrashFill/>

        </button>
        
        </div>
        <div className="newRecruiter">
          <button 
          className="fas fa-plus-circle"></button>
          <span>Nuevo</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderRecruiters;
