import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import HeaderView from "./HeaderView";
import InfoVacant from "./InfoVacant";
import NoneView from "../NoneView";
import "../../styles/view.css";

function View() {
  const { id } = useParams();
  const [vacant, setVacant] = React.useState("");

  React.useEffect(() => {
    axios
      .get(`/api/vacant/${id}`)
      .then((res) => res.data)
      .then((data) => setVacant(data));
  }, [id]);

  return (
    <>
      <div className="view">
        {!id ? (
          <NoneView />
        ) : (
          <div className="p-5">
<<<<<<< HEAD
            <HeaderView vacant={vacant} id={id} />
            <InfoVacant vacant={vacant} />
=======
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
            <h1>Puesto: {vacant.title}</h1>
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
>>>>>>> 60428b4f45db19085e02636d407c62a06e526148
          </div>
        )}
      </div>
    </>
  );
}

export default View;
