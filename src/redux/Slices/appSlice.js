import { createSlice } from "@reduxjs/toolkit";
import {formatDate} from "../../helper/DateFormater.js"


const initialState = {
    history: [],
    filteredhistory: [],
    diseaseinfos: [],
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        filterupdateWithtime: (state, action) =>{
            state.filteredhistory = [];
            let date = new Date(Date.now())
            if (action.payload !== "ALL") {

                if(action.payload === "Yesterday"){
                    let Yesterday = new Date(date);
                    Yesterday.setDate((date.getDate() -1))
                    date = Yesterday;
                }

                date = formatDate(date);

                state.filteredhistory = state.history.filter((val) => {
                    let eledate = formatDate(new Date(val.createdAt))
                    return date == eledate
                })

            }
            else {
                state.filteredhistory.push(...state.history)
            }

        },
        updateHistory: (state, action) => {
            state.history = [];
            state.filteredhistory = [];
            state.history.push(...action.payload.data);
            state.filteredhistory.push(...action.payload.data);
        },

        updatefilteredhistory: (state, action) => {

            state.filteredhistory = [];

            if (action.payload !== "ALL") {
                state.filteredhistory = state.history.filter((val) => {
                    return val.prediction.class.toUpperCase().trim() == action.payload.toUpperCase().trim()
                })

            }
            else {
                state.filteredhistory.push(...state.history)
            }



        },

        updatealldiseaseinfo: (state, action) => {
            state.diseaseinfos = action.payload.data;
        }
    }
})

export const { updateHistory, updatealldiseaseinfo, updatefilteredhistory ,filterupdateWithtime} = appSlice.actions;
export default appSlice.reducer