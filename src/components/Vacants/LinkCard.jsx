import axios from "axios";
import React from "react";
import "../../styles/card.css";
import { useParams, useHistory, Link } from "react-router-dom";
import swal from "sweetalert";

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
    const finish = await swal({
      title: "¿Asignar vacante?",
      text: "Una vez asignada no abra vuelta atras",
      icon: "warning",
      buttons: ["Cancelar", "Asignar"],
    });

    if (finish) {
      await swal({ text: "Asignado!", icon: "success" });
      await axios.put(`/api/vacant/${id}/addRecruiter`, {
        recruiterId: data.id,
      });
      history.push(`/vacants/${id}`);
    }
  };

  console.log(data.id);

  return (
    <div className="card">
      <button className="button-reclut" onClick={handleReclut}>
        Asignar
      </button>
      <button className="button-info">
        <Link to={`/recruiters/${data.id}`}>Ver info</Link>
      </button>
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
