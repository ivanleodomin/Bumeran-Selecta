import React from "react";
import VacantCard from "../components/VacantCard";
import Header from "../components/HeaderVacants";
import axios from "axios";

const Vacants = () => {
  const [vacants, setVacants] = React.useState([]);

  React.useEffect(() => {
    axios.get("/api/vacant").then((vacants) => {
      setVacants(vacants.data);
    });
  }, []);

  return (
    <>
      <Header />
      {vacants.map((vacante, i) => {
        return <VacantCard key={i} vacante={vacante} />;
      })}
    </>
  );
};

export default Vacants;
