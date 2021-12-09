import React from "react";
import axios from "axios";
import "../../styles/view.css";
import { useLocation, useHistory, Link } from "react-router-dom";
import swal from "sweetalert";

function View() {
  const id = useLocation().pathname.slice(9);
  const [vacant, setVacant] = React.useState("");
  const history = useHistory();

  React.useEffect(() => {
    axios
      .get(`/api/vacant/${id}`)
      .then((res) => res.data)
      .then((data) => setVacant(data));
  }, [id]);

  const handleDelete = async () => {
    swal({
      title: "¿Eliminar vacante?",
      text: "Cuidado! estas a punto de eliminar una vacante, recuerda que una vez eliminada no abra vuelta atras",
      icon: "warning",
      buttons: ["Cancelar", "Eliminar"],
    }).then(async (res) => {
      if (res) {
        swal({ text: "Eliminado", icon: "succes" });
        await axios.delete(`/api/vacant/${id}`);
        history.push("/vacants");
        window.location.href = window.location.href;
      }
    });
  };

  return (
    <>
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
          <div className="p-5">
            <div className="justify-items-end">
              <Link to={`/vacant-edit/${vacant.id}`}>
                <button className="m-5 inline-flex items-center leading-none text-white rounded-full p-2 shadow text-teal text-sm bg-blue-500 hover:bg-blue-700">
                  Editar
                </button>
              </Link>
              <Link to={`/add-recruiter/${vacant.id}`}>
                <button className="m-5 inline-flex items-center leading-none text-white rounded-full p-2 shadow text-teal text-sm bg-blue-500 hover:bg-blue-700">
                  Agregar Reclutador
                </button>
              </Link>
              <button
                className="ml-5 inline-flex items-center leading-none text-white rounded-full p-2 shadow text-teal text-sm bg-red-500 hover:bg-red-700"
                onClick={handleDelete}
              >
                Borrar
              </button>
            </div>
            <h1>Puesto: {vacant.job}</h1>
            <h1>
              Estado: <span className="estado">{vacant.state}</span>
            </h1>
            <h1>{`${vacant.City?.name}, ${vacant.Country?.name} `}</h1>
            <p>Description: {vacant.description}</p>
            <h3 className="list-disc list-inside bg-yellow-200">{`Area: ${vacant.Area?.name}`}</h3>
            <div className="">
              <h3>Vacantes disponibles: {vacant.vacant}</h3>
            </div>
            <h1>
              Reclutador a cargo:{" "}
              {vacant.Recruiter ? (
                <span className="estado">{`${vacant.Recruiter?.firstName} ${vacant.Recruiter?.lastName}`}</span>
              ) : (
                <span className="estado">No asignado</span>
              )}
            </h1>
          </div>
        )}
      </div>
    </>
  );
}

export default View;
