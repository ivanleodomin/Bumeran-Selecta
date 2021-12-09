import Modal from "react-modal";
import React from "react";
import "../../styles/assess.css";
import axios from "axios";

export default function Assess({ assess, vacant }) {
  const [score, setScore] = React.useState(0);

  const customStyles = {
    content: {
      top: "35%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      height: "50%",
      width: "50%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const handleSubmit = async () => {
    await axios.post(`/api/vacant/${vacant.id}/doneProcess`, {
      score: score,
    });
  };

  return (
    <div>
      <Modal isOpen={assess} style={customStyles} >
        <div className="modal-info">
          <h1 className="modal-title">
            <span className="name-rec">
              {`${vacant.Recruiter?.firstName} ${vacant.Recruiter?.lastName}`}
            </span>
          </h1>
          <ul>
            <li className="modal-body">
              Recorda: Una vez colocada no podra ser modificada y afectara en el
              Seleccione puntaje para poder valorar.
            </li>
          </ul>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="clasificacion">
            <button
              className={
                !score ? "submit-button disable" : "submit-button enable"
              }
              disabled={!score}
              onClick={(e) => console.log("aaaa")}
              type="submit"
            >
              Valorar
            </button>
            <div className="stars">
              <input
                onChange={(e) => setScore(e.target.value)}
                id="radio1"
                type="radio"
                name="estrellas"
                value={5}
              />
              <label for="radio1">★</label>
              <input
                onChange={(e) => setScore(e.target.value)}
                id="radio2"
                type="radio"
                name="estrellas"
                value={4}
              />
              <label for="radio2">★</label>
              <input
                onChange={(e) => setScore(e.target.value)}
                id="radio3"
                type="radio"
                name="estrellas"
                value={3}
              />
              <label for="radio3">★</label>
              <input
                onChange={(e) => setScore(e.target.value)}
                id="radio4"
                type="radio"
                name="estrellas"
                value={2}
              />
              <label for="radio4">★</label>
              <input
                onChange={(e) => setScore(e.target.value)}
                id="radio5"
                type="radio"
                name="estrellas"
                value={1}
              />
              <label for="radio5">★</label>
            </div>
          </div>
          {!score && (
            <p className="instruc">Coloque valoracion para poder continuar</p>
          )}
        </form>
      </Modal>
    </div>
  );
}
