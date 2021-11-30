import React from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function View() {
  const id = useLocation().pathname.slice(12);
  const [recruiter, setRecruiter] = React.useState("");

  React.useEffect(() => {
    axios
      .get(`/api/recruiter/${id}`)
      .then((res) => res.data)
      .then((data) => setRecruiter(data));
  }, [id]);

  return (
    <div className="view">
      {!recruiter ? (
        <img src="https://www.bumeran.com.ar/candidate/static/media/empty-state-avisos.3a4129ba.svg" />
      ) : (
        <div className="info">{recruiter.firstName}</div>
      )}
    </div>
  );
}

export default View;
