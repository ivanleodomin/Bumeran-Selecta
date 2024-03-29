import React from "react";
import "../styles/filter.css";
import { useDispatch, useSelector } from "react-redux";
/*
  Dropdown: este componente trabaja con estados globales usando la herramienta redux,
  props: 
    data: arreglo de strings con el nombre de los items desplegables
    name: placeholder del dropdown
    action: accion de redux para realizar el dispach con el nombre del item elegidos
    reset (opcional): accion de redux para realizar un reseteo del estado a su valor por defecto
*/

function Dropdown({ data, name, action, reset }) {
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(false);
  const [nameButton, setNameButton] = React.useState("");
  const country = useSelector((state) => state.country).value;

  React.useEffect(() => {
    if (reset.reset) {
      setNameButton("");
      reset.setReset(false);
    }
  }, [reset]);

  const filter = (name) => {
    setNameButton(name);
    dispatch(action(name));
  };

  if (name === "Pais") {
    return (
      <div className="dropdown disable">
        <div className="  dropdown-button">
          <span className="name active">{country}</span>
        </div>
      </div>
    );
  } else
    return (
      <div
        className={show ? "dropdown onclick" : "dropdown"}
        onClick={() => setShow(!show)}
      >
        <div className="dropdown-button">
          {nameButton === "" ? (
            <span className="name">{name}</span>
          ) : (
            <span className="name active">{nameButton}</span>
          )}

          <span className="arrow-dropdown">
            <i className="fas fa-angle-down"></i>
          </span>
        </div>
        <div>
          <ul className={show ? "show" : ""}>
            {data?.map((item, i) => {
              return (
                <li key={i} className="item" onClick={() => filter(item.name)}>
                  <span>{item.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
}

export default Dropdown;
