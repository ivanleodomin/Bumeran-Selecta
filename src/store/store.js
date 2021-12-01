import { configureStore } from "@reduxjs/toolkit";

import areaReducer from "../features/areaSlice";
import seniorityReducer from "../features/senioritys";

const store = configureStore({
  reducer: {
   area: areaReducer,
   seniority: seniorityReducer
  },
},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
