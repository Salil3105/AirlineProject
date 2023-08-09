import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
  isLoggedIn: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("USER_INFO", JSON.stringify(state.userInfo));
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
      localStorage.setItem("IS_LOGIN", state.isLoggedIn);
    },
    clearUserInfo: (state) => {
      state.userInfo = null;
      localStorage.setItem("USER_INFO", JSON.stringify(state.userInfo));
    },
  },
});

export const { setUserInfo, setIsLoggedIn, clearUserInfo } = userSlice.actions;

export default userSlice.reducer;
