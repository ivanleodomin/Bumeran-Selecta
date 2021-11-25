import React from "react";
import { useMemo } from "react";
import { useTable, useGlobalFilter, useFilters } from "react-table";
import { Link } from "react-router-dom";
import ColumnFilter from "./ColumnFilter";
import GlobalFilter from "./GlobalFilter";
//import './basicTable.css'

const FilteringTable = () => {
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
        Filter: ColumnFilter
      },
      {
        Header: "Place",
        Footer: "Place",
        accessor: "place",
        Filter: ColumnFilter

      },
      {
        Header: "Area",
        Footer: "Area",
        accessor: "area",
        Filter: ColumnFilter

      },
      {
        Header: "Area2",
        Footer: "Area2",
        accessor: "area2",
        Filter: ColumnFilter

      },
      {
        Header: "Area3",
        Footer: "Area3",
        accessor: "area3",
        Filter: ColumnFilter

      },
      {
        Header: "Seniority1",
        Footer: "Seniority1",
        accessor: "seniority1",
        Filter: ColumnFilter

      },
      {
        Header: "Seniority2",
        Footer: "Seniority2",
        accessor: "seniority2",
        Filter: ColumnFilter

      },
      {
        Header: "Seniority3",
        Footer: "Seniority3",
        accessor: "seniority3",
        Filter: ColumnFilter

      },
    ],
    []
  );

  const groupedColumns = useMemo(() => [
    {
      Header: "Nombre",
      Footer: "Nombre",
      accessor: "nombre",
      Filter: ColumnFilter

    },
    {
      Header: "Place",
      Footer: "Place",
      accessor: "place",
      Filter: ColumnFilter

    },
    {
      Header: "Areas",
      Footer: "Areas",
      columns:[
        {
          Header: "Area",
          Footer: "Area",
          accessor: "area",
          Filter: ColumnFilter

        },
        {
          Header: "Area2",
          Footer: "Area2",
          accessor: "area2",
          Filter: ColumnFilter

        },
        {
          Header: "Area3",
          Footer: "Area3",
          accessor: "area3",
          Filter: ColumnFilter

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
          Filter: ColumnFilter

        },
        {
          Header: "Seniority2",
          Footer: "Seniority2",
          accessor: "seniority2",
          Filter: ColumnFilter

        },
        {
          Header: "Seniority3",
          Footer: "Seniority3",
          accessor: "seniority3",
          Filter: ColumnFilter

        },
      ]
    }
  ],[]
  );

  const tableHooks = (hooks) =>{
      hooks.visibleColumns.push((columns)=>
      [...columns,
        {
            id: 'Delete',
            Header: 'Delete',
            Cell:({row}) =>(
                <button className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded inline-flex items-center'
                onClick={(e) => alert('Deleting, u sure u wanna go on?')}  >
                    Delete
                </button>
            )
        }

      ])
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter
  } = useTable({
    columns: groupedColumns,
    data: recruitersData,
  },
  useFilters,
  useGlobalFilter,
  tableHooks);

  const {globalFilter} = state

  const isEven = (i) => i % 2 === 0;

  return (
      <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
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
                  <div>
                      {column.canFilter ? column.render('Filter'): null}
                  </div>
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
   {/*  </GlobalFilter> */}

    <div>
     <Link to='/recruiter/add'>  <button className='bg-green-400 hover:bg-green-300 text-white font-semibold py-2 px-4 rounded inline-flex items-center'>
                Add Recruiter
        </button> </Link>
    </div>


    </>
  );
};

export default FilteringTable;