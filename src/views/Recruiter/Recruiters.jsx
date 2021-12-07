import React from "react";
import Header from "../../components/Header";
import Results from "../../components/Results.jsx";
import Card from "../../components/Recruiters/Card";
import axios from "axios";
import View from "../../components/Recruiters/View";
import { useSelector } from "react-redux";
import { resetArea, addArea } from "../../features/areaSlice";
import { resetSeniority, addSeniority } from "../../features/senioritys";
import { resetCountry, addCountry } from "../../features/countrySlice";

const Recruiters = () => {
  const [areas, setAreas] = React.useState([]);
  const [seniorities, setSeniorities] = React.useState([]);
  const [recruiters, setRecruiter] = React.useState([]);
  const [countries, setCountries] = React.useState([]);

  const areaName = useSelector((state) => state.area).value;
  const seniorityName = useSelector((state) => state.seniority).value;
  const countryName = useSelector((state) => state.country).value;

  React.useEffect(() => {
    axios
      .get("/api/area")
      .then((res) => res.data)
      .then((data) => setAreas(data));

    axios
      .get("/api/seniority")
      .then((res) => res.data)
      .then((data) => setSeniorities(data));

    axios
      .get(
        `/api/recruiter?page=1&area=Ingenieria&seniority=senior&country=argentina`
      )
      .then((res) => res.data)
      .then((data) => {
        setRecruiter(data);
      });

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
          { name: "Grado", data: seniorities },
          { name: "Pais", data: countries },
        ]}
        resets={[resetArea, resetCountry, resetSeniority]}
        adds={[addArea, addSeniority, addCountry]}
        routeButton="/recruiter-form"
      />
      <Results datas={recruiters} View={View} Card={Card} />
    </>
  );
};

export default Recruiters;
