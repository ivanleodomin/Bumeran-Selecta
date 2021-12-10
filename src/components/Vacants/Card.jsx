import React from "react";
import "../../styles/card.css";
import { useHistory } from "react-router-dom";

function Card({ data }) {
  console.log(data);
  const history = useHistory()
  return  (
    <div
      className="card"
      onClick={() => history.push(`/vacants/${data.id}`)}
    >
      <div className="preview transform motion-safe:hover:scale-110">
        <div className="fullName">{`${data.job}`}</div>
        <div className="seniority">{data.state}</div>
        <div className="area">{data.Country?.name}</div>
        <div className="vacantes">vacantes disponibles: {data.vacant}</div>
      </div>
      <div className="bottom-card"></div>
    </div>

  );
}

export default Card;
