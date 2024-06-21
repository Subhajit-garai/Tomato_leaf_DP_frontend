import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    p1:"#CAF4FF",
    p2:"#EEF7FF",
    p3:"#CDE8E5",
    p4:"rgb(132, 245, 245)",
    p5:"aqua",
    r1:"red",
    b1:"#3688ff",

}

const colorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        
    }
})

export const {  } = colorSlice.actions;
export default colorSlice.reducer