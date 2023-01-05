import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated", //"checking", "not-authenticated", "authenticated",
    displayName: null,
    uid: null,
    email: null,
    errorMsg: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.displayName = payload.name;
      state.errorMsg = null;
    },
    logout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.displayName = null;
      state.uid = null;
      state.email = null;
      state.errorMsg = payload?.errorMsg;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
