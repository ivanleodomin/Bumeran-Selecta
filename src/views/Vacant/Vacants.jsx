import React from "react";
import Header from "../../components/Header";
import axios from "axios";
import View from "../../components/Vacants/View";
import Results from "../../components/Results";
import Card from "../../components/Vacants/Card";
import { useSelector } from "react-redux";
import { resetArea } from "../../features/areaSlice";
import { resetState } from "../../features/stateSlice";
import { addArea } from "../../features/areaSlice";
import { addState } from "../../features/stateSlice";
import { resetCountry, addCountry } from "../../features/countrySlice";

const Vacants = () => {
  const state = [
    { name: "Finalizada" },
    { name: "Asignada" },
    { name: "Iniciada" },
  ];
  const [vacants, setVacants] = React.useState([]);
  const [areas, setAreas] = React.useState([]);
  const [countries, setCountries] = React.useState([]);

  const areaName = useSelector((state) => state.area).value;
  const stateName = useSelector((state) => state.state).value;
  const countryName = useSelector((state) => state.country).value;

  React.useEffect(() => {
    axios
      .get(
        `/api/vacant?area=${areaName}&state=${stateName}&country=${countryName}`
      )
      .then((res) => res.data)
      .then((data) => setVacants(data))
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
  }, [areaName, stateName, countryName]);

  return (
    <>
      {/* <h1>ABM DE VACANTES</h1> */}
      <Header
        filters={[
          { name: "Areas", data: areas },
          { name: "Estado", data: state },
          { name: "Pais", data: countries },
        ]}
        resets={[resetArea, resetCountry, resetState]}
        adds={[addArea, addState, addCountry]}
        routeButton="/vacant-form"
      />
      <Results datas={vacants} View={View} Card={Card} />
      <div className="h-64"></div>
    </>
  );
};

export default Vacants;
