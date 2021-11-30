import React from "react";
import axios from "axios";
import "../../styles/view.css";
import { useLocation } from "react-router-dom";

function View() {
  const id = useLocation().pathname.slice(9);
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
          <div className="info">{vacant.country}</div>
        )}
      </div>
    </>
  );
}

export default View;
