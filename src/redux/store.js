import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./Slices/userSlice.js"
import appReducer from "./Slices/appSlice.js"
import colorReducer from "./Slices/colorSlice.js"
import appcustomizeReducer from "./Slices/appcustomizerSlice.js"

export const store = configureStore({
    reducer:{
       color:colorReducer,
       appcustomizer:appcustomizeReducer,
       user: userReducer,
       app:  appReducer ,
    }
})