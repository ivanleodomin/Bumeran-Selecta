import React from "react";
import "../styles/filter.css";
import { useDispatch } from "react-redux";

function Dropdown({ data, name, action, reset }) {
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(false);
  const [nameButton, setNameButton] = React.useState("");

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
        <ul className={show && "show"}>
          {data?.map((item) => {
            return (
              <li className="item" onClick={() => filter(item.name)}>
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
