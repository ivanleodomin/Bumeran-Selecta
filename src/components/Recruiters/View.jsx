import React from "react";
import axios from "axios";
import "../../styles/view.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function View() {
  const id = useLocation().pathname.slice(12);
  const [recruiter, setRecruiter] = React.useState("");
  React.useEffect(() => {
    axios
      .get(`/api/recruiter/${id}`)
      .then((res) => res.data)
      .then((data) => setRecruiter(data));
  }, [id]);

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
        <div className="p-5">
          <div className="justify-items-end">
            <Link to={`/recruiter-edit/${recruiter.id}`}>
              <button className="m-5 inline-flex items-center leading-none text-white rounded-full p-2 shadow text-teal text-sm bg-blue-500 hover:bg-blue-700">
                Editar
              </button>
            </Link>
            <button className="ml-5 inline-flex items-center leading-none text-white rounded-full p-2 shadow text-teal text-sm bg-red-500 hover:bg-red-700">
              Borrar
            </button>
          </div>
          <h1>Nombre: {`${recruiter.firstName} ${recruiter.lastName}`}</h1>
          <h1>
            Residencia: {`${recruiter.Country?.name} ${recruiter.City?.name}`}
          </h1>
          <div className="experticia">
            <h1 className="list-disc list-inside bg-yellow-200">Areas de experticia</h1>
            <h3>{`Area de preferencia 1: ${recruiter.AreaOp1?.name} -- ${recruiter.SeniorityOp1?.name}`}</h3>
            <h3>{`Area de preferencia 2: ${recruiter.AreaOp2?.name} -- ${recruiter.SeniorityOp2?.name}`}</h3>
            <h3>{`Area de preferencia 3: ${recruiter.AreaOp3?.name} -- ${recruiter.SeniorityOp3?.name}`}</h3>
          </div>
          <div className="">
            <ul className="list-disc list-inside bg-blue-200">
              <h3>Vacantes activas</h3>
              {recruiter?.activeVacancies?.map((vacante) => {
                return (
                  <li>
                    Puesto: {vacante.job} Description: {vacante.description}
                  </li>
                );
              })}
            </ul>
            <ul className="list-disc list-inside bg-pink-200">
            <h3>Historial</h3>
              {recruiter?.history?.map((vacante) => {
                return (
                  <li>
                    Puesto: {vacante.job} Description: {vacante.description}
                  </li>
                );
              })}
            </ul>
          </div>
          <h1>Ranking: {recruiter.ranking}</h1>
        </div>
      )}
    </div>
  );
}

export default View;

/*

{
  "id": 1,
  "firstName": "Dianemarie",
  "lastName": "Kosey",
  "AreaOp1": {
    "name": "Aduana y Comercio Exterior"
  },
  "AreaOp2": {
    "name": "Administración, Contabilidad y Finanzas"
  },
  "AreaOp3": {
    "name": "Atención al Cliente, Call Center y Telemarketing"
  },
  "SeniorityOp1": {
    "name": "Gerente/Director"
  },
  "SeniorityOp2": {
    "name": "Jefetura"
  },
  "SeniorityOp3": {
    "name": "SemiSenior/Senior"
  },
  "City": {
    "id": 1,
    "name": "Buenos Aires"
  },
  "Country": {
    "id": 1,
    "name": "Argentina"
  },
  "ranking": 5,
  "activeVacancies": [
    {
      "id": 2,
      "job": "Contador",
      "vacant": 3,
      "description": "Esto es una description",
      "state": "Asignada",
      "createdAt": "2021-12-03T13:52:04.000Z",
      "updatedAt": "2021-12-03T15:17:31.000Z",
      "RecruiterId": 1,
      "CityId": 1,
      "CountryId": 1,
      "AreaId": 1
    }
  ],
  "history": [
    {
      "id": 1,
      "Vacant": {
        "id": 1,
        "job": "Administrador",
        "vacant": 2,
        "description": "Esto es una description",
        "state": "Asignada",
        "createdAt": "2021-12-03T13:52:03.000Z",
        "updatedAt": "2021-12-03T15:16:23.000Z",
        "RecruiterId": 2,
        "CityId": 1,
        "CountryId": 1,
        "AreaId": 1
      }
    }
  ]
}

*/
