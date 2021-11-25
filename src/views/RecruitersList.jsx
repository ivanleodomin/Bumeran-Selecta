import React from 'react'
import { fakeData } from '../fakedata/Fakedata'

const RecruitersList = ({recruiter}) => {
    console.log(recruiter);

    return (
        <div>
            <section class="container mx-auto p-6 font-mono">
  <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
    <div class="w-full overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
            <th class="px-8 py-4">Nombre Completo </th>
            <th class="px-8 py-4">Lugar de Residencia</th>
            <th class="px-8 py-4">Area de busqueda preferida -Opcion 1</th>
            <th class="px-8 py-4">Area de busqueda preferida -Opcion 2</th>
            <th class="px-8 py-4">Area de busqueda preferida -Opcion 3</th>
            <th class="px-8 py-4">Description</th>
            <th class="px-8 py-4">Description</th>
            <th class="px-8 py-4">Description</th>
          </tr>
        </thead>
        <tbody class="bg-white">
          <tr class="text-gray-700">
            <td class="px-8 py-3 border">
              <div class="flex items-center text-sm">
                <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                 {/*  <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/8212328/pexels-photo-5212328.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" /> */}
                  <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                </div>
                <div>
                  <p class="font-semibold text-black">{recruiter.nombre}</p>
                  {/* <p class="text-xs text-gray-600">Developer</p> */}
                </div>
              </div>
            </td>
            <td class="px-8 py-3 text-ms font-semibold border">{recruiter.lugarDeResidencia}</td>
            <td class="px-8 py-3 text-xs border">
              <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
            </td>
            <td class="px-8 py-3 text-sm border">6/4/2000</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
        </div>
    )
}

export default RecruitersList
