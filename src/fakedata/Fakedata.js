import React from "react";
import { useMemo } from "react";
import { useTable } from "react-table";

const Fakedata = () => {
  const fakeData = useMemo(
    () => [
      {
        nombre: "Guillermo Martin Otamendi",
        Residencia: "CABA",
        areaBusquedaPreferida1: "Ingenierías",
        areaBusquedaPreferida2: "Comercial, Ventas y Negocios",
        areaBusquedaPreferida3: "Recursos Humanos y Capacitación",
        seniority1: "SemiSenior/Senior",
        seniority2: "Jefetura",
        seniority3: "SemiSenior/Senior",
      },

      {
        nombre: "Alejandra Castillo",
        Residencia: "Florida, Vicente López.",
        areaBusquedaPreferida1: "Gerencia y Dirección General",
        areaBusquedaPreferida2: "Recursos Humanos y Capacitación",
        areaBusquedaPreferida3: "Administración, Contabilidad y Finanzas",
        seniority1: "Gerente/Director",
        seniority2: "Jefetura",
        seniority3: "SemiSenior/Senior",
      },
    ],
    []
  );

  const colums = useMemo(() => [{
      Header:'Nombre',
      accesor:'nombre'
  },
  {
    Header:'Residencia',
    accesor:'residencia'
  },
  {
    Header:'AreaBusquedaPreferida1',
    accesor:'areaBusquedaPreferida1'
  }
]);

const instanceTable = useTable(colums, fakeData)

  return <div></div>;
};

export default Fakedata;
