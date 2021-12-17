import React from "react";
import "../../styles/view.css";

export default function InfoVacant({ vacant }) {
  return (
    <div className="label space-y-8">
      <h1 className="font-bold">Titulo: {vacant.title}</h1>
      <h1>
        Estado: <span className="estado">{vacant.state}</span> el día <span>{vacant.startDate}</span>
      </h1>
      {vacant.state === "Finalizada" && (
        <h1>
          Puntaje: <span className="estado">{vacant.review} puntos</span>
        </h1>
      )}
      <h1>{`${vacant.City?.name}, ${vacant.Country?.name} `}</h1>
      <div className="description">
        <h1>Descripción: </h1>
        <p>{vacant.description}</p>
      </div>
      <h3 className="list-disc list-inside bg-yellow-200">{`Area: ${vacant.Area?.name}`}</h3>
      <div>
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
  );
}
