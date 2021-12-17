import React from "react";
import useForm from "../../hooks/useForm";
import { Link } from "react-router-dom";
import validateRecruiter from "../../utils/validateRecruiter";

const RecruitersAdd = () => {
  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    countries,
    seniorities,
    areas,
    cities,
    countryId,
  } = useForm(validateRecruiter, "RecruiterAdd");

  return (
    <>
      <div className="w-full absolute backView justify-center pt-4 pb-4 px-96" />
      <section className="pt-24 py-1 bg-blueGray-50">
        <div className="form px-4 mx-auto mt-6">
          <div
            className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
            style={{ top: "5px" }}
          >
            {/* <img
              className="logo-gratis-R"
              src="https://imgbum-rebranding.jobscdn.com/empresas-assets/skins/bumeran/styles/img/gratis-icon.svg"
            /> */}
            <div className="rounded-t bg-white px-6 py-6">
              <div
                className="text-center flex justify-center"
                style={{
                  marginTop: "20px",
                }}
              >
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Generar un nuevo Reclutador
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-white">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label className="block text-blueGray-600 text-xs font-bold mb-2 label">
                        Nombre
                      </label>
                      <input
                        name="firstName"
                        type="text"
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                        placeholder="Nombre"
                        onChange={handleChange}
                      />
                      {errors.firstName && <p>{errors.firstName}</p>}
                    </div>
                    <div className="relative w-full mb-3">
                      <label className="block text-blueGray-600 text-xs font-bold mb-2 label">
                        Apellido
                      </label>
                      <input
                        name="lastName"
                        type="text"
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                        placeholder="Apellido"
                        onChange={handleChange}
                      />
                      {errors.lastName && <p>{errors.lastName}</p>}
                    </div>
                    <div className="relative w-full mb-3">
                      <label className="block text-blueGray-600 text-xs mb-2 label">
                        Pais
                      </label>
                      <select
                        name="countryId"
                        type="text"
                        className=" block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                        placeholder="Pais de la Vacante"
                        onChange={handleChange}
                        value={countryId}
                        disabled
                      >
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
                      <label className="block text-blueGray-600 text-xs font-bold mb-2 label">
                        Ciudad
                      </label>
                      <select
                        name="cityId"
                        type="text"
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                        placeholder="Localidad de la Vacante"
                        onChange={handleChange}
                      >
                        <option selected>Elija una opcion</option>
                        {cities?.map((city) => {
                          return <option value={city.id}>{city.name}</option>;
                        })}
                      </select>
                      {errors.cityId && <p>{errors.cityId}</p>}
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block   label" for="grid-first-name">
                          Area
                        </label>
                        <select
                          name="areaOp1"
                          className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                          onChange={handleChange}
                        >
                          <option defaultValue>Elija una opcion</option>
                          {areas?.map((area) => {
                            return <option value={area.id}>{area.name}</option>;
                          })}
                        </select>
                        {errors.areaOp1 && <p>{errors.areaOp1}</p>}
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label className="block  label" for="grid-last-name">
                          Seniority
                        </label>
                        <select
                          name="seniorityOp1"
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
                        {errors.seniorityOp1 && <p>{errors.seniorityOp1}</p>}
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block   label" for="grid-first-name">
                          Area 2
                        </label>
                        <select
                          name="areaOp2"
                          className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                          onChange={handleChange}
                        >
                          <option defaultValue>Elija una opcion</option>
                          {areas?.map((area) => {
                            return <option value={area.id}>{area.name}</option>;
                          })}
                        </select>
                        {errors.areaOp2 && <p>{errors.areaOp2}</p>}
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label className="block  label" for="grid-last-name">
                          Seniority 2
                        </label>
                        <select
                          name="seniorityOp2"
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
                        {errors.seniorityOp2 && <p>{errors.seniorityOp2}</p>}
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block   label" for="grid-first-name">
                          Area 3
                        </label>
                        <select
                          name="areaOp3"
                          className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                          onChange={handleChange}
                        >
                          <option defaultValue>Elija una opcion</option>
                          {areas?.map((area) => {
                            return <option value={area.id}>{area.name}</option>;
                          })}
                        </select>
                        {errors.areaOp3 && <p>{errors.areaOp3}</p>}
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label className="block  label" for="grid-last-name">
                          Seniority 3
                        </label>
                        <select
                          name="seniorityOp3"
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
                        {errors.seniorityOp3 && <p>{errors.seniorityOp3}</p>}
                      </div>
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

export default RecruitersAdd;
