import React, { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({email: "",password: ""});
  const [errors, setErrors] = useState({email: "",password: ""})

  // New state for errors 
  // f(x) validates the errors
  // Pass these errors back to form 

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: [value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    //handleErrors
    setErrors(validate(values))

    callback(); // Lo que yo quiero que haga el submit lo tengo en el callBack 
  };



  return {
      handleSubmit,
      handleChange,
      values,
      errors
  };
};

export default useForm;
