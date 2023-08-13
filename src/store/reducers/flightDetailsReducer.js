import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    flightDetailsInfo: {},
    isLoggedIn: null,
};

const flightDetailsInfo = createSlice({
    name: 'flight',
    initialState,
    reducers: {
        setFlightDetailsInfo: (state, action) => {
            state.flightDetailsInfo = action.payload;
        },
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
            localStorage.setItem("IS_LOGIN", state.isLoggedIn);
        },
        clearUserInfo: (state) => {
            state.userInfo = null;
            localStorage.setItem("USER_INFO", JSON.stringify(state.userInfo));
        },
    }
});


export const { setFlightDetailsInfo, setIsLoggedIn, clearUserInfo } = flightDetailsInfo.actions;
export default flightDetailsInfo.reducer;