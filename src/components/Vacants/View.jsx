import React from "react";
import axios from "axios";
import "../../styles/view.css";
import { useLocation, Link } from "react-router-dom";

function View() {
  const id = useLocation().pathname.slice(9);
  const [vacant, setVacant] = React.useState("");
  React.useEffect(() => {
    axios
      .get(`/api/vacant/${id}`)
      .then((res) => res.data)
      .then((data) => setVacant(data));
  }, [id]);

  const onClickButton = () => {
    axios.delete(`/api/vacant/${id}`)
  }

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
          <div>
            <div className="info">{vacant.country}</div>
            <Link to={`/vacant-edit/${vacant.id}`}>
              <h1>put</h1>
            </Link>
            <button className="text-white font-bold py-2 px-3 buttonAdd" onClick={onClickButton}>
              Vacante
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default View;
