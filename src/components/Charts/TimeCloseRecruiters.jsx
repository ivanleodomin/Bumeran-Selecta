import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import axios from "axios";
import { useSelector } from "react-redux";

const Graph = () => {
  const [recruiters, setRecruiters] = React.useState([]);
  const [areas, setAreas] = React.useState([]);
  const country = useSelector((state) => state.country).value;
  const [areaSelec, setAreaSelec] = React.useState("");

  React.useEffect(() => {
    axios
      .get(
        `/api/statistics/recruiters/closing?country=${country}&area=${areaSelec}`
      )
      .then((res) => res.data)
      .then((data) => setRecruiters(data));
  }, [areaSelec]);

  React.useEffect(() => {
    axios
      .get("/api/area")
      .then((res) => res.data)
      .then((data) => setAreas(data));
  }, []);

  const handleChange = (e) => {
    const name = e.target.value;
    if (name) setAreaSelec(name);
    else setAreaSelec("");
  };

  return (
    <>
      <h2 className="text-center text-gray-700  p-5 text-2xl font-semibold underline">
        Tiempo aprox. (en días) de cierre de búsquedas por reclutador
      </h2>
      <div className="flex aling-center justify-center">
        <ResponsiveContainer width="70%" aspect={3}>
          <LineChart
            classArea="ml-40"
            width={500}
            height={400}
            data={recruiters}
            margin={{
              top: 15,
              right: 20,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid
              strokeDasharray="4 1 2"
              horizontal="true"
              vertical="true"
              y2={50}
            />
            <XAxis
              dataKey="Reclutador"
              interval="preserveEnd"
              tick={{ stroke: "#191716", strokeWidth: 1 }}
              tickSize={25}
              name="Area"
            />
            <YAxis tick={{ fill: "black" }} />
            <Tooltip
              contentStyle={{ backgroundColor: "#black", color: "black" }}
              itemStyle={{ color: "black" }}
              cursor={{}}
            />
            <Legend align="center" verticalAlign="top" iconSize={20} />
            <Line
              type="linear"
              dataKey="diasAprox"
              stroke="#8884d8"
              dot={{
                fill: "#4cc9f0",
                stroke: "#7209b7",
                strokeWidth: 5,
                r: 15,
              }}
              activeDot={{ r: 20 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
export default Graph;
