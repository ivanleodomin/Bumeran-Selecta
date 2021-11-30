import { createAction, createReducer } from "@reduxjs/toolkit";

export const setArea = createAction("SET_ACTION");

const areaReducer = createReducer([], {
  [setArea]: (state, action) => {
    return action.payload;
  },
});

export default areaReducer;
