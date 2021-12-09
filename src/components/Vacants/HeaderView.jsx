import React from "react";
import axios from "axios";
import Assess from "./Assess";
import "../../styles/view.css";
import { useHistory, Link, useLocation } from "react-router-dom";
import swal from "sweetalert";

export default function HeaderView({ vacant, id }) {
  const history = useHistory();
  const path = useLocation().pathname.slice(0, 15);
  const [assess, setAssess] = React.useState(false);

  const handleDelete = async () => {
    const finish = await swal({
      title: "¿Eliminar vacante?",
      text: "Cuidado! estas a punto de eliminar una vacante, recuerda que una vez eliminada no abra vuelta atras",
      icon: "warning",
      buttons: ["Cancelar", "Eliminar"],
    });

    if (finish) {
      await swal({ text: "Eliminado", icon: "succes" });
      await axios.delete(`/api/vacant/${id}`);
      history.push("/vacants");
    }
  };

  const handleFinish = async () => {
    const finish = await swal({
      title: "¿Deseas Finalizar la busqueda?",
      icon: "warning",
      buttons: ["Cancelar", "Finalizar"],
    });

    if (finish) setAssess(true);
  };
  return (
    <div className="justify-items-end">
      <Assess assess={assess} vacant={vacant} />
      <>
        {vacant.state !== "Finalizada" && (
          <>
            {!vacant.Recruiter ? (
              <>
                {path !== "/link-recruiter" && (
                  <Link to={`/link-recruiter/${vacant.id}`}>
                    <button className="m-5 inline-flex items-center leading-none text-white rounded-full p-2 shadow text-teal text-sm bg-blue-500 hover:bg-blue-700">
                      Agregar Reclutador
                    </button>
                  </Link>
                )}
              </>
            ) : (
              <button
                onClick={handleFinish}
                className="m-5 inline-flex items-center leading-none text-white rounded-full p-2 shadow text-teal text-sm bg-red-500 hover:bg-red-700"
              >
                Finalizar Busqueda
              </button>
            )}
          </>
        )}
      </>

      <Link to={`/vacant-edit/${vacant.id}`}>
        <button className="m-5 inline-flex items-center leading-none text-white rounded-full p-2 shadow text-teal text-sm bg-blue-500 hover:bg-blue-700">
          Editar
        </button>
      </Link>
      <button
        className="ml-5 inline-flex items-center leading-none text-white rounded-full p-2 shadow text-teal text-sm bg-red-500 hover:bg-red-700"
        onClick={handleDelete}
      >
        Borrar
      </button>
    </div>
  );
}
