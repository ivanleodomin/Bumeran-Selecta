import React from "react";
import axios from "axios";
import "../../styles/view.css";
import { useParams, useHistory, Link } from "react-router-dom";
import swal from "sweetalert";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

function View() {
  const { id } = useParams();
  const [recruiter, setRecruiter] = React.useState({});
  const [ranking, setRanking] = React.useState([]);
  const history = useHistory();
  console.log(id);

  const handleDelete = async () => {
    swal({
      title: "¿Eliminar vacante?",
      text:
        "Cuidado! estas a punto de eliminar un reclutador" +
        "recuerda que una vez eliminada no abra vuelta atras",
      icon: "warning",
      buttons: ["Cancelar", "Eliminar"],
    }).then(async (res) => {
      if (res) {
        await swal({ text: "Eliminado", icon: "success" });
        await axios.delete(`/api/recruiter/${id}`);
        history.push("/recruiters");
      }
    });
  };
  React.useEffect(() => {
    axios
      .get(`/api/recruiter/${id}`)
      .then((res) => res.data)
      .then((data) => setRecruiter(data))
      .then((data) => {
        if (recruiter.ranking === 1) setRanking(["★", "★★★★"]);
        if (recruiter.ranking === 2) setRanking(["★★", "★★★"]);
        if (recruiter.ranking === 3) setRanking(["★★★", "★★"]);
        if (recruiter.ranking === 4) setRanking(["★★★★", "★"]);
        if (recruiter.ranking === 5) setRanking(["★★★★★", ""]);
      });
  }, [id]);

  console.log("Recruiter", recruiter);

  return (
    <div className="view">
      {id === "" ? (
        <div className="no-select">
          <h1>
            Elegí un reclutador para ver su informacion <span>acá</span>
          </h1>
          <img
            alt="reclutador no seleccionado"
            src="https://www.bumeran.com.ar/candidate/static/media/empty-state-avisos.3a4129ba.svg"
          />
        </div>
      ) : (
        <div className="view">
          <div className="header-buttons-recruiter">
            <Link to={`/recruiter-edit/${recruiter.id}`}>
              <button className="ml-5 inline-flex items-center leading-none text-white rounded-full p-2 shadow text-teal text-sm bg-blue-500 hover:bg-blue-700">
                <FiEdit />
              </button>
            </Link>
            <button
              className="m-5 inline-flex items-center leading-none text-white rounded-full p-2 shadow text-teal text-sm bg-red-500 hover:bg-red-700"
              onClick={handleDelete}
            >
              <RiDeleteBinLine />
            </button>
          </div>
          <div className="data-recruiter">
            <h1 className="name-recruiter">{`${recruiter.firstName} ${recruiter.lastName}`}</h1>
            <h1 className="recidence-recruiter">
              {`${recruiter.Country?.name}, ${recruiter.City?.name}`}
            </h1>
            <h1 className="rec-stars">
              {ranking[0]}
              <span className="stars-desac">{ranking[1]}</span>
            </h1>
            <div className="experticia">
              <h1 className="title">Areas de experticia</h1>
              <table class="experticia-table">
                <tr>
                  <th>Area</th>
                  <th>Grado</th>
                </tr>
                <tr>
                  <td>{recruiter.AreaOp1?.name}</td>
                  <td>{recruiter.SeniorityOp1?.name}</td>
                </tr>
                <tr>
                  <td>{recruiter.AreaOp2?.name}</td>
                  <td>{recruiter.SeniorityOp2?.name}</td>
                </tr>
                <tr>
                  <td>{recruiter.AreaOp3?.name}</td>
                  <td>{recruiter.SeniorityOp3?.name}</td>
                </tr>
              </table>
            </div>
            <div className="">
              <ul className="list-disc list-inside bg-blue-200">
                <h3>Vacantes activas</h3>
                {recruiter?.activeVacancies?.map((vacante) => {
                  return (
                    <li>
                      Id de vacante: {vacante?.id} <br />
                      Puesto: {vacante?.title} <br />
                      Description: {vacante?.description}
                      <br />
                    </li>
                  );
                })}
              </ul>
              <ul className="list-disc list-inside bg-pink-200">
                <h3>Historial</h3>
                {recruiter?.history?.map((history) => {
                  return (
                    <li>
                      Id de vacante: {history.Vacant.id} <br />
                      Puesto: {history?.Vacant?.title} <br />
                      Description: {history?.Vacant?.description} <br />
                    </li>
                  );
                })}
              </ul>
            </div>
            <h1>Ranking: {recruiter.ranking}</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default View;
