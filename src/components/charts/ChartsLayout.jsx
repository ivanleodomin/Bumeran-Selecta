import React from 'react'
import AreaChart from './AreaChart'
import Graph from './Graph'
import StateVacants from './StateVacants'
import TinyBarCh from './TinyBarCh'
import TimeRecruiter from './TimeRecruiter'
const ChartsLayout = () => {
    return (
        <div className='m-10 p-8'>
            <div className='m-10 p-8'>
                <h1 className='text-xl mx-auto text-center  '  >Todos los Reclutadores</h1>
            <TinyBarCh/>
            </div>
            <div className='m-10 p-8' >
            <Graph/>
            </div> 
            <div className='m-10 p-8' >        
            <AreaChart/>
            </div>
            <div className='m-10 p-8' >
                <h1 className='text-xl  font-semibold font text-center' >Numero de vacantes segun su estado.</h1>
            <StateVacants/>

            </div>
            <div>
                <TimeRecruiter/>
            </div>
        </div>
    )
}

export default ChartsLayout
