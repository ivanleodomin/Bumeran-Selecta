import React, { PureComponent, useEffect, useState } from "react";
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
import axios from "axios";

const TinyBarCh = () => {

  const [rec, setRec] = useState([]);

  useEffect(() => {
    axios
      .get("/api/statistics/recruiters-ranck")
      .then((info) => info.data)
      .then((data) => setRec(data))
  }, []);

    console.log(rec)

    
  return (
    <>
      <ResponsiveContainer width="100%" aspect={3}>
      <BarChart width={730} height={250} data={rec}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey={rec.firstName} fill="#82ca9d"/>
  <YAxis />
  <Tooltip />
  <Legend tr />
  <Bar dataKey={rec.ranking} fill="black" legendType="triangle" label={{ fill: 'red', fontSize: 20 }}/>
  <Bar dataKey={""} fill="#82ca9d" />
</BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default TinyBarCh;

//Data => Routes.
