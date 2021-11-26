import React from "react";

const RecruitersAdd = () => {
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
                        Nombre
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autocomplete="given-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="last_name"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Apellido
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autocomplete="family-name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-4">
                      <label
                        for="email_address"
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

                    <div class="col-span-6 sm:col-span-3">
                      <label
                        for="country"
                        class="block text-sm font-medium text-gray-700"
                      >
                        País
                      </label>
                      <select
                        id="country"
                        name="country"
                        autocomplete="country"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Argentina </option>
                        <option>Bolivia</option>
                        <option>Brasil</option>
                        <option>Chile</option>
                        <option>Colombia</option>
                        <option>Costa Rica</option>
                        <option>Cuba</option>
                        <option>Ecuador</option>
                        <option>El Salvador</option>
                        <option>Guayana Francesa</option>
                        <option>Granada</option>
                        <option>Guatemala</option>
                        <option>Guayana</option>
                        <option>Haití</option>
                        <option>Honduras</option>
                        <option>Jamaica</option>
                        <option>México</option>
                        <option>Nicaragua</option>
                        <option>Paraguay</option>
                        <option>Panamá</option>
                        <option>Perú</option>
                        <option>Puerto Rico</option>
                        <option>República Dominicana</option>
                        <option>Surinam</option>
                        <option>Uruguay</option>
                        <option>Venezuela</option>
                      </select>
                    </div>

                    <div class="col-span-6">
                      <label
                        for="street_address"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Area
                      </label>
                      <input
                        type="text"
                        name="job"
                        id="job"
                        autocomplete="job"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div class="col-span-6">
                      <label
                        for="street_address"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Direccion
                      </label>
                      <input
                        type="text"
                        name="street_address"
                        id="street_address"
                        autocomplete="street-address"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        for="city"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Ciudad
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        for="state"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Provincia
                      </label>
                      <input
                        type="text"
                        name="state"
                        id="state"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        for="postal_code"
                        class="block text-sm font-medium text-gray-700"
                      >
                        ZIP / Código Postal
                      </label>
                      <input
                        type="text"
                        name="postal_code"
                        id="postal_code"
                        autocomplete="postal-code"
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

export default RecruitersAdd;
