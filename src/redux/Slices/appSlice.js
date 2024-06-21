import { createSlice } from "@reduxjs/toolkit";

const initialState= {

}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
        },
        logout: (state, action) => {
            state.isLoggedIn = false;
        }
    }
})

export const { login, logout } = appSlice.actions;
export default appSlice.reducer