import Modal from "react-modal";
import React from "react";
import { AiOutlineLeftCircle } from 'react-icons/ai';
import "../../styles/assess.css";

export default function HistoryActivity({ show, history, close }) {
  const customStyles = {
    content: {
      top: "35%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      height: "60%",
      width: "70%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  console.log("history", history);

  return (
    <Modal isOpen={show} style={customStyles} ariaHideApp={false}>
      <div className="modal-table">
      <button onClick={() => close(false)}><AiOutlineLeftCircle/></button>
        <table>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Area</th>
              <th>Vacantes</th>
              <th>Iniciada en</th>
              <th>Asignado en</th>
            </tr>
          </thead>
          <tbody>
            {history?.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.title}</td>
                  <td>{item.Area.name}</td>
                  <td>{item.vacant}</td>
                  <td>{item.startDate}</td>
                  <td>{item.assignmentDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Modal>
  );
}
