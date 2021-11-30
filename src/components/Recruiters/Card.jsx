import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";

function Card({ recruiter }) {
  const history = useHistory();
  const [seniority, setSeniority] = React.useState("");
  const [area, setArea] = React.useState("");

  React.useEffect(() => {
    axios
      .get(`/api/seniority/${recruiter.SeniorityOp1Id}`)
      .then((res) => res.data)
      .then((data) => setSeniority(data.name));

    axios
      .get(`/api/area/${recruiter.AreaOp1Id}`)
      .then((res) => res.data)
      .then((data) => setArea(data.name));
  }, []);

  return (
    <div
      className="card"
      onClick={() => history.push(`/recruiters/${recruiter.id}`)}
    >
      <div className="preview transform motion-safe:hover:scale-110">
        <div className="fullName">{`${recruiter.firstName} ${recruiter.lastName}`}</div>
        <div className="seniority">{seniority}</div>
        <div className="area">{area}</div>
        <div className="ranking">✩✩✩✩✩</div>
      </div>
      <div className="bottom-card"></div>
    </div>
  );
}

export default Card;
