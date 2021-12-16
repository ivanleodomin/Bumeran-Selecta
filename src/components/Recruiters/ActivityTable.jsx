import Modal from "react-modal";
import React from "react";
import "../../styles/assess.css";
import { Link } from "react-router-dom";
import { AiOutlineLeftCircle, AiFillEye } from "react-icons/ai";

export default function ActivityTable({ show, activity, close }) {
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


  const styleEyeButton = {
    display: "flex",
    justifyContent: "center",
    height: "80px",
    alignItems: "center",
    fontSize: "25px",
    color: "#646464"
  }

  return (
    <Modal isOpen={show} style={customStyles} ariaHideApp={false}>
      <div className="modal-table">
        <button onClick={() => close(false)}>
          <AiOutlineLeftCircle />
        </button>
        {activity.length ? (
          <table>
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Area</th>
                <th>Vacantes</th>
                <th>Iniciada en</th>
                <th>Asignado en</th>
                <th>ver</th>
              </tr>
            </thead>
            {activity?.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.title}</td>
                  <td>{item.Area.name}</td>
                  <td>{item.vacant}</td>
                  <td>{item.startDate}</td>
                  <td>{item.assignmentDate}</td>
                  <td
                    style={styleEyeButton}
                  >
                    <Link to={`/vacants/${item.id}`}>
                      <AiFillEye />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </table>
        ) : (
          <h1>No hay nada para ver</h1>
        )}
      </div>
    </Modal>
  );
}
