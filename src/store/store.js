import { configureStore } from "@reduxjs/toolkit";

import areaReducer from "../features/areaSlice";
import seniorityReducer from "../features/senioritys";
import countryReducer from "../features/countrySlice";

const store = configureStore({
  reducer: {
   area: areaReducer,
   seniority: seniorityReducer,
   country: countryReducer
  },
},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
