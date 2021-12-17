import React from "react";
import RankingRecruiter from "./RankingRecruiter";
import TimeCloseRecruiters from "./TimeCloseRecruiters";
import StateVacants from "./StateVacants";
import TimeRecruiter from "./TimeRecruiter";

const ChartsLayout = () => {
  return (
    <div>
      <div>
        <div className="p-8">
          <h1 className="text-center text-gray-700 mb-1 p-5 text-2xl font-semibold underline">
            Nuestros mejores reclutadores
          </h1>
          <div >

          <RankingRecruiter />
          </div>
        </div>
      </div>
      <div className="m-10 p-8">
        <h1 className="text-xl  text-gray-700 mb-1 p-5 text-2xl font-semibold underline font text-center">
          Numero de vacantes segun su estado.
        </h1>
        <StateVacants />
      </div>
      <div className="m-10 p-8">
        <TimeCloseRecruiters />
      </div>
      <div>
        <TimeRecruiter />
      </div>
    </div>
  );
};

export default ChartsLayout;
