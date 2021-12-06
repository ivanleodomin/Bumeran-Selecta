import React from 'react'

const Toast = () => {
    return (
        <div className="absolute right-0 top-0 m-5">
            <div className='flex items-center justify-around bg-green-500 border-l-4 border-green-700 py-2 px-3 shadow-md mb-2 rounded-2xl' >
                <div className='text-green-500 rounded-full bg-white mr-3' >
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z">
                </path>
            </svg>
                </div>
            <h2 className='text-white max-w-xs' >
                Se ha asignado correctamente un reclutador a su vacante!.
            </h2>
            </div>
        
        </div>
    )
}

export default Toast