import React from "react";
import Header from "../../components/Recruiters/Header";
import Results from "../../components/Recruiters/Results.jsx";
import axios from "axios";
import { useSelector } from "react-redux";


const Recruiters = () => {
  const [areas, setAreas] = React.useState([]);
  const [seniorities, setSeniorities] = React.useState([]);
  const [recruiters, setRecruiter] = React.useState([]);
  const [countries, setCountries] = React.useState([]);

  const area = useSelector((state) => state.area).value;
  const seniority = useSelector((state) => state.seniority).value;
  const country = useSelector((state) => state.country).value;


  React.useEffect(() => {
    axios
      .get("/api/area")
      .then((res) => res.data)
      .then((data) => setAreas(data));

    axios
      .get("/api/seniority")
      .then((res) => res.data)
      .then((data) => setSeniorities(data))

    axios
      .get(`/api/recruiter?page=1&area=Ingenieria&seniority=senior&country=argentina`)
      .then((res) => res.data)
      .then((data) => {
        console.log("data",data)
        setRecruiter(data);
      })

      axios
      .get("/api/country")
      .then((res) => res.data)
      .then((data) => setCountries(data))
      
      .catch((error) => console.error(error))
  }, [area, seniority, country]);

  return (
    <>
      <Header areas={areas} seniorities={seniorities} countries={countries} />
      <Results recruiters={recruiters} />
    </>
  );
};

export default Recruiters;
