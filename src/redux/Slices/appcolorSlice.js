import { createSlice } from "@reduxjs/toolkit";

const initialState1= {
  primary1:"",
  primary2:"",
  primary3:"",
  primary4:"",
  primary5:"",
  primary6:"",
  secondary1:"",
  secondary2:"",
  secondary3:"",
  secondary4:"",
  secondary5:"",
  secondary6:"",
  bg:"",
  bg2:"",
  bg3:"",
  bg4:"",
  bg5:"",
  bg6:"",
  hover1:"",
  hover2:"",
  hover3:"",
  hover4:"",
  hover5:"",
  hover6:"",
  shadow1:"",
  shadow2:"",
  shadow3:"",
  shadow4:"",
}
const initialState ={

 imageArea:{
    textColor:"blue",
    uploadicon:"",
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

const appcolorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        AppColorSet: (state,action)=>{
          state.mainColor["primary1"] = "lightblue"
        }
    }
})

export const { AppColorSet } = appcolorSlice.actions;
export default appcolorSlice.reducer