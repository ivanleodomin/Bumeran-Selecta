import React from "react";
import { Link } from "react-router-dom";

const VacantCard = ({ vacante }) => {
  
  return (
    <>
      <div class="p-10">
        <div class=" w-full lg:max-w-full lg:flex justify-center">
          <div
            class=" border-gray-400 lg:border-gray-400 bg-white  p-4  justify-center leading-normal shadow rounded-md"
            style={{ width: "1200px", height: "250px" }}
          >
            <div class="mb-2">
              <p class="text-sm text-gray-600 flex items-center">
                {vacante.area}
              </p>
              <div class="text-gray-900 font-bold text-xl">
                {vacante.job}
              </div>
              <p class="text-gray-700 text-base">{vacante.description}</p>
            </div>
            <div class="flex items-center justify-end">
              <Link to={`/vacant/${vacante.id}`}>
                <button className="text-white font-bold py-2 px-3 buttonBlue">
                  Ver 
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VacantCard;
