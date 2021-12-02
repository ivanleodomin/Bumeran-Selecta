import React, {useState} from "react"
import axios from "axios"

const useFormPro = (validate) =>{
  
  const [value, setValue] = useState({country:'', location:'', vacants:'', area:'', seniority:'', description:''})
  const [error, setError] = useState({country:'', location:'', vacants:'', area:'', seniority:'', description:''})

  const country = value.country
 const location = value.location
 const vacants = value.vacants
 const area = value.area
 const seniority = value.seniority
 const description = value.description   
  
   const handleChange = (e) =>{
   const {value, name} = e.target
    console.log(value);
    setValue({
      ...value,
      [name]: [value]
    }) 
    
  } 

  const handleSubmit = (e) => {
    e.preventDefault()
    //handleErrors
    setError(validate(value))
    
    axios
      .post("/api/vacant/add", {
        country: value.country,
        location: value.location,
        vacants: value.vacants ,
        area: value.area,
        seniority: value.seniority,
        description: value.description,
      })
      .then(() => alert("succesfully"))
      .catch(() => alert("negative"));
  };
  return{
    handleChange,
    handleSubmit,
    value,
    error
  }
}

export default useFormPro