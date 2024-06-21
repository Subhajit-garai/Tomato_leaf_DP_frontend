import { createSlice } from "@reduxjs/toolkit";

const initialState= {

}

const userSlice = createSlice({
    name: 'user',
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

export const { login, logout } = userSlice.actions;
export default userSlice.reducer