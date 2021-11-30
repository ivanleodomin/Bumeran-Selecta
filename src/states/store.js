import { configureStore } from "@reduxjs/toolkit";
import areaReducer from "./area";
import senioritieReducer from "./senioritie";
import countryReducer from "./country"

const store = configureStore({
  reducer: {
    area: areaReducer,
    senioritie: senioritieReducer,
    country: countryReducer
  },
});

export default store;
