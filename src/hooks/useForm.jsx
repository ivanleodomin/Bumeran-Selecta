import React from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import findId from "../utils/functions";
const useForm = (validate, key) => {
  const country = useSelector((state) => state.country).value;
  const { id } = useParams();
  const history = useHistory();

  let objectValues = {};

  const [values, setValues] = React.useState(objectValues);
  const [prueba, setPrueba] = React.useState([]);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [areas, setAreas] = React.useState([]);
  const [seniorities, setSeniorities] = React.useState([]);
  const [city, setCity] = React.useState([]);
  const [errors, setErrors] = React.useState({});
  const [countries, setCountries] = React.useState([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [states, setStates] = React.useState(true);
  const [cities, setCities] = React.useState([]);
  const [countryId, setCountryId] = React.useState(0);
  const [idVacant, setIdVacant] = React.useState(0);

  React.useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submitForm();
    }
    axios.get("/api/country").then((info) => setCountries(info.data));

    axios.get("/api/area").then((info) => setAreas(info.data));

    axios.get("/api/seniority").then((info) => setSeniorities(info.data));

    if (key === "VacantAdd")
      objectValues = {
        title: "",
        vacant: "",
        CityId: "",
        AreaId: "",
        SeniorityId: "",
        description: "",
      };
    else if (key === "RecruiterAdd")
      objectValues = {
        firstName: "",
        lastName: "",
        cityId: "",
        areaOp1: "",
        seniorityOp1: "",
        areaOp2: "",
        seniorityOp2: "",
        areaOp3: "",
        seniorityOp3: "",
      };
    else if (key === "RecruiterEdit")
      axios
        .get(`/api/recruiter/${id}`)
        .then((info) => info.data)
        .then((data) => {
          objectValues.firstName = data.firstName;
          objectValues.lastName = data.lastName;
          objectValues.cityId = data.City.id;
          objectValues.areaOp1 = data.AreaOp1.id;
          objectValues.areaOp2 = data.AreaOp2.id;
          objectValues.areaOp3 = data.AreaOp3.id;
          objectValues.seniorityOp1 = data.SeniorityOp1.id;
          objectValues.seniorityOp2 = data.SeniorityOp2.id;
          objectValues.seniorityOp3 = data.SeniorityOp3.id;
          setIdVacant(data.id);
          setPrueba(data.SeniorityOp3.id);
        });
    else if (key === "VacantEdit")
      axios
        .get(`/api/vacant/${id}`)
        .then((info) => info.data)
        .then((data) => {
          objectValues.CountryName = data.Country.name;
          objectValues.AreaId = data.Area.id;
          objectValues.SeniorityId = data.Seniority.id;
          objectValues.vacant = data.vacant;
          objectValues.title = data.title;
          objectValues.CityId = data.City.id;
          objectValues.description = data.description;
          setIdVacant(data.id);
          setPrueba(data.City.id);
        });
  }, [prueba, errors]);

  React.useEffect(() => {
    async function find() {
      await findId(country, countries, setCountryId);
    }
    if (!countryId) find();

    axios.get(`/api/country/${countryId}`).then((info) => setCities(info.data));
  }, [countryId, countries]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  function submitForm() {
    setIsSubmitted(true);
    if (key === "RecruiterEdit") {
      axios
        .put(`/api/recruiter/${"id"}`, {
          id: idVacant,
          countryId,
          ...values,
        })
        .then(history.push("/recruiters"));
    } else if (key === "VacantEdit") {
      axios
        .put(`/api/vacant/${"id"}`, {
          CountryId: countryId,
          id: idVacant,
          ...values,
        })
        .then(history.push("/vacants"));
    } else if (key === "RecruiterAdd") {
      axios.post("/api/recruiter", {
        countryId,
        ...values,
      });
      history.push("/recruiters");
    } else if (key === "VacantAdd") {
      axios
        .post("/api/vacant/add", {
          CountryId: countryId,
          ...values,
        })
        .then(history.push("/vacants"));

      window.location.reload();
    }
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    countries,
    city,
    seniorities,
    areas,
    submitForm,
    id,
    cities,
    countryId,
  };
};

export default useForm;
