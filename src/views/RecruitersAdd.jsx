import React, { useState } from "react";
import countries from "../assets/countries.json";
import axios from "axios";
import { CustomHook } from "../hook/CustomHook";

const RecruitersAdd = () => {
  

  const name = CustomHook("");
  const lastName = CustomHook("");
  const country = CustomHook("");
  const city = CustomHook("");



 
  const [idCity, setIdCity] = useState(-1);
  const handlerLoadCities = (e) => {
    const option = e.target.value;

    setIdCity(option);
  };



  return (
   
    <section className=" py-1 bg-blueGray-50">
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
                Nuevo Reclutador
              </h6>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form /* onSubmit={formSend} */>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="text-blueGray-600 text-xs font-bold mb-2">
                      Nombre
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                      placeholder="Nombre"
                      {...name}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Apellido
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                      placeholder="Nombre"
                      {...lastName}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      País
                    </label>
                    <div className="flex-shrink w-full inline-block relative">
                      <select
                        id="country"
                        name="country"
                        onClick={handlerLoadCities}
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                      >
                        <option value={-1}> Seleccione un País </option>
                        {countries.map((country, i) => (
                          <option key={"countries" + i} value={i} {...country}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Ciudad
                    </label>
                    <div className="flex-shrink w-full inline-block relative">
                      <select
                        id="city"
                        name="city"
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                      >
                        <option value={-1}> Seleccione una ciudad </option>
                        {idCity > -1 &&
                          countries[idCity].cities.map((city, i) => (
                            <option key={"cities" + i} value="" {...city}>
                              {city}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    ></label>
                    <textarea className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"></textarea>
                  </div>
                  <button
                    className="bg-blue-600 text-gray-200 px-2 py-2 rounded-md"
                    type="submit"
                  >
                    Cancelar
                  </button>
                  <button
                    className="text-gray-200 px-2 py-2 rounded-md"
                    style={{ backgroundColor: "#E90066" }}
                    type="submit"
                  >
                    Aceptar
                  </button>
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
