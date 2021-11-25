import React from 'react'
import RecruitersList from '../views/RecruitersList'
import { fakeData } from '../fakedata/Fakedata'


const Recruiters = () => {


    return (
        <>
        {fakeData.recruiters.map((recruiter, i) => (
            <RecruitersList recruiter={recruiter} key={i}/>   
        ))}
        </>
    )
}

export default Recruiters
