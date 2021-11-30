import React from "react";
import "../styles/results.css";
import Card from "./Card";
import View from "./View"

function Results({ recruiters }) {
  return (
    <div class="grid grid-cols-3 gap-4">
      <div class="corrusel-cards scrollbox">
        {recruiters?.map((recruiter) => {
          return <Card recruiter={recruiter} />;
        })}
      </div>
      <div class="col-span-2 col"><View/></div>
    </div>
  );
}

export default Results;
