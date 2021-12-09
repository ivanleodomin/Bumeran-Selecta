import React from "react";
import axios from "axios";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useEditForm } from "../../hooks/useEditForm";

const VacantEdit = () => {
  const id = useLocation().pathname.slice(13);
  const history = useHistory();

  const [areas, setAreas] = React.useState([]);
  const [seniorities, setSeniorities] = React.useState([]);
  const [city, setCity] = React.useState([]);

  const valueVacants = useEditForm("");
  const valueAreas = useEditForm("");
  const valueCity = useEditForm("");
  const valueDescription = useEditForm("");
  const valueSeniorities = useEditForm("");
  const valueCountries = useEditForm("");
  const nameCountry = useEditForm("");

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
      .get(`/api/vacant/${id}`)
      .then((info) => info.data)
      .then((data) => {
        nameCountry.setValor(data.Country.name);
        valueCountries.setValor(data.Country.id);
        valueAreas.setValor(data.Area.id);
        valueCity.setValor(data.City.id);
        valueVacants.setValor(data.vacant);
        valueDescription.setValor(data.description);
        valueSeniorities.setValor(data.job);
      })
      .then(() =>
        axios
          .get(`/api/country/${valueCountries.value}`)
          .then((info) => info.data)
          .then((data) => setCity(data))
      );
  }, [valueCountries.value]);

  const handleSubmit = () => {
    axios
      .put(`/api/vacant/${id}`, {
        vacant: valueVacants.value,
        job: valueSeniorities.value,
        description: valueSeniorities.value,
        AreaId: valueAreas.value,
        CityId: valueCity.value,
        CountryId: valueCountries.value,
      })
      .then(history.push("/vacants"));
  };

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
                        className=" block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                        placeholder="Pais de la Vacante"
                        onChange={valueCountries.onChange}
                        value={valueCountries.value}
                        disabled
                      >
                        <option>{nameCountry.value}</option>;
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
                        onChange={valueCity.onChange}
                        value={valueCity.value}
                      >
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
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                        placeholder="00"
                        onChange={valueVacants.onChange}
                        value={valueVacants.value}
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
                        onChange={valueAreas.onChange}
                        value={valueAreas.value}
                      >
                        {areas?.map((area) => {
                          return <option value={area.id}>{area.name}</option>;
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
                        onChange={valueSeniorities.onChange}
                        value={valueSeniorities.value}
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
                        onChange={valueDescription.onChange}
                        value={valueDescription.value}
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
