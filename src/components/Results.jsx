import React from "react";
import "../styles/results.css";

function Results({ datas, View, Card }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="corrusel-cards scrollbox">
<<<<<<< HEAD
        {datas?.map((data, i) => {
          return <Card key={i} data={data} />;
=======
        {datas?.map((data) => {
          return <Card data={data} />;
>>>>>>> 60428b4f45db19085e02636d407c62a06e526148
        })}
      </div>
      <div className="col-span-2 col">
        <View />
      </div>
    </div>
  );
}

export default Results;
