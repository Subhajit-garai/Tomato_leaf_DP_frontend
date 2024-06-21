import { createSlice } from "@reduxjs/toolkit";


const initialState ={

 imageArea:{
    textColor:"red",
    uploadicon:"",
 },
 elementColor:{
    progressbarColor:"blue",
 },
 mainColor:{
    primary1:"red",
    primary2:"green",
    primary3:"blue",
    primary4:"pink",
    primary5:"aqua",
    primary6:"orange",
 }
}

const appcustomizerSlice = createSlice({
    name: 'appcustomizer',
    initialState,
    reducers: {
        AppColorSet: (state,action)=>{
            console.log(action.payload[0]);
            switch(action.payload[0]){
                case "imageArea": state.imageArea[`${action.payload[1]}`] = `${action.payload[2]}`; break;
                case "mainColor": state.mainColor[`${action.payload[1]}`] = `${action.payload[2]}`; break;
                case "elementColor": state.mainColor[`${action.payload[1]}`] = `${action.payload[2]}`; break;
                default : state;
            }
        }
    }
})

export const { AppColorSet } = appcustomizerSlice.actions;
export default appcustomizerSlice.reducer;