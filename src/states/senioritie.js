import {createAction, createReducer} from '@reduxjs/toolkit'

export const setSenioritie = createAction("SET_SENIORITIE")

 const senioritieReducer = createReducer([],{
    [setSenioritie]: (state, action)=> {
        return action.payload
    }
})

export default senioritieReducer