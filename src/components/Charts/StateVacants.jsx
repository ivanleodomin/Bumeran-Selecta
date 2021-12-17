import React, { PureComponent } from "react";
import { useSelector } from "react-redux";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "iniciada",
    Vacantes: 250,
 
  },
  {
    name: "Asignada",
    Vacantes: 435,

  },
  {
    name: "Cubierta",
    Vacantes: 600,
  
  },
];

const StateVacants = () => {
  const country = useSelector((state) => state.country).value;

  /* 
    useEffect(() => {
        axios
        .get(`/api/statistics/vacants/closing?country=${country}&area=${selectedState}`)
        .then(res => (res.data))
        .then(data => setTime(data)) 
       axios
      .get("/api/area")
      .then((res) => res.data)
      .then((data) => setAreaName(data));
    },[country, selectedState]) */

  return (
    <div className="flex justify-center items-align my-20  " >
    <ComposedChart width={1500} height={450} data={data} margin={{ top: 15, right: 15, bottom: 15, left: 15 }} stackOffset="silhouette"      >
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip cursor={{ stroke: 'red', strokeWidth: 4 }}  />
      <Legend />
      <CartesianGrid stroke="#d6d2d2" />
      <Area type="monotone" dataKey="Vacantes" fill="#ffa6c1" stroke="#8884d8" />
      <Bar dataKey="Vacantes" barSize={20} fill="#fe5d9f" />
   {/*    <Line type="monotone" dataKey="Vancantes" stroke="#ff7300" /> */}
    </ComposedChart>
    </div>
  );
};

export default StateVacants;
