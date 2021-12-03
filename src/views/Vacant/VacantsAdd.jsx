import React from "react";
import { useHook } from "../../hooks/useHook";
import axios from "axios";
import { Link } from "react-router-dom";

const VacantsAdd = () => {

  const vacants = useHook("");
  const country = useHook("");
  const seniority = useHook("");
  const area = useHook("");
  const description = useHook("")
  const cityy = useHook("");
  const [countryy, setCountryy] = React.useState("")

  const [areas, setAreas] = React.useState([]);
  const [seniorities, setSeniorities] = React.useState([]);
  const [countries, setCountries] = React.useState([]);
  const [city, setCity] = React.useState([]);
  const [states, setStates] = React.useState(true);

  
  const handleChangePais = (e) => {
    if (e.target.value === "Elija una opcion") {
      setStates(true);
    } else {
      axios
      .get(`/api/country/${e.target.value}`)
      .then((info) => setCity(info.data));
      setCountryy(e.target.value)
      setStates(false);
    }
  };
  
  React.useEffect(() => {
    axios
    .get("/api/area")
    .then((info) => info.data)
    .then((data) => setAreas(data));
    
    axios
    .get("/api/seniority")
    .then((info) => info.data)
    .then((data) => setSeniorities(data))
    
    axios
    .get("/api/country") 
    .then((info) => info.data) 
    .then((data) => setCountries(data))
  }, []);

  const handleSubmit = () => {
    axios
      .post("/api/vacant/add", {
        country: country.value,
        vacant: vacants.value,
        areaId: area.value,
        countryId: countryy,
        cityId: cityy.value,
        job: seniority.value,
        description: description.value,
      })
      .then(() => alert("succesfully"))
      .catch(() => alert("negative"));
  };

  console.log(area.value)
  return (
    <>
      <div className="w-full absolute backView justify-center pt-4 pb-4 px-96"></div>
      <section className="pt-24 py-1 bg-blueGray-50">
        <div className="form px-4 mx-auto mt-6">
          <div
            className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
            style={{ top: "5px" }}
          >
            <img
              alt="pj"
              className="logo-gratis"
              src="https://imgbum-rebranding.jobscdn.com/empresas-assets/skins/bumeran/styles/img/gratis-icon.svg"
            />
            <div className="rounded-t bg-white px-6 py-6">
              <div
                className="text-center flex justify-center"
                style={{
                  marginTop: "20px",
                }}
              >
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Generar una nueva Vacante
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-white">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xs mb-2 label"
                        htmlFor="grid-password"
                      >
                        Pais
                      </label>
                      <select
                        type="text"
                        name='country'
                        className=" block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                        placeholder="Pais de la Vacante"
                        onChange={handleChangePais}
                      >
                        <option defaultValue>Elija una opcion</option>
                        {countries?.map((countriess) => {
                          return (
                            <option value={countriess.id}>
                              {countriess.name}
                            </option>
                          );
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
                        name='location'
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                        placeholder="Localidad de la Vacante"
                        disabled={states}
                        {...cityy}
                      >
                        <option defaultValue>Elija una opcion</option>
                        {city?.map((cities) => {
                          return (
                            <option value={cities.id}>{cities.name}</option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xs font-bold mb-2 label"
                        htmlFor="grid-password"
                      >
                        Numero de Vacantes
                      </label>
                      <input
                        type="number"
                        name='vacants'
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                        placeholder="00"
                        {...vacants}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xs font-bold mb-2 label"
                        htmlFor="grid-password"
                      >
                        Area
                      </label>
                      <select
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                        {...area}
                        name='area'
                      >
                        <option defaultValue>Elija una opcion</option>
                        {areas?.map((area) => {
                          return <option value={area.id}>{area.name}</option>
                        })}
                      </select>
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xs font-bold mb-2 label"
                        htmlFor="grid-password"
                      >
                        Seniority
                      </label>
                      <select
                      name='seniority'
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                        {...seniority}
                        >
                          <option defaultValue>Elija una opcion</option>
                        {seniorities?.map((seniority) => {
                          return <option>{seniority.name}</option>
                        })}
                      </select>
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xs font-bold mb-2 label"
                        htmlFor="grid-password"
                      >
                        Descripcion
                      </label>
                      <textarea
                        type="text"
                        name='description'
                        rows={5}
                        cols={5}
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                        placeholder="Descripcion de la vacante"
                        {...description}
                      />
                    </div>
                    <div className="buttons">
                      <Link to="/home">
                        <button className="rounded-md colorButtonFormCancel font-semibold">
                          Cancelar
                        </button>
                      </Link>
                      <button
                        className="text-white rounded-md colorButtonSave hover:bg-pink-600 active:bg-blue-800"
                        type="submit"
                      >
                        Guardar
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="h-48"></div>
    </>
  );
};

export default VacantsAdd;
