import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data =[
  {
      Recruiter :"Administración, Contabilidad y Finanzas",
      diasAprox: 45
  },
  {
      Area :"Aduana y Comercio Exterior",
      diasAprox:30
  },
  {
      Area :"Atención al Cliente, Call Center y Telemarketing",
      diasAprox:35
  },
  {
      Area :"Comercial, Ventas y Negocios",
      diasAprox:27
  },
  {
      Area :"Comunicación, Relaciones Institucionales y Públicas",
      diasAprox:49
  },
  {
      Area :"Gastronomía y Turismo",
      diasAprox:18
  },
  {
      Area :"Gerencia y Dirección General",
      diasAprox:65
  },
  {
      Area :"Ingeniería Civil y Construcción",
      diasAprox:23
  },
  {
      Area :"Ingenierías",
      diasAprox:39
  },
  {
      Area :"Legales",
      diasAprox:47
  },
  {
      Area :"Marketing y Publicidad",
      diasAprox:15
  },
  {
      Area :"Minería, Petróleo y Gas",
      diasAprox:70
  },
  {
      Area :"Producción y Manufactura",
      diasAprox:46
  },
  {
      Area :"Recursos Humanos y Capacitación",
      diasAprox:13
  },
  {
      Area :"Salud, Medicina, Enfermería y Farmacia",
      diasAprox:25
  },
  {
      Area :"Secretarias y Recepción",
      diasAprox:28
  },
  {
      Area :"Seguros",
      diasAprox:33
      

  },
  {
      Area :"Tecnología, Sistemas y Telecomunicaciones",
      diasAprox:21
  }
]

 const TimeRecruiter = () =>{
        return (
            <>
            <h2 className='text-center text-gray-700 mt-10 mb-5 p-5 text-2xl font-semibold underline' > diasAprox (en días) de cierre de búsquedas por área.</h2>
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
                <CartesianGrid strokeDasharray="4 1 2" horizontal='true' vertical='true' y2={5} />
                <XAxis dataKey='Area'  tick={{fill:'black'}}  interval='preserveEnd' tick={{stroke: '#191716', strokeWidth: 1}} tickSize={25} name='Area' />
                <YAxis tick={{fill:'black'}} />
                <Tooltip contentStyle={{backgroundColor:'#black', color:'black'}} itemStyle={{color:'black'}} cursor={{}}   />
                <Legend  align="center" verticalAlign="top" iconSize={20}  /> 
                <Line type="natural" dataKey="diasAprox" stroke="#8884d8" dot={{fill:'#F40076', stroke:'#EBA6A9', strokeWidth:5, r:15}} activeDot={{ r: 20 }} />
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
              </LineChart>
            </ResponsiveContainer>
            </>
        )
        }
        export default TimeRecruiter

