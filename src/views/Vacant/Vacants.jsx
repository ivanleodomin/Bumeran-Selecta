import React from "react";
import Header from "../../components/Vacants/Header";
import axios from "axios";
import ResultsVacant from "../../components/Vacants/Results";

const Vacants = () => {
  const [vacants, setVacants] = React.useState([]);
  const [seniorities, setSeniorities] = React.useState([]);
  const [areas, setAreas] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("/api/vacant")
      .then((res) => res.data)
      .then((data) => setVacants(data));

    axios
      .get("/api/seniority")
      .then((res) => res.data)
      .then((data) => setSeniorities(data));

    axios
      .get("/api/area")
      .then((res) => res.data)
      .then((data) => setAreas(data));
  }, []);

  return (
    <>
      <Header areas={areas} seniorities={seniorities} />
      {/* <ResultsVacant vacants={vacants} /> */}
    </>
  );
};

export default Vacants;
