export default function InfoVacant({ vacant }) {
  return (
    <>
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
    </>
  );
}
