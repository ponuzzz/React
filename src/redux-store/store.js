import { configureStore, createSlice } from "@reduxjs/toolkit";
//slice creation
const CounterSlice = createSlice({
    name:'counter',
    initialState:0,
    reducers:{
        increment :(state)=>state + 1,
        decrement :(state)=>state - 1,
        reset:() =>0,
    }
})
//action export
export const {increment,decrement,reset} =CounterSlice.actions;
//store creation
export const store =configureStore({
    reducer:{counter:CounterSlice.reducer},

});