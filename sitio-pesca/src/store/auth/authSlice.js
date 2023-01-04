import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated", //"checking", "not-authenticated", "authenticated",
    displayName: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.displayName = payload.name;
    },
    logout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.displayName = null;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
