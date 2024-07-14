import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    p1:"#CAF4FF",
    p2:"#EEF7FF",
    p3:"#CDE8E5",
    p4:"rgb(132, 245, 245)",
    r1:"red",
    b1:"#3688ff",

    logo:"#03f8f3",
    logo2:"#00d1cd",
    lt_bg:"#75f0ed",
    white:"#fff",
    bg :"rgb(249 249 255)",

}

const colorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        
    }
})

export const {  } = colorSlice.actions;
export default colorSlice.reducer