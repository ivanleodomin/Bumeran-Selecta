import React from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

export const useForm = (url) => {
  const {id} = useParams();
  const history = useHistory();

  const [form, setForm] = React.useState({});

  const [country, setCountry] = React.useState([]);
  const [city, setCity] = React.useState([]);
  const [areas, setAreas] = React.useState([]);
  const [seniorities, setSeniorities] = React.useState([]);
  const [countries, setCountries] = React.useState([]);
  const [states, setStates] = React.useState(true);

  React.useEffect(() => {
    axios.get("/api/area").then((info) => setAreas(info.data));

    axios.get("/api/seniority").then((info) => setSeniorities(info.data));

    axios.get("/api/country").then((info) => setCountries(info.data));

    if (url === "editRecruiter")
      axios
        .get(`/api/recruiter/${id}`)
        .then((info) => info.data)
        .then((data) => {
          console.log(data, "data");
          setCountry(data.Country.id);
          setForm({ ["lastName"]: data.lastName });
          setForm({ ["countryId"]: data.Country.id });
          setForm({ ["firstName"]: data.firstName });
          setForm({ ["areaOp1"]: data.AreaOp1.id });
          setForm({ ["areaOp2"]: data.AreaOp2.id });
          setForm({ ["areaOp3"]: data.AreaOp3.id });
          setForm({ ["seniorityOp1"]: data.SeniorityOp1.id });
          setForm({ ["seniorityOp2"]: data.SeniorityOp2.id });
          setForm({ ["seniorityOp3"]: data.SeniorityOp3.id });
          setForm({ ["cityId"]: data.City.id });
        })
        .then(() => axios.get(`/api/country/${country}`))
        .then((info) => info.data)
        .then((data) => setCity(data));
    else if (url === "editVacant")
      axios
        .get(`/api/vacant/${id}`)
        .then((info) => info.data)
        .then((data) => {
          setCountry(data.Country.id);
          setForm({ ["CountryId"]: data.Country.id });
          setForm({ ["CountryName"]: data.Country.name });
          setForm({ ["AreaId"]: data.Area.id });
          setForm({ ["SeniorityId"]: data.Seniority.id });
          setForm({ ["vacant"]: data.vacant });
          setForm({ ["description"]: data.description });
          setForm({ ["title"]: data.title });
          setForm({ ["CityId"]: data.City.id });
        })
        .then(() => axios.get(`/api/country/${country}`))
        .then((info) => info.data)
        .then((data) => setCity(data));
  }, [country]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (url === "editRecruiter") {
      axios
        .put(`/api/recruiter/${id}`, {
          ...form,
          countryId: country,
        })
        .then(history.push("/recruiters"));
    } else if (url === "editVacant") {
      axios
        .put(`/api/vacant/${id}`, {
          ...form,
          countryId: country,
        })
        .then(history.push("/vacants"));
    } else if (url === "recruiterAdd") {
      axios.post("/api/recruiter", {
        ...form,
      });
      history.push("/recruiters");
    } else if (url === "VacantAdd") {
      axios
        .post("/api/vacant/add", {
          ...form,
        })
        .then(history.push("/vacants"));
    }
  };

  const handleChangeCountry = (e) => {
    if (e.target.value === "Elija una opcion") {
      setStates(true);
    } else {
      axios
        .get(`/api/country/${e.target.value}`)
        .then((info) => setCity(info.data));
      setCountry(e.target.value);
      setStates(false);
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  return {
    form,
    handleSubmit,
    handleChange,
    city,
    countries,
    areas,
    seniorities,
    states,
    id,
    handleChangeCountry,
  };
};
