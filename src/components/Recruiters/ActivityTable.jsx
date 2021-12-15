import Modal from "react-modal";
import React from "react";
import "../../styles/assess.css";

export default function ActivityTable({ show, activity, close }) {
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

  return (
    <div>
      <Modal isOpen={show} style={customStyles}>
        <h1>Activity</h1>
        <ul className="list-disc list-inside bg-blue-200">
          <h3>Vacantes activas</h3>
          {activity?.map((vacante) => {
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
        <button onClick={() => close(false)}>close</button>
      </Modal>
    </div>
  );
}
