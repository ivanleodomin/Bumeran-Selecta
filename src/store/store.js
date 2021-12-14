import { configureStore } from "@reduxjs/toolkit";
import areaReducer from "../features/areaSlice";
import seniorityReducer from "../features/senioritys";
import countryReducer from "../features/countrySlice";
import stateReducer from "../features/stateSlice";

const store = configureStore(
  {
    reducer: {
      state: stateReducer,
      area: areaReducer,
      seniority: seniorityReducer,
      country: countryReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;
