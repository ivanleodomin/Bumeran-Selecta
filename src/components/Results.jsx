import React from "react";
import "../styles/results.css";

function Results({ datas, View, Card }) {
  console.log(datas);
  return (
    <div class="grid grid-cols-3 gap-4">
      <div class="corrusel-cards scrollbox">
        {datas?.map((data) => {
          return <Card data={data} />;
        })}
      </div>
      <div class="col-span-2 col">
        <View />
      </div>
    </div>
  );
}

export default Results;
