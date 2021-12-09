import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const stateSlice = createSlice({
  name: "state",
  initialState: { value: initialState },
  reducers: {
    addState: (state, action) => {
      state.value = action.payload;
    },
    resetState: (state, action) => {
      state.value = initialState;
    },
  },
});

export const { addState, resetState } = stateSlice.actions;
export default stateSlice.reducer;
