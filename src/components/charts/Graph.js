import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Senior/SemiSenior',
    Reclutadores:1500,
/*     pv: 2400,
    amt: 2400, */
  },
  {
    name: 'Jefatura',
    Reclutadores: 900,
/*     pv: 1398,
    amt: 2210, */
  },
  {
    name: 'Manager/Gerente',
    Reclutadores: 500,
    /* pv: 9800,
    amt: 2290, */
  },
  {
    name: 'Junior/Trainee',
    Reclutadores: 2300,
  /*   pv: 3908,
    amt: 2000, */
  },
];

 const Graph = () =>{
        return (
            <>
            <h2 className='text-center mt-16 p-5 text-xl ' >Numero de Reclutadores segun Seniority</h2>
            <ResponsiveContainer width="70%" aspect={3}>
              <LineChart
                className='ml-40'
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 15,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal='true' vertical='' />
                <XAxis dataKey="name" tick={{fill:'black'}} />
                <YAxis tick={{fill:'black'}} />
                <Tooltip contentStyle={{backgroundColor:'#back', color:'black'}} itemStyle={{color:'black'}} cursor={{}}   />
               {/*  <Legend /> */}
                <Line type="natural" dataKey="Reclutadores" stroke="#8884d8" dot={{fill:'#F40076', stroke:'#EBA6A9', strokeWidth:5, r:15}} activeDot={{ r: 20 }} />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
              </LineChart>
            </ResponsiveContainer>
            </>
        )
        }
        export default Graph
