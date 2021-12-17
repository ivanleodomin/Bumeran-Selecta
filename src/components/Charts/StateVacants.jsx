import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const StateVacants = () => {
  const country = useSelector((state) => state.country).value;
  const [data, setData] = React.useState([]);
  const [area, setArea] = React.useState([]);
  const [areaSelected, setAreaSelected] = React.useState("");

  React.useEffect(() => {
    axios
      .get(`/api/statistics/vacants?country=${country}&area=${areaSelected}`)
      .then((res) => res.data)
      .then((data) => setData(data));
  }, [country, areaSelected]);

  React.useEffect(() => {
    axios
      .get("/api/area")
      .then((res) => res.data)
      .then((data) => setArea(data));
  }, []);

  const handleChange = (e) => {
    const name = e.target.value;
    if (name) setAreaSelected(name);
    else setAreaSelected("");
  };
  return (
    <div>
      <div className="flex aling-center justify-center">
        <select onChange={handleChange} name="select">
          <option value={null}>Todos</option>
          {area.map((area) => (
            <option value={area.name}>{area.name}</option>
          ))}
        </select>
      </div>
      <div className="flex justify-center items-align  ">
        <ComposedChart
          width={800}
          height={450}
          data={data}
          margin={{ top: 15, right: 15, bottom: 15, left: 15 }}
          stackOffset="silhouette"
        >
          <XAxis dataKey="state" />
          <YAxis />
          <Tooltip cursor={{ stroke: "red", strokeWidth: 4 }} />
          <Legend />
          <CartesianGrid stroke="#d6d2d2" />
          <Area
            type="monotone"
            dataKey="count"
            fill="#ffa6c1"
            stroke="#8884d8"
          />
          <Bar dataKey="Vacantes" barSize={20} fill="#fe5d9f" />
        </ComposedChart>
      </div>
    </div>
  );
};

export default StateVacants;
