import React, { PureComponent, useEffect, useState } from "react";
import axios, * as others from "axios";
import { useSelector } from "react-redux";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const TinyBarCh = () => {
  const [rec, setRec] = useState([]);
  const [areaRec, setAreaRec] = useState([])

  const [areaName, setAreaName] = useState([]);
  const [areaSelec, setAreaSelec] = useState("");
  

  const country = useSelector((state) => state.country).value


  useEffect(() => {
    axios
      .get(`/api/statistics/recruiters-ranck?country=${country}`)
      .then((info) => (info.data))
      .then((data) => setRec(data));
    axios
      .get("/api/area")
      .then((res) => res.data)
      .then((data) => setAreaName(data));
  }, [country]);

  useEffect(() => {
    axios
      .get(`/api/statistics/recruiters-ranck?country=${country}&area=${areaSelec}`)
      .then((info) => (info.data))
      .then((data) => setAreaRec(data));
    axios
      .get("/api/area")
      .then((res) => res.data)
      .then((data) => setAreaName(data));
  }, []);


/* 
  const handleChange = (e) => {
    setAreaSelec(e.target.value);
  }; */

  return (
    <>
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
    </>
  );
};

export default TinyBarCh;

