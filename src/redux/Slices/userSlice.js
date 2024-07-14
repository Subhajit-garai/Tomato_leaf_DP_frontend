
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: {
        isAdmin: false,
        isLogin:false,
        name:'',
        Avater:'',
    },
    isLoding: false,
    isError: false,
    isOnline: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoding = action.payload;
        },
        setError: (state, action) => {
            state.isError = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setIsOnline: (state, action) => {
            state.isOnline = action.payload;
        },
        setuserdata: (state, action) => {
            state.userData.isAdmin = action.payload.data.isAdmin;
            state.userData.isLogin = action.payload.data.isLogIn;
            state.userData.name = action.payload.data.user.Name;
            state.userData.Avater = action.payload.data.user.Avater;
        },
    },
})


export const { setLoading, setError, setUser, setIsAdmin, setIsLogIn, setIsOnline, setuserdata } = userSlice.actions;
export default userSlice.reducer;