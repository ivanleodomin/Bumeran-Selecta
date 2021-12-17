import React from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const useForm = (validate, key) => {

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


  React.useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submitForm();
    }
    axios.get("/api/area").then((info) => setAreas(info.data));

    axios.get("/api/seniority").then((info) => setSeniorities(info.data));

    axios.get("/api/country").then((info) => setCountries(info.data));

    if (key === "VacantAdd")
      objectValues = {
        title: "",
        vacant: "",
        CountryId: "",
        CityId: "",
        AreaId: "",
        SeniorityId: "",
        description: "",
      };
    else if (key === "RecruiterAdd")
      objectValues = {
        firstName: "",
        lastName: "",
        countryId: "",
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
          objectValues.countryId = data.Country.id;
          objectValues.cityId = data.City.id;
          objectValues.areaOp1 = data.AreaOp1.id;
          objectValues.areaOp2 = data.AreaOp2.id;
          objectValues.areaOp3 = data.AreaOp3.id;
          objectValues.seniorityOp1 = data.SeniorityOp1.id;
          objectValues.seniorityOp2 = data.SeniorityOp2.id;
          objectValues.seniorityOp3 = data.SeniorityOp3.id;
          setPrueba(data.SeniorityOp3.id);
        });
    else if (key === "VacantEdit")
      axios
        .get(`/api/vacant/${id}`)
        .then((info) => info.data)
        .then((data) => {
          objectValues.CountryId = data.Country.id;
          objectValues.CountryName = data.Country.name;
          objectValues.AreaId = data.Area.id;
          objectValues.SeniorityId = data.Seniority.id;
          objectValues.vacant = data.vacant;
          objectValues.title = data.title;
          objectValues.CityId = data.City.id;
          objectValues.description = data.description;
          setPrueba(data.City.id);
        });
  }, [prueba, errors]);

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

  const handleChangeCountry = (e) => {
    if (e.target.value === "Elija una opcion") {
      setStates(true);
    } else {
      axios
        .get(`/api/country/${e.target.value}`)
        .then((info) => setCity(info.data));
      setStates(false);
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };
  function submitForm() {
    setIsSubmitted(true);
    if (key === "RecruiterEdit") {
      axios
        .put(`/api/recruiter/${"id"}`, {
          ...values,
          /* countryId: country, */
        })
        .then(history.push("/recruiters"));
    } else if (key === "VacantEdit") {
      axios
        .put(`/api/vacant/${"id"}`, {
          ...values,
          /* countryId: country, */
        })
        .then(history.push("/vacants"));
    } else if (key === "RecruiterAdd") {
      axios.post("/api/recruiter", {
        ...values,
      });
      history.push("/recruiters");
    } else if (key === "VacantAdd") {
      axios
        .post("/api/vacant/add", {
          ...values,
        })
        .then(history.push("/vacants"));
    }
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    countries,
    city,
    handleChangeCountry,
    states,
    seniorities,
    areas,
    submitForm,
    id,
    cities,
  };
};

export default useForm;
