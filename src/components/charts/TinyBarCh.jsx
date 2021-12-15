import React, { PureComponent, useEffect, useState, useSelector } from "react";
import axios, * as others from 'axios';



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


const TinyBarCh = () => {
  const [rec, setRec] = useState([]);

  const [areaName, setAreaName] = useState([]);
  const [areaSelec, setAreaSelec] = useState('')
  

  //const countryName = useSelector((state) => state.country)

/*   useEffect(() => {
    axios
      .get("/api/area")
      .then((res) => res.data)
      .then((data) => setAreaName(data));
  }, []); */
  
  useEffect(() => {
    axios
    .get(`/api/statistics/recruiters-ranck?area=${areaName}`)
    .then((info) => info.data)
    .then((data) => setRec(data));
    axios
    .get("/api/area")
    .then((res) => res.data)
    .then((data) => setAreaName(data));
  }, []);
  
  console.log(rec);
  
  
  const handleChange = (e) =>{
    setAreaSelec(e.target.value);
  }

  
  return (
    <>
    
      <select
      onChange={handleChange}
      name="select">
        {areaName.map(area =>(
          <option  
          value={area.name}>{area.name}</option>
        ))}
      </select>

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

//Data => Routes.