import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Alejandra Castillo",
    puntaje: 6,
    tiempo: 2.9,
    /*    pv: 2400,
      amt: 2400, */
  },
  {
    name: "Marisa Lembergier",
    puntaje: 8,
    tiempo: 1,
    /* amt: 2210,  */
  },
  {
    name: "Nadia Gonzalez",
    puntaje: 5,
    tiempo: 2,
    /*     pv: 9800,
      amt: 2290, */
  },
  {
    name: "Verónica Guglielmotti",
    puntaje: 10,
    tiempo: 1.48,
    /*     pv: 3908,
      amt: 2000, */
  },
  {
    name: "Asencio Sebastian",
    puntaje: 4,
    tiempo: 2.6,
    /*    pv: 4800,
      amt: 2181, */
  },
  {
    name: "Christian Lopez",
    puntaje: 8,
    tiempo: 1.7,
    /*   pv: 3800,
      amt: 2500, */
  },
  {
    name: "Inés Schenone",
    puntaje: 3,
    tiempo: 4,
    /*  pv: 4300,
      amt: 2100, */
  },
];

const BarCh = () => {
  return (
    <>
      <h2 className=" text-center mt-5 p-5 text-xl   ">
        Ranking de reclutadores y tiempo promedio de ejecucion de tarea
      </h2>
      <ResponsiveContainer width="80%" aspect={3}>
        <BarChart
          className="mt-5 ml-40"
          width={730}
          height={250}
          data={data}
          layout="horizontal"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fill: "black" }} name="Reclutadores" />
          <YAxis tick={{ fill: "black" }} />
          <Tooltip
            contentStyle={{ backgroundColor: "#ffffff", color: "black" }}
            itemStyle={{ color: "black" }}
            cursor={{}}
          />
          <Legend className="" iconSize={22} />
          <Bar
            dataKey="puntaje"
            fill="#fca311"
            legendType="star"
            label={{ fill: "#2E2F2F", fontSize: 20 }}
          />
          <Bar
            dataKey="tiempo"
            fill="#ef476f"
            legendType="line"
            label={{ fill: "#2E2F2F", fontSize: 20 }}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarCh;
