import React from "react";
import Header from "../components/HeaderRecruiters";
import Results from "../components/Results.jsx";
import axios from "axios";
import { useSelector } from "react-redux";
const Recruiters = () => {
  const [areas, setAreas] = React.useState([]);
  const [seniorities, setSeniorities] = React.useState([]);
  const [recruiters, setRecruiter] = React.useState([]);

  const area = useSelector((state) => state.area).value;
  const seniority = useSelector((state) => state.seniority).value;

  console.log(area, seniority);
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
      .get(`/api/recruiter?area=${area}&seniority=${seniority}`)
      .then((res) => res.data)
      .then((data) => {
        setRecruiter(data);
      });
  }, [area, seniority]);

  return (
    <>
      <Header areas={areas} seniorities={seniorities} />
      <Results recruiters={recruiters} />
    </>
  );
};

export default Recruiters;
