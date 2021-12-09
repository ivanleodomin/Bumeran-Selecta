import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import HeaderView from "./HeaderView";
import InfoVacant from "./InfoVacant";
import NoneView from "../NoneView";
import "../../styles/view.css";

function View() {
  const { id } = useParams();
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
        {!id ? (
          <NoneView />
        ) : (
          <div className="p-5">
            <HeaderView vacant={vacant} id={id} />
            <InfoVacant vacant={vacant} />
          </div>
        )}
      </div>
    </>
  );
}

export default View;
