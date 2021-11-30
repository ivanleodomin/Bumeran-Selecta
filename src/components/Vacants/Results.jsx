import React from "react";
import Card from "../Recruiters/Card";
import View from "../View"

const ResultsVacant = ({vacants}) => {
  <div class="grid grid-cols-3 gap-4">
    <div class="corrusel-cards">
      {}
      {vacants?.map((vacants) => {
        return <Card vacants={vacants} />;
      })}
    </div>
    <div class="col-span-2 col">
      <View />
    </div>
  </div>;
};

export default ResultsVacant;
