
import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import validate from "../ValidateForms/validateVacants";


const Form = () => {
    
    const {handleChange, handleSubmit, values, errors} = useForm(submit,validate)

    function submit(){
        console.log("submitted succesfully");
      };
      
  return (
    <div>
      <form onSubmit={handleSubmit}  noValidate>
        <div>
          <label> Email</label>
          <div>
            <input
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
            {/* error message here */}
          </div>
        </div>
        <div>
          <label> Password</label>
          <div>
            <input
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
            />
            {/* error message here */}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;

// form
// label
// input
// button => submit

// handle changes
// handle Submit

// handle errors
// show errors => if there are errors
