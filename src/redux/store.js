import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./Slices/userSlice.js"
import appReducer from "./Slices/appSlice.js"
import colorReducer from "./Slices/colorSlice.js"

export const store = configureStore({
    reducer:{
       user: userReducer,
       app:  appReducer ,
       color:colorReducer,
    }
})