import React from "react";
import axios from "axios";

function RecruiterEdit() {
  const [countries, setCountries] = React.useState([]);
  const [city, setCity] = React.useState([]);
  const [state, setState] = React.useState(true);
  const [states, setStates] = React.useState(true);

  const handleChange = (e) => {
    if (e.target.value === "Elija un pais") {
      setState(true);
    } else {
      setState(false);
    }
  };

  const handleChangePais = (e) => {
    if (e.target.value === "Elija una opcion") {
      setStates(true);
    } else {
        axios.get(`/api/country/${e.target.value}`).then((info) => setCity(info.data)) 
      setStates(false);
    }
  };

  console.log(city, "PAIS");
  React.useEffect(() => {
    axios.get("/api/country").then((info) => setCountries(info.data));

    axios.get(`/api/country/${1}`).then((info) => setCity(info.data));
  }, []);

  return (
    <>
      <div>
        <form>
          <select
            type="text"
            className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
            placeholder="Localidad de la Vacante"
            onChange={handleChange}
          >
            <option defaultValue>Elija un pais</option>
            <option>Argentina</option>
            <option>Brasil</option>
            <option>Uruguay</option>
            <option>Bolivia</option>
          </select>
          <br />
          <select
            type="text"
            className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
            placeholder="Localidad de la Vacante"
            disabled={state}
          >
            <option defaultValue>Elija una provincia</option>
            <option>Buenos Aires</option>
            <option>Santa fé</option>
            <option>Salta</option>
            <option>Jujuy</option>
          </select>
        </form>
      </div>

      <div className="relative w-full mb-3">
        <label
          className="block text-blueGray-600 text-xs mb-2 label"
          htmlFor="grid-password"
        >
          Pais
        </label>
        <select
          type="text"
          className=" block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
          placeholder="Pais de la Vacante"
          onChange={handleChangePais}
        >
          <option selected>Elija una opcion</option>
          {countries?.map((countriess) => {
            return <option value={countriess.id}>{countriess.name}</option>;
          })}
        </select>
      </div>
      <div className="relative w-full mb-3">
        <label
          className="block text-blueGray-600 text-xs font-bold mb-2 label"
          htmlFor="grid-password"
        >
          Ciudad
        </label>
        <select
          type="text"
          className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
          placeholder="Localidad de la Vacante"
          disabled={states}
        >
          <option selected>Elija una opcion</option>
          {city?.map((cities) => {
            return <option value={cities.id}>{cities.name}</option>;
          })}
        </select>
      </div>
    </>
  );
}

export default RecruiterEdit;
