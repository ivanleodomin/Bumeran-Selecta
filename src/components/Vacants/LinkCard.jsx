import axios from "axios";
import React from "react";
import "../../styles/card.css";
import { useParams, useHistory } from "react-router-dom";

function Card({ data }) {
  const { id } = useParams();
  const history = useHistory();
  const [seniority, setSeniority] = React.useState("");
  const [area, setArea] = React.useState("");

  React.useEffect(() => {
    axios
      .get(`/api/seniority/${data.SeniorityOp1Id}`)
      .then((res) => res.data)
      .then((data) => setSeniority(data.name));

    axios
      .get(`/api/area/${data.AreaOp1Id}`)
      .then((res) => res.data)
      .then((data) => setArea(data.name));
  }, []);

  const handleReclut = async () => {
    await axios.put(`/api/vacant/${id}/addRecruiter`, {
      recruiterId: data.id,
    });
    history.push(`/vacants/${id}`);
  };

  const handleInfo = () => {
    console.log(data);
  };

  return (
    <div className="card">
      <button className="button-reclut" onClick={handleReclut}>
        Reclutar
      </button>
      <button className="button-info" onClick={handleInfo}>
        Ver info
      </button>
      <div className="preview transform motion-safe:hover:scale-110">
        <div className="fullName">{`${data.firstName} ${data.lastName}`}</div>
        <div className="seniority">{seniority}</div>
        <div className="area">{area}</div>
        <div className="ranking">✩✩✩✩✩</div>
      </div>
      <div className="bottom-card"></div>
    </div>
  );
}

export default Card;
