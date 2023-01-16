import { createSlice } from "@reduxjs/toolkit";
import { authenticateStdUser } from "./service";

const initialState = {
  status: "idle",
  logged: false,
};

const stdusrSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    setStdUser: (state, data) => {
      console.log(state, data);
      state.logged = data.payload.logged;
    },
    handleStdUserError: (state, e) => {
      state.logged = false;
      console.error("Error while trying /auth/stduser: ", e);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateStdUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(authenticateStdUser.fulfilled, (state, action) => {
        state.status = "loaded";
        state.logged = false;
      })
      .addCase(authenticateStdUser.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setStdUser, handleStdUserError } = stdusrSlice.actions;
export default stdusrSlice.reducer;
