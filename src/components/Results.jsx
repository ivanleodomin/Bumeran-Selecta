import React from "react";
import "../styles/results.css";

function Results({ datas, View, Card }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="corrusel-cards scrollbox">
        {datas?.map((data) => {
          return <Card data={data} />;
        })}
      </div>
      <div className="col-span-2 col">
        <View />
      </div>
    </div>
  );
}

export default Results;
