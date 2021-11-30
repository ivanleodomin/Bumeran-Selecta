import React from "react";
import axios from "axios"
import { useHook } from "../../hooks/useHook"

const RecruitersAdd = () => {
  const name = useHook("")
  const lastName = useHook("")
  const country = useHook("")
  const area = useHook("")
  const seniority = useHook("")
  /* const handleSubmit = () => {
    axios.post("/api/vacant/add", {
      firstName: name.value,
      lastName: 
    })
  } */
  return (
    <section className=" py-1 bg-blueGray-50">
      <div className="form px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div
              className="text-center flex justify-between"
              style={{
                marginLeft: "30px",
                marginTop: "20px",
              }}
            >
              <h6 className="text-blueGray-700 text-xl font-bold">
                Nuevo Reclutador
              </h6>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-white">
            <form /* onSubmit={handleSubmit} */>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 input"
                      placeholder="Nombre del Reclutador"
                      {...name}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Apellido
                    </label>
                    <input
                      type="text"
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 input"
                      placeholder="Apellido del Reclutador"
                      {...lastName}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Residencia
                    </label>
                    <input
                      type="text"
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 input"
                      placeholder="Residencia del Reclutador"
                      {...country}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Area 1
                    </label>
                    <select className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 input" {...area}>
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
                      <option>Tecnología, Sistemas y Telecomunicaciones</option>
                    </select>
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Seniority 1
                    </label>
                    <select className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500 input" {...seniority}>
                      <option>Jefetura</option>
                      <option>SemiSenior/Senior</option>
                      <option>Gerente/Director</option>
                      <option>Training/Junior</option>
                    </select>
                  </div>
                  <div className="buttons">
                    <button
                      className="rounded-md colorButtonFormCancel font-semibold"
                      type="submit"
                    >
                      Cancelar
                    </button>
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
  );
};

export default RecruitersAdd;
