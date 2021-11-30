import React from "react";
import { useHook } from "../hooks/useHook";
import axios from "axios";
import { Link } from "react-router-dom";

const VacantsAdd = () => {
  const country = useHook("");
  const location = useHook("");
  const vacants = useHook("");
  const area = useHook("");
  const seniority = useHook("");
  const description = useHook("");

  const handleSubmit = () => {
    axios
      .post("/api/vacant/add", {
        country: country.value,
        location: location.value,
        vacants: vacants.value,
        area: area.value,
        seniority: seniority.value,
        description: description.value,
      })
      .then(() => prompt("succesfully"))
      .catch(() => prompt("negative"));
  };
  return (
    <>
      <div className="w-full absolute backView justify-center pt-4 pb-4 px-96">
        
      </div>
      <section className="pt-24 py-1 bg-blueGray-50">
        <div className="form px-4 mx-auto mt-6">
          <div
            className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
            style={{ top: "40px" }}
          >
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div
                className="text-center flex justify-between"
                style={{
                  marginLeft: "30px",
                  marginTop: "20px",
                }}
              >
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Nueva Vacante
                </h6>
              </div>
              <img
                className="logo-gratis"
                src="https://imgbum-rebranding.jobscdn.com/empresas-assets/skins/bumeran/styles/img/gratis-icon.svg"
              />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-white">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Pais
                      </label>
                      <select
                        type="text"
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 input"
                        placeholder="Pais de la Vacante"
                        {...country}
                      >
                        <option>Argentina</option>
                        <option>Chile</option>
                        <option>Ecuador</option>
                        <option>Mexico</option>
                        <option>Perú</option>
                        <option>Panamá</option>
                        <option>Venezuela</option>
                      </select>
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Localidad
                      </label>
                      <select
                        type="text"
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 input"
                        placeholder="Localidad de la Vacante"
                        {...location}
                      >
                        <option>Buenos Aires</option>
                        <option>Santa fé</option>
                        <option>Salta</option>
                        <option>Jujuy</option>
                      </select>
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Numero de Vacantes
                      </label>
                      <input
                        type="number"
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 input"
                        placeholder="00"
                        {...vacants}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Area
                      </label>
                      <select
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 input"
                        {...area}
                      >
                        <option>Administración, Contabilidad y Finanzas</option>
                        <option>Aduana y Comercio Exterior</option>
                        <option>
                          Atención al Cliente, Call Center y Telemarketing
                        </option>
                        <option>Comercial, Ventas y Negocios</option>
                        <option>
                          Comunicación, Relaciones Institucionales y Públicas
                        </option>
                        <option>Gastronomía y Turismo</option>
                        <option>Gerencia y Dirección General</option>
                        <option>Ingeniería Civil y Construcción</option>
                        <option>Ingenierías</option>
                        <option>Legales</option>
                        <option>Marketing y Publicidad</option>
                        <option>Minería, Petróleo y Gas</option>
                        <option>Producción y Manufactura</option>
                        <option>Recursos Humanos y Capacitación</option>
                        <option>Salud, Medicina, Enfermería y Farmacia</option>
                        <option>Secretarias y Recepción</option>
                        <option>Seguros</option>
                        <option>
                          Tecnología, Sistemas y Telecomunicaciones
                        </option>
                      </select>
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Seniority
                      </label>
                      <select
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 input"
                        {...seniority}
                      >
                        <option>Jefetura</option>
                        <option>SemiSenior/Senior</option>
                        <option>Gerente/Director</option>
                        <option>Training/Junior</option>
                      </select>
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Descripcion
                      </label>
                      <textarea
                        type="text"
                        rows={5}
                        cols={5}
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 inputDescription"
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
                        className="text-white rounded-md colorButtonSave"
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
