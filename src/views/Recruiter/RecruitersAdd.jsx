import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHook } from "../../hooks/useHook";

const RecruitersAdd = () => {
  const [areas, setAreas] = React.useState([]);
  const [seniorities, setSeniorities] = React.useState([]);
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    axios.get("/api/area").then((info) => setAreas(info.data));

    axios.get("/api/seniority").then((info) => setSeniorities(info.data));

    axios.get("/api/country").then((info) => setCountries(info.data));
  }, []);

  const firstName = useHook("");
  const lastName = useHook("");
  const country = useHook("");
  const AreaOp1Id = useHook("");
  const AreaOp2Id = useHook("");
  const AreaOp3Id = useHook("");
  const SeniorityOp1Id = useHook("");
  const SeniorityOp2Id = useHook("");
  const SeniorityOp3Id = useHook("");

  console.log(country, "country");
  const handleSubmit = () => {
    axios
      .post("/api/recruiter", {
        firstName: firstName.value,
        lastName: lastName.value,
        country: country.value,
        areaOp1: AreaOp1Id.value,
        areaOp2: AreaOp2Id.value,
        areaOp3: AreaOp3Id.value,
        seniorityOp1: SeniorityOp1Id.value,
        seniorityOp2: SeniorityOp2Id.value,
        seniorityOp3: SeniorityOp3Id.value,
      })
      .then(() => prompt("succesfully"))
      .catch(() => prompt("negative"));
  };
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
                        className="block text-blueGray-600 text-xs font-bold mb-2 label"
                        htmlFor="grid-password"
                      >
                        Nombre
                      </label>
                      <input
                        type="text"
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                        placeholder="Nombre"
                        {...firstName}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xs font-bold mb-2 label"
                        htmlFor="grid-password"
                      >
                        Apellido
                      </label>
                      <input
                        type="text"
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                        placeholder="Apellido"
                        {...lastName}
                      />
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
                        {...country}
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
                      >
                        <option>Buenos Aires</option>
                        <option>Santa fé</option>
                        <option>Salta</option>
                        <option>Jujuy</option>
                      </select>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block   label" for="grid-first-name">
                          Area
                        </label>
                        <select
                          className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                          {...AreaOp1Id}
                        >
                          {areas?.map((area) => {
                            return <option value={area.id}>{area.name}</option>;
                          })}
                        </select>
                      </div>
                      <div class="w-full md:w-1/2 px-3">
                        <label class="block  label" for="grid-last-name">
                          Seniority
                        </label>
                        <select
                          className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                          {...SeniorityOp1Id}
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
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block   label" for="grid-first-name">
                          Area 2
                        </label>
                        <select
                          className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                          {...AreaOp2Id}
                        >
                          {areas?.map((area) => {
                            return <option value={area.id}>{area.name}</option>;
                          })}
                        </select>
                      </div>
                      <div class="w-full md:w-1/2 px-3">
                        <label class="block  label" for="grid-last-name">
                          Seniority 2
                        </label>
                        <select
                          className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                          {...SeniorityOp2Id}
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
                    <div class="flex flex-wrap -mx-3 mb-6">
                      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block   label" for="grid-first-name">
                          Area 3
                        </label>
                        <select
                          className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                          {...AreaOp3Id}
                        >
                          {areas?.map((area) => {
                            return <option value={area.id}>{area.name}</option>;
                          })}
                        </select>
                      </div>
                      <div class="w-full md:w-1/2 px-3">
                        <label class="block  label" for="grid-last-name">
                          Seniority 3
                        </label>
                        <select
                          className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 label"
                          {...SeniorityOp3Id}
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
};

export default RecruitersAdd;
