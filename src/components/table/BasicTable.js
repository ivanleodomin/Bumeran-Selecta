import React from "react";
import { useMemo } from "react";
import { useTable } from "react-table";
//import './basicTable.css'

const BasicTable = () => {
  const data = useMemo(
    () => [
      {
        nombre: "Guillermo Martin Otamendi",
        place: "CABA",
        area: "Ingenierías",
        area2: "Comercial, Ventas y Negocios",
        area3: "Recursos Humanos y Capacitación",
        seniority1: "SemiSenior/Senior",
        seniority2: "Jefetura",
        seniority3: "SemiSenior/Senior",
      },

      {
        nombre: "Alejandra Castillo",
        place: "Florida, Vicente López.",
        area: "Gerencia y Dirección General",
        area2: "Recursos Humanos y Capacitación",
        area3: "Administración, Contabilidad y Finanzas",
        seniority1: "Gerente/Director",
        seniority2: "Jefetura",
        seniority3: "SemiSenior/Senior",
      },
      {
        nombre: "Verónica Guglielmotti",
        place: "Buenos Aires, Ramos Mejía",
        area: "Salud, Medicina, Enfermería y Farmacia",
        area2: "Ingeniería Civil y Construcción",
        area3: "Aduana y Comercio Exterior",
        seniority1: "SemiSenior/Senior",
        seniority2: "Jefetura",
        seniority3: "Gerente/Director",
      },
    ],
    []
  );

  const recruitersData = useMemo(() => [...data], [data]);

  const recruitersColumns = useMemo(
    () =>
      data[0]
        ? Object.keys(data[0]).map((key) => {
            return { Header: key, accessor: key };
          })
        : [],
    [data]
  );

  //Mapeo de data en Columnas
  const columns = useMemo(
    () => [
      {
        Header: "Nombre",
        Footer: "Nombre",
        accessor: "nombre",
      },
      {
        Header: "Place",
        Footer: "Place",
        accessor: "place",
      },
      {
        Header: "Area",
        Footer: "Area",
        accessor: "area",
      },
      {
        Header: "Area2",
        Footer: "Area2",
        accessor: "area2",
      },
      {
        Header: "Area3",
        Footer: "Area3",
        accessor: "area3",
      },
      {
        Header: "Seniority1",
        Footer: "Seniority1",
        accessor: "seniority1",
      },
      {
        Header: "Seniority2",
        Footer: "Seniority2",
        accessor: "seniority2",
      },
      {
        Header: "Seniority3",
        Footer: "Seniority3",
        accessor: "seniority3",
      },
    ],
    []
  );

  const groupedColumns = useMemo(() => [
    {
      Header: "Nombre",
      Footer: "Nombre",
      accessor: "nombre",
    },
    {
      Header: "Place",
      Footer: "Place",
      accessor: "place",
    },
    {
      Header: "Areas",
      Footer: "Areas",
      columns:[
        {
          Header: "Area",
          Footer: "Area",
          accessor: "area",
        },
        {
          Header: "Area2",
          Footer: "Area2",
          accessor: "area2",
        },
        {
          Header: "Area3",
          Footer: "Area3",
          accessor: "area3",
        },
      ],

    },
    {
      Header:'Seniority',
      Footer:'Seniority',
      columns:[
        {
          Header: "Seniority1",
          Footer: "Seniority1",
          accessor: "seniority1",
        },
        {
          Header: "Seniority2",
          Footer: "Seniority2",
          accessor: "seniority2",
        },
        {
          Header: "Seniority3",
          Footer: "Seniority3",
          accessor: "seniority3",
        },
      ]
    }
  ],[]
  );

  /* const tableInstance = useTable({
    columns, data}); */

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns: groupedColumns,
    data: recruitersData,
  });

  const isEven = (i) => i % 2 === 0;

  return (
    <div className="w-full max-w-full flex flex-col items-center justify-center pt-6 pb-10 pl-10 pr-10">
      <table
        className="table-fixed text-base text-gray-900"
        {...getTableProps()}
      >
        <thead className="p2 bg-yellow-200 ">
          {headerGroups.map((headerGroup) => (
            <tr
              className="border border-gray-500"
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <th
                  className="border border-gray-500 p-2"
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
              
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => (
                  <td
                    className="border border-gray-500 p-5"
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
        <tfoot className="table-fixed text-base text-black text-center bg-yellow-200 ">
          {footerGroups.map((footerGroup) => (
            <tr
              className="border border-gray-500 "
              {...footerGroup.getFooterGroupProps()}
            >
              {footerGroup.headers.map((column) => (
                <td
                  className="border border-gray-500 p-5"
                  {...column.getFooterProps}
                >
                  {column.render("Footer")}
                </td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
};

export default BasicTable;
