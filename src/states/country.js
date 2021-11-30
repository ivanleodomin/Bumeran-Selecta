import { createAction, createReducer } from "@reduxjs/toolkit";

export const setCountry = createAction("SET_ACTION");

const countryReducer = createReducer([], {
  [setCountry]: (state, action) => {
    return action.payload;
  },
});

export default countryReducer;
