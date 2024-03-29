import React, { PureComponent } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
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

const TimeRecruiter = () => {
  const country = useSelector((state) => state.country).value;
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`/api/statistics/vacants/closing?country=${country}`)
      .then((res) => res.data)
      .then((data) => setData(data));
  }, [country]);

  return (
    <div className="mb-5">
      <h2 className="text-center text-gray-700 mb-1 p-5 text-2xl font-semibold underline">
        dias aprox. (en días) de cierre de búsquedas por área.
      </h2>
      <div className=" mb-5 flex aling-center justify-center">
        <ResponsiveContainer width="70%" aspect={3}>
          <LineChart
            classArea="ml-40"
            width={500}
            height={400}
            data={data}
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
              y2={5}
            />
            <XAxis
              dataKey="Area"
              tick={{ fill: "black" }}
              interval="preserveEnd"
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
              type="natural"
              dataKey="diasAprox"
              stroke="#8884d8"
              dot={{
                fill: "#F40076",
                stroke: "#EBA6A9",
                strokeWidth: 5,
                r: 15,
              }}
              activeDot={{ r: 20 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default TimeRecruiter;
