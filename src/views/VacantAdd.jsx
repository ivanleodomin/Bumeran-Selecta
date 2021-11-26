import React from "react";

const VacantAdd = () => {
  return (
    <div className="container">
      <div class="mt-10 sm:mt-0">
        <div class="h-40 md:grid md:grid-cols-3 md:gap-6">
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="pt-30 w-screen shadow overflow-hidden sm:rounded-md">
                <div class=" px-4 py-5 bg-white sm:p-6">
                  <div class=" grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="first_name"
                        class="block text-sm font-medium text-gray-700"
                      >
                        País
                      </label>
                      <input
                        type="text"
                        name="País"
                        id="País"
                        autocomplete="País"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="last_name"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Provincia
                      </label>
                      <input
                        type="text"
                        name="Provincia"
                        id="Provincia"
                        autocomplete="Provincia"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-4">
                      <label
                        for="email_address"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Area de Preferencia
                      </label>
                      <input
                        placeholder="Preferencia 1"
                        type="text"
                        name="Area"
                        id="Area"
                        autocomplete="Area"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <input
                        placeholder="Preferencia 2"
                        type="text"
                        name="Area"
                        id="Area"
                        autocomplete="Area"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <input
                        placeholder="Preferencia 3"
                        type="text"
                        name="Area"
                        id="Area"
                        autocomplete="Area"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="country"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Puesto
                      </label>
                      <select
                        id="country"
                        name="country"
                        autocomplete="country"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Training/Junior</option>
                        <option>SemiSenior/Senior</option>
                        <option>Jefetura</option>
                        <option>Gerente/Director</option>
                      </select>
                    </div>

                    <div class="col-span-6">
                      <label
                        for="street_address"
                        class="block text-sm font-medium text-gray-700"
                      >
                     Descripcion
                      </label>
                      <input
                        type="text"
                        name="description"
                        id="description"
                        autocomplete="description"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    

                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        for="state"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Cantidad de Puestos
                      </label>
                      <input
                        type="integer"
                        name="quantity"
                        id="quantity"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        for="postal_code"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Estado
                      </label>
                      <input
                        type="text"
                        name="job-state"
                        id="job-state"
                        autocomplete="job-state"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                  >
                    Añadir
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacantAdd;
