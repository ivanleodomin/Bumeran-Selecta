import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function RecruiterEdit() {
  
  const {
    form,
    handleChange,
    handleSubmit,
    city,
    seniorities,
    countries,
    areas,
  } = useForm("editRecruiter");

  console.log(form, "form");
  return (
    <>
      <div className="w-full absolute backView justify-center pt-4 pb-4 px-96" />
      <section className="pt-24 py-1 bg-blueGray-50">
        <div className="form px-4 mx-auto mt-6">
          <div
            className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
            style={{ top: "5px" }}
          >
            <img
              className="logo-gratis-R"
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
                        value={form.firstName}
                      />
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
                        value={form.lastName}
                      />
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
                        disabled
                        onChange={handleChange}
                        value={form.countryId}
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
                        value={form.cityId}
                      >
                        {city?.map((cities) => {
                          return (
                            <option value={cities.id}>{cities.name}</option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block label">Area</label>
                        <select
                          name="areaOp1"
                          className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                          onChange={handleChange}
                          value={form.areaOp1}
                        >
                          {areas?.map((area) => {
                            return <option value={area.id}>{area.name}</option>;
                          })}
                        </select>
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label className="block label">Seniority</label>
                        <select
                          name="seniorityOp1"
                          className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                          onChange={handleChange}
                          value={form.seniorityOp1}
                        >
                          {seniorities?.map((seniority) => {
                            return (
                              <option value={seniority.id}>
                                {seniority.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block label">Area 2</label>
                        <select
                          name="areaOp2"
                          onChange={handleChange}
                          className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                          value={form.areaOp2}
                        >
                          {areas?.map((area) => {
                            return <option value={area.id}>{area.name}</option>;
                          })}
                        </select>
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label className="block label">Seniority 2</label>
                        <select
                          name="seniorityOp2"
                          onChange={handleChange}
                          className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                          value={form.seniorityOp2}
                        >
                          {seniorities?.map((seniority) => {
                            return (
                              <option value={seniority.id}>
                                {seniority.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block label">Area 3</label>
                        <select
                          name="areaOp3"
                          onChange={handleChange}
                          className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                          value={form.areaOp3}
                        >
                          {areas?.map((area) => {
                            return <option value={area.id}>{area.name}</option>;
                          })}
                        </select>
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label className="block label">Seniority 3</label>
                        <select
                          name="seniorityOp3"
                          onChange={handleChange}
                          className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                          value={form.seniorityOp3}
                        >
                          {seniorities?.map((seniority) => {
                            return (
                              <option value={seniority.id}>
                                {seniority.name}
                              </option>
                            );
                          })}
                        </select>
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
}

export default RecruiterEdit;
