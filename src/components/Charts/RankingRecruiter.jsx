import React, { PureComponent, useEffect, useState } from "react";
import axios, * as others from "axios";
import { useSelector } from "react-redux";

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

const AreaChart = () => {
  const [rec, setRec] = useState([]);
  const [areaRec, setAreaRec] = useState([]);
  const [areaName, setAreaName] = useState([]);
  const [areaSelec, setAreaSelec] = useState("");
  const country = useSelector((state) => state.country).value;

  useEffect(() => {
    axios
      .get(
        `/api/statistics/recruiters-ranck?country=${country}&area=${areaSelec}`
      )
      .then((info) => info.data)
      .then((data) => setRec(data));
    axios
      .get("/api/area")
      .then((res) => res.data)
      .then((data) => setAreaName(data));
  }, [country, areaSelec]);

  console.log(rec);

  const handleChange = (e) => {
    const name = e.target.value;
    if (name) setAreaSelec(name);
    else setAreaSelec("");
  };

  console.log(areaSelec);

  return (
    <>
      <div className="flex aling-center justify-center">
        <select onChange={handleChange} name="select" className="rounded-lg bg-grey">
          <option value={null}>Todos</option>
          {areaName.map((area) => (
            <option value={area.name}>{area.name}</option>
          ))}
        </select>
      </div>
      <div className="flex aling-center justify-center">
        <ResponsiveContainer width="100%" aspect={3}>
          <BarChart width={730} height={250} data={rec}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={"firstName"} fill="#0F0E0E" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar
              dataKey={"ranking"}
              fill="#7B0828"
              label={{ fill: "#0F0E0E", fontSize: 20 }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default AreaChart;
