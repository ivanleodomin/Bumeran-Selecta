import React from 'react'
import { Link } from 'react-router-dom'
import { GrFormAdd } from 'react-icons/gr'

//Rosa => #EA3380
//Violeta => #0A26EE 

const Header = () => {
    return (
        <header className='relative' >
            <div style={{background:'#EA3380'}} className="flex item-center justify-between mb-10 pl-10 ">
        
              <div className='w-48' >
                <img src="https://www.bumeran.com.ar/selecta/wp-content/uploads/2021/06/logo-1.png" alt="BumeranLogo" className='w-full' />
            </div>

            <div className="flex-grow text-right px-4 py-2 m-2 bg-#0A26EE  ">
            <Link to='/add'>
            <button className='bg-green-400 hover:bg-green-300 text-white font-semibold py-2 px-4 rounded inline-flex items-center' >
              <GrFormAdd/>
                Add whatever- Just let me know im the Heading Thun n Kiko
            </button>

            </Link>       
            </div>
            </div>
      

        </header>
    )
}

export default Header