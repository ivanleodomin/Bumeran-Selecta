import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data =[
  {
    Reclutador :"JoseMaria Listorti",
      diasAprox: 43
  },
  {
    Reclutador :"Pablo CuestaVer",
      diasAprox:28
  },
  {
    Reclutador :"Atencio JuanFranco",
      diasAprox:15
  },
  {
    Reclutador :"Michael Owens",
      diasAprox:7
  },
  {
      Reclutador :"Patriarca de barrioNuevo",
      diasAprox:36  },
 
]

 const Graph = () =>{
        return (
            <>
            <h2 className='text-center text-gray-700 mt-10 mb-5 p-5 text-2xl font-semibold underline' > Tiempo aprox. (en días) de cierre de búsquedas por reclutador</h2>
            <ResponsiveContainer width="70%" aspect={3}>
              <LineChart
                classArea='ml-40'
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
                <CartesianGrid strokeDasharray="4 1 2" horizontal='true' vertical='true' y2={50} />
                <XAxis dataKey='Reclutador'  tick={{fill:'black'}}  interval='preserveEnd' tick={{stroke: '#191716', strokeWidth: 1}} tickSize={25} name='Area' />
                <YAxis tick={{fill:'black'}} />
                <Tooltip contentStyle={{backgroundColor:'#black', color:'black'}} itemStyle={{color:'black'}} cursor={{}}   />
                <Legend  align="center" verticalAlign="top" iconSize={20}  /> 
                <Line type="linear" dataKey="diasAprox" stroke="#8884d8" dot={{fill:'#4cc9f0', stroke:'#7209b7', strokeWidth:5, r:15}} activeDot={{ r: 20 }} />
              </LineChart>
            </ResponsiveContainer>
            </>
        )
        }
        export default Graph
