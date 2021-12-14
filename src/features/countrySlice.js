import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('country') || {}

const countrySlice = createSlice({
    name: "country",
    initialState: { value: initialState},
    reducers: {
        addCountry: (state, action) => {
            localStorage.setItem('country', action.payload)
            state.value = action.payload
        },
        resetCountry: (state, action) => {
            state.value = ""
        }
    }
})

export const { addCountry, resetCountry } = countrySlice.actions

export default countrySlice.reducer