import React from "react";
import Header from "../../components/Header";
import axios from "axios";
import View from "../../components/Vacants/View";
import Results from "../../components/Results";
import Card from "../../components/Vacants/Card";
import { useSelector } from "react-redux";
import { resetArea } from "../../features/areaSlice";
import { resetSeniority } from "../../features/senioritys";
import { addArea } from "../../features/areaSlice";
import { addSeniority } from "../../features/senioritys";
import { resetCountry, addCountry } from "../../features/countrySlice";

const Vacants = () => {
  const [vacants, setVacants] = React.useState([]);
  const [seniorities, setSeniorities] = React.useState([]);
  const [areas, setAreas] = React.useState([]);
  const [countries, setCountries] = React.useState([]);

  const areaName = useSelector((state) => state.area).value;
  const seniorityName = useSelector((state) => state.seniority).value;
  const countryName = useSelector((state) => state.country).value;

  React.useEffect(() => {
    axios
      .get("/api/vacant")
      .then((res) => res.data)
      .then((data) => setVacants(data))
      .catch((error) => console.error(error));

    axios
      .get("/api/seniority")
      .then((res) => res.data)
      .then((data) => setSeniorities(data))
      .catch((error) => console.error(error));

    axios
      .get("/api/area")
      .then((res) => res.data)
      .then((data) => setAreas(data))
      .catch((error) => console.error(error));

    axios
      .get("/api/country")
      .then((res) => res.data)
      .then((data) => setCountries(data))
      .catch((error) => console.error(error));
  }, [areaName, seniorityName, countryName]);

  return (
    <>
      <Header
        filters={[
          { name: "Areas", data: areas },
          { name: "Estado", data: seniorities },
          { name: "Pais", data: countries },
        ]}
        resets={[resetArea, resetCountry, resetSeniority]}
        adds={[addArea, addSeniority, addCountry]}
        routeButton="/vacant-form"
      />
      <Results datas={vacants} View={View} Card={Card} />
      <div className="h-64"></div>
    </>
  );
};

export default Vacants;
