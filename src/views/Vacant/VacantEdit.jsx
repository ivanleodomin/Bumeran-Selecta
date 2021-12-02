import React from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const VacantEdit = () => {
  const id = useLocation().pathname.slice(13);

  const [areas, setAreas] = React.useState([]);
  const [seniorities, setSeniorities] = React.useState([]);
  const [country, setCountries] = React.useState([]);

  const [vacants, setVacants] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [valueAreas, setValueAreas] = React.useState("");
  const [valueSeniorities, setValueSeniorities] = React.useState("");
  const [valueCountries, setValueCountries] = React.useState("");

  const onChangeAreas = (e) => {
    setValueAreas(e.target.value);
  };
  const onChangeSeniorities = (e) => {
    setValueSeniorities(e.target.value);
  };
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const onChangeCountries = (e) => {
    setValueCountries(e.target.value);
  };
  const onChangeVacants = (e) => {
    setVacants(e.target.value);
  };

  React.useEffect(() => {
    axios
      .get("/api/area")
      .then((info) => info.data)
      .then((data) => setAreas(data));

    axios
      .get("/api/seniority")
      .then((info) => info.data)
      .then((data) => setSeniorities(data));

    axios
      .get("/api/country")
      .then((info) => info.data)
      .then((data) => setCountries(data));

    axios
      .get(`/api/vacant/${id}`)
      .then((info) => info.data)
      .then((data) => {
        setDescription(data.description);
        setVacants(data.vacant);
        setValueAreas(data.area);
        setValueCountries(data.country);
        setValueSeniorities(data.job);
      });
  }, []);

  console.log(valueAreas, "AREA");
  

  /* const handleSubmit = () => {
    axios
      .post("/api/vacant/add", {
        country: country,
        vacants: vacants,
        area: areas,
        seniority: seniorities,
        description: description,
      })
      .then(() => alert("succesfully"))
      .catch(() => alert("negative"));
  }; */

  return (
    <>
      <div className="w-full absolute backView justify-center pt-4 pb-4 px-96"></div>
      <section className="pt-24 py-1 bg-blueGray-50">
        <div className="form px-4 mx-auto mt-6">
          <div
            className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
            style={{ top: "5px" }}
          >
            <div className="rounded-t bg-white px-6 py-6">
              <div
                className="text-center flex justify-center"
                style={{
                  marginTop: "20px",
                }}
              >
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Edicion de la vacante n{id}
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-white">
              <form /* onSubmit={handleSubmit} */>
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
                        className=" block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                        placeholder="Pais de la Vacante"
                        onChange={onChangeCountries}
                        value={valueCountries}
                      >
                        {country?.map((countries) => {
                          return <option>{countries.name}</option>;
                        })}
                      </select>
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xs font-bold mb-2 label"
                        htmlFor="grid-password"
                      >
                        Localidad
                      </label>
                      <select
                        type="text"
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                        placeholder="Localidad de la Vacante"
                      >
                        <option>Buenos Aires</option>
                        <option>Santa fé</option>
                        <option>Salta</option>
                        <option>Jujuy</option>
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
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                        placeholder="00"
                        onChange={onChangeVacants}
                        value={vacants}
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
                        onChange={onChangeAreas}
                        value={valueAreas}
                      >
                        {areas?.map((area) => {
                          return <option>{area.name}</option>;
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
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                        onChange={onChangeSeniorities}
                        value={valueSeniorities}
                      >
                        {seniorities?.map((seniority) => {
                          return <option>{seniority.name}</option>;
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
                        rows={5}
                        cols={5}
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                        placeholder="Descripcion de la vacante"
                        onChange={onChangeDescription}
                        value={description}
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

export default VacantEdit;
