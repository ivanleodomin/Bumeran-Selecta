import { createSlice } from "@reduxjs/toolkit";

const initialState = ""

const countrySlice = createSlice({
    name: "country",
    initialState: { value: initialState},
    reducers: {
        addCountry: (state, action) => {
            state.value = action.payload
        },
        resetCountry: (state, action) => {
            state.value = initialState
        }
    }
})

export const { addCountry, resetCountry } = countrySlice.actions

export default countrySlice.reducer