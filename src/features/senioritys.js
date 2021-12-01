import {createSlice} from '@reduxjs/toolkit'

const initialState = ""

export const senioritySlice = createSlice({
    name:'seniority',
    initialState:{value: initialState},
    reducers:{
        addSeniority: (state, action) =>{
            state.value = action.payload
        },
        resetSeniority: (state, action) =>{
            state.value = initialState
        }
    }

})

export const {addSeniority, resetSeniority} = senioritySlice.actions

export default senioritySlice.reducer 