import React from "react";
import useForm from "../../hooks/useForm";
import { Link } from "react-router-dom";
import validateVacant from "../../utils/validateVacant";

const VacantsAdd = () => {
  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    countries,
    cities,
    seniorities,
    areas,
    countryId,
  } = useForm(validateVacant, "VacantAdd");

  return (
    <React.Fragment>
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
                  Generar una nueva Vacante
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-white">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block text-blueGray-600 text-xs font-bold mb-2 label">
                        Titulo
                      </label>
                      <input
                        type="text"
                        name="title"
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                        placeholder="Titulo"
                        onChange={handleChange}
                      />
                      {errors.title && <p className="error">{errors.title}</p>}
                    </div>
                    <div className="relative w-full mb-3">
                      <label className="block text-blueGray-600 text-xs mb-2 label">
                        Pais
                      </label>
                      <select
                        type="text"
                        name="CountryId"
                        className=" block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                        placeholder="Pais de la Vacante"
                        onChange={handleChange}
                        value={countryId}
                        disabled
                      >
                        {countries?.map((countriess) => {
                          <option defaultValue>Elija una opcion</option>;
                          return (
                            <option value={countriess.id}>
                              {countriess.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="relative w-full mb-3">
                      <label className="block text-blueGray-600 text-xs font-bold mb-2 label">
                        Ciudad
                      </label>
                      <select
                        type="text"
                        name="CityId"
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                        placeholder="Localidad de la Vacante"
                        onChange={handleChange}
                      >
                        <option defaultValue>Elija una opcion</option>
                        {cities?.map((city) => {
                          return <option value={city.id}>{city.name}</option>;
                        })}
                      </select>
                      {errors.CityId && (
                        <p className="error">{errors.CityId}</p>
                      )}
                    </div>
                    <div className="relative w-full mb-3">
                      <label className="block text-blueGray-600 text-xs font-bold mb-2 label">
                        Vacants
                      </label>
                      <input
                        type="number"
                        name="vacant"
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                        placeholder="00"
                        onChange={handleChange}
                        value={values.vacant}
                      />
                      {errors.vacant && (
                        <p className="error">{errors.vacant}</p>
                      )}
                    </div>
                    <div className="relative w-full mb-3">
                      <label className="block text-blueGray-600 text-xs font-bold mb-2 label">
                        Area
                      </label>
                      <select
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                        onChange={handleChange}
                        name="AreaId"
                      >
                        <option defaultValue>Elija una opcion</option>
                        {areas?.map((area) => {
                          return <option value={area.id}>{area.name}</option>;
                        })}
                      </select>
                      {errors.AreaId && (
                        <p className="error">{errors.AreaId}</p>
                      )}
                    </div>
                    <div className="relative w-full mb-3">
                      <label className="block text-blueGray-600 text-xs font-bold mb-2 label">
                        Seniority
                      </label>
                      <select
                        name="SeniorityId"
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                        onChange={handleChange}
                      >
                        <option defaultValue>Elija una opcion</option>
                        {seniorities?.map((seniority) => {
                          return (
                            <option value={seniority.id}>
                              {seniority.name}
                            </option>
                          );
                        })}
                      </select>
                      {errors.SeniorityId && (
                        <p className="error">{errors.SeniorityId}</p>
                      )}
                    </div>
                    <div className="relative w-full mb-3">
                      <label className="block text-blueGray-600 text-xs font-bold mb-2 label">
                        Descripcion
                      </label>
                      <textarea
                        type="text"
                        name="description"
                        rows={5}
                        cols={5}
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                        placeholder="Descripcion de la vacante"
                        onChange={handleChange}
                        value={values.description}
                      />
                      {errors.description && (
                        <p className="error">{errors.description}</p>
                      )}
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
    </React.Fragment>
  );
};

export default VacantsAdd;
