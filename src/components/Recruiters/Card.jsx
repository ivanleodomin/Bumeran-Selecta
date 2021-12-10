import axios from "axios";
import React from "react";
import "../../styles/card.css";
import { useHistory } from "react-router-dom";

function Card({ data }) {
  const history = useHistory();
  const [seniority, setSeniority] = React.useState("");
  const [area, setArea] = React.useState("");
  const [ranck, setRanck] = React.useState("");
  React.useEffect(() => {
    axios
      .get(`/api/seniority/${data.SeniorityOp1Id}`)
      .then((res) => res.data)
      .then((data) => setSeniority(data.name));

    axios
      .get(`/api/area/${data.AreaOp1Id}`)
      .then((res) => res.data)
      .then((data) => setArea(data.name));
  }, [data]);

  return (
    <div
      className="card"
      onClick={() => history.push(`/recruiters/${data.id}`)}
    >
      <div className="preview transform motion-safe:hover:scale-110">
        <div className="fullName">{`${data.firstName} ${data.lastName}`}</div>
        <div className="seniority">{seniority}</div>
        <div className="area">{area}</div>
      </div>
      <div className="bottom-card"></div>
    </div>
  );
}

export default Card;
