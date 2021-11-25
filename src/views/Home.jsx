import React from 'react'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'
import Recruiters from '../components/Recruiters'
import Vacants from '../components/Vacants'
import Statistics from '../components/Statistics'

const Home = () => {
    return (
        <div className=' relative flex h-full justify-center'  >
       
       <div  className='flex flex-nowrap space-x-9  ' >
        <button className='bg-green-400 hover:bg-green-300 text-white font-semibold py-2 px-4 rounded inline-flex items-center'>
        <Link to="/recruiters"> Recruiters </Link> 
        </button>
        
        
        <button className='bg-green-400 hover:bg-green-300 text-white font-semibold py-2 px-4 rounded inline-flex items-center'>
        <Link to="/vacants"> Vacants </Link> 
        </button>
        

        
        <button className='bg-green-400 hover:bg-green-300 text-white font-semibold py-2 px-4 rounded inline-flex items-center'>
        <Link to="/statistics"> Statistics </Link> 
        </button>
        </div>
   
    </div>

    )
}

export default Home
