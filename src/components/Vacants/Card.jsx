import React from "react";
import "../../styles/card.css";
import { useHistory } from "react-router-dom";

function Card({ vacants }) {
  const history = useHistory()
  return (
    <div
      className="card"
      onClick={() => history.push(`/vacants/${vacants.id}`)}
    >
      <div className="preview transform motion-safe:hover:scale-110">
        <div className="fullName">{`${vacants.job}`}</div>
        <div className="seniority">{vacants.state}</div>
        <div className="area">{vacants.Country?.name}</div>
        <div className="vacantes">vacantes disponibles: {vacants.vacant}</div>
      </div>
      <div className="bottom-card"></div>
    </div>

  );
}

export default Card;
