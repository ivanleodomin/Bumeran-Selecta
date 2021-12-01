import {createSlice} from '@reduxjs/toolkit'

const initialState = ""

export const areaSlice = createSlice({
    name:'area',
    initialState:{value: initialState},
    reducers:{
        addArea: (state, action) =>{
            state.value = action.payload
        },
        resetArea: (state, action) =>{
            state.value = initialState
        }
    }

})

export const {addArea, resetArea} = areaSlice.actions

export default areaSlice.reducer 