import React from "react";
import Card from "./Card";
import View from "./View";
import "../../styles/results.css";

const Results = ({ vacants }) => {
  return (
    <div class="grid grid-cols-3 gap-4">
      <div class="corrusel-cards">
        {vacants?.map((vacants) => {
        return <Card vacants={vacants} />
      })}
      </div>
      <div class="col-span-2 col"><View /></div>
    </div>
  );
};

export default Results;
